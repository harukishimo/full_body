"use client";

import { useEffect, useState } from "react";

export default function ApiTestPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/health")
      .then(r => r.json())
      .then(json => setData(json))
      .catch(err => console.error("API error:", err));
  }, []);

  return (
    <div>
      <h1>API Test Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
