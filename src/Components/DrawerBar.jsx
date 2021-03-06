import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

import Home from '@mui/icons-material/Home';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

import { getCategories } from '../functions/category';
import { FormatAlignJustifyRounded } from '@mui/icons-material';
import { setCategory } from '../actions';

import { useDispatch } from 'react-redux';

const DrawerBar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    left: false,
  });

  const [categories, setCategories] = React.useState([]);
  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = () => {
    getCategories().then((res) => {
      setCategories(res.data);
    });
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleClick = (id, e) => {
    e.preventDefault();
    dispatch(setCategory(true, id));
    navigate('/productos');
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Link to="/">
        <Home />
      </Link>

      <br />
      <h3>Menú</h3>
      <List className="list">
        <br />

        <Divider />
        <ListItem button>
          <ListItemIcon>
            <LocalShippingIcon />
          </ListItemIcon>
          <ListItemText primary="Seguimiento en linea" to="/" />
        </ListItem>
        <Divider />
        <br />
        <h3>Categorias</h3>
        <br />
        <Divider />
        {categories.map((item) => (
          <ListItem button onClick={(e) => handleClick(item._id, e)}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {[' PRODUCTOS'].map((anchor) => (
        <React.Fragment>
          <Button onClick={toggleDrawer(anchor, true)}>
            {' '}
            <FormatAlignJustifyRounded />
            {anchor}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default DrawerBar;
