import { FormEvent, useState } from "react";
import styled, { css } from "styled-components";
import { useMultiStepForm } from "./useMultiStepForm";
import { UserAccount } from "./userAccount";
import { UserAddress } from "./userAddress";
import { UserForm } from "./userForm";

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

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  address: string;
  city: string;
  country: string;
  email: string;
  password: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  address: "",
  city: "",
  country: "",
  email: "",
  password: "",
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const {
    currentStepIndex,
    formSteps,
    step,
    goForwardStep,
    goBackStep,
    isFirstStep,
    isLastStep,
  } = useMultiStepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <UserAddress {...data} updateFields={updateFields} />,
    <UserAccount {...data} updateFields={updateFields} />,
  ]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) {
      goForwardStep();
    } else {
      console.log("submited!");
      alert("Form Submitted");
    }
  };

  return (
    <ContainerRelative>
      <form onSubmit={onSubmit}>
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

          <Button type="submit">{isLastStep ? "Submit" : "Next"}</Button>
        </Container>
      </form>
    </ContainerRelative>
  );
}

export default App;
