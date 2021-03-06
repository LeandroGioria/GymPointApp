import React, { useState } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Background from '~/components/Background';
import Button from '~/components/Button';
import Header from '~/components/Header';
import api from '~/services/api';

import { Container, TextArea } from './styles';

export default function NewHelpOrder({ navigation }) {
  const [question, setQuestion] = useState('');
  const studentId = useSelector(state => state.auth.student.id);

  async function handleSubmit() {
    try {
      await api.post(`/students/${studentId}/help-orders`, {
        question,
      });
      Alert.alert('Sucesso', 'Pedido de auxílio feito com succeso!');
      navigation.navigate('HelpOrderList');
    } catch (err) {
      err.response.data.errors.map(error =>
        Alert.alert('Falha ao criar novo pedido de auxílio', error.msg),
      );
    }
  }

  return (
    <Background>
      <Container>
        <TextArea
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          placeholder="Inclua seu pedido de auxílio"
          autoCorrect={false}
          multiline
          auto
          numberOfLines={9}
          returnKeyType="send"
          value={question}
          onChangeText={setQuestion}
        />
        <Button onPress={handleSubmit}>Enviar pedido</Button>
      </Container>
    </Background>
  );
}

NewHelpOrder.navigationOptions = ({ navigation }) => ({
  headerTitle: <Header />,
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}>
      <Icon name="chevron-left" size={24} color="#000" />
    </TouchableOpacity>
  ),
});

NewHelpOrder.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
