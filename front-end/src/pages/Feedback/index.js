import React from 'react';
import { toast } from 'react-toastify';
import { Input, Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import api from '../../services/api';
import history from '../../services/history';
import { Container, Scroll } from './styles';

export default function Feedback({ id, question }) {
  async function handleSubmit({ resposta }) {
    await api.put(`help-orders/${id}/answer`, { answer: resposta });
    toast.success('Resposta enviada!');
    history.push('/');
    history.push('/helps');
  }

  return (
    <Container>
      <span>PERGUNTA DO ALUNO</span>
      <Scroll>{question}</Scroll>
      <span>SUA RESPOSTA</span>
      <br />
      <Form onSubmit={handleSubmit}>
        <Input name="resposta" type="text" />
        <button type="submit">Responder Aluno</button>
      </Form>
    </Container>
  );
}

Feedback.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
};
