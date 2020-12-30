import { Typography, Toolbar, AppBar} from '@material-ui/core';
 const Header = () => {
    return (
        <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6">
            Expanse Tracker
          </Typography>
        
        </Toolbar>
      </AppBar>
        )
}

export default Header