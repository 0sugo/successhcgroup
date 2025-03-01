import {
  Accessibility,
  HandHeart,
  MoveUpRight,
  Scale,
  UserCheck,
  Users,
} from "lucide-react";
import React from "react";

const Values = () => {
  return (
    <div className="p-4 max-w-[80%] mx-auto space-y-8">
      <h2 className="text-center text-3xl font-semibold">Our Values</h2>

      <div className="flex justify-between font-bold">
        <div className="flex flex-col items-center">
          <Scale size={120} className="text-primary" />
          <h3>Fairness</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <HandHeart size={120} className="text-primary" />
          <h3>Hope</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Accessibility size={120} className="text-primary" />
          <h3>Courage</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <UserCheck size={120} className="text-primary" />
          <h3>Integrity</h3>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Users size={120} className="text-primary" />
          <h3>Perseverance</h3>
        </div>
      </div>
    </div>
  );
};

export default Values;
