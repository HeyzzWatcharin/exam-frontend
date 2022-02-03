import React, { useState } from 'react';
import style from './style.module.scss';
import classNames from 'classnames';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { Button, Card, Form } from 'react-bootstrap';
import useTranslation from '../../../hooks/useTranslation';

interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    verifyPassword: string;
    gender: string;
}

export enum IGender {
    MALE_TYPE = 1,
    FEMALE_TYPE = 2,
    OTHER_TYPE = 3
}

const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(1).required(),
    verifyPassword: yup.string().min(1).required(),
    gender: yup.string().required(),
});

const FormValidation = () => {

    const {
        register,
        handleSubmit,
        watch,
        getValues,
        formState: { errors },
    } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const { translate } = useTranslation();
    const [error, setError] = useState<string>();
    const [showResult, setShowResult] = useState<boolean>(false);

    const onSubmit = () => {
        const dataForm = getValues();

        if (dataForm.password != dataForm.verifyPassword) {
            setError('Password ไม่ตรงกัน');
            return;
        } else {
            setError('');
        }

        setShowResult(true)
    }

    const password = watch('password');
    const verifyPassword = watch('verifyPassword');
    const firstName = watch('firstName');
    const gender = watch('gender');

    return (
        <Card className={classNames(style["form-container"], 'text-start')}>
            <Card.Body className="pt-5 pb-5 px-3">
                <Card.Title className="header-1 text-green-1 text-center my-4">
                    {translate('FORM_HEADE')}
                </Card.Title>
                <Card.Text>
                    <Form onSubmit={handleSubmit(onSubmit)} className='px-5'>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>
                                {translate('FIRST_NAME')}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                className="input-form"
                                {...register('firstName', {
                                    required: true,
                                })}
                                isInvalid={!!errors.firstName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {translate('ALERT_TEXT')}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>
                                {translate('LAST_NAME')}
                            </Form.Label>
                            <Form.Control
                                type="text"
                                className="input-form"
                                {...register('lastName', {
                                    required: true,
                                })}
                                isInvalid={!!errors.lastName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {translate('ALERT_TEXT')}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                {translate('EMAIL')}
                            </Form.Label>
                            <Form.Control
                                type="email"
                                className="input-form"
                                {...register('email', {
                                    required: true,
                                })}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {translate('ALERT_TEXT')}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                {translate('PASSWORD')}
                            </Form.Label>
                            <Form.Control
                                type="password"
                                className="input-form"
                                {...register('password', {
                                    required: true,
                                })}
                                isInvalid={!!errors.password}
                            />
                            <Form.Control.Feedback type="invalid">
                                {translate('ALERT_TEXT')}
                            </Form.Control.Feedback>
                            {password != verifyPassword && (
                                <p className="invalid-password mt-2 text-left text-dander">
                                    {translate('PASSWORD_ERROR')}
                                </p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                {translate('VERIFY_PASSWORD')}
                            </Form.Label>
                            <Form.Control
                                type="password"
                                className="input-form"
                                {...register('verifyPassword', {
                                    required: true,
                                })}
                                isInvalid={!!errors.verifyPassword}
                            />
                            <Form.Control.Feedback type="invalid">
                                {translate('ALERT_TEXT')}
                            </Form.Control.Feedback>
                            {password != verifyPassword && (
                                <p className="invalid-password mt-2 text-left text-dander">
                                    {translate('PASSWORD_ERROR')}
                                </p>
                            )}
                        </Form.Group>

                        {error && <p className="invalid-login text-center text-danger">{error}</p>}

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                {translate('GENDER')}
                            </Form.Label>
                            <Form.Control
                                as="select"
                                aria-label="Default select example"
                                {...register('gender', {
                                    required: true,
                                })}
                                isInvalid={!!errors.gender}
                            >
                                <option></option>
                                <option value={translate('MALE')}>{translate('MALE')}</option>
                                <option value={translate('FEMALE')}>{translate('FEMALE')}</option>
                                <option value={translate('OTHER')}>{translate('OTHER')}</option>
                            </Form.Control>
                            {
                                !gender && <Form.Control.Feedback type="invalid">
                                    {translate('ALERT_TEXT')}
                                </Form.Control.Feedback>
                            }

                        </Form.Group>

                        <div>
                            <Button
                                variant="success"
                                className='w-100 mt-3'
                                type='submit'
                                disabled={firstName ? false : true}
                            >
                                {translate('SUBMIT')}
                            </Button>
                        </div>

                    </Form>
                </Card.Text>
            </Card.Body>
            {
                showResult &&

                <>
                    <div className='m-5'>
                        <p className='body-7 fw-bold'>
                            {translate('RESULT')}:
                        </p>
                        <p>
                            {translate('FIRST_NAME')} : {getValues('firstName')}
                        </p>
                        <p>
                            {translate('LAST_NAME')} : {getValues('lastName')}
                        </p>
                        <p>
                            {translate('EMAIL')} : {getValues('email')}
                        </p>
                        <p>
                            {translate('GENDER')} : {getValues('gender')}
                        </p>
                    </div>
                </>
            }

        </Card>
    )
};

export default FormValidation;
