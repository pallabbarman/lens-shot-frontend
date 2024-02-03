'use client';

import SectionTitle from '@/components/SectionTitle';
import { useUserRegistrationMutation } from '@/redux/features/authApi';
import { IGenericErrorResponse } from '@/types/error';
import { cssColor } from '@/utils/color';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password is too short')
        .max(30, 'Password is too long'),
    contactNo: Yup.string().required('Contact no is required'),
});

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    contactNo: '',
};

const Registration = () => {
    const router = useRouter();

    const [userRegistration, { data, isLoading, isSuccess, isError, error }] =
        useUserRegistrationMutation();

    useEffect(() => {
        if (isSuccess && data?.message) {
            toast.success(data.message);
            router.push('/login');
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
    }, [data, error, isError, isSuccess, router]);

    return (
        <Box
            py={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="calc(100vh - 64px)"
            flexDirection="column"
        >
            <SectionTitle label="Don't have an account?">Signup</SectionTitle>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    await userRegistration(values);
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
                                <Grid container spacing={3}>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            name="firstName"
                                            type="text"
                                            label="First name"
                                            variant="outlined"
                                            placeholder="Enter your first name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                            error={Boolean(
                                                errors.firstName &&
                                                    touched.firstName
                                            )}
                                            helperText={
                                                touched.firstName &&
                                                errors.firstName
                                            }
                                            disabled={isSubmitting}
                                        />
                                    </Grid>
                                    <Grid item sm={6} xs={12}>
                                        <TextField
                                            fullWidth
                                            name="lastName"
                                            type="text"
                                            label="Last name"
                                            variant="outlined"
                                            placeholder="Enter your last name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                            error={Boolean(
                                                errors.lastName &&
                                                    touched.lastName
                                            )}
                                            helperText={
                                                touched.lastName &&
                                                errors.lastName
                                            }
                                            disabled={isSubmitting}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="email"
                                    type="email"
                                    label="Email"
                                    variant="outlined"
                                    placeholder="Enter your email address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={Boolean(
                                        errors.email && touched.email
                                    )}
                                    helperText={touched.email && errors.email}
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="password"
                                    type="password"
                                    label="Password"
                                    variant="outlined"
                                    placeholder="Enter your password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={Boolean(
                                        errors.password && touched.password
                                    )}
                                    helperText={
                                        touched.password && errors.password
                                    }
                                    disabled={isSubmitting}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    name="contactNo"
                                    type="text"
                                    label="Contact number"
                                    variant="outlined"
                                    placeholder="Enter your contact no"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.contactNo}
                                    error={Boolean(
                                        errors.contactNo && touched.contactNo
                                    )}
                                    helperText={
                                        touched.contactNo && errors.contactNo
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
                                    Signup
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Box display="flex" justifyContent="center">
                                    <Typography
                                        variant="text4"
                                        component={Link}
                                        href="/login"
                                        color={cssColor('richblack')}
                                        sx={{ textDecoration: 'none' }}
                                    >
                                        Have an account? Login
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </Box>
    );
};

export default Registration;
