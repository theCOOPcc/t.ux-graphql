import styled, { css } from 'styled-components'
// import {Link} from 'react-router-dom'

/*---------- Main Grid ----------*/
export const Main = styled.main`
  background: linear-gradient(
      210.65deg,
      rgba(255, 238, 153, 0.32) 17.3%,
      rgba(122, 218, 222, 0.32) 87.56%
    ),
    linear-gradient(
      19.08deg,
      rgba(234, 74, 70, 0.32) -33.26%,
      rgba(234, 74, 70, 0) 67.74%
    );
  background-blend-mode: normal, multiply;
  margin: 0 auto;
  max-width: 1440px;
`

export const TuxFlower = styled.img`
  width: 140px;
  z-index: 10;
  position: absolute;
  top: 100px;
  border-radius: 50%;

  ${(props) =>
    props.center &&
    css`
      left: 100px;
    `}
  ${(props) =>
    props.invite &&
    css`
      top: 160px;
    `}
`

export const LoginBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 425px;
    height: 510px;
    background-color: var(--true-white);
    box-shadow: var(--common-shadow);
    border-radius: 10px;
    margin-top: 200px;
    /* clip-path: circle(25% at 50% 0); */

    ${(props) =>
      props.wide &&
      css`
        width: 785px;
        height: 625px;
      `}

    ${(props) =>
      props.flexStart &&
      css`
        justify-content: flex-start;
      `}
    
    ${(props) =>
      props.signup &&
      css`
        position: absolute;
        top: 150px;
      `}

    ${(props) =>
      props.general &&
      css`
        margin-top: 120px;
      `}
    ${(props) =>
      props.invite &&
      css`
        width: 515px;
        height: 585px;
        margin-top: 120px;
      `}
`

export const GoogleG = styled.img`
  width: 35px;
  height: 35px;
  margin: 20px;
`

export const GoogleBox = styled.a`
  width: 343px;
  height: 80px;
  border-radius: 5px;
  background: linear-gradient(360deg, #f9f9f9 0%, rgba(255, 255, 255, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  box-shadow: var(--common-shadow);
  text-decoration: none;
`

export const SignIn = styled.p`
  font: 700 20px 'Roboto', sans-serif;
  /* line-height: 23.44px; */
  color: rgba(0, 0, 0, 0.54);
  margin-top: 15px;
`

export const LoginBtn = styled.button`
  border: none;
  width: 343px;
  padding: 12px 0;
  margin: 17px 8px;
  border-radius: 5px;
  font: var(--pop-bolder);
  line-height: 27px;
  color: var(--true-white);
  background-color: var(--enable-btn);
  cursor: pointer;
  &:hover {
    background: #236c69;
  }

  &:active {
    box-shadow: var(--btn-active-shadow);
  }
  ${(props) =>
    props.disabled &&
    css`
      background-color: var(--primary-disabled-btn-color);
      border: var(--input-border);

      &:hover {
        background-color: var(--primary-disabled-btn-color);
      }
    `}
`
