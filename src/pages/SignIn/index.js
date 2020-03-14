import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignIn() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <form action="">
                <input type="email" placeholder="seu email" />
                <input type="password" placeholder="sua senha" />

                <button type="submit">Acessar</button>
                <Link to="/register">Criar uma conta gratuita</Link>
            </form>
        </>
    );
}
