import { ReactElement, useState } from "react";

export function useMultiStepForm(formSteps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goForwardStep = () => {
    setCurrentStepIndex((i) => {
      if (i >= formSteps.length - 1) return i;
      return i + 1;
    });
  };

  const goBackStep = () => {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  //setter for our current step index
  const goToStep = (stepIndex: number) => {
    setCurrentStepIndex(stepIndex);
  };

  return {
    //this hook:
    //receives an array of form-steps components
    // and returns the current step index and the component at that step, with few functionalities like going back a step, forward and going to a specific step

    currentStepIndex,
    step: formSteps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === formSteps.length - 1,
    formSteps,
    goForwardStep,
    goBackStep,
    goToStep,
  };
}
