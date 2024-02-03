'use client';

import SectionTitle from '@/components/SectionTitle';
import { useUserLoginMutation } from '@/redux/features/authApi';
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
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password is too short')
        .max(30, 'Password is too long'),
});

const Login = () => {
    const router = useRouter();

    const [userLogin, { data, isLoading, isSuccess, isError, error }] =
        useUserLoginMutation();

    useEffect(() => {
        if (isSuccess && data?.message) {
            toast.success(data.message);
            router.back();
        }
        if (isError && error) {
            if ('status' in error) {
                const errorMessage = error.data as IGenericErrorResponse;
                if (errorMessage) {
                    toast.error(errorMessage?.message);
                } else {
                    toast.error('Something went wrong! Please try again!');
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
            <SectionTitle label="Have an account?">Login</SectionTitle>
            <Formik
                enableReinitialize
                initialValues={{ email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    await userLogin(values);
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
                                <Button
                                    fullWidth
                                    type="submit"
                                    size="large"
                                    disabled={isSubmitting || isLoading}
                                >
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Typography variant="text4">
                                        Forgot Password
                                    </Typography>
                                    <Typography
                                        variant="text4"
                                        component={Link}
                                        href="/register"
                                        color={cssColor('richblack')}
                                        sx={{ textDecoration: 'none' }}
                                    >
                                        Don&apos;t have an account? Signup
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

export default Login;
