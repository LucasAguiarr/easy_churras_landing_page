import { Wrapper } from './styles';

interface IProps {
  url: string;
}

export const ImageStore = ({ url }: IProps) => {
  return <Wrapper src={url} />;
};
