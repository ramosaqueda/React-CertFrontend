import { useSelector } from 'react-redux';
export default function Products(props) {
  const estado = store();
  return (
    <div>
      <h1>Hola soy los productos</h1>
      <ul></ul>
    </div>
  );
}
