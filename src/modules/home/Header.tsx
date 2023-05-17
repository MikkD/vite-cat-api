import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import {
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    // TODO transform pages below into links when routes are set up
    const pages = ['Pricing', 'About', 'Documentation', 'Showcase'];
    // Drawer
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const navigateToPage = (): void => {
        console.log('react');
    };

    return (
        <AppBar position='static'>
            <Toolbar sx={{ display: 'flex', justifyContent: 'end' }}>
                {/* Header Links */}
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            sm: 'flex',
                        },
                    }}>
                    {pages.map((page) => (
                        <Button key={page} color='inherit' onClick={navigateToPage}>
                            {page}
                        </Button>
                    ))}
                </Box>
                {/* Hamburger Menu */}
                <Box
                    sx={{
                        display: {
                            xs: 'flex',
                            sm: 'none',
                            width: '100%',
                        },
                    }}>
                    <IconButton
                        size='large'
                        aria-label='account of current user'
                        aria-controls='menu-appbar'
                        aria-haspopup='true'
                        onClick={() => setIsDrawerOpen(true)}
                        color='inherit'>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor='left'
                        open={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}>
                        <Box
                            role='presentation'
                            onClick={() => setIsDrawerOpen(false)}
                            onKeyDown={() => setIsDrawerOpen(false)}>
                            <List>
                                {pages.map((page) => (
                                    <ListItem key={page} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={page} />
                                        </ListItemButton>
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                    </Drawer>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
