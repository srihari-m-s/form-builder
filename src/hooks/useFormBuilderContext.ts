import { useContext } from "react";
import { FormBuilderContext } from "./FormBuilderContext";

export const useFormBuilderContext = () => {
  const context = useContext(FormBuilderContext);
  if (!context) {
    throw new Error(
      "useFormBuilderContext must be used within a FormBuilderProvider",
    );
  }
  return context;
};
