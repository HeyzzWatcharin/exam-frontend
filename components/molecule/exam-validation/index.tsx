import React, { useState } from 'react';
import style from './style.module.scss';
import classNames from 'classnames';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { Button, Card, Form } from 'react-bootstrap';

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
    const [error, setError] = useState<string>();
    const [showResult, setShowResult] = useState<boolean>(false);

    const onSubmit = (data: IFormInput) => {
        const dataForm = getValues();

        if (dataForm.password != dataForm.verifyPassword) {
            setError('Password ไม่ตรงกัน');
            return;
        } else {
            setError('');
        }

        console.log('Form Data --->', dataForm);
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
                    Test Form and Validation
                </Card.Title>
                <Card.Text>
                    <Form onSubmit={handleSubmit(onSubmit)} className='px-5'>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>
                                first Name
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
                                ผิดโว้ย
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3 " controlId="formBasicEmail">
                            <Form.Label>
                                Last Name
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
                                ผิดโว้ย
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                E-Mail
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
                                ผิดโว้ย
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                password
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
                                ผิดโว้ย
                            </Form.Control.Feedback>
                            {password != verifyPassword && (
                                <p className="invalid-password mt-2 text-left">
                                    password ผิด
                                </p>
                            )}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Verify  password
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
                                ผิดโว้ย
                            </Form.Control.Feedback>
                            {password != verifyPassword && (
                                <p className="invalid-password mt-2 text-left">
                                    password ผิด
                                </p>
                            )}
                        </Form.Group>

                        {error && <p className="invalid-login text-center text-danger">{error}</p>}

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Gender
                            </Form.Label>
                            <Form.Control
                                as="select"
                                aria-label="Default select example"
                                {...register('gender', {
                                    required: true,
                                })}
                                isInvalid={!!errors.gender}
                            >
                                <option>กรุณาระบุเพศ</option>
                                <option value='ชาย'>ชาย</option>
                                <option value='หญิง'>หญิง</option>
                                <option value='อื่นๆ'>อื่นๆ</option>
                            </Form.Control>
                            {
                                !gender && <Form.Control.Feedback type="invalid">
                                    ผิดโว้ย
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
                                Submit
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
                            Result:
                        </p>
                        <p>
                            first Name: {getValues('firstName')}
                        </p>
                        <p>
                            Last Name: {getValues('lastName')}
                        </p>
                        <p>
                            Email: {getValues('email')}
                        </p>
                        <p>
                            Gender: {getValues('gender')}
                        </p>
                    </div>
                </>
            }

        </Card>
    )
};

export default FormValidation;
