import styled from 'styled-components/native';

export const Container = styled.View.attrs({})`
  flex: 1;
  background: ${props => (props.loggedout ? '#FFF' : '#F5F5F5')};
`;
