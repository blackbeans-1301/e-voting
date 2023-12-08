import { Ballot } from "@/lib/package/entities/poll.entity";
import { useState } from "react";

export default function useUserVote() {
  const [selectedBallot, setSelectedBallot] = useState<Ballot | null>(null);

  return { selectedBallot, setSelectedBallot };
}
