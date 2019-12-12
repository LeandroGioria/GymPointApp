import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import SweetAlert from 'react-bootstrap-sweetalert';
import { toast } from 'react-toastify';
import api from '../../services/api';
import history from '../../services/history';
import { formatPrice } from '../../util/format';
import { Container, StudentTable, EditDelete } from './styles';

export default function PlanList() {
  const [plans, setPlans] = useState([]);
  const [showDlg, setShowDlg] = useState(false);
  const [currentId, setCurrentId] = useState(-1);

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('plans');

      if (!response.data) {
        toast.error('Erro no servidor');
      }

      setPlans(response.data);
    }

    loadPlans();
  }, []);

  async function deletePlan() {
    try {
      await api.delete(`plans/${currentId}`);
      toast.success('Plano deletado!');
    } catch (err) {
      toast.error('Erro interno no servidor ao deletar plano');
    }

    setShowDlg(false);
    history.push('/');
    history.push('/plans');
  }

  return (
    <Container>
      <header>
        <strong>Gerenciamento planos</strong>
        <aside>
          <Link to="/plan/form">
            <IoMdAdd size={20} color="#fff" />
            <strong>CADASTRAR</strong>
          </Link>
        </aside>
      </header>
      <StudentTable>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr>
              <td>
                <span>{plan.title}</span>
              </td>
              <td>
                <span>{plan.duration} mês</span>
              </td>
              <td>
                <span>{formatPrice(plan.price)}</span>
              </td>
              <td>
                <EditDelete edit>
                  <Link
                    to={{
                      pathname: '/plan/form',
                      state: { plan },
                    }}
                    edit
                  >
                    editar
                  </Link>
                </EditDelete>
              </td>
              <td>
                <EditDelete>
                  <button
                    type="button"
                    onClick={() => {
                      setShowDlg(true);
                      setCurrentId(plan.id);
                    }}
                  >
                    apagar
                  </button>
                </EditDelete>
                <SweetAlert
                  show={showDlg}
                  warning
                  showCancel
                  confirmBtnBsStyle="danger"
                  title="Você tem certeza?"
                  onConfirm={() => deletePlan()}
                  onCancel={() => setShowDlg(false)}
                  focusCancelBtn
                >
                  Você irá deletar o plano permanentemente.
                </SweetAlert>
              </td>
            </tr>
          ))}
        </tbody>
      </StudentTable>
    </Container>
  );
}
