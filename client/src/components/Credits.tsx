import { useEffect, useState } from "react";
import { MarketingPlan } from "../types";

const Credits = ({ planHistory }: { planHistory: MarketingPlan[] }) => {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const empty = planHistory?.length > 3;
    if (empty) setCredits(0);
    else {
      const result = 200 - planHistory?.length * 50;
      setCredits(result);
    }
  }, [planHistory]);

  return (
    <p className="font-medium text-base text-slate-500 px-0.5">
      Credits: {credits} 💸
    </p>
  );
};

export default Credits;
