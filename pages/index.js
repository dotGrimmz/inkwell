import React from 'react';
import ContextImplementation from './context/ContextImplementation';
import AnimeDisplay from '../pages/components/AnimeDisplay.js'





const AnimePage = ({ data }) => {
    return (
        <ContextImplementation>
            <AnimeDisplay {...data} />
        </ContextImplementation>
    )
}

export default AnimePage

export const getServerSideProps = async () => {
    try {
        let res = await fetch("http://localhost:3000/api/handler");
        let data = await res.json();
        return {
            props: data
        }
    } catch (err) {
        console.error(err);
        return {
            props: {
                error: 'failed to fetch data'
            }
        }
    }
}






