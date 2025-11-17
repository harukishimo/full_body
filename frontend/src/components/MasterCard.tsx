"use client";

import Link from "next/link";

export default function MasterCard() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">
        <h2 className="mt-3 text-xl font-semibold text-gray-900">マスタ管理</h2>

        <p className="mt-2 text-gray-600">各種マスタデータを管理します。</p>

    
        <Link href="/admin/masters">
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                詳しく見る
            </button>
        </Link>  
    </div>
  );
}
