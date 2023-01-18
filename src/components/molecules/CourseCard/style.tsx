import styled from "styled-components";
import { FlexRow } from "styles/Abstract/Mixins";

export const Wrapper = styled.div`
  background-color: var(--color-white);
  border-radius: 1rem;
  overflow: hidden;
  /* max-width: 28rem; */
  flex-basis: 29rem;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  .top {
    height: 23.5rem;
    position: relative;
  }

  .image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .price {
    display: inline-block;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0.7rem 1.3rem rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8px);
    border-radius: 0.6rem;
    font-weight: 600;
    color: var(--color-10);
    font-size: 1.5rem;
  }

  .bottom {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }
`;

export const Instructor = styled.div`
  ${FlexRow};
  gap: 1rem;
  margin-top: 2rem;

  .image {
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 50%;
    border: 1px solid var(--color-8);
    flex-shrink: 0;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      border-radius: 50%
    }
  }
`;
