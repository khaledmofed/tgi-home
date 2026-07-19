import { salutationOptions } from "../../../data/contactContent";
import { countries } from "../../../data/countries";
import { SelectField, TextField } from "./FormField";
import type { ContactFormData, FormErrors } from "./types";
import styles from "./ContactWizard.module.css";

interface StepPersonalDataProps {
  data: ContactFormData;
  errors: FormErrors;
  onChange: <K extends keyof ContactFormData>(key: K, value: ContactFormData[K]) => void;
}

const countryOptions = countries.map((c) => ({ value: c.iso2, label: c.name }));
const dialCodeOptions = Array.from(new Set(countries.map((c) => c.dialCode))).map((code) => ({
  value: code,
  label: code,
}));

export function StepPersonalData({ data, errors, onChange }: StepPersonalDataProps) {
  return (
    <div className={styles.formGrid}>
      <SelectField
        label="Salutation"
        required
        options={salutationOptions.map((s) => ({ value: s, label: s }))}
        value={data.salutation}
        error={errors.salutation}
        onChange={(e) => onChange("salutation", e.target.value)}
      />
      <TextField label="Title" value={data.title} onChange={(e) => onChange("title", e.target.value)} />
      <TextField
        label="First Name"
        required
        value={data.firstName}
        error={errors.firstName}
        onChange={(e) => onChange("firstName", e.target.value)}
      />
      <TextField
        label="Last Name"
        required
        value={data.lastName}
        error={errors.lastName}
        onChange={(e) => onChange("lastName", e.target.value)}
      />
      <TextField
        label="E-Mail"
        type="email"
        required
        value={data.email}
        error={errors.email}
        onChange={(e) => onChange("email", e.target.value)}
      />
      <SelectField
        label="Country"
        required
        options={countryOptions}
        value={data.country}
        error={errors.country}
        onChange={(e) => onChange("country", e.target.value)}
      />
      <SelectField
        label="Dial Code"
        required
        options={dialCodeOptions}
        value={data.dialCode}
        error={errors.dialCode}
        onChange={(e) => onChange("dialCode", e.target.value)}
      />
      <TextField
        label="Phone Number"
        type="tel"
        required
        value={data.phone}
        error={errors.phone}
        onChange={(e) => onChange("phone", e.target.value)}
      />
      <SelectField
        label="Confirm Dial Code"
        required
        options={dialCodeOptions}
        value={data.confirmDialCode}
        error={errors.confirmDialCode}
        onChange={(e) => onChange("confirmDialCode", e.target.value)}
      />
      <TextField
        label="Confirm Phone Number"
        type="tel"
        required
        value={data.confirmPhone}
        error={errors.confirmPhone}
        onChange={(e) => onChange("confirmPhone", e.target.value)}
      />
    </div>
  );
}