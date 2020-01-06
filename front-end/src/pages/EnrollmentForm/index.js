import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Select from 'react-select';
import AsyncSelect from 'react-select/async';
import DatePicker from 'react-datepicker';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { addMonths, parseISO } from 'date-fns';
import debounce from 'debounce-promise';
import * as Yup from 'yup';

import Loading from '../../components/Loading';
import history from '../../services/history';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { Container, Header, Student, Info } from './styles';

const schema = Yup.object().shape({
  start_date: Yup.date().required('Campo data de inicio é obrigatório'),
  plan_id: Yup.number().required('Campo plano é obrigatório'),
  student_id: Yup.number().required('Campo aluno é obrigatório'),
});

export default function EnrollmentForm() {
  const [enrollments, setEnrollments] = useState({ price: 0 });
  const [students, setStudents] = useState({});
  const [plans, setPlans] = useState({});
  const [loading, setLoading] = useState(true);
  const { studentId } = useParams();

  useEffect(() => {
    if (studentId) {
      const getEnrollment = async () => {
        const { data } = await api.get(`/enrollments/${studentId}`);

        await setEnrollments({
          ...data,
          start_date: data.plan ? parseISO(data.start_date) : '',
          end_date: data.plan ? parseISO(data.end_date) : '',
        });
      };

      getEnrollment();
    }
  }, [studentId]);

  useEffect(() => {
    if (!studentId) {
      const loadStudents = async () => {
        const { data } = await api.get('students');

        setStudents(data);
      };

      loadStudents();
    }
  }, [studentId]);

  useEffect(() => {
    const loadPlans = async () => {
      const { data } = await api.get('plans');

      setPlans(data);
      setLoading(false);
    };

    loadPlans();
  }, []);

  const getStudents = async filter => {
    if (!filter) {
      return [];
    }

    const { data } = await api.get('students', {
      params: {
        filter,
      },
    });
    return data;
  };

  const wait = 1500; // ms
  const loadOptions = inputValue => getStudents(inputValue);
  const debouncedLoadOptions = debounce(loadOptions, wait, {
    leading: true,
  });

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await schema.validate(
        {
          start_date: enrollments.start_date,
          plan_id: enrollments.plan_id,
          student_id: studentId || enrollments.student_id,
        },
        {
          abortEarly: false,
        }
      );
    } catch (err) {
      toast.error('Erro no servidor');
      return;
    }

    setLoading(true);

    try {
      if (studentId) {
        const data = {
          start_date: enrollments.start_date,
          plan_id: enrollments.plan_id,
        };

        await api.put(`enrollments/${studentId}`, { ...data });

        toast.success('Matrícula atualizada com sucesso');
      } else {
        const data = {
          start_date: enrollments.start_date,
          plan_id: enrollments.plan_id,
          student_id: enrollments.student_id,
        };

        await api.post('enrollments', { ...data });

        toast.success('Matrícula realizada com sucesso');
      }
      history.push(`/enrollments`);
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Erro de comunicação com o servidor'
      );
    } finally {
      setLoading(false);
    }
  };

  const customStyles = {
    option: (styles, state) => ({
      ...styles,
      cursor: state.isDisabled ? 'not-allowed' : 'pointer',
      fontWeight: 'normal',
    }),
    control: (styles, state) => ({
      ...styles,
      border: `1px solid #ddd`,
      boxShadow: state.isFocused && `1px solid #ddd`,
      '&:hover': {
        border: `1px solid #ddd`,
      },
      borderRadius: '4px',
      display: 'flex',
      width: '100%',
      height: '45px',
      marginTop: '7px',
      fontWeight: 'normal',
    }),
    placeholder: styles => ({
      ...styles,
      fontWeight: 'normal',
    }),
    indicatorSeparator: styles => ({
      ...styles,
      display: 'none',
    }),
  };

  return (
    <Container>
      {loading ? (
        <Loading type="spinner" />
      ) : (
        <>
          <Header>
            <h1>
              {studentId ? 'Edição de matrícula' : 'Cadastro de matrícula'}
            </h1>
            <div>
              <button
                type="button"
                onClick={() => history.push('/enrollments')}
              >
                <MdKeyboardArrowLeft size={20} color="#fff" />
                <span>VOLTAR</span>
              </button>
              <button type="submit" form="form-enrollments">
                <MdCheck size={20} color="#fff" />
                <span>SALVAR</span>
              </button>
            </div>
          </Header>
          <form id="form-enrollments" onSubmit={handleSubmit}>
            <Student>
              <label>ALUNO </label>
              <AsyncSelect
                isDisabled={studentId}
                styles={customStyles}
                defaultOptions={students}
                loadOptions={inputValue => debouncedLoadOptions(inputValue)}
                multiple={false}
                name="students"
                placeholder="Buscar aluno"
                getOptionValue={student => student.id}
                getOptionLabel={student => student.name}
                value={enrollments ? enrollments.student : ''}
                onChange={e =>
                  setEnrollments({
                    ...enrollments,
                    student_id: e.id,
                    student: e,
                  })
                }
              />
            </Student>
            <Info>
              <label>
                PLANO
                <Select
                  styles={customStyles}
                  options={plans}
                  multiple={false}
                  name="plan"
                  placeholder="Buscar plano"
                  value={enrollments ? enrollments.plan : ''}
                  getOptionValue={plan => plan.id}
                  getOptionLabel={plan => plan.title}
                  onChange={e =>
                    setEnrollments({
                      ...enrollments,
                      plan_id: e.id,
                      plan: e,
                      price: e.price * e.duration,
                    })
                  }
                />
              </label>
              <label>
                DATA DE INÍCIO
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  name="start_date"
                  autoComplete="off"
                  placeholder="Escolha a data"
                  selected={enrollments ? enrollments.start_date : ''}
                  onChange={date => {
                    if (!enrollments.plan) {
                      toast.error('Favor selecionar um plano!');
                      return;
                    }
                    if (date) {
                      setEnrollments({
                        ...enrollments,
                        start_date: date,
                        end_date: addMonths(date, enrollments.plan.duration),
                      });
                    }
                  }}
                />
              </label>
              <label>
                DATA DE TÉRMINO
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  name="end_date"
                  disabled
                  placeholder="Data de termino"
                  selected={enrollments ? enrollments.end_date : ''}
                />
              </label>
              <label>
                VALOR FINAL
                <input
                  type="text"
                  name="price"
                  value={enrollments ? formatPrice(enrollments.price) : ''}
                  disabled
                />
              </label>
            </Info>
          </form>
        </>
      )}
    </Container>
  );
}
