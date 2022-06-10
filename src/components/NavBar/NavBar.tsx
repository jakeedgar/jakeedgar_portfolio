import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from '@mui/material';


export default function ButtonAppBar() {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar 
        position="static" 
        color="transparent">
        <Toolbar>
            <Link href='/'>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            >
            <HomeIcon sx={{ color: 'beige' }} />
            </IconButton>
            </Link>
            <Link href='/github'
                border="ButtonFace"
                underline='none'
                color='inherit'>
                GITHUB
            </Link>

            <Link href='/about'
                padding="10px"
                border="ButtonFace"
                underline='none'
                color='inherit'>
                ABOUT ME
            </Link>

            <Link href='/resume'
                padding="10px"
                border="ButtonFace"
                underline='none'
                color='inherit'>
                MY RESUME
            </Link>
        </Toolbar>
        </AppBar>
    </Box>
    );
}
