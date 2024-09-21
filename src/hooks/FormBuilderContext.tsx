import { createContext, Dispatch, ReactNode, SetStateAction } from "react";
import { FieldType } from "@/const/formBuilder.ts";

export type Field = {
  id: string;
  fieldName: string;
  fieldType: FieldType;
  required: boolean;
};

export type Builder = {
  layout: string;
  fields: Array<Field>;
};

interface IFormBuilderContext {
  builder: Builder | null;
  setBuilder: Dispatch<SetStateAction<Builder | null>>;
}

export const FormBuilderContext = createContext<
  IFormBuilderContext | undefined
>(undefined);

interface IFormBuilderProviderProps {
  children: ReactNode;
  value: IFormBuilderContext;
}

export const FormBuilderProvider = ({
  children,
  value,
}: IFormBuilderProviderProps) => {
  return (
    <FormBuilderContext.Provider value={value}>
      {children}
    </FormBuilderContext.Provider>
  );
};
