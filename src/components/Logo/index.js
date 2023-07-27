import './style.css';
import logo from '../../assets/logo.jpg';

function Logo() {
    return (
        <div className='logo'>
            <img 
                src={logo} 
                alt='logo'
                className='logo__image'
            ></img>
            <p><strong>The Library</strong> Dashboard</p>
        </div>
    )
}

export default Logo;