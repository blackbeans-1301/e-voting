export interface Poll {
  id: string;
  name: string;
  ballots: Ballot[];
  voters: string[];
  status: "ready" | "open" | "closed";
  startTime: Date;
  endTime: Date;
  createdAt: Date;
  startDate?: Date;
  endDate?: Date;
  isActived?: boolean;
}

export interface Ballot {
  id: string;
  name: string;
}

export interface BallotWithResult extends Ballot {
  numberOfVotes: number;
}
