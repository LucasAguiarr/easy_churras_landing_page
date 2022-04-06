import styled from 'styled-components';
import { colors } from '../Global/colors';

interface IBackgroundImageStyle {
  url?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background_secondary};
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100vh;
  background-color: ${colors.background_secondary};

  max-width: 1200px;

  margin: 0 auto;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Image = styled.div<IBackgroundImageStyle>`
  width: 50vw;
  height: 100vh;

  background-image: url(${({ url }) => url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;

  @media (max-width: 800px) {
    position: absolute;
    left: -30px;
  }

  @media (max-width: 600px) {
    left: -100px;
    width: 70vw;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
  background-size: contain;
`;

export const WrapperInfo = styled.div`
  flex: 1;
  max-width: 300px;

  @media (max-width: 800px) {
    padding-top: 50%;
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-family: 'OpenSans';
  font-size: 30px;

  margin: 20px 0;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
  font-family: 'OpenSans';
  font-size: 24px;

  margin-bottom: 70px;
`;

export const Content = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${colors.background_primary};

  justify-content: center;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const WrapperContentInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 30%;

  justify-content: space-between;

  margin-left: 30%;
  @media (max-width: 1200px) {
    margin-left: 20px;
  }

  @media (max-width: 800px) {
    align-items: center;
    justify-content: center;
    margin-left: 0;
  }
`;

export const ContentText = styled.h2`
  font-weight: 700;
  font-family: 'OpenSans';
  font-size: 30px;
`;

export const MoreContentText = styled.h3`
  font-weight: 400;
  font-family: 'OpenSans';
  font-size: 18px;

  @media (max-width: 800px) {
    text-align: center;
    margin: 20px 0;
    padding-right: 0;
    padding: 0 100px;
  }

  @media (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const ContentImage = styled.div<IBackgroundImageStyle>`
  flex: 1;
  height: 100vh;

  background-image: url(${({ url }) => url});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top right;

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    background-size: cover;

    background-position: 0;
  }
`;

export const Brief = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.background_primary};

  padding-top: 40px;

  @media (max-width: 800px) {
    padding-top: 20px;
  }
`;

export const BriefList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: scroll;
  padding-left: 20%;

  scrollbar-width: auto;
  scrollbar-color: blue orange;

  @media (max-width: 600px) {
    padding-left: 10px;
  }
`;

export const BriefTitle = styled.h2`
  font-weight: 700;
  font-family: 'OpenSans';
  font-size: 30px;

  align-self: center;
  margin-bottom: 85px;
  text-align: center;

  @media (max-width: 800px) {
    margin: 0 10% 30px 10%;
  }

  @media (max-width: 600px) {
    margin: 0 20px 30px 20px;
  }
`;

export const WorkHere = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${colors.background_primary};
  padding: 115px 0;
`;

export const Icon = styled.img`
  width: auto;
  height: 100px;
  background-size: cover;

  margin-right: 100px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const WorkHereWrapper = styled.div`
  height: 100%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0 20%;
  }

  @media (max-width: 600px) {
    margin: 0 20px;
  }
`;

export const WorkHereTitle = styled.p`
  font-weight: 700;
  font-family: 'OpenSans';
  font-size: 30px;

  margin-bottom: 20px;
`;

export const WorkHereSubtitle = styled.p`
  font-weight: 400;
  font-family: 'OpenSans';
  font-size: 20px;
  margin-bottom: 40px;
`;

export const Footer = styled.div`
  display: flex;
  flex: 1;

  background-color: ${colors.background_secondary};

  border: 1px solid ${colors.line};
  padding: 10px;
`;

export const WrapperFooterLogo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterLogo = styled.img`
  width: 200px;
  height: auto;
`;

export const WrapperStores = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
