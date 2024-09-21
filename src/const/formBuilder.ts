export const HTML_INPUT_TYPES = {
  button: "button",
  checkbox: "checkbox",
  color: "color",
  date: "date",
  datetimeLocal: "datetime-local",
  email: "email",
  file: "file",
  hidden: "hidden",
  image: "image",
  month: "month",
  number: "number",
  password: "password",
  radio: "radio",
  range: "range",
  reset: "reset",
  search: "search",
  submit: "submit",
  tel: "tel",
  text: "text",
  time: "time",
  url: "url",
  week: "week",
} as const;

export type HTMLInputTypes = keyof typeof HTML_INPUT_TYPES;

export const FIELD_TYPES = {
  date: "date",
  datetimeLocal: "datetime-local",
  email: "email",
  file: "file",
  image: "image",
  month: "month",
  number: "number",
  password: "password",
  range: "range",
  tel: "tel",
  text: "text",
  time: "time",
  url: "url",
  week: "week",
  select: "select",
} as const;

export type AllFieldTypes = keyof typeof FIELD_TYPES;

// Base Field type without 'select'
export type BaseField = {
  fieldName: string;
  fieldType: Exclude<AllFieldTypes, "select">; // Excludes 'select'
  required: boolean;
};

// Special case for 'select' fieldType
export type SelectField = {
  fieldName: string;
  fieldType: "select"; // Specifically 'select'
  required: boolean;
  choices: Record<string, string>; // Adds 'choices' only for 'select'
};

// Union of both types
export type FieldType = BaseField | SelectField;
