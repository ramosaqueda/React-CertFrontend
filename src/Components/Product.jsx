import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@material-ui/icons';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Price = styled.div`
  font-size: 20px;
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #ac523f;
`;
const Title = styled.div`
  font-size: 15px;
  position: absolute;
  bottom: 25px;
  width: 100%;
  background-color: transparent;
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.pimage} alt={item.pimage} />

      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
      <Title>{item.name}</Title>

      <Price>
        <NumberFormat
          value={item.price}
          displayType={'text'}
          thousandSeparator="."
          decimalSeparator=","
          prefix={'$ '}
        />
      </Price>
    </Container>
  );
};

export default Product;
