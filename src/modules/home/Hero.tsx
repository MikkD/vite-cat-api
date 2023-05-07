import Grid from '@mui/material/Grid';
import TabMenu from './TabMenu';
import { Typography } from '@mui/material';

export default function Hero() {
    const gridStyles = {
        border: '1px solid red',
        minHeight: '300px',
    };
    const catApiDescription = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        border: '1px solid gold',
    };

    const iconsUrls = [
        'https://thecatapi.com/img/react.8d859602.png',
        'https://thecatapi.com/img/node.3c715421.png',
        'https://thecatapi.com/img/vue.82b9c7a5.png',
        'https://thecatapi.com/img/jquery.b873e649.png',
        'https://thecatapi.com/img/angular.2345a5c4.png',
    ];

    return (
        <Grid container justifyContent='space-around' p={2}>
            <Grid item xs={5} sx={{ ...gridStyles, ...catApiDescription }}>
                <Typography variant='h5' gutterBottom>
                    The Cat API - Cats as a Service.
                </Typography>
                <Typography variant='subtitle2' gutterBottom>
                    Because everyday is a Caturday.
                </Typography>
                <Typography variant='body2' gutterBottom>
                    A public service API all about Cats, free to use when making your
                    fancy new App, Website or Service. Get your license now.
                </Typography>
                <Grid container justifyContent='space-around'>
                    {iconsUrls.map((iconUrl) => (
                        <div
                            style={{
                                backgroundImage: `url(${iconUrl})`,
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                                height: '80px',
                                border: '1px solid red',
                                flex: '1 0 0px',
                            }}></div>
                    ))}
                </Grid>
            </Grid>
            <Grid item xs={5} sx={gridStyles}>
                <TabMenu />
            </Grid>
            <Typography variant='subtitle2' gutterBottom p={2}>
                The Cat API has delivered Billions of requests, to over 30K developers
            </Typography>
        </Grid>
    );
}
