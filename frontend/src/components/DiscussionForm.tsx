"use client";

import { useState } from "react";

export default function DiscussionForm() {
  const [name, setName] = useState("");
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // ページリロード防止

    const res = await fetch(`${API_BASE_URL}/api/v1/discussions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name}),
    });

    if (!res.ok) {
      alert("保存に失敗しました");
      return;
    }

    const json = await res.json();
    console.log("保存成功:", json);
    setName("");
    alert("保存しました！");
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">
      <h2 className="mt-3 text-xl font-semibold text-gray-900">ディスカッションマスタ追加</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">

        <input
          type="text"
          name="name"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ディスカッション名を入力"
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
