import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import Header from '~/components/Header';

import { Container, Box, HeaderMod, Title, Time, Content, Answer } from './styles';

export default function Details({ navigation }) {
  // const helpOrder = navigation.getParam('helpOrder');

  // const formattedTime = useMemo(() => {
  //   return formatRelative(parseISO(helpOrder.createdAt), new Date(), {
  //     locale: pt,
  //   });
  // }, [helpOrder.createdAt]);

  return (
    <Background>
      <Container>
        <Box>
          <HeaderMod>
            <Title>Pergunta</Title>
            {/* <Time>{formattedTime}</Time> */}
            <Time>Time</Time>
          </HeaderMod>
          {/* <Content>{helpOrder.question}</Content> */}
          <Content>Content</Content>
          {/*helpOrder.answer*/ true && (
            <Answer>
              <Title>Resposta</Title>
              {/* <Content>{helpOrder.answer}</Content> */}
              <Content>Content</Content>
            </Answer>
          )}
        </Box>
      </Container>
    </Background>
  );
}

Details.navigationOptions = ({ navigation }) => ({
  headerTitle: props => <Header {...props} />,
  headerLeft: () => (
    <TouchableOpacity onPress={() => {navigation.goBack();}}>
      <Icon name="chevron-left" size={24} color="#000" />
    </TouchableOpacity>
  ),
});
