'use client';

import SectionTitle from '@/components/SectionTitle';
import { useContactMutation } from '@/redux/features/contactApi';
import { IGenericErrorResponse } from '@/types/error';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
});

const Contact = () => {
    const [contact, { isLoading, isError, isSuccess, data, error }] =
        useContactMutation();

    useEffect(() => {
        if (isSuccess && data?.message) {
            toast.success(data.message);
        }
        if (isError && error) {
            toast.error('Something went wrong! Please try again!');
            if ('status' in error) {
                const errorMessage = error.data as IGenericErrorResponse;
                if (errorMessage) {
                    toast.error(errorMessage?.message);
                }
            }
        }
    }, [data, error, isError, isSuccess]);

    return (
        <Box
            py={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="calc(100vh - 64px)"
            flexDirection="column"
        >
            <SectionTitle label="Interested to work with us">
                Contact Us
            </SectionTitle>
            <Formik
                enableReinitialize
                initialValues={{
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    await contact(values);
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
                        <Grid container spacing={3} maxWidth={600}>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="name"
                                    type="text"
                                    label="Your Name"
                                    variant="outlined"
                                    placeholder="Enter your Name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    error={Boolean(errors.name && touched.name)}
                                    helperText={touched.name && errors.name}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="email"
                                    type="email"
                                    label="Your Email"
                                    variant="outlined"
                                    placeholder="Enter your email address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={Boolean(
                                        errors.email && touched.email
                                    )}
                                    helperText={
                                        touched.email && <>{errors.email}</>
                                    }
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="subject"
                                    type="text"
                                    label="Subject"
                                    variant="outlined"
                                    placeholder="Enter subject"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.subject}
                                    error={Boolean(
                                        errors.subject && touched.subject
                                    )}
                                    helperText={
                                        touched.subject && errors.subject
                                    }
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="message"
                                    type="text"
                                    multiline
                                    rows={3}
                                    label="Message"
                                    variant="outlined"
                                    placeholder="Enter message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.message}
                                    error={Boolean(
                                        errors.message && touched.message
                                    )}
                                    helperText={
                                        touched.message && errors.message
                                    }
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    type="submit"
                                    size="large"
                                    disabled={isSubmitting || isLoading}
                                >
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
            <Box textAlign={'center'} mt={3}>
                <Typography
                    variant="text3"
                    component="div"
                    color="textSecondary"
                    mb={2}
                >
                    We are available for worldwide orders.
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    <Grid item>
                        <Typography variant="text3" color="textSecondary">
                            Phone: +123456789
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="text3" color="textSecondary">
                            Email: info@lensshot.com
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="text3" color="textSecondary">
                            Address: 24th Road, Gotham City, Olympus.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Contact;
