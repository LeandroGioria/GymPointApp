import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

/* <AuthLayout>
  <children></children>
</AuthLayout> */

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.protoTypes = {
  children: PropTypes.element.isRequired,
};
