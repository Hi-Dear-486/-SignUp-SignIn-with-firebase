import { Control } from "react-hook-form";

export enum FormFieldType {
  INPUT = "input",
  PASSWORD = "password",
  SELECT = "select",
  CHECKBOX = "checkbox",
  SKELETON = "skeleton",
}

export interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label: string;
  placeholder?: string;
  iconSrc?: any;
  renderSkeleton?: (field: any) => React.ReactNode;
  children?: React.ReactNode;
}
