import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    List,
    ListItem,
    ListItemText,
    FormControlLabel,
    Switch,
} from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import { pricingOptions } from './utils';

export default function Pricing() {
    return (
        <Grid
            container
            justifyContent='center'
            py={4}
            sx={{ backgroundColor: '#d2d2d2' }}>
            {/* Pricing Header section */}
            <Grid container flexDirection='column' xs={10}>
                <Grid container justifyContent='space-between' alignItems='center'>
                    <Typography variant='h4' gutterBottom>
                        Pricing
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <FormControlLabel
                            value='Monthly'
                            control={<Switch color='primary' />}
                            label='Monthly'
                            labelPlacement='start'
                        />
                        <Typography variant='subtitle2'>
                            Yearly with 20% discount
                        </Typography>
                    </Box>
                </Grid>
                {/* Tiles section */}
                <Grid container justifyContent='space-between'>
                    {pricingOptions.map((pricingOptionArray, idx) => (
                        <Grid item key={idx} xs={12} sm={4} px={2} textAlign='center'>
                            <Card>
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        fontSize={20}
                                        fontWeight='bold'>
                                        Free
                                    </Typography>
                                    <HomeIcon />
                                    <Typography variant='body1'>10$</Typography>
                                    <Typography
                                        fontSize={12}
                                        variant='body2'
                                        color='text.secondary'
                                        pb={1}>
                                        No Hidden Costs
                                    </Typography>
                                    <Typography variant='body2'>
                                        Free for you to use on your non-monetized app
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <Button variant='contained'>Sign Up For Free</Button>
                                </CardActions>
                                <CardContent>
                                    <List>
                                        {pricingOptionArray.map((listItemContent) => (
                                            <ListItem
                                                disablePadding
                                                key={listItemContent}>
                                                <ListItemText
                                                    secondary={listItemContent}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
