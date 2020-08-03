import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="week_day">Dia da Semana</label>
                        <input type="text" id="week_day"/>
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time"/>
                    </div>
                </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="" alt=""/>
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
                            Entrar em contato
                            <img src={whatsappIcon} alt="Entrar em contato"/>
                        </button>
                    </footer>
                </article>
            </main>
        </div>
    );
}

export default TeacherList;