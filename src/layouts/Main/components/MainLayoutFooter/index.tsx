import HomeIcon from '@/icons/HomeIcon';
import MailIcon from '@/icons/MailIcon';
import { cssColor } from '@/utils/color';
import Call from '@mui/icons-material/Call';
import {
    Box,
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import Link from 'next/link';

const MainLayoutFooter = () => {
    return (
        <Box bgcolor={cssColor('lightgrey')} mt={5} py={{ md: 5, xs: 3 }}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item md={4} sm={6} xs={12}>
                        <Typography
                            variant="h1"
                            fontFamily="Agbalumo"
                            component={Link}
                            href="/"
                            color={cssColor('richblack')}
                            sx={{
                                textDecoration: 'none',
                            }}
                        >
                            LensShot
                        </Typography>
                        <Typography
                            variant="text4"
                            color="textSecondary"
                            component="div"
                        >
                            Capture your favorite moments with us.
                        </Typography>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="24th Road, Gotham City, Olympus."
                                    sx={{ color: cssColor('stormgrey') }}
                                />
                            </ListItem>
                            <ListItem
                                disablePadding
                                component={Link}
                                href="tel:+123456789"
                            >
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                    <Call />
                                </ListItemIcon>
                                <ListItemText
                                    primary="+123456789"
                                    sx={{ color: cssColor('stormgrey') }}
                                />
                            </ListItem>
                            <ListItem
                                disablePadding
                                component={Link}
                                href="mailto:info@lensshot.com"
                            >
                                <ListItemIcon sx={{ minWidth: 30 }}>
                                    <MailIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primary="info@lensshot.com"
                                    sx={{ color: cssColor('stormgrey') }}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <List>
                            <ListItem
                                disablePadding
                                component={Link}
                                href="/service"
                            >
                                <ListItemText
                                    primary="Service"
                                    sx={{ color: cssColor('stormgrey') }}
                                />
                            </ListItem>
                            <ListItem
                                disablePadding
                                component={Link}
                                href="/blog"
                            >
                                <ListItemText
                                    primary="Blog"
                                    sx={{ color: cssColor('stormgrey') }}
                                />
                            </ListItem>
                            <ListItem
                                disablePadding
                                component={Link}
                                href="/contact"
                            >
                                <ListItemText
                                    primary="Contact"
                                    sx={{ color: cssColor('stormgrey') }}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Box textAlign="center" mt={2}>
                    <Typography variant="text3" color="textSecondary">
                        &copy; {new Date().getFullYear()} LensShot
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default MainLayoutFooter;
