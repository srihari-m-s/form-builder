import React from "react";
import { Card, CardContent } from "@/components/ui/card.tsx";

function FbEditingArea(): React.JSX.Element {
  return (
    <>
      <Card className={"h-full"}>
        <CardContent className={"p-6"}>
          <p>Card Content</p>
        </CardContent>
      </Card>
    </>
  );
}

export default FbEditingArea;
