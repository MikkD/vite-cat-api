import Grid from '@mui/material/Grid';
import TabMenu from './TabMenu';
import { Typography } from '@mui/material';
import { iconsUrls } from './utils';

export default function Hero() {
    return (
        <Grid container sx={{ flexDirection: 'column', alignItems: 'center' }}>
            <Grid container sx={{ display: 'flex' }} xs={10}>
                {/* Left Block */}
                <Grid item xs={12} sm={6} p={2}>
                    <Grid xs={12}>
                        <Typography variant='h5' component='h5' mb='15px'>
                            The Cat API - Cats as a Service.
                        </Typography>
                    </Grid>
                    <Typography variant='h6' component='h6' mb='15px'>
                        Because everyday is a Caturday.
                    </Typography>
                    <Typography variant='subtitle2' mb='15px'>
                        A public service API all about Cats, free to use when making your
                        fancy new App, Website or Service. Get your license now.
                    </Typography>
                    <Grid container>
                        {iconsUrls.map((icon) => (
                            <Grid
                                item
                                key={icon}
                                sx={{
                                    backgroundImage: `url(${icon})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    border: '1px solid red',
                                    flex: '1 1 auto',
                                    height: '100px',
                                }}></Grid>
                        ))}
                    </Grid>
                </Grid>
                {/* Right Block */}
                <Grid item xs={12} sm={6} p={2}>
                    RIGHT
                </Grid>
            </Grid>
            <Grid container xs={10}>
                <Typography variant='body1' py={2}>
                    The Cat API has delivered Billions of requests, to over 30K developers
                </Typography>
            </Grid>
        </Grid>
    );
}
