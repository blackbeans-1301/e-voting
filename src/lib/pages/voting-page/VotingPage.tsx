import { BallotInfo } from "@/lib/package/entities/poll.entity";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ViewPollResult from "./components/view-result/ViewPollResult";
import UserVote from "./components/vote/UserVote";

type VotingPageProps = {
  pollId: string;
};

export default function VotingPage(props: VotingPageProps) {
  const [loading, setLoading] = useState(false);
  const [ pollInfo, setPollInfo] = useState<BallotInfo>();
  const router = useRouter();

  useEffect(() => {
    getPollInfo()
  }, [])

  const getPollInfo = async () => {
    try {
      setLoading(true);
      const voter = localStorage.getItem("voter");
      if (!voter) router.push("/login");
      else {
        await fetch(`/api/election-info/${props.pollId}`)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setPollInfo(res);
            setLoading(false);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading ? <p>Loading...</p> :
        <div className="w-full h-full">
          <div className="w-full h-full pt-4">
            <div className="w-full text-3xl font-semibold text-gray-700 text-center pb-4">
              {pollInfo ? pollInfo.election.name : ""}
            </div>
            {(pollInfo && pollInfo.election.isActived === true && pollInfo.election.isVoted === true) && (
              <p>Bạn đã vote cho cuộc bầu cử này!</p>
            )}
            {(pollInfo && pollInfo.election.isActived === true) && (
              <UserVote pollId={pollInfo.election.id} ballots={pollInfo.candidates} />
            )}
            {(pollInfo && pollInfo.election.isActived === false) && (
              <ViewPollResult pollId={pollInfo.election.id} pollName={pollInfo.election.name} />
            )}
          </div>
        </div>
      }
    </>
  );
}
