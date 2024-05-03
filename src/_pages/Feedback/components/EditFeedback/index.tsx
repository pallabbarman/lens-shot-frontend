import DialogConfirm, { DialogConfirmProps } from '@/components/DialogConfirm';
import { useEditFeedbackMutation } from '@/redux/features/feedbackApi';
import { IGenericErrorResponse } from '@/types/error';
import { IFeedback } from '@/types/feedback';
import { DecodedTokenProps } from '@/utils/jwt';
import { getUserId } from '@/utils/user';
import { Grid, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

interface EditFeedbackProps extends DialogConfirmProps {
    feedback: IFeedback;
    onClose: VoidFunction;
}

const EditFeedback = ({ feedback, onClose, ...props }: EditFeedbackProps) => {
    const formRef = useRef<HTMLInputElement>(null);
    const user = getUserId() as DecodedTokenProps;

    const [editFeedback, { isError, isLoading, isSuccess, data, error }] =
        useEditFeedbackMutation();

    useEffect(() => {
        if (isSuccess && data?.message) {
            toast.success(data.message);
        }
        if (isError && error) {
            if ('status' in error) {
                const errorMessage = error.data as IGenericErrorResponse;
                if (errorMessage) {
                    toast.error(errorMessage?.message);
                }
            } else {
                toast.error('Something went wrong! Please try again!');
            }
        }
    }, [data, error, isError, isSuccess]);

    return (
        <DialogConfirm
            title="Edit You Feedback"
            onConfirm={() => {
                formRef.current?.click();
            }}
            disabled={isLoading}
            onClose={onClose}
            {...props}
        >
            <Formik
                enableReinitialize
                initialValues={{ feedback: feedback.feedback }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const formValues = {
                        ...values,
                        userId: user.userId,
                    };
                    await editFeedback({
                        id: feedback.id as string,
                        data: formValues,
                    });
                    setSubmitting(false);
                    onClose();
                    resetForm();
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="submit"
                            ref={formRef}
                            style={{ display: 'none' }}
                        />
                        <Grid container spacing={3} maxWidth={600}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="feedback"
                                    type="text"
                                    label="Feedback"
                                    variant="outlined"
                                    placeholder="Your Feedback"
                                    multiline
                                    minRows={4}
                                    maxRows={Infinity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.feedback}
                                    error={Boolean(
                                        errors.feedback && touched.feedback
                                    )}
                                    helperText={
                                        touched.feedback && errors.feedback
                                    }
                                    disabled={isSubmitting || isLoading}
                                />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </DialogConfirm>
    );
};

export default EditFeedback;
