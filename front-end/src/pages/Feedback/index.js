import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import api from '../../services/api';
import history from '../../services/history';
import { Container, Scroll } from './styles';

export default function Feedback({ id, question }) {
  const [answer, setAnswer] = useState('');

  async function handleSubmit() {
    await api.put(`help-orders/${id}/answer`, { answer });
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
        <textarea
          name="answer"
          rows="4"
          onChange={({ target }) => setAnswer(target.value)}
        />
        <button type="submit">Responder Aluno</button>
      </Form>
    </Container>
  );
}

Feedback.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
};
