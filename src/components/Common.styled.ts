import { css } from "styled-components";

interface IProps {
  error?: boolean;
}

export const commonStyles = css<IProps>`
  font-family: inherit;
  overflow-wrap: break-word;

  &.my-0 {
    margin-top: 0;
    margin-bottom: 0;
  }

  &.mt-0 {
    margin-top: 0;
  }

  &.mb-0 {
    margin-bottom: 0;
  }

  & .MuiInputBase-root {
    background: white;
    /* border: 1px solid ${(props) => (props.error ? "red" : "#e5e5e5")}; */
    box-sizing: border-box;
    /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px; */

    &:hover {
      background: #fff;
    }

    &.Mui-focused {
      border: 1px solid white;
      background: #fff;
    }
  }

  & label {
    font-family: inherit;

    & .required-icon {
      color: red;
    }

    &.Mui-focused {
      color: grey;
    }
    &.Mui-error {
      color: red;
    }
  }

  & input {
    font-family: inherit;
    color: grey;
  }

  & .MuiFilledInput-underline::before,
  & .MuiFilledInput-underline::after,
  & .MuiFilledInput-underline:hover::before,
  & .MuiFilledInput-underline:hover::after,
  & .MuiFilledInput-underline.Mui-error:after {
    border: 1px solid transparent;
  }

  & .MuiFormHelperText-root {
    &.Mui-error {
      color: red;
    }
  }

  &.hide-label {
    & .MuiInputBase-input {
      padding-top: 1.2rem;
      padding-bottom: 1.2rem;
    }
  }

  &.text-right {
    & .MuiInputBase-input {
      text-align: right;
    }
  }

  &.text-lower {
    & .MuiInputBase-input {
      text-transform: lowercase;
    }
  }

  &.text-capitalize {
    & .MuiInputBase-input {
      text-transform: capitalize;
    }
  }
`;
