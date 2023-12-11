import { Card, CardContent, CardHeader, CardProps } from '@mui/material';
import { ReactNode } from 'react';

interface ContentCardProps extends CardProps {
    subheader?: string;
    children: ReactNode;
    header?: boolean;
}

const ContentCard = ({
    title,
    subheader,
    children,
    header = false,
    ...props
}: ContentCardProps) => {
    return (
        <Card {...props}>
            {!header && <CardHeader title={title} subheader={subheader} />}
            <CardContent>{children}</CardContent>
        </Card>
    );
};

export default ContentCard;
