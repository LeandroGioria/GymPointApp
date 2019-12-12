/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';
import { Container, Button, StudentData, Item } from './styles';

export default function StudentForm(props) {
  const [studentData, setStudentData] = useState('');

  useEffect(() => {
    if (props.location.state !== undefined) {
      setStudentData(props.location.state.student);
    }
    // eslint-disable-next-line react/destructuring-assignment
  }, [props.location.state]);

  async function handleSave() {
    if (studentData.id) {
      try {
        const response = await api.put('students', {
          id: studentData.id,
          name: studentData.name,
          email: studentData.email,
          age: studentData.age,
          peso: studentData.peso,
          altura: studentData.altura,
        });

        if (!response.data) {
          toast.error('Erro no servidor');
        }

        toast.success('Salvo com sucesso!');
        history.push('/');
      } catch (err) {
        toast.error('Erro ao salvar');
      }
    } else {
      try {
        const response = await api.post('students', {
          id: studentData.id,
          name: studentData.name,
          email: studentData.email,
          age: studentData.age,
          peso: studentData.peso,
          altura: studentData.altura,
        });

        if (!response.data) {
          toast.error('Erro no servidor');
        }

        toast.success('Salvo com sucesso!');
        history.push('/');
      } catch (err) {
        toast.error('Erro ao salvar');
      }
    }
  }

  return (
    <Container>
      <header>
        <strong>{studentData ? 'Edição de aluno' : 'Cadastro de aluno'}</strong>
        <aside>
          <Link to="/students">
            <MdChevronLeft size={20} color="#fff" />
            <strong>VOLTAR</strong>
          </Link>
          <Button onClick={handleSave}>
            <MdCheck size={20} color="#fff" />
            <span>SALVAR</span>
          </Button>
        </aside>
      </header>
      <StudentData>
        <strong>NOME COMPLETO</strong>
        <Input
          name="name"
          type="text"
          value={studentData.name}
          placeholder="Nome Sobrenome"
          onChange={event =>
            setStudentData({ ...studentData, name: event.target.value })
          }
        />
        <strong>ENDEREÇO DE E-MAIL</strong>
        <Input
          name="email"
          type="e-mail"
          value={studentData.email}
          placeholder="exemplo@email.com"
          onChange={event =>
            setStudentData({ ...studentData, email: event.target.value })
          }
        />
        <div>
          <Item>
            <strong>IDADE</strong>
            <Input
              name="idade"
              type="text"
              value={studentData.age}
              onChange={event =>
                setStudentData({ ...studentData, age: event.target.value })
              }
            />
          </Item>
          <Item>
            <strong>PESO (em kg)</strong>
            <Input
              name="peso"
              type="number"
              value={studentData.peso}
              onChange={event =>
                setStudentData({ ...studentData, peso: event.target.value })
              }
            />
          </Item>
          <Item>
            <strong>Altura</strong>
            <Input
              name="altura"
              type="number"
              value={studentData.altura}
              onChange={event =>
                setStudentData({ ...studentData, altura: event.target.value })
              }
            />
          </Item>
        </div>
      </StudentData>
    </Container>
  );
}
