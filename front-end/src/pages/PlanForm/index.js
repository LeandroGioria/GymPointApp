/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdCheck } from 'react-icons/md';
import { Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';
import { formatPrice } from '../../util/format';
import { Container, Button, PlanData, Item } from './styles';

export default function Plans(props) {
  const [planData, setPlanData] = useState('');
  useEffect(() => {
    if (props.location.state !== undefined) {
      setPlanData(props.location.state.plan);
    }
  }, [props.location.state]);

  async function handleSave() {
    try {
      if (planData.id) {
        const response = await api.post('plans', {
          id: planData.id,
          title: planData.title,
          duration: planData.duration,
          price: planData.price,
        });

        if (!response.data) {
          toast.error('Erro no servidor');
        }

        toast.success('Salvo com sucesso!');
        history.push('/');
        history.push('/plans');
      } else {
        const response = await api.post('plans', {
          id: planData.id,
          title: planData.title,
          duration: planData.duration,
          price: planData.price,
        });

        if (!response.data) {
          toast.error('Erro no servidor');
        }

        toast.success('Salvo com sucesso!');
        history.push('/');
        history.push('/plans');
      }
    } catch (err) {
      toast.error('Erro ao salvar');
    }
  }

  return (
    <Container>
      <header>
        <strong>Cadastro de plano</strong>
        <aside>
          <Link to="/plans">
            <MdChevronLeft size={20} color="#fff" />
            <strong>VOLTAR</strong>
          </Link>
          <Button onClick={handleSave}>
            <MdCheck size={20} color="#fff" />
            <span>SALVAR</span>
          </Button>
        </aside>
      </header>
      <PlanData>
        <strong>TÍTULO DO PLANO</strong>
        <Input
          name="title"
          type="text"
          onChange={event =>
            setPlanData({ ...planData, title: event.target.value })
          }
        />
        <div>
          <Item>
            <strong>DURAÇÃO (em meses)</strong>
            <Input
              name="duration"
              type="number"
              onChange={event =>
                setPlanData({ ...planData, duration: event.target.value })
              }
            />
          </Item>
          <Item>
            <strong>PREÇO MENSAL</strong>
            <Input
              name="price"
              type="number"
              onChange={event =>
                setPlanData({ ...planData, price: event.target.value })
              }
            />
          </Item>
          <Item>
            <strong>PREÇO TOTAL</strong>
            <Input
              name="total"
              value={formatPrice(planData.duration * planData.price)}
              disabled
            />
          </Item>
        </div>
      </PlanData>
    </Container>
  );
}
