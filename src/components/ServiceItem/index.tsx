'use client';

import ArrowRightIcon from '@/icons/ArrowRightIcon';
import { IService } from '@/types/services';
import { cssColor } from '@/utils/color';
import {
    Box,
    BoxProps,
    Link as MuiLink,
    Slide,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ServiceItemProps extends BoxProps {
    service: IService;
}

const ServiceItem = ({ service, ...props }: ServiceItemProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                width: '100%',
                height: '100%',
                minHeight: 380,
                position: 'relative',
                overflow: 'hidden',
                '&:hover img': {
                    transform: 'scale(1.1)',
                },
            }}
            {...props}
        >
            <Image
                src={service.photo}
                alt={service.title}
                fill
                style={{
                    transition: 'transform 0.5s ease',
                    opacity: 0.8,
                    objectFit: 'cover',
                }}
                placeholder="blur"
                blurDataURL='blurDataURL="data:image/jpeg;base64,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"'
            />
            <MuiLink
                component={Link}
                href={`/services/${service.id}`}
                sx={{ color: cssColor('richblack') }}
            >
                <Box
                    position="absolute"
                    left={0}
                    right={0}
                    bottom={hovered ? '12%' : 20}
                    sx={{
                        opacity: 1,
                        textAlign: 'center',
                        transition: 'bottom 0.3s ease',
                    }}
                    mb={2}
                >
                    <Typography
                        mb={1}
                        variant="h2"
                        fontWeight={400}
                        component="div"
                    >
                        {service.title}
                    </Typography>
                    <Box
                        sx={{
                            height: '1px',
                            bgcolor: cssColor('richblack'),
                            width: hovered ? '80%' : 50,
                            transition: 'width 1s ease',
                            margin: 'auto',
                        }}
                    />
                </Box>
                <Slide direction="up" in={hovered} mountOnEnter unmountOnExit>
                    <Box
                        position="absolute"
                        left={0}
                        right={0}
                        bottom={0}
                        sx={{
                            textAlign: 'center',
                            transition: 'bottom 1s ease',
                            background:
                                'linear-gradient(to bottom, transparent 0, rgba(255, 255, 255, .01) 2%, rgba(255, 255, 255, .75) 90%)',
                        }}
                        py={2}
                    >
                        <ArrowRightIcon />
                    </Box>
                </Slide>
            </MuiLink>
        </Box>
    );
};

export default ServiceItem;
