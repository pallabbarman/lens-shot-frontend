'use client';

import SendIcon from '@/icons/SendIcon';
import { cssColor } from '@/utils/color';
import { DecodedTokenProps } from '@/utils/jwt';
import { getUserId } from '@/utils/user';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';

interface AddCommentProps {
    blogId: string;
}

const validationSchema = Yup.object().shape({
    comment: Yup.string().required('Comment is required'),
});

const AddComment = ({ blogId }: AddCommentProps) => {
    const user = getUserId() as DecodedTokenProps;

    return (
        <Formik
            enableReinitialize
            initialValues={{ comment: '' }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
                const formValues = {
                    ...values,
                    userId: user.userId,
                    blogId,
                };
                console.log(formValues);
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
            }) => (
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
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
                                                !dirty || isSubmitting
                                            }
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
