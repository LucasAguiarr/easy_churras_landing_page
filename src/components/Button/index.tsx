import {} from 'react';
import { Wrapper } from './styles';

interface IProps {
  text: string;
  color?: string;
}

export const Button = ({ text, color }: IProps) => {
  return <Wrapper color={color}>{text}</Wrapper>;
};
