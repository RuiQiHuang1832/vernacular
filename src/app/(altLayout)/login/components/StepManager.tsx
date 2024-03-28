import StepEmail from "./StepEmail";
import StepName from "./StepName";
import StepPassword from "./StepPassword";

export default function StepManager() {
  const components = [
    {
      title: `What's your phone number or email?`,
      component: <StepEmail />,
    },
    {
      title: ``,
      component: <StepPassword />,
    },
    {
      title: ``,
      component: <StepName />,
    },
    // Add more steps as needed
  ];

  return (
    <div className="d-flex justify-content-center">
      <div style={{maxWidth:'360px'}}>
        <h4 className="fw-light">{components[0].title}</h4>
        {components[0].component}
      </div>
    </div>
  );
}
