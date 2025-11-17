"use client";

import { useEffect, useState } from "react";
import MasterCard from "@/components/MasterCard";
import EventCard from "@/components/EventCard";

export default function ApiTestPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/get_stamps")
      .then(r => r.json())
      .then(json => setData(json))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <>
        <MasterCard />
        <EventCard />
    </>

  );
}
