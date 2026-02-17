import React, { useEffect, useRef } from "react";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale
);

export default function ProductChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels: ["Shoes", "Phones", "Watches"],
        datasets: [
          {
            label: "Sales",
            data: [120, 90, 60]
          }
        ]
      }
    });
  }, []);

  return <canvas ref={canvasRef} />;
}
