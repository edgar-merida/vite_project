import PropTypes from 'prop-types'
import Button from './Button';


const Header = ({ title }) => {

  const agregar = () => {
    console.log('agregar')
}

const eliminar = () => {
  console.log('eliminar')
}


  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Agregar' onClick={agregar}/>
      <Button color='red' text='Eliminar' onClick={eliminar}/>
     
    </header>
  );
};

//Header.defaultProps = {
//  title: "Titulo por defecto"//
//}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
//const estilos = {
//  color: 'red',
//  backgroundColor: 'black'
//}

export default Header;
