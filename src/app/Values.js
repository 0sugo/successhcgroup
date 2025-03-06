import {
    Accessibility,
    HandHeart,
    Scale,
    UserCheck,
    Users,
  } from "lucide-react";
  import React from "react";
  
  const Values = () => {
    const valuesList = [
      { icon: Scale, label: "Fairness" },
      { icon: HandHeart, label: "Hope" },
      { icon: Accessibility, label: "Courage" },
      { icon: UserCheck, label: "Integrity" },
      { icon: Users, label: "Perseverance" },
    ];
  
    return (
      <div className="p-4 max-w-5xl mx-auto space-y-8">
        <h2 className="text-center text-3xl md:text-4xl font-semibold">
          Our Values
        </h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-items-center">
          {valuesList.map((value, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <value.icon size={80} className="text-primary" />
              <h3 className="text-lg font-semibold text-center">{value.label}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Values;
  