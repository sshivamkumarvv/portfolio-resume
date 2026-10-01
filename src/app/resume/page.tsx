"use client";

import React from "react";
import Link from "next/link";
import { SimpleResumeView } from "@/components/SimpleResumeView";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SimpleResumeView
        onSwitchToPortfolio={() => {
          window.location.href = "/";
        }}
        onPrint={handlePrint}
      />
    </div>
  );
}
