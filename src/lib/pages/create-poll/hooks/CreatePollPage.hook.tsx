import { shortId } from "@/lib/common/helper";
import { Candidate } from "@/lib/package/entities/poll.entity";
import { useState } from "react";

export default function useCreatePollPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const [pollId, setPollId] = useState<string>(shortId());
  const [pollName, setPollName] = useState("");
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [voters, setVoters] = useState<string[]>([]);
  const [votingTime, setVotingTime] = useState(30);
  const [invitationLink, setInvitationLink] = useState("https://google.com");

  return {
    tabIndex,
    pollName,
    pollId,
    candidates,
    voters,
    votingTime,
    invitationLink,
    setCandidates,
    setPollName,
    setTabIndex,
    setVoters,
    setVotingTime,
    setInvitationLink,
  };
}
