import React, { useState } from "react";
import { Builder, FormBuilderProvider } from "@/hooks/FormBuilderContext.tsx";
import FormBuilder from "@/components/FormBuilder/FormBuilder.tsx";

function FormBuilderWrapper(): React.JSX.Element {
  const [builder, setBuilder] = useState<Builder | null>(null);

  return (
    <>
      <FormBuilderProvider value={{ builder, setBuilder }}>
        <FormBuilder />
      </FormBuilderProvider>
    </>
  );
}

export default FormBuilderWrapper;
