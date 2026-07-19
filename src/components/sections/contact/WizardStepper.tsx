import { Fragment } from "react";
import { wizardSteps } from "../../../data/contactContent";
import styles from "./ContactWizard.module.css";

interface WizardStepperProps {
  currentStep: number;
}

export function WizardStepper({ currentStep }: WizardStepperProps) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-3)" }}>
        {wizardSteps.map((label, i) => (
          <span
            key={label}
            className={[styles.stepperLabel, i === currentStep ? styles.stepperLabelActive : ""].filter(Boolean).join(" ")}
          >
            {i + 1}. {label}
          </span>
        ))}
      </div>
      <div className={styles.stepper} role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={3}>
        {wizardSteps.map((label, i) => (
          <Fragment key={label}>
            <span
              className={[styles.stepperDot, i <= currentStep ? styles.stepperDotActive : ""].filter(Boolean).join(" ")}
            />
            {i < wizardSteps.length - 1 && <span className={styles.stepperLine} />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}