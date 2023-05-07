import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';

export default function Header() {
    const pages = [
        'Pricing',
        'About',
        'Documentation',
        'Showcase',
    ];

    const navigateToPage = (): void => {
        console.log('react');
    };

    return (
        <AppBar
            position='static'
            sx={{
                display: 'flex',
                alignItems: 'end',
            }}>
            <Toolbar>
                {pages.map((page) => (
                    <Button
                        key={page}
                        color='inherit'
                        onClick={
                            navigateToPage
                        }>
                        {page}
                    </Button>
                ))}
            </Toolbar>
        </AppBar>
    );
}
