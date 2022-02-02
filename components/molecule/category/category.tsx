import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { IOnSelected } from '../../../pages';

interface ICategory {
    callbackState: (id: IOnSelected) => void;
}

const CategoryType: React.FC<ICategory> = ({
    callbackState
}) => {

    const [onSelected, setOnSelected] = useState<IOnSelected>(0)

    return (
        <div>
            <Row>
                <Col
                    className='text-center'
                >
                    <p
                        onClick={() => {
                            callbackState(IOnSelected.FORM_TYPE);
                            setOnSelected(IOnSelected.FORM_TYPE)
                        }}
                        className={classNames('fw-bold pointer body-6 text-hover', onSelected == IOnSelected.FORM_TYPE && 'text-green')}
                    >
                        Home
                    </p>
                </Col>
                <Col
                    className='text-center'
                >
                    <p
                        onClick={() => {
                            callbackState(IOnSelected.POKEMON_TYPE);
                            setOnSelected(IOnSelected.POKEMON_TYPE)
                        }}
                        className={classNames('fw-bold pointer body-6 text-hover', onSelected == IOnSelected.POKEMON_TYPE && 'text-green')}
                    >
                        Pokemon
                    </p>
                </Col>
                <Col
                    className='text-center'

                >
                    <p
                        onClick={() => {
                            callbackState(IOnSelected.FUNCTION_ONE_TYPE);
                            setOnSelected(IOnSelected.FUNCTION_ONE_TYPE)
                        }}
                        className={classNames('fw-bold pointer body-6 text-hover', onSelected == IOnSelected.FUNCTION_ONE_TYPE && 'text-green')}
                    >
                        Function 1
                    </p>
                </Col>
                <Col
                    className='text-center'

                >
                    <p
                        onClick={() => {
                            callbackState(IOnSelected.FUNCTION_TWO_TYPE);
                            setOnSelected(IOnSelected.FUNCTION_TWO_TYPE)
                        }}
                        className={classNames('fw-bold pointer body-6 text-hover', onSelected == IOnSelected.FUNCTION_TWO_TYPE && 'text-green')}
                    >
                        Function 2
                    </p>
                </Col>
                <Col
                    className='text-center'
                >
                    <p
                        onClick={() => {
                            callbackState(IOnSelected.FUNCTION_THREE_TYPE);
                            setOnSelected(IOnSelected.FUNCTION_THREE_TYPE)
                        }}
                        className={classNames('fw-bold pointer body-6 text-hover', onSelected == IOnSelected.FUNCTION_THREE_TYPE && 'text-green')}
                    >
                        Function 3
                    </p>
                </Col>
            </Row>
        </div>
    );
};

export default CategoryType;
