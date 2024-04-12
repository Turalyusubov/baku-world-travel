import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/add-hotel";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Otel yaratmaq || Baku World Travel",
  description: "Baku World Travel",
};

export default function VendorAddHotel() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
