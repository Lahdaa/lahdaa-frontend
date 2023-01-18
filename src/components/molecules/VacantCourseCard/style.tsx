import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--color-white);
  border-radius: 1.6rem;
  padding: 3rem 2.2rem;
  flex-shrink: 0;
  flex-basis: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;

  .icon-bg {
    fill: transparent;
    transition: 0.4s;
  }
  .icon-arrow {
    fill: var(--color-20);
    transition: 0.4s;
  }
  .icon {
    align-self: flex-end;
    cursor: pointer;

    &:hover {
      .icon-bg {
        fill: var(--color-primary);
      }
      .icon-arrow {
        fill: var(--color-white);
      }
    }
  }
`;
