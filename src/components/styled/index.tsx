import styled from 'styled-components';
import policeImg from './img/lego-police.png';

export const MainWrapper = styled.div`
  background-image: url(${policeImg});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-attachment: fixed;
  background-size: 40%;
  width: 100%;
  min-height: 90rem;
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
  color: #494949 !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #ffffff;
  padding: 1rem;
  margin: 0 0.5rem 0.5rem 0.5rem;
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
`;

// export const NavLink = styled(Link)`
//   color: #494949 !important;
//   text-transform: uppercase;
//   text-decoration: none;
//   background: #ffffff;
//   padding: 20px;
//   border: 4px solid #494949 !important;
//   display: inline-block;
//   transition: all 0.4s ease 0s;
//   &:hover {
//     color: #ffffff !important;
//     background: #f6b93b;
//     border-color: #f6b93b !important;
//     transition: all 0.4s ease 0s;
//   }
// `;
