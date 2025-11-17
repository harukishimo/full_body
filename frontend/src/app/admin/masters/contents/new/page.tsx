"use client";
import Link from "next/link";

export default function AddButton() {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow p-4">
        <h2 className="mt-3 text-xl font-semibold text-gray-900">マスタ追加</h2>
        <form>
            <input type="text" name="name" />
        </form>


    </div>
  );
}
