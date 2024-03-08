import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form, Button, Container } from 'react-bootstrap';
import * as Yup from 'yup';
import api from '../api/ContextApi';
import { useUser } from './UserContext';

const FormFormik = () => {
    let [nome, setNome] = useState([]);
    let [email, setEmail] = useState([]);

    const handleSubmit = (event) => {
        let user = { nome, email};
        api
        .post('users/', user)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <Container>
            <h1>Formulário de Contato</h1>
            <Formik
                initialValues={{ nome, email}}
                validationSchema={Yup.object().shape({
                    nome: Yup.string().required('Nome é obrigatório'),
                    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
                })}
                onSubmit={handleSubmit}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicNome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control
                                type="text"
                                name="nome"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={setNome(values.nome)}
                                placeholder="Digite seu nome"
                                isInvalid={touched.nome && !!errors.nome}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.nome}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={setEmail(values.email)}
                                placeholder="Digite seu email"
                                isInvalid={touched.email && !!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={isSubmitting}>
                            Enviar
                        </Button>
                    </Form>
                )}
            </Formik>
        </Container>
    );
};

export default FormFormik;
