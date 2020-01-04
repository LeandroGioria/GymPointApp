import React, { useMemo } from 'react';
import { withNavigation } from 'react-navigation';

import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import PropTypes from 'prop-types';

import { Container, HelpHeader, Title, Time, Question } from './styles';

function HelpOrder({ navigation, data }) {
  const formattedTime = useMemo(() => {
    return formatRelative(parseISO(data.createdAt), new Date(), { locale: pt });
  }, [data.createdAt]);

  return (
    <Container
      onPress={() => {
        navigation.navigate('Details', { helpOrderData: data });
      }}>
      <HelpHeader>
        <Title feedback={data.answer}>
          {data.answer ? 'Respondido' : 'Sem resposta'}
        </Title>
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
    answer: PropTypes.string,
    question: PropTypes.string.isRequired,
  }).isRequired,
};

export default withNavigation(HelpOrder);
