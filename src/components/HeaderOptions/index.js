import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Options = styled.ul`
    display: flex;
`
const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`
const options = ['CATEGORIES', 'FAVORITES', 'BOOKCASE'];

function HeaderOptions(){
    return (
    <Options>
            { options.map( option => (
                <Link to={`/${option.toLocaleLowerCase()}`}><Option><p>{option}</p></Option></Link>
            ) ) }
    </Options>
    );
}

export default HeaderOptions;