import styled from "styled-components";
import { FlexRowAiCenter } from "styles/Abstract/Mixins";

export const InputContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 1.8rem;
  line-height: 2.8rem;
  color: var(--color-2);
  display: block;
  margin-bottom: 1rem;

  .required {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: var(--color-18);
  }
`;

export const InputField = styled.input`
  background-color: var(--color-white);
  border: 1px solid var(--color-17);
  box-shadow: 0 1rem 2.84984rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  width: 100%;
  padding: 1.5rem 2rem;
  font-family: inherit;

  &:active,
  &:focus {
    border: 1px solid var(--color-17);
    outline: none;
  }
`;

export const TextareaField = styled.textarea`
  background-color: var(--color-white);
  border: 1px solid var(--color-17);
  box-shadow: 0 1rem 2.84984rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  width: 100%;
  padding: 1.5rem 2rem;
  font-family: inherit;
  resize: none;

  &:active,
  &:focus {
    border: 1px solid var(--color-17);
    outline: none;
  }
`;

export const SelectField = styled.select`
  background-color: var(--color-white);
  border: 1px solid var(--color-17);
  box-shadow: 0 1rem 2.84984rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  width: 100%;
  padding: 1.5rem 2rem;
  font-family: inherit;
  resize: none;

  &:active,
  &:focus {
    border: 1px solid var(--color-17);
    outline: none;
  }
`;

export const CustomeFileField = styled.div`
  position: relative;

  .custom-input-container {
    ${FlexRowAiCenter};
    gap: 1.5rem;
  }

  .custom-btn {
    background-color: var(--color-white);
    border: 1px solid var(--color-19);
    box-shadow: 0 1rem 2.84984rem rgba(0, 0, 0, 0.07);
    border-radius: 1rem;
    padding: 1.4rem 2.1rem;
    font-family: inherit;
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.8rem;
    color: var(--color-2);

    &:active,
    &:focus {
      border: 1px solid var(--color-19);
      outline: none;
    }
  }

  .file-name {
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--color-black);
  }

  .file-input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 11.4rem;
  }

  .bottom-label {
    display: block;

    font-weight: 400;
    font-size: 1.6rem;
    line-height: 160%;
    color: var(--color-16);
    margin-top: 1.2rem;
  }
`;

export const RadioField = styled.div`
  .radio-input {
    input[type="radio"] {
      display: none;
    }

    &:nth-child(:last-child) {
      margin-bottom: 2rem;
    }

    .check {
      ${FlexRowAiCenter};
      position: relative;
      cursor: pointer;
      border: 3px solid var(--color-16);
      display: grid;
      place-items: center;
      flex-shrink: 0;
      width: 1.8rem;
      height: 1.8rem;
      border-radius: 50%;

      &::before {
        position: absolute;
        content: "";
        flex-shrink: 0;
        width: 01rem;
        height: 1rem;
        border-radius: 50%;
        background-color: transparent;
        transition: 0.3s;
        transition-timing-function: ease-in;
      }

      &__label {
        padding-left: 2rem;
        margin-top: -0.1rem;
        user-select: none;
        font-weight: 400;
        font-size: 16px;
        color: var(--color-16);
      }
    }

    input[type="radio"]:checked + .check::before {
      background-color: var(--color-16);
    }
  }
`;
