import React, { useState, FormEvent } from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';


function TeacherList() {

    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const res = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(res.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis">
                <form action="" id="search-teachers" onSubmit={searchTeachers}>
                    
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
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
                        value={week_day}
                        onChange={(e) => { setWeekday(e.target.value) }}
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
                    
                    <Input 
                        type="time" 
                        name="time" 
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }} 
                    />

                    <button type="submit">Ok</button>

                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    );
}

export default TeacherList;