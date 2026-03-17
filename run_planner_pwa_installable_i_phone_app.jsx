
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      // MOCK DATA (replace with real APIs later)
      const todayPlan = {
        workout: "Speed Run",
        distance: "~5 miles",
      };

      const bestTime = "7:05 AM";

      const reason = "After minyan, good weather, no conflicts";

      setData({ ...todayPlan, bestTime, reason });
    }

    load();
  }, []);

  if (!data) return <div style={{ padding: 20 }}>Loading...</div>;

  return (
    <div style={{ fontFamily: "system-ui", padding: 20 }}>
      <h1>Run Planner</h1>

      <h2>Today's Workout</h2>
      <p>{data.workout}</p>
      <p>{data.distance}</p>

      <h2>Best Time</h2>
      <p>{data.bestTime}</p>

      <h3>Why</h3>
      <p>{data.reason}</p>

      <button
        onClick={() => (window.location.href = "nikerunclub://")}
        style={{
          padding: 12,
          marginTop: 20,
          fontSize: 16,
          borderRadius: 10,
        }}
      >
        Start in Nike Run Club
      </button>
    </div>
  );
}
