"use client";

import InputDateTime from "@/components/InputDate";
import { useState } from "react";

export default function EventForm() {
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null); 

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // ページリロード防止

    const res = await fetch("http://localhost:3001/api/v1/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (!res.ok) {
      alert("保存に失敗しました");
      return;
    }

    const json = await res.json();
    console.log("保存成功:", json);
    alert("保存しました！");
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">
      <h2 className="mt-3 text-xl font-semibold text-gray-900">マスタ追加</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">

        <input
          type="text"
          name="name"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="イベント名を入力"
        />
        
        <InputDateTime
            name="start_date"
            value={selectedDate}
            onChange={setSelectedDate}
            placeholder="開始日時を入力"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          保存
        </button>
      </form>
    </div>
  );
}
