"use client";

import { setPriority } from "os";
import { useState } from "react";

export default function VendorForm() {
  const [name, setName] = useState("");
  const [profile, setProfile] = useState("");
  const [links_json, setLinksJson] = useState(""); 
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // ページリロード防止

    const res = await fetch(`${API_BASE_URL}/api/v1/vendors`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, profile, links_json}),
    });

    if (!res.ok) {
      alert("保存に失敗しました");
      return;
    }

    const json = await res.json();
    console.log("保存成功:", json);
    setName("");
    setLinksJson("");
    setProfile("")
    alert("保存しました！");
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">
      <h2 className="mt-3 text-xl font-semibold text-gray-900">出店者マスタ追加</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">

        <input
          type="string"
          name="name"
          className="border p-2 rounded w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="出店者名を入力"
        />

        <input
          type="text"
          name="profile"
          className="border p-2 rounded w-full"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
          placeholder="出店者説明を入力"
        />

        <input
          type="strign"
          name="links_json"
          className="border p-2 rounded w-full"
          value={links_json}
          onChange={(e) => setLinksJson(e.target.value)}
          placeholder="URLを入力"
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
