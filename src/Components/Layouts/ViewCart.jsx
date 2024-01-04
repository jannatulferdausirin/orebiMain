import React from 'react';
import Container from '../Container';
import useTitle from '../hooks/UseTitle';

const ViewCart = () => {
    useTitle('viewCart');
    return (
        <Container >
            <h2 className='pt-16 font-sans text-4xl font-bold text-center text-violet-500' >This is ViewCart section</h2>
        </Container>)
};

export default ViewCart;