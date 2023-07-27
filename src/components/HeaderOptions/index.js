import styled from 'styled-components';

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
const options = ['CATEGORIES', 'FAVORITES', 'MY BOOKCASE'];

function HeaderOptions(){
    return (
    <Options>
            { options.map( text => (
                <Option><p>{text}</p></Option>
            ) ) }
    </Options>
    );
}

export default HeaderOptions;