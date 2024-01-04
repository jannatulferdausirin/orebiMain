import React from 'react';
import Container from '../Container';
import useTitle from '../hooks/UseTitle';

const LogOut = () => {
    useTitle('logout');
    return (
        <Container >
            <h2 className='pt-16 font-sans text-4xl font-bold text-center text-orange-500' >This is LogOut section</h2>
        </Container>
    );
};

export default LogOut;