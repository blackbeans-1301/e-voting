export interface Poll {
  id: string;
  name: string;
  candidates: Candidate[];
  voters: string[];
  status: "open" | "closed";
  endTime: Date;
  createdAt: Date;
  startDate?: Date;
  endDate?: Date;
  isActived?: boolean;
}

export interface Candidate {
  id: string;
  name: string;
}

export interface CandidateWithResult extends Candidate {
  numberOfVotes: number;
}
