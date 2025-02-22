import { Mail, Phone } from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center pt-4 px-14 flex-nowrap">
      <div className="flex gap-4 text-xs">
        <p className="flex gap-2 items-center">
          <Mail className="size-4" />
          info@successhcgroup.com.au
        </p>
        <p className="border border-red-900">{" "}</p>
        <p className="flex gap-2 items-center">
          <Phone  className="size-4"/>
          5678907890
        </p>
      </div>

      <div className="flex gap-2 text-xs">
        <p className="bg-[#0055C2] p-2 text-white rounded-t-lg">Vacancies</p>
        <p className="bg-[#ed1352] p-2 text-white rounded-t-lg">Make an Enquiry</p>
      </div>
    </div>
  );
};

export default Topbar;
