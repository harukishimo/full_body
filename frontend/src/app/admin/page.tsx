"use client";

import { useEffect, useState } from "react";
import EventForm from "@/components/EventForm";
import ContentForm from "@/components/ContentForm";
import VendorForm from "@/components/VendorForm";
import DiscussionForm from "@/components/DiscussionForm";
import QuizForm from "@/components/QuizForm";

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
        <ContentForm />
        <EventForm />
        <VendorForm />
        <DiscussionForm />
        <QuizForm />
    </>

  );
}
