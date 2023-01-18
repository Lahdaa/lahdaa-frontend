import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(Min(32rem, 100%), 1fr));
  grid-gap: 2.1rem;

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const LoaderCard = styled.div`
  --color: #f5f5f5;
  padding-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
  flex-basis: 29rem;
  flex-shrink: 0;
  background-color: var(--color-white);
  border: 1px solid var(--color);

  .body {
    padding: 20px;
    padding-bottom: 0;
  }
`;
