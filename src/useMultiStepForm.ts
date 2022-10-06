import { ReactElement, useState } from "react";
// this hook is going to get an array of all the react hooks

export function useMultiStepForm(formSteps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goBackStep = () => {};

  const goForwardStep = () => {};

  const goToStep = (stepIndex: number) => {};

  return {
    //this hook:
    //receives an array of form-steps components
    // and returns the current step index and the component at that step
    currentStepIndex,
    step: formSteps[currentStepIndex],
  };
}
