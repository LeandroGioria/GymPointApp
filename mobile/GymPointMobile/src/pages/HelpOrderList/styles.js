import { Platform } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  align-items: center;
  margin: 20px 25px 0;
`;

export const NewHelpButton = styled(Button)``;

export const HelpList = styled.ScrollView.attrs({
  // Change to flatlist
  showsVerticalScrollIndicator: false,
})``;

export const Help = styled(RectButton)`
  background: #fff;
  height: 150px;
  border-radius: 4px;
  border: solid 1px #dddddd;
  padding: 20px 20px;
  margin: 10px 0;
`;

export const HelpHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.Text`
  color: ${props => (props.feedback ? '#42CB59' : '#999')};
`;

export const Time = styled.Text.attrs()`
  color: #666;
`;

export const Question = styled.Text.attrs({
  numberOfLines: 4,
})`
  color: #666;
`;
