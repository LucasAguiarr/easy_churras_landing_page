import {} from 'react';
import { BriefCard, Button, ImageStore } from '../components';
import {
  Wrapper,
  Header,
  Image,
  Logo,
  WrapperInfo,
  Title,
  Subtitle,
  Content,
  ContentText,
  MoreContentText,
  WrapperContentInfo,
  ContentImage,
  Brief,
  BriefList,
  BriefTitle,
  WorkHere,
  Icon,
  WorkHereWrapper,
  WorkHereTitle,
  WorkHereSubtitle,
  Footer,
  WrapperFooterLogo,
  FooterLogo,
  WrapperStores,
} from './styles';
import headerImage from '../image/header.png';
import logo from '../image/logo.png';
import gif from '../image/gif.gif';
import icon from '../image/icon.png';
import instagram from '../image/instagram.png';
import appleStore from '../image/app-store.png';
import googlePlay from '../image/google-play.png';

interface IProps {}

export const Home = ({}: IProps) => {
  return (
    <Wrapper>
      <Header>
        <Image url={headerImage} />

        <WrapperInfo>
          <Logo src={logo} />
          <Title>Já pensou em se tornar um churrasqueiro profissional?</Title>
          <Subtitle>
            Faça churrasco de forma profissional aumente sua renda!
          </Subtitle>

          <Button text="Baixe agora!" />
        </WrapperInfo>
      </Header>

      <Content>
        <WrapperContentInfo>
          <ContentText>Sobre o Easy Churras</ContentText>

          <MoreContentText>
            O Easy é uma plataforma de churrasco que conecta churrasqueiros
            profissionais com pessoas que gostam de churrasco e queiram seu
            churrasco. O objetivo do EasyChurras é proporcionar facilidade e
            comodidade a todas as pessoas que gostam de churrasco, porém não
            querem ter o trabalho de assar e depois limpar tudo.
          </MoreContentText>
          <Button text="Baixe agora!" />
        </WrapperContentInfo>

        <ContentImage url={gif} />
      </Content>

      <Brief>
        <BriefTitle>
          O que nossos profissionais estão falando do EasyChurras?
        </BriefTitle>

        <BriefList>
          <BriefCard />
          <BriefCard />
          <BriefCard />
          <BriefCard />
          <BriefCard />
        </BriefList>
      </Brief>

      <WorkHere>
        <Icon src={icon} />

        <WorkHereWrapper>
          <WorkHereTitle>Seja um profissional EasyChurras</WorkHereTitle>
          <WorkHereSubtitle>
            Baixe o aplicativo na Google Play ou na Apple Store!
          </WorkHereSubtitle>

          <Button text="Baixe agora!" />
        </WorkHereWrapper>
      </WorkHere>

      <Footer>
        <WrapperFooterLogo>
          <FooterLogo src={logo} />
        </WrapperFooterLogo>

        <WrapperStores>
          <ImageStore url={googlePlay} />
          <ImageStore url={appleStore} />
          <ImageStore url={instagram} />
        </WrapperStores>
      </Footer>
    </Wrapper>
  );
};
