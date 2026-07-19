export interface ContactFormData {
  salutation: string;
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  dialCode: string;
  phone: string;
  confirmDialCode: string;
  confirmPhone: string;
  contactMethod: string;
  reason: string;
  message: string;
  consent: boolean;
}

export const emptyFormData: ContactFormData = {
  salutation: "",
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  country: "",
  dialCode: "",
  phone: "",
  confirmDialCode: "",
  confirmPhone: "",
  contactMethod: "",
  reason: "",
  message: "",
  consent: false,
};

export type FormErrors = Partial<Record<keyof ContactFormData, string>>;