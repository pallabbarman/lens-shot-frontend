'use client';

import abc from '@/assets/1.jpg';
import ArrowRightIcon from '@/icons/ArrowRightIcon';
import { cssColor } from '@/utils/color';
import { Box, Link as MuiLink, Slide, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ServiceItem = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <Box
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{
                width: 250,
                height: 380,
                position: 'relative',
                overflow: 'hidden',
                '&:hover img': {
                    transform: 'scale(1.1)',
                },
            }}
        >
            <Image
                src={abc}
                alt=""
                fill
                style={{
                    transition: 'transform 0.5s ease',
                    opacity: 0.8,
                    objectFit: 'cover',
                }}
            />
            <MuiLink
                component={Link}
                href="/"
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
                        Weeding Photography
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
