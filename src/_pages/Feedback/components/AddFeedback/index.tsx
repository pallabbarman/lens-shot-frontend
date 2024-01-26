'use client';

import DialogConfirm, { DialogConfirmProps } from '@/components/DialogConfirm';
import { useAddFeedbackMutation } from '@/redux/features/feedbackApi';
import { IGenericErrorResponse } from '@/types/error';
import { DecodedTokenProps } from '@/utils/jwt';
import { getUserId } from '@/utils/user';
import { Grid, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

interface AddFeedbackProps extends DialogConfirmProps {
    onClose: VoidFunction;
}

const validationSchema = Yup.object().shape({
    feedback: Yup.string().required('Feedback is required'),
});

const AddFeedback = ({ open, onClose, ...props }: AddFeedbackProps) => {
    const formRef = useRef<HTMLInputElement>(null);
    const user = getUserId() as DecodedTokenProps;
    const [addFeedback, { data, isLoading, isSuccess, isError, error }] =
        useAddFeedbackMutation();

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
            title="Leave Feedback"
            open={open}
            onConfirm={() => {
                formRef.current?.click();
            }}
            onClose={onClose}
            disabled={isLoading}
            {...props}
        >
            <Formik
                enableReinitialize
                initialValues={{ feedback: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const formValues = {
                        ...values,
                        userId: user.userId,
                    };
                    await addFeedback(formValues);
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
                                    rows={4}
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

export default AddFeedback;
