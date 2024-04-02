'use client'
import StepEmail from "./StepEmail";
import StepName from "./StepName";
import StepPassword from "./StepPassword";
 import { useState } from "react";

export default function StepManager() {
   const [currentComponent, setCurrentComponent] = useState<number>(1);
   const [password, setPassword] = useState<string>("");

  const handleContinue = () => {
    setCurrentComponent((prev) => prev + 1)
  }
  const handleBack = () => {
    setCurrentComponent((prev) => prev - 1)
  }

  const components = [
    {
      title: `What's your phone number or email?`,
      component: <StepEmail handleContinue={handleContinue} />,
    },
    {
      title: `Create your account password`,
      component: <StepPassword setPassword={setPassword} password={password} handleContinue={handleContinue} handleBack={handleBack} />,
    },
    {
      title: `What's your name?`,
      component: <StepName handleBack={handleBack} />,
    },
  
  ];

  return (
    <div className="d-flex justify-content-center">
      <div style={{width:'360px'}}>
        <h4 className="mb-3">{components[currentComponent - 1].title}</h4>
        {components[currentComponent - 1].component}
      </div>
    </div>
  );
}
