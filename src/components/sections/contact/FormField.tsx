import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";
import { useId } from "react";
import { ChevronDown } from "lucide-react";
import styles from "./FormField.module.css";

interface FieldShellProps {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: ReactNode;
}

function FieldShell({ label, required, error, htmlFor, children }: FieldShellProps) {
  return (
    <div className={styles.field}>
      <label htmlFor={htmlFor} className={styles.label}>
        {label}
        {required && (
          <span className={styles.required} aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <span className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "id"> {
  label: string;
  required?: boolean;
  error?: string;
}

export function TextField({ label, required, error, ...inputProps }: TextFieldProps) {
  const id = useId();
  return (
    <FieldShell label={label} required={required} error={error} htmlFor={id}>
      <input
        id={id}
        className={[styles.control, error ? styles.controlInvalid : ""].filter(Boolean).join(" ")}
        aria-invalid={Boolean(error)}
        aria-required={required}
        {...inputProps}
      />
    </FieldShell>
  );
}

interface SelectFieldProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "id"> {
  label: string;
  required?: boolean;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function SelectField({ label, required, error, options, placeholder = "Please select", ...selectProps }: SelectFieldProps) {
  const id = useId();
  return (
    <FieldShell label={label} required={required} error={error} htmlFor={id}>
      <div className={styles.selectWrap}>
        <select
          id={id}
          className={[styles.control, error ? styles.controlInvalid : ""].filter(Boolean).join(" ")}
          aria-invalid={Boolean(error)}
          aria-required={required}
          {...selectProps}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown size={16} className={styles.selectChevron} aria-hidden="true" />
      </div>
    </FieldShell>
  );
}

interface TextAreaFieldProps {
  label: string;
  required?: boolean;
  error?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function TextAreaField({ label, required, error, value, onChange, placeholder }: TextAreaFieldProps) {
  const id = useId();
  return (
    <FieldShell label={label} required={required} error={error} htmlFor={id}>
      <textarea
        id={id}
        rows={5}
        className={[styles.control, error ? styles.controlInvalid : ""].filter(Boolean).join(" ")}
        aria-invalid={Boolean(error)}
        aria-required={required}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </FieldShell>
  );
}