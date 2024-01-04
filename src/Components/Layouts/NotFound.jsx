import React from 'react';
import Container from '../Container';
import useTitle from '../hooks/UseTitle';

const NotFound = () => {
    useTitle('notFound')
    return (
        <Container >
            <h2 className='pt-16 font-sans text-4xl font-bold text-center text-red-600' >Sorry This page is Not Found !!!</h2>
        </Container>
    );
};

export default NotFound;