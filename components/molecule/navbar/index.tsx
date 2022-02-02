import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import style from './style.module.scss';
import useTranslation from '../../../hooks/useTranslation';
import Image from 'next/image';
import classNames from 'classnames';

const NavbarHeader = () => {

    const { translate } = useTranslation();

    return (
        <>
            <Navbar className={classNames(style['navbar-styling'])}>
                <Container className="d-flex justify-content-center">
                    <Navbar.Brand href="/" >
                        <span className='text-gray-2'>
                           {translate('NAVBAR_TEXT')}
                        </span>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
};

export default NavbarHeader;
