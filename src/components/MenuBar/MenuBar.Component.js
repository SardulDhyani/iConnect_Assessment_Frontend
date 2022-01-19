import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { MenuOutlined, AddCircleOutline } from '@mui/icons-material';
const MenuBar = () => {
  const [drawerToggle, setDrawerToggle] = useState(false);
  const toggleDrawer = () => {
    setDrawerToggle(!drawerToggle);
  };

  return (
    <>
      <AppBar positon="static">
        <Toolbar>
          <Button variant="contained" onClick={toggleDrawer}>
            <MenuOutlined />
          </Button>
          <Link to="/" className="undecorated-link-white">
            <Typography
              style={{ marginLeft: 10 }}
              variant="h6"
              noWrap
              component="div"
            >
              IConnect Assessment Menu
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer open={drawerToggle} onClose={toggleDrawer}>
        <Link className="undecorated-link" to="/add">
          <ListItem>
            <ListItemIcon>
              <AddCircleOutline />
            </ListItemIcon>
            <ListItemText primary="Add Company" />
          </ListItem>
        </Link>
      </Drawer>
      <div style={{ marginBottom: 70 }}></div>
    </>
  );
};

export default MenuBar;
