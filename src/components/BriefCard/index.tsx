import {} from 'react';
import {
  Wrapper,
  Header,
  Avatar,
  UserInfo,
  UserName,
  Starts,
  BriefText,
} from './styles';

interface IProps {
  userName?: string;
  briefText?: string;
  avatar?: string;
}

export const BriefCard = ({ userName, briefText, avatar }: IProps) => {
  return (
    <Wrapper>
      <Header>
        <Avatar
          src={
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
          }
        />

        <UserInfo>
          <UserName>Lucas Aguiar</UserName>
          <Starts>⭐️⭐️⭐️⭐️⭐️</Starts>
        </UserInfo>
      </Header>

      <BriefText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
      </BriefText>
    </Wrapper>
  );
};
