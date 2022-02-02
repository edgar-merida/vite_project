import PropTypes from 'prop-types'


const Header = ({ title }) => {

  return (
    <header>
      <h1 style={estilos}>{title}</h1>
    </header>
  );
};

//Header.defaultProps = {
//  title: "Titulo por defecto"//
//}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
const estilos = {
  color: 'red',
  backgroundColor: 'black'
}

export default Header;
