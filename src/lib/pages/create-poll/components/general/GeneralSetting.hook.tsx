import { Ballot } from "@/lib/package/entities/poll.entity";
import { useEffect, useState } from "react";
type GeneralSettingHookProps = {
  pollName: string;
  ballotPapers: Ballot[];
  voters: string[];
  votingTime: number;
  pollId: string;
  invitationLink: string;
};

export default function useGeneralSetting(props: GeneralSettingHookProps) {
  const { pollName, ballotPapers, voters, votingTime, pollId, invitationLink } =
    props;

  const [tableContentParams, setTableContentParams] = useState([
    { id: "pollName", title: "Poll Name", value: pollName, afterFix: "" },
    {
      id: "ballotPapers",
      title: "Ballots Paper",
      value: ballotPapers,
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
  }, [pollName, ballotPapers, voters, votingTime, pollId, invitationLink]);

  return { tableContentParams };
}
