import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMdAdd } from 'react-icons/io';
import { MdCheckCircle } from 'react-icons/md';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';
import api from '../../services/api';
import { Container, EnrollmentTable, EditDelete } from './styles';
import history from '../../services/history';

export default function EnrollmentList() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    async function loadEnrollments() {
      const response = await api.get('enrollments');

      if (!response.data) {
        toast.error('Erro no servidor');
      }

      setEnrollments(response.data);
    }

    loadEnrollments();
  }, []);

  function handleEdit(studentId) {
    history.push(`enrollment/${studentId}`);
  }

  return (
    <Container>
      <header>
        <strong>Gerenciamento matrículas</strong>
        <aside>
          <Link to="/enrollment/form">
            <IoMdAdd size={20} color="#fff" />
            <strong>CADASTRAR</strong>
          </Link>
        </aside>
      </header>

      {!enrollments.length ? (
        <p>Nenhuma matrícula encontrada...</p>
      ) : (
        <EnrollmentTable>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map(enrollment => (
              <tr>
                <td>
                  <span>{enrollment.student.name}</span>
                </td>
                <td>
                  <span>{enrollment.plan.title}</span>
                </td>
                <td>
                  <span>
                    {format(
                      parseISO(enrollment.start_date),
                      "dd 'de' MMMM 'de' yyyy",
                      {
                        locale: pt,
                      }
                    )}
                  </span>
                </td>
                <td>
                  <span>
                    {format(
                      parseISO(enrollment.end_date),
                      "dd 'de' MMMM 'de' yyyy",
                      {
                        locale: pt,
                      }
                    )}
                  </span>
                </td>
                <td>
                  <MdCheckCircle
                    size={20}
                    color={enrollment.active ? '#42cb59' : '#ccc'}
                  />
                </td>
                <td>
                  <EditDelete edit>
                    <button
                      type="button"
                      onClick={() => handleEdit(enrollments.student_id)}
                    >
                      editar
                    </button>
                  </EditDelete>
                </td>
              </tr>
            ))}
          </tbody>
        </EnrollmentTable>
      )}
    </Container>
  );
}
