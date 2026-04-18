"use client";

import { useEffect, useState } from "react";

export function LiveClock({ timeZone = "Asia/Kolkata" }: { timeZone?: string }) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      const formatter = new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      setTime(formatter.format(new Date()));
    };
    update();
    const id = setInterval(update, 15_000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <span className="font-mono tabular-nums">
      IST · {time || "—"}
    </span>
  );
}
