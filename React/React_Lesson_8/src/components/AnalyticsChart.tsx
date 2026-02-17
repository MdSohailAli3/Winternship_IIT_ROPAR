import { useMemo } from "react";

type Props = { data: { value: number }[] };

export default function AnalyticsChart({ data }: Props) {
  console.log("Rendering AnalyticsChart");

  const analytics = useMemo(() => {
    return data.reduce((sum, d) => sum + d.value, 0);
  }, [data]);

  return <div className="card">Analytics Total: {analytics.toFixed(2)}</div>;
}
