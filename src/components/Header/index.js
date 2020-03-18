import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';
import logo from '~/assets/logo_nav.svg';

import Notifications from '~/components/Notifications';

export default function Header() {
    return (
        <Container>
            <Content>
                <nav>
                    <img src={logo} alt="goBarber" />
                    <Link to="/dashboard">DASHBOARD</Link>
                </nav>

                <aside>
                    <Notifications />

                    <Profile>
                        <div>
                            <strong>Pedro Bufulin</strong>
                            <Link to="/profile">Meu perfil</Link>
                        </div>
                        <img
                            src="https://api.adorable.io/avatars/50/abott@adorable.pngCopy to Clipboard"
                            alt="perfil"
                        />
                    </Profile>
                </aside>
            </Content>
        </Container>
    );
}
