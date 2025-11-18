"use client";

import { setPriority } from "os";
import { useState } from "react";

export default function QuizForm() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState("");
  const [default_points, setDefaultPoints] = useState(1); 
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // ページリロード防止

    const res = await fetch(`${API_BASE_URL}/api/v1/quizzes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question, options, default_points}),
    });

    if (!res.ok) {
      alert("保存に失敗しました");
      return;
    }

    const json = await res.json();
    console.log("保存成功:", json);
    setQuestion("");
    setOptions("");
    setDefaultPoints("")
    alert("保存しました！");
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">
      <h2 className="mt-3 text-xl font-semibold text-gray-900">クイズマスタ追加</h2>

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">

        <input
          type="string"
          name="question"
          className="border p-2 rounded w-full"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="クイズ名を入力"
        />

        <input
          type="text"
          name="options"
          className="border p-2 rounded w-full"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
          placeholder="オプションを入力"
        />

        <input
          type="number"
          name="default_points"
          className="border p-2 rounded w-full"
          value={default_points}
          onChange={(e) => setDefaultPoints(Number(e.target.value))}
          placeholder="ポイントを入力"
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
