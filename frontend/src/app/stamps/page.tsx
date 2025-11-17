"use client";

import { useEffect, useState } from "react";

export default function ApiTestPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/get_stamps")
      .then(r => r.json())
      .then(json => setData(json))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">

        <h2 className="mt-3 text-xl font-semibold text-gray-900">
            イベント情報
        </h2>

        <p className="mt-2 text-gray-600">
            小海町の自然を体験できるイベントです！
        </p>

        <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            詳しく見る
        </button>
    </div>

  );
}
