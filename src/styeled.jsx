import styled, { css } from "styled-components";

const Container = styled.div`
  margin: 0 auto;
  max-width: 756px;
  padding: 0 10px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  ${(props) =>
    props.mode &&
    css`
      background-color: #000000;
    `}
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 58px 0;
  hr {
    height: 32px;
  }
  .modeSite {
    display: flex;
    align-items: center;
    gap: 26px;
  }
  .toChange {
    display: flex;
    gap: 20px;
    align-items: center;
  }
`;

const DropDawn = styled.div`
  cursor: pointer;
  text-transform: capitalize;
  position: relative;
  p {
    display: flex;
    gap: 18px;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
  }
  .fonts {
    width: 183px;
    right: 0;
    top: 32px;
    padding: 24px;
    background: #ffffff;
    box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    position: absolute;
    z-index: 5;
    display: none;
    transition: all 0.5s;
    div:not(:last-child) {
      margin-bottom: 16px;
    }
    div:hover {
      color: #a445ed;
    }
    ${(props) =>
      props.mode &&
      css`
        background: #1f1f1f;
        box-shadow: 0px 5px 30px #a445ed;
        .fonts {
          div {
            color: white;
          }
        }
      `}
  }
  ${(props) => {
    if (props.show) {
      return css`
        .fonts {
          opacity: 1;
          display: block;
        }
      `;
    } else if (!props.show) {
      return css`
        .fonts {
          opacity: 0;
          display: none;
        }
      `;
    }
  }}
`;

const FormStyled = styled.form`
  background: #f4f4f4;
  margin-bottom: 45px;
  position: relative;
  border-radius: 16px;
  ${(props) =>
    props.mode &&
    css`
      background: #1f1f1f;
    `};
  button {
    position: absolute;
    top: 24px;
    cursor: pointer;
    border: none;
    right: 25px;
    background: inherit;
  }
  span {
    color: red;
    position: absolute;
  }
`;

const InputStyled = styled.input`
  display: block;
  padding: 20px 24px;
  border-radius: 16px;
  width: 100%;
  background: inherit;
  border: none;
  color: black;
  font-size: 20px;
  line-height: 24px;
  caret-color: #a445ed;
  border: 1px solid #f4f4f4;
  outline: 1px solid #f4f4f4;
  &:hover {
    border: 1px solid #f4f4f4;
    outline: 1px solid #f4f4f4;
  }
  ${(props) =>
    props.mode &&
    css`
      color: #ffffff;
      border: 1px solid #2d2d2d;
      outline: 1px solid #2d2d2d;
      &:hover {
        border: 1px solid #2d2d2d;
        outline: 1px solid #2d2d2d;
      }
    `}
  &:focus {
    border: 1px solid #a445ed;
    outline: 1px solid #a445ed;
  }
  ${(props) =>
    props.errorStle &&
    css`
      &:focus {
        border: 1px solid red;
        outline: 1px solid red;
      }
    `};
`;

const SingleWordStyled = styled.div`
  .source {
    display: flex;
    gap: 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */
    padding-bottom: 50px;
    text-decoration-line: underline;

    /* 757575 */
    margin-top: 19px;
    color: #757575;
  }
`;

const NameStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 77px;
    margin-bottom: 8px;
  }
  .img {
    cursor: pointer;
    background: rgba(164, 69, 237, 0.26);
    mix-blend-mode: normal;
    border-radius: 50%;
    display: flex;
    align-items: center;
    padding-left: 29px;
    width: 75px;
    height: 75px;

    div {
      clip-path: polygon(100% 50%, 0 0, 0 100%);
      background: #a445ed;
      width: 21px;
      height: 21px;
    }
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    color: #a445ed;
  }
  ${(props) =>
    props.durationsOfSong &&
    css`
      .img {
        background-color: #a445ed;
        div {
          background-color: white;
        }
      }
    `}
`;

const Mode = styled.div`
  width: 40px;
  cursor: pointer;
  background: #757575;
  border-radius: 10px;
  height: 20px;
  padding: 3px;
  div {
    width: 14px;
    height: 14px;
    background: #ffffff;
    border-radius: 50%;
    transition: all 0.5s;
  }
  transition: all 0.5s;
  ${(props) =>
    props.mode &&
    css`
      background-color: #a445ed;
      div {
        transform: translateX(20px);
      }
    `}
`;

const NounStyled = styled.div`
  margin-top: 40px;
  .synonyms {
    display: flex;
    gap: 22px;
    margin-top: 64px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    span {
      color: #a445ed;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .noun {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 40px;
  }
  h1 {
    font-style: italic;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }
  .line {
    width: 100%;
    height: 1px;
    background: #e9e9e9;
    /* border: 1px solid; */
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #757575;
    margin-bottom: 25px;
  }
  ul {
    padding: 0 18px;
  }
  li {
    display: flex;
    flex-direction: column;
    color: #a445ed;
    span {
      color: #2d2d2d;
    }
  }

  li:not(:last-child) {
    margin-bottom: 13px;
  }
  .example {
    font-size: 18px;
    line-height: 24px;
    /* identical to box height, or 133% */

    /* 757575 */

    color: #757575;
  }
  ${(props) =>
    props.durationsOfSong &&
    css`
      img {
      }
    `}
`;

const NotFount = styled.div`
  div {
    font-size: 44px;
  }
  text-align: center;
  h1 {
    margin-top: 44px;
    margin-bottom: 24px;
  }
`;

export {
  Container,
  NavContainer,
  DropDawn,
  Mode,
  FormStyled,
  SingleWordStyled,
  NameStyled,
  NounStyled,
  InputStyled,
  NotFount,
};
