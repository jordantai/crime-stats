import styled from 'styled-components';
import policeImg from './img/lego-police.png';
import DatePicker from 'react-datepicker';

export const MainWrapper = styled.div`
  background-image: url(${policeImg});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-attachment: fixed;
  background-size: 40%;
  width: 100%;
  min-height: 48rem;
  margin: 0 auto;
  font-family: 'Josefin Sans', sans-serif;
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  font-family: 'Permanent Marker', cursive;
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1.5rem;
  text-align: center;
`;

export const NavButton = styled.button`
  width: 95%;
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: 4px solid #494949 !important;
  display: inline-block;
  transition: all 0.4s ease 0s;
  &:hover {
    color: #ffffff !important;
    background: #374f6b;
    border-color: #374f6b !important;
    transition: all 0.4s ease 0s;
  }
  &:active,
  &:focus {
    color: #ffffff !important;
    background: #5e88b8;
    border-color: #5e88b8 !important;
    outline-color: #5e88b8;
  }

  @media (min-width: 481px) {
    width: auto;
    margin: 0.5rem;
  }
  @media (min-width: 769px) {
    width: auto;
    margin: 0.5rem;
  }
  @media (min-width: 1025px) {
    width: auto;
    margin: 0.5rem;
  }
`;

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 481px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  @media (min-width: 1025px) {
    justify-content: center;
  }
  @media (min-width: 1201px) {
    justify-content: center;
    flex-wrap: nowrap;
  }
`;

export const DatePickerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

export const DateSelector = styled(DatePicker)`
  width: 80%;
  justify-content: center;
  border: 4px solid #5e88b8 !important;
  text-align: center;
  font-size: 1.3rem;
  padding: 0.5rem;
  @media (min-width: 768px) {
    padding: 0.5rem;
  }
`;

export const DateText = styled.h3`
  justify-content: center;
  text-align: center;
  padding: 0 0.5rem 0 0.5rem;
  @media (min-width: 769px) {
    padding: 0.5rem;
  }
`;

export const DateSubText = styled.p`
  justify-content: center;
  text-align: center;
`;

export const ChartsContainer = styled.section`
  margin-top: 2rem;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0 0.5rem 0 0.5rem;
`;

export const HomeContainer = styled.div`
  margin: 0 1.5rem 0 1.5rem;
  padding: 0 1.5rem 1.5rem;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
`;
