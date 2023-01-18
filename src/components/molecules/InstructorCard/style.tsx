import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--color-white);
  box-shadow: 0 1.5rem 3.85691rem -3px rgba(0, 0, 0, 0.05);
  border-radius: 2.5rem;
  flex-basis: 36rem;
  overflow: hidden;
  .instructor-img {
    object-fit: cover;
    width: 100%;
    height: 31.8rem;
  }
  .instructor-details {
    padding: 1.8rem;
  }
  .instructor-link {
    text-decoration: none;
  }
`;
