import { contactMethodOptions, reasonOptions } from "../../../data/contactContent";
import { SelectField, TextAreaField } from "./FormField";
import type { ContactFormData, FormErrors } from "./types";
import styles from "./ContactWizard.module.css";
import fieldStyles from "./FormField.module.css";

interface StepContactProps {
  data: ContactFormData;
  errors: FormErrors;
  onChange: <K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) => void;
}

export function StepContact({ data, errors, onChange }: StepContactProps) {
  return (
    <div>
      <div className={styles.formGrid}>
        <SelectField
          label="Preferred Contact Method"
          required
          options={contactMethodOptions.map((o) => ({ value: o, label: o }))}
          value={data.contactMethod}
          error={errors.contactMethod}
          onChange={(e) => onChange("contactMethod", e.target.value)}
        />
        <SelectField
          label="Reason"
          required
          options={reasonOptions.map((o) => ({ value: o, label: o }))}
          value={data.reason}
          error={errors.reason}
          onChange={(e) => onChange("reason", e.target.value)}
        />
      </div>

      <div style={{ marginTop: "var(--space-5)" }}>
        <TextAreaField
          label="Message"
          required
          placeholder="Your Message"
          value={data.message}
          error={errors.message}
          onChange={(value) => onChange("message", value)}
        />
      </div>

      <label className={fieldStyles.checkboxRow} style={{ marginTop: "var(--space-5)" }}>
        <input
          type="checkbox"
          checked={data.consent}
          onChange={(e) => onChange("consent", e.target.checked)}
          aria-invalid={Boolean(errors.consent)}
        />
        <span className={fieldStyles.checkboxLabel}>
          I consent to my data being processed to respond to my inquiry, as described in the{" "}
          <a href="/privacy-policy" style={{ color: "var(--color-gold)" }}>
            Privacy Policy
          </a>
          . *
        </span>
      </label>
      {errors.consent && (
        <span className={fieldStyles.error} role="alert" style={{ display: "block", marginTop: "var(--space-2)" }}>
          {errors.consent}
        </span>
      )}
    </div>
  );
}