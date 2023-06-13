import styled from 'styled-components';
import { Button as Base } from '@buffetjs/core';

const Button = styled(Base)`
  width: 100%;
  color: purple
  text-transform: ${({ textTransform }) => textTransform};
`;

Button.defaultProps = {
  color: 'purple',
  type: 'button',
  textTransform: 'none',
};

export default Button;
