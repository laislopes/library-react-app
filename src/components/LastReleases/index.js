import { books } from './lastReleasesData.js';
import { Title } from '../Title/index.js';
import RecommendationCard from '../RecommendationCard/index.js';
import bookImage from '../../assets/design-patterns-book.jpg';
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
            <NewBooksContainer>
                { books.map(book => (
                    <img src={book.src}/>
                ))}
            </NewBooksContainer>
            <RecommendationCard
                title="Maybe this is interesting for you..."
                subtitle="Angular 11"
                description="Building an Integrated Application with Google Platform"
                image={bookImage}
            />
        </LastReleasesContainer>
    );
}

export default LastReleases;