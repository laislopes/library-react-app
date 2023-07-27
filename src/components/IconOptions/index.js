import './style.css';
import profile from '../../assets/profile.svg';
import shoppingBag from '../../assets/shopping-bag.svg';

const icons = [profile, shoppingBag];

function IconOptions() {
    return (
        <ul className='icons'>
        { icons.map( icon => (
        <li className='icons__icon'><img src={icon} alt='icon'></img></li>
        ) ) }
        </ul>
    );
}

export default IconOptions;