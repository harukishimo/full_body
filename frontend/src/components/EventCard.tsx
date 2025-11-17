"use client";

export default function EventCard() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">
      <h2 className="mt-3 text-xl font-semibold text-gray-900">イベント管理</h2>

      <p className="mt-2 text-gray-600">イベントデータを管理します。</p>

      <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        詳しく見る
      </button>
    </div>
  );
}
