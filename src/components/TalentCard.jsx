import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const TalentCard = ({ ImageUrl, Title }) => {
  return (
    <Card>
      <CardContent>
        <img
          src={ImageUrl}
          width={150}
          height={150}
          alt="Skills"
          title={Title}
          className="mx-auto rounded-full shadow-lg"
        />
      </CardContent>
      <CardTitle>
        <div className="grid gap-2">
          <h1 className="text-lg font-bold text-center">{Title}</h1>
        </div>
      </CardTitle>
    </Card>
  );
};

export default TalentCard;
