import React, { useMemo } from 'react';

import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container, HelpHeader, Title, Time, Question } from './styles';

export default function HelpOrder({ navigation, data }) {
  const formattedTime = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), { locale: pt });
  }, [data.createdAt]);

  return (
    <Container
      onPress={() => {
        navigation.navigate('Details', { helpOrder: data });
      }}>
      <HelpHeader>
        <Title feedback>{data.answer ? 'Respondido' : 'Sem resposta'}</Title>
        <Time>{formattedTime}</Time>
      </HelpHeader>
      <Question>{data.question}</Question>
    </Container>
  );
}

HelpOrder.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    createdAt: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
  }).isRequired,
};
