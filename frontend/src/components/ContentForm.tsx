"use client";

import { useState } from "react";

export default function ContentForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(""); 
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // ページリロード防止

    const res = await fetch(`${API_BASE_URL}/api/v1/contents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description }),
    });

    if (!res.ok) {
      alert("保存に失敗しました");
      return;
    }

    const json = await res.json();
    console.log("保存成功:", json);
    setName("");
    setDescription("")
    alert("保存しました！");
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">
      <h2 className="mt-3 text-xl font-semibold text-gray-900">コンテンツマスタ追加</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">

        <input
          type="text"
          name="name"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="コンテンツ名を入力"
        />

        <input
          type="text"
          name="description"
          className="border p-2 rounded w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="説明を入力"
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
