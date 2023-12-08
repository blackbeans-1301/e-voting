import { shortId } from "@/lib/common/helper";
import { Ballot } from "@/lib/package/entities/poll.entity";
import { useState } from "react";

export default function useCreatePollPage() {
  const [tabIndex, setTabIndex] = useState(0);
  const [pollId, setPollId] = useState<string>(shortId());
  const [pollName, setPollName] = useState("");
  const [ballotPapers, setBallotPapers] = useState<Ballot[]>([
    {
      id: shortId(),
      name: "",
    },
  ]);
  const [voters, setVoters] = useState<string[]>([""]);
  const [votingTime, setVotingTime] = useState(30);
  const [invitationLink, setInvitationLink] = useState("https://google.com");

  return {
    tabIndex,
    pollName,
    pollId,
    ballotPapers,
    voters,
    votingTime,
    invitationLink,
    setBallotPapers,
    setPollName,
    setTabIndex,
    setVoters,
    setVotingTime,
    setInvitationLink,
  };
}
