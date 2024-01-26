'use client';

import DialogConfirm, { DialogConfirmProps } from '@/components/DialogConfirm';
import { useEditCommentMutation } from '@/redux/features/commentApi';
import { IComment } from '@/types/comment';
import { IGenericErrorResponse } from '@/types/error';
import { DecodedTokenProps } from '@/utils/jwt';
import { getUserId } from '@/utils/user';
import { Grid, TextField } from '@mui/material';
import { Formik } from 'formik';
import { useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

interface EditCommentProps extends DialogConfirmProps {
    comment: IComment;
    onClose?: VoidFunction;
}

const EditComment = ({ comment, onClose, ...props }: EditCommentProps) => {
    const formRef = useRef<HTMLInputElement>(null);
    const user = getUserId() as DecodedTokenProps;

    const [editComment, { isError, isLoading, isSuccess, data, error }] =
        useEditCommentMutation();

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
            title="Edit Comment"
            onConfirm={() => {
                formRef.current?.click();
            }}
            onClose={onClose}
            {...props}
        >
            <Formik
                enableReinitialize
                initialValues={{ comment: comment.comment }}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                    const formValues = {
                        ...values,
                        userId: user.userId,
                    };
                    await editComment({
                        id: comment.id as string,
                        data: formValues,
                    });
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
                                    name="comment"
                                    type="text"
                                    label="Comment"
                                    variant="outlined"
                                    placeholder="Update Your Comment"
                                    multiline
                                    maxRows={Infinity}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.comment}
                                    error={Boolean(
                                        errors.comment && touched.comment
                                    )}
                                    helperText={
                                        touched.comment && errors.comment
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

export default EditComment;
