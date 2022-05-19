import React from 'react';

import Badge from '@mui/material/Badge';

import DrawerBar from './DrawerBar';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';

import styled from 'styled-components';
import { mobile } from '../responsive';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const BarItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}
`;

const MenuBar = styled.div`
  font-size: 15px;
  margin-left: 20px;
`;
const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>DecoMaderas</Logo>
          <DrawerBar />
        </Left>
        <Center></Center>
        <Right>
          <BarItem>REGISTER</BarItem>
          <BarItem>SIGN IN</BarItem>
          <BarItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </BarItem>
          <Language> </Language>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
