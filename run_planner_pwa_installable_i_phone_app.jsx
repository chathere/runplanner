// Simple Run Planner PWA (Next.js compatible but works standalone with minor tweaks)
// You can deploy this on Vercel and open in Chrome/Safari → Add to Home Screen

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

// Add this as public/manifest.json
/*
{
  "name": "Run Planner",
  "short_name": "Run",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000"
}
*/

// Add this in public/index.html <head>
/*
<link rel="manifest" href="/manifest.json" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
*/

// INSTALL STEPS
// 1. Go to vercel.com
// 2. Import this project (or upload manually)
// 3. Deploy
// 4. Open link in Chrome or Safari on iPhone
// 5. Tap Share → Add to Home Screen
