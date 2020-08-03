import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/42652438?s=400&u=efefc6fba80e9678e3ebf5b35b2dcfc9485915d7&v=4" alt=""/>
                <div>
                    <strong>Zé Pequeno</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Muito boa minhas aula, 100% de aprendizado, alunos formados, top top
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">                            
                    <img src={whatsappIcon} alt="Entrar em contato"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;