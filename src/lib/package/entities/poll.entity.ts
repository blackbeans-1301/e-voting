export interface Poll {
  id: string;
  name: string;
  ballots: Ballot[];
  voters: string[];
  status: "ready" | "open" | "closed";
  startTime: Date;
  endTime: Date;
  createdAt: Date;
}

export interface Ballot {
  id: string;
  name: string;
}
