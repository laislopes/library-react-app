import './style.css';

const textOptions = ['CATEGORIES', 'FAVORITES', 'MY BOOKCASE'];

function TextOptions(){
    return (
    <ul className='options'>
            { textOptions.map( text => (
                <li className='options__option'><p>{text}</p></li>
            ) ) }
    </ul>
    );
}

export default TextOptions;