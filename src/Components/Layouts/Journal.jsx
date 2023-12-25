import React from 'react';
import useTitle from '../hooks/UseTitle';
import Container from '../Container';

const Journal = () => {
    useTitle('journal');
    return (
        <Container >
            <h2 className='text-center font-bold text-blue-500 text-4xl font-sans pt-16' >This is Journal Components</h2>
        </Container>
    );
};

export default Journal;