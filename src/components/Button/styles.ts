import styled, { keyframes } from 'styled-components';
import { colors } from '../../Global/colors';

interface IWrapperStyle {
  color?: string;
}
const rotate = keyframes`
  0% {   transform: scale(1); }
  50% {  transform: scale(1.1); }
  100% {  transform: scale(1); }
`;

export const Wrapper = styled.div<IWrapperStyle>`
  display: flex;
  background-color: ${({ color }) => (color ? color : colors.main)};

  padding: 20px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;

  color: ${colors.text_light};
  font-size: 20px;
  font-weight: bold;

  max-width: 300px;
  max-height: 20px;

  &:hover {
    animation: ${rotate} 2s linear infinite;
  }
`;
