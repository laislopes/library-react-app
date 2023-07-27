import './style.css';
import Logo from '../Logo';
import TextOptions from '../TextOptions';
import IconOptions from '../IconOptions';

function Header(){
  return (
    <header className='App__header'>
      <Logo/>
      <TextOptions/>
      <IconOptions/>
    </header>
  );
}

export default Header;