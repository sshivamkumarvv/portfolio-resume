"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { SimpleResumeView } from "@/components/SimpleResumeView";

export default function ResumePage() {
  const router = useRouter();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SimpleResumeView
        onSwitchToPortfolio={() => {
          router.push("/");
        }}
        onPrint={handlePrint}
      />
    </div>
  );
}
