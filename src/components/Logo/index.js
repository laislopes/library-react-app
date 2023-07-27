import logo from '../../assets/logo.jpg';
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
`;

const LogoImage = styled.img`
    margin-right: 10px;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoImage 
                src={logo} 
                alt='logo'
            />
            <p><strong>The Library</strong> Dashboard</p>
        </LogoContainer>
    )
}

export default Logo;