import React from 'react';
import Modal from 'reactjs-popup';
import FeedBack from '../Feedback';
import { Container, HelpOrderTable } from './styles';

export default function HelpOrderList() {
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
          <tr>
            <td>
              <span>Leandro Gioria</span>
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
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                    <FeedBack />
                  </div>
                )}
              </Modal>
            </td>
            <td>
              <span>Leandro Gioria</span>
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
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                    <FeedBack />
                  </div>
                )}
              </Modal>
            </td>
            <td>
              <span>Leandro Gioria</span>
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
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                    <FeedBack />
                  </div>
                )}
              </Modal>
            </td>
          </tr>
        </tbody>
      </HelpOrderTable>
    </Container>
  );
}
