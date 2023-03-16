import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AlbumIcon from '@mui/icons-material/Album';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export interface Page {
    id: string,
    path: string,
    label: string
}

const pages: Page [] = [
    {
        id: '1',
        path: 'product-list',
        label: 'Lista produktów'
    },
    {
        id: '2',
        path: 'sell',
        label: 'Sprzedaj płytę'
    },
]

const settingNotLoggedUser = ["Login"]
const settingsLoggedUser = ['Wiadomości', 'Profil', 'Sprzedawane', 'Wyloguj'];
// Tutaj musimy uzależnić tablicę od statusu zalogowania, w jednej będzie tylko Login, w drugiej będzie Wiadomości, Profil, Sprzedawane, Wyloguj

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [anchorElShoppingCart, setAnchorElShoppingCart] = React.useState<void>(); // Dodane przeze mnie na wzór poprzednich

  function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
        setAnchorElNav(event.currentTarget);
    }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const openShoppingCart = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElShoppingCart(event.currentTarget.click)
  }

  // Dodałem zmienną openShoppingCart, która ma reagować na kliknięcie ale to jest mocno robocza opcja. Nie do końca wiem jak to jeszcze zrobić ale dodałem żeby po prostu istniała bez mechaniki jeszcze

  const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0),
    },
    marginRight: theme.spacing(2),
    marginLeft: 10,
    width: '20%',
    display: 'flex'
    // [theme.breakpoints.up('sm')]: {
    //   marginLeft: theme.spacing(3),
    //   width: 'auto',
    // },
    // Zakomentowałem bo krzaczyło nie do końca wiem dlaczego, to jest opcja w wyszukiwarce
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const ShoppingCartIconOnAppBar = (
    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
    <Badge badgeContent={4} color="error">
      <ShoppingCartIcon />
    </Badge>
  </IconButton>
  )

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      // musiałem przerzucić backgoundColor: alpha tutaj z const Search bo jak wrzuciłem do boxa z listą produktów i sprzedaj płytę to był wypełniony cały app bar pionowo kolorem wyszukiwarki i słabo to wyglądało
      backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
      [theme.breakpoints.up('md')]: {
        width: '30ch',
      },
    },
  }));

  return (
    // Zmieniłem kolor app bara na czarny przez inline style={{backgroundColor}}, oczywiście info ze stackoverflow xd
    <AppBar position="static" style={{backgroundColor: 'black'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AlbumIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VINYL SHOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                  <Link to={page.path}>{page.label}</Link>
                </MenuItem>
                // Zmieniłem key={page} na key={page.id} tak jak mamy w obiektach, żeby odnalazło id z wpisanego obiektu
              ))}
            </Menu>
          </Box>
          <AlbumIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            VINYL SHOP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.label}
              </Button>
            ))}
            <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Wyszukaj"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Box>
          {/* // Tutaj wrzuciłem wyszukiwarkę do boxa razem z naszymi "Lista produktów" i "Sprzedaj płytę", żeby było przyklejone obok tych kategorii */}
          
          <Box sx={{ flexGrow: 1 }} />
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            {/* Dodałem ikonę koszyka z notyfikacjami ale jeszcze nie do końca ogarnąłem jak je uzależnić od ilości produktów w koszyku. To kwestia poszperania i znalezienia gdzieś w odmętach stack overflow xd */}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Profile Avatar" src="/static/images/avatar/2.jpg" />
              </IconButton>
              {/* Tutaj jeszcze standardowe pola uzupełnione ze strony Mui. Trzeba będzie odnieść się do ikony profilu z bazy danych danego użytkownika */}
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settingsLoggedUser.map((settingsLoggedUser) => (
                <MenuItem key={settingsLoggedUser} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{settingsLoggedUser}</Typography>
                </MenuItem>
                // Zmieniłem zmienną settings na settingLoggedUser, ponieważ wcześniej stworzyłem dwie, żebyśmy mieli podląd co powinno się pojawiać dla zalogowanego i niezalogowanego użytkownika. Jeśli chcecie zobaczyć menu dla niezalogowanego użytkownika to zmieńcie zmienną na settingsNotLoggedUser
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;