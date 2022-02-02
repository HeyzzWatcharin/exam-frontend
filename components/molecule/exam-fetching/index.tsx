import React from 'react';
import { Card } from 'react-bootstrap';
import classNames from 'classnames';
import Image from 'next/image'
import style from './style.module.scss';
import Mockup from '../../../public/vercel.svg'

interface IPokemonType {
    srcImg?: any;
    name?: string;
    className?: string;
}

const PokemonFetching: React.FC<IPokemonType> = ({
    name,
    srcImg,
    className
}) => {
    return (
        <div className={className}>
            <Card className={classNames(style['pokemon-card'])}>
                <Card.Body className='d-flex flex-column justify-content-center p-0'>
                    <div className='text-center'>
                        <Image
                            src={srcImg ? srcImg : Mockup}
                            width={120}
                            height={120}
                            alt="pokemon img"
                        />
                    </div>
                    <div className={classNames(style['name-styling'])}>
                        <span className='text-white body-3'>
                            {name}
                        </span>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PokemonFetching;
