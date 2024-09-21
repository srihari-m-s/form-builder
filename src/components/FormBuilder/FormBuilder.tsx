import React from "react";
import FbSidebar from "@/components/FormBuilder/FbSidebar.tsx";
import FbEditingArea from "@/components/FormBuilder/FbEditingArea.tsx";

function FormBuilder(): React.JSX.Element {
  return (
    <div className={"grid grid-cols-12 gap-6 min-h-dvh py-8"}>
      <div className="col-span-3 3xl:col-span-2">
        <FbSidebar />
      </div>

      <div className="col-span-9 3xl:col-span-10">
        <FbEditingArea />
      </div>
    </div>
  );
}

export default FormBuilder;
