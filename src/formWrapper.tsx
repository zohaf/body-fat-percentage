import type { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  gap: 1rem 0.5rem;
  grid-template-columns: auto, minmax(auto, 400px);
  justify-content: flex-start;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 2rem;
`;

type formWrapperProps = {
  title: string;
  children: ReactNode;
};
export default function FormWrapper({ title, children }: formWrapperProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  );
}
