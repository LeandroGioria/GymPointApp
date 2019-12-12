/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';
import { Container, Button, EnrollmentData, Item } from './styles';

export default function EnrollmentForm(props) {
  const [enrollmentData, setEnrollmentData] = useState('');

  useEffect(() => {
    if (props.location.state !== undefined) {
      setEnrollmentData(props.location.state.enrollment);
    }
  }, [props.location.state]);

  async function handleSave() {
    try {
      if (enrollmentData.id) {
        const response = await api.put('enrollments', {
          id: enrollmentData.id,
          start_date: enrollmentData.start_date,
          plan_id: enrollmentData.plan_id,
          student_id: enrollmentData.student_id,
        });

        if (!response.data) {
          toast.error('Erro no servidor');
        }

        toast.success('Salvo com sucesso!');
        history.push('/');
        history.push('/enrollments');
      } else {
        const response = await api.post('enrollments', {
          start_date: enrollmentData.start_date,
          plan_id: enrollmentData.plan_id,
          student_id: enrollmentData.student_id,
        });

        if (!response.data) {
          toast.error('Erro no servidor');
        }

        toast.success('Salvo com sucesso!');
        history.push('/');
        history.push('/enrollments');
      }
    } catch (err) {
      toast.error('Erro ao salvar');
    }
  }

  return (
    <Container>
      <header>
        <strong>
          {enrollmentData.id ? 'Edição de matrícula' : 'Cadastro de matrícula'}
        </strong>
        <aside>
          <Link to="/enrollments">
            <MdChevronLeft size={20} color="#fff" />
            <strong>VOLTAR</strong>
          </Link>
          <Button onClick={handleSave}>
            <MdCheck size={20} color="#fff" />
            <span>SALVAR</span>
          </Button>
        </aside>
      </header>
      <EnrollmentData>
        <strong>ALUNO</strong>
        <Input
          name="name"
          type="text"
          placeholder="Buscar aluno"
          // value={enrollmentData.student.name}
          // onChange={event =>
          //   setEnrollmentData({ ...enrollmentData, name: event.target.value })
          // }
        />
        <div>
          <Item>
            <strong>PLANO</strong>
            <Input
              name="plano"
              type="list"
              placeholder="Selecione o plano"
              // value={enrollmentData.plan.title}
              // onChange={event =>
              //   setEnrollmentData({
              //     ...enrollmentData,
              //     title: event.target.value,
              //   })
              // }
            />
          </Item>
          <Item>
            <strong>DATA DE INÍCIO</strong>
            <Input
              name="preco"
              type="date"
              placeholder="Escolha a data"
              value={enrollmentData.price}
              onChange={event =>
                setEnrollmentData({
                  ...enrollmentData,
                  price: event.target.value,
                })
              }
            />
          </Item>
          <Item>
            <strong>DATA DE TÉRMINO</strong>
            <Input name="termino" type="date" disabled />
          </Item>
          <Item>
            <strong>VALOR FINAL</strong>
            <Input name="final" type="number" disabled />
          </Item>
        </div>
      </EnrollmentData>
    </Container>
  );
}
