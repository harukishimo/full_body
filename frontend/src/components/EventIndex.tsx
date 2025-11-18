"use client";
import { useEffect, useState } from "react";

export default function EventIndex() {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const res = await fetch(`${API_BASE_URL}/api/v1/events`,{
    cache: "no-store"
  })
  const events = await res.json();


  return (
    <>
        <ul>
            {(events ?? []).map((e: any) => (
                <li key={e.id}>{e.name}</li>
            ))}
        </ul>
    </>

  );
}
