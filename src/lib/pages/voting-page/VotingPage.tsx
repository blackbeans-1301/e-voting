import ViewPollResult from "./components/view-result/ViewPollResult";
import UserVote from "./components/vote/UserVote";

type VotingPageProps = {
  pollId: string;
};

export default function VotingPage(props: VotingPageProps) {
  const pollData = {
    id: "1",
    name: "poll 1",
    ballots: [
      { id: "1-1", name: "Huy Le" },
      { id: "1-2", name: "Do Lap" },
      { id: "1-3", name: "Lam Vu" },
      { id: "1-4", name: "Hoang Duong" },
      { id: "1-5", name: "Duc Tran" },
    ],
    voters: [
      "20020202@vnu.edu.vn",
      "20020198@vnu.edu.vn",
      "example@gmail.com",
      "only.fans@gmail.com",
      "voter@gmail.com",
    ],
    status: "closed",
    startTime: new Date(),
    endTime: new Date(),
    createdAt: new Date(),
  };

  return (
    <div className="w-full h-full">
      <div className="w-full h-full pt-4">
        <div className="w-full text-3xl font-semibold text-gray-700 text-center pb-4">
          {pollData.name}
        </div>

        {pollData.status === "open" && (
          <UserVote pollId={pollData.id} ballots={pollData.ballots} />
        )}
        {pollData.status === "closed" && (
          <ViewPollResult pollId={pollData.id} pollName={pollData.name} />
        )}
        {pollData.status === "ready" && (
          <div className="w-full h-full">
            <div className="w-full text-xl text-center text-red-700">
              This poll is currently not Open!
            </div>
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
}
