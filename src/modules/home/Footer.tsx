import { Grid, List, ListItem, Link } from '@mui/material';
import { footerLinks } from './utils';

export default function Footer() {
    return (
        <Grid
            container
            justifyContent='center'
            py={5}
            sx={{
                backgroundColor: '#212121',
                fontSize: '12px',
                flexShrink: '0',
            }}>
            <Grid container xs={10}>
                {footerLinks.map((links, idx) => (
                    <Grid item key={idx} sx={{ marginRight: '10px' }}>
                        <List>
                            {links.map(({ text, url }) => (
                                <ListItem sx={{ py: 0 }} key={text}>
                                    <Link
                                        underline='none'
                                        href={url}
                                        sx={{ color: 'white', opacity: '.99' }}>
                                        {text}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
}
