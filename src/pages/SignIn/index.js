import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
    email: Yup.string()
        .email('insira um email válido')
        .required('o email é obrigatório'),
    password: Yup.string().required('a senha é obrigatória'),
});

export default function SignIn() {
    function handleSubmit(data) {
        console.log(data);
    }

    return (
        <>
            <img src={logo} alt="GoBarber" />

            <Form schema={schema} onSubmit={handleSubmit}>
                <Input name="email" type="email" placeholder="seu email" />
                <Input
                    name="password"
                    type="password"
                    placeholder="sua senha"
                />

                <button type="submit">Acessar</button>
                <Link to="/register">Criar uma conta gratuita</Link>
            </Form>
        </>
    );
}
