'use client';

import DialogConfirm, { DialogConfirmProps } from '@/components/DialogConfirm';
import { Grid, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useRef } from 'react';
import * as Yup from 'yup';

interface AddFeedbackProps extends DialogConfirmProps {
    onClose: VoidFunction;
}

const validationSchema = Yup.object().shape({
    feedback: Yup.string().required('Feedback is required'),
});

const AddFeedback = ({ open, onClose, ...props }: AddFeedbackProps) => {
    const formRef = useRef<HTMLInputElement>(null);

    return (
        <DialogConfirm
            title="Leave Feedback"
            open={open}
            onConfirm={() => {
                formRef.current?.click();
                onClose();
            }}
            onClose={onClose}
            {...props}
        >
            <Formik
                enableReinitialize
                initialValues={{ feedback: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    console.log(values);
                    setSubmitting(false);
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
                                    disabled={isSubmitting}
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
