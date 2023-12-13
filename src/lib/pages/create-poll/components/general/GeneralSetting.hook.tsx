import { Candidate } from "@/lib/package/entities/poll.entity";
import { useEffect, useState } from "react";
type GeneralSettingHookProps = {
  pollName: string;
  candidates: Candidate[];
  voters: string[];
  votingTime: number;
  pollId: string;
  invitationLink: string;
};

export default function useGeneralSetting(props: GeneralSettingHookProps) {
  const { pollName, candidates, voters, votingTime, pollId, invitationLink } =
    props;

  const [tableContentParams, setTableContentParams] = useState([
    { id: "pollName", title: "Poll Name", value: pollName, afterFix: "" },
    {
      id: "candidates",
      title: "Number of Candidates",
      value: candidates,
      afterFix: "",
    },
    { id: "voters", title: "Voters", value: voters, afterFix: "" },
    {
      id: "votingTime",
      title: "Voting Time",
      value: votingTime,
      afterFix: "minutes",
    },
    { id: "pollId", title: "Poll ID", value: pollId, afterFix: "" },
    {
      id: "invitationLink",
      title: "Invitation Link",
      value: invitationLink,
      afterFix: "",
    },
  ]);

  useEffect(() => {
    const newTableContent: any = [];

    Object.entries(props).forEach(([key, value]) => {
      if (key === "value" || key === "index") return;

      newTableContent.push({
        id: tableContentParams.find((item) => item.id === key)!.id,
        title: tableContentParams.find((item) => item.id === key)!.title,
        value: value,
        afterFix: tableContentParams.find((item) => item.id === key)!.afterFix,
      });
    });

    setTableContentParams(newTableContent);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pollName, candidates, voters, votingTime, pollId, invitationLink]);

  return { tableContentParams };
}
