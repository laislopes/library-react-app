import { books } from './lastReleasesData.js';
import { Title } from '../Title/index.js';
import styled from 'styled-components';

const LastReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    gap: 20px;
`;

function LastReleases(){
    return (
        <LastReleasesContainer>
            <Title 
                color="#EB9B00" 
                fontSize="36px" 
            >LAST RELEASES</Title>
            <Title>LAST RELEASES</Title>
            <NewBooksContainer>
                { books.map(book => (
                    <img src={book.src}/>
                ))}
            </NewBooksContainer>
        </LastReleasesContainer>
    );
}

export default LastReleases;