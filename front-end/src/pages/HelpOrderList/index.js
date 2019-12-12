import React, { useState, useEffect } from 'react';
import Modal from 'reactjs-popup';
import { toast } from 'react-toastify';
import api from '../../services/api';
import FeedBack from '../Feedback';
import { Container, HelpOrderTable } from './styles';

export default function HelpOrderList() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('help-orders');

      if (!response.data) {
        toast.error('Erro no servidor');
      }

      setHelpOrders(response.data);
    }

    loadHelpOrders();
  }, []);

  return (
    <Container>
      <strong>Pedidos de auxílio</strong>
      <HelpOrderTable>
        <thead>
          <tr>
            <th>ALUNO</th>
          </tr>
        </thead>
        <tbody>
          {helpOrders.map(helpOrder => (
            <tr>
              <td>
                <span>{helpOrder.student.name}</span>
                <Modal
                  style={{ width: '400px' }}
                  className="popup-wrapper"
                  trigger={
                    <button type="button" button>
                      responder
                    </button>
                  }
                  modal
                  closeOnDocumentClick
                >
                  {close => (
                    <div>
                      <FeedBack
                        id={helpOrder.id}
                        question={helpOrder.question}
                      />
                    </div>
                  )}
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </HelpOrderTable>
    </Container>
  );
}
