import styled, { css } from "styled-components";
import { useMultiStepForm } from "./useMultiStepForm";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;
`;

const ContainerRelative = styled.div`
  position: relative;
  border-radius: 4px;
  background-color: #d6e09e;
  margin: 30px;
  height: 400px;
`;

const ContainerAbsolute = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10%;
  width: 10%;
`;

const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
`;

function App() {
  const {
    currentStepIndex,
    formSteps,
    step,
    goForwardStep,
    goBackStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([<div>one</div>, <div>two</div>, <div>three</div>]);

  return (
    <ContainerRelative>
      <form action="">
        <ContainerAbsolute>
          {currentStepIndex + 1} ____ {formSteps.length}
        </ContainerAbsolute>
        {step}
        <Container>
          {!isFirstStep && (
            <Button type="button" onClick={() => goBackStep()}>
              Back
            </Button>
          )}

          <Button type="button" onClick={() => goForwardStep()}>
            {isLastStep ? "Submit" : "Next"}
          </Button>
        </Container>
      </form>
    </ContainerRelative>
  );
}

export default App;
