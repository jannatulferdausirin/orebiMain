import React from 'react';
import useTitle from '../hooks/UseTitle';
import Container from '../Container';

const Shop = () => {
    useTitle('shop');
    return (
        <Container >
            <h2 className='text-center font-bold text-purple-600 text-4xl font-sans pt-16' >This is Shop Components</h2>
        </Container>
    );
};

export default Shop;