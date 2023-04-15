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
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { alpha, makeStyles } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import "./header.scss"
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline/ScopedCssBaseline';


export interface Page {
  id: string,
  path: string,
  label?: string
}

const homePage: Page[] = [
  {
	id: '1',
	path: '/',
	label: 'VINYL SHOP'
  }
]

const pages: Page[] = [
  {
	id: '2',
	path: 'product-list',
	label: 'Lista produktów'
  },
  {
	id: '3',
	path: 'sell-form-view',
	label: 'Sprzedaj płytę'
  },
]
const iconPages: Page[] = [
  {
	id: '1',
	path: 'basket'
  }
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

  const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.black, 0),
	'&:hover': {
	  backgroundColor: alpha(theme.palette.common.black, 0),
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
	  backgroundColor: alpha(theme.palette.common.black, 0.15),
	  '&:hover': {
		backgroundColor: alpha(theme.palette.common.black, 0.25),
	  },
	  [theme.breakpoints.up('md')]: {
		width: '100%',
	  },
	},
  }));

  return (
	// Zmieniłem kolor app bara na czarny przez inline style={{backgroundColor}}, oczywiście info ze stackoverflow xd
	<ScopedCssBaseline>
	<AppBar  className='appbar' style={{backgroundColor: '#000000ca'}}>
		<Container className="container" maxWidth="xl">
			<Toolbar>
				{homePage.map((homePage: Page) => (
					<Link className='button' to={homePage.path}>
						<Typography 
							className='header'
							variant="h6"
							noWrap
							component="a"
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'center' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
							}}
							>VINYL SHOP
						</Typography>
					</Link>
				))}
				<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
					<IconButton
						className='button'
						size="large"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleOpenNavMenu}>
							<MenuIcon className='button'/>
					</IconButton>
					<Menu
						className='header'
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
						}}>
							{pages.map((page) => (
								<MenuItem key={page.id} onClick={handleCloseNavMenu}>
									<Link className='link' to={page.path}>{page.label}</Link>
								</MenuItem>
							// Zmieniłem key={page} na key={page.id} tak jak mamy w obiektach, żeby odnalazło id z wpisanego obiektu
							))}
					</Menu>
				</Box>
					{homePage.map((homePage: Page) => (
						<Link className='link' to={homePage.path}>
							<Typography
								className='header'
								variant="h5"
								noWrap
								component="a"
								sx={{
									mr: 2,
									display: { xs: 'flex', md: 'none' },
									flexGrow: 1,
									fontFamily: 'monospace',
									fontWeight: 700,
									letterSpacing: '.3rem',
								}}>VINYL SHOP
							</Typography>
						</Link>
					))}
				<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
					{pages.map((page) => (
						<Link 
							className='link' 
							to={page.path}>
								<Button
									className='button'
									key={page.path}
									onClick={handleCloseNavMenu}
									sx={{ 
										my: 2, 
										display: 'block',
										color: 'inherit'
									}}>{page.label}
								</Button>
						</Link>
					))}
					<Search sx={{flexGrow: 1, display: { xs: 'none', md: 'flex' }}}>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Wyszukaj"
							inputProps={{ 'aria-label': 'search' }}/>
					</Search>
				</Box>
				{/* // Tutaj wrzuciłem wyszukiwarkę do boxa razem z naszymi "Lista produktów" i "Sprzedaj płytę", żeby było przyklejone obok tych kategorii */}
				<Box sx={{ flexGrow: 1 }}>
				</Box>
				{/* Dodałem ikonę koszyka z notyfikacjami ale jeszcze nie do końca ogarnąłem jak je uzależnić od ilości produktów w koszyku. To kwestia poszperania i znalezienia gdzieś w odmętach stack overflow xd */}
				<Box sx={{ flexGrow: 0 }}>
					{iconPages.map((page) => (
						<IconButton key={page.id} size="large" aria-label="">
							<Badge badgeContent={null}>
								<Link
									className="link" 
									to={page.path}>
									<ShoppingCartIcon />
								</Link>
							</Badge>
						</IconButton>))}
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
						onClose={handleCloseUserMenu}>
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
	</ScopedCssBaseline>
  );
}

export default ResponsiveAppBar;