import { useState } from "react";
import { env } from "../../../config/env";
import { Button } from "../../ui/Button";
import { WizardStepper } from "./WizardStepper";
import { StepPersonalData } from "./StepPersonalData";
import { StepContact } from "./StepContact";
import { StepOverview } from "./StepOverview";
import { emptyFormData, type ContactFormData, type FormErrors } from "./types";
import styles from "./ContactWizard.module.css";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateStep(step: number, data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (step === 0) {
    if (!data.salutation) errors.salutation = "Please select a salutation.";
    if (!data.firstName.trim()) errors.firstName = "First name is required.";
    if (!data.lastName.trim()) errors.lastName = "Last name is required.";
    if (!data.email.trim()) errors.email = "Email is required.";
    else if (!EMAIL_RE.test(data.email)) errors.email = "Enter a valid email address.";
    if (!data.country) errors.country = "Please select your country.";
    if (!data.dialCode) errors.dialCode = "Please select a dial code.";
    if (!data.phone.trim()) errors.phone = "Phone number is required.";
    if (!data.confirmDialCode) errors.confirmDialCode = "Please confirm the dial code.";
    else if (data.confirmDialCode !== data.dialCode) errors.confirmDialCode = "Dial codes do not match.";
    if (!data.confirmPhone.trim()) errors.confirmPhone = "Please confirm your phone number.";
    else if (data.confirmPhone !== data.phone) errors.confirmPhone = "Phone numbers do not match.";
  }

  if (step === 1) {
    if (!data.contactMethod) errors.contactMethod = "Please select a preferred contact method.";
    if (!data.reason) errors.reason = "Please select a reason.";
    if (!data.message.trim()) errors.message = "Please enter a message.";
    if (!data.consent) errors.consent = "Consent is required to submit this form.";
  }

  return errors;
}

/**
 * Recreates the source site's 3-step contact wizard (Personal Data / Contact
 * / Overview). When VITE_CONTACT_API_URL is empty, submission is a local
 * demo only — the entered data is never logged, persisted, or sent
 * anywhere; only the UI status (idle/submitting/success/error) changes.
 */
export function ContactWizard() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ContactFormData>(emptyFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function updateField<K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function goNext() {
    const stepErrors = validateStep(step, data);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, 2));
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit() {
    setStatus("submitting");

    if (!env.contactApiUrl) {
      // Demo mode: never log, store, or transmit the entered data anywhere.
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      return;
    }

    try {
      const response = await fetch(env.contactApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.wrap}>
        <div className={[styles.statusMessage, styles.statusSuccess].join(" ")} role="status">
          Thank you — your message has been received. Our team will get back to you shortly.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <WizardStepper currentStep={step} />

      {status === "error" && (
        <div className={[styles.statusMessage, styles.statusError].join(" ")} role="alert">
          Something went wrong sending your message. Please try again.
        </div>
      )}

      {step === 0 && <StepPersonalData data={data} errors={errors} onChange={updateField} />}
      {step === 1 && <StepContact data={data} errors={errors} onChange={updateField} />}
      {step === 2 && <StepOverview data={data} />}

      <div className={styles.footer}>
        {step > 0 ? (
          <Button variant="secondary" onClick={goBack} disabled={status === "submitting"}>
            Back
          </Button>
        ) : (
          <span />
        )}
        <span className={styles.spacer} />
        {step < 2 ? (
          <Button variant="gold" onClick={goNext}>
            Next
          </Button>
        ) : (
          <Button variant="gold" onClick={handleSubmit} disabled={status === "submitting"}>
            {status === "submitting" ? "Sending…" : "Submit"}
          </Button>
        )}
      </div>
    </div>
  );
}