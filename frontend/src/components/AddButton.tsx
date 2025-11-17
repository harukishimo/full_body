"use client";
import Link from "next/link";

export default function AddButton() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">
        <h2 className="mt-3 text-xl font-semibold text-gray-900">コンテンツマスタ追加</h2>


        <Link href="/admin/masters/events/new">
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                追加
            </button>
        </Link>
    </div>
  );
}
