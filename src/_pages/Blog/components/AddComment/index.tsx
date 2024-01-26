'use client';

import SendIcon from '@/icons/SendIcon';
import { useAddCommentMutation } from '@/redux/features/commentApi';
import { IGenericErrorResponse } from '@/types/error';
import { cssColor } from '@/utils/color';
import { DecodedTokenProps } from '@/utils/jwt';
import { getUserId } from '@/utils/user';
import { Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import * as Yup from 'yup';

interface AddCommentProps {
    blogId: string;
}

const validationSchema = Yup.object().shape({
    comment: Yup.string().required('Comment is required'),
});

const AddComment = ({ blogId }: AddCommentProps) => {
    const user = getUserId() as DecodedTokenProps;
    const [addComment, { isError, isLoading, isSuccess, data, error }] =
        useAddCommentMutation();

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
        <Formik
            enableReinitialize
            initialValues={{ comment: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                const formValues = {
                    ...values,
                    userId: user?.userId,
                    blogId,
                };
                await addComment(formValues);
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
                dirty,
                submitForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Typography variant="text2">
                                Leave a comment
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                name="comment"
                                type="text"
                                label="Comment"
                                variant="outlined"
                                placeholder="Your Comment"
                                multiline
                                maxRows={Infinity}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.comment}
                                error={Boolean(
                                    errors.comment && touched.comment
                                )}
                                helperText={touched.comment && errors.comment}
                                disabled={isSubmitting}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            disablePointerEvents={
                                                !dirty ||
                                                isSubmitting ||
                                                isLoading
                                            }
                                            onClick={submitForm}
                                            sx={{
                                                cursor: 'pointer',
                                                color: cssColor(
                                                    dirty
                                                        ? 'stormgrey'
                                                        : 'lightgrey'
                                                ),
                                            }}
                                        >
                                            <SendIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    );
};

export default AddComment;
