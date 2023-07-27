import profile from '../../assets/profile.svg';
import shoppingBag from '../../assets/shopping-bag.svg';
import styled from 'styled-components';

const Icons = styled.ul`
    display: flex;
    align-items: center;
`
const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const icons = [profile, shoppingBag];

function HeaderIcons() {
    return (
        <Icons>
        { icons.map( icon => (
        <Icon><img src={icon} alt='icon'></img></Icon>
        ) ) }
        </Icons>
    );
}

export default HeaderIcons;