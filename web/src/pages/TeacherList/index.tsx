import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers">
                    
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options={[
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Física', label: 'Física' },
                        ]}
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da Semana" 
                        options={[
                            { value: '0', label: 'Segunda' },
                            { value: '1', label: 'Terça' },
                            { value: '2', label: 'Quarta' },
                            { value: '3', label: 'Quinta' },
                            { value: '4', label: 'Sexta' },
                            { value: '5', label: 'Sábado' },
                            { value: '6', label: 'Domingo' },
                        ]}
                    />
                    
                    <Input type="time" name="time" label="Hora" />

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    );
}

export default TeacherList;