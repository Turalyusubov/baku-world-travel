import React from "react";
import DashboardPage from "../../../../components/dashboard/vendor-dashboard/dashboard";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Admin || Baku World Travel",
  description: "Baku World Travel",
};

export default function VendorDashboard() {
  return (
    <>
      <MetaComponent meta={metadata} />
      <DashboardPage />
    </>
  );
}
