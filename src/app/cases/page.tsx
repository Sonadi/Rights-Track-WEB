// src/app/cases/page.tsx
"use client";
import { useEffect, useState } from "react";

interface Case {
  id: number;
  title: string;
  description: string;
  status: string;
}

export default function CasesPage() {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    fetch("/api/cases")
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Human Rights Violation Cases</h1>
      <div className="grid gap-4">
        {cases.map((c) => (
          <div
            key={c.id}
            className="p-4 border rounded-lg shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{c.title}</h2>
            <p className="mt-2 text-gray-700">{c.description}</p>
            <span className="text-sm text-gray-500">Status: {c.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
