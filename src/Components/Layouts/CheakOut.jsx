import React from 'react';
import useTitle from '../hooks/UseTitle';
import Container from '../Container';

const CheakOut = () => {
    useTitle('cheakout');
    return (
        <Container >
            <h2 className='pt-16 font-sans text-4xl font-bold text-center text-pink-500' >This is  CheakOut section</h2>
        </Container>
    );
};

export default CheakOut;