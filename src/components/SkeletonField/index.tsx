import { Skeleton, SkeletonProps } from '@mui/material';

type SkeletonFieldProps = SkeletonProps;

const SkeletonField = ({ ...props }: SkeletonFieldProps) => {
    return <Skeleton variant="rounded" animation="wave" {...props} />;
};

export default SkeletonField;
