import { BallotWithResult, Poll } from "@/lib/package/entities/poll.entity";
import { BarChart } from "@mui/x-charts";
import useViewPollResult from "./hooks/ViewPollResult.hook";

type ViewPollResultProps = {
  poll: Poll;
};

export default function ViewPollResult(props: ViewPollResultProps) {
  const { poll } = props;
  const pollResultData: BallotWithResult[] = [
    {
      id: "1",
      name: "Ballot 1",
      numberOfVotes: 13,
    },
    {
      id: "2",
      name: "Ballot 2",
      numberOfVotes: 20,
    },
    {
      id: "3",
      name: "Ballot 3",
      numberOfVotes: 37,
    },
    {
      id: "4",
      name: "Ballot 4",
      numberOfVotes: 27,
    },
    {
      id: "5",
      name: "Ballot 5",
      numberOfVotes: 30,
    },

    {
      id: "2",
      name: "Ballot 6",
      numberOfVotes: 20,
    },
    {
      id: "3",
      name: "Ballot 7",
      numberOfVotes: 35,
    },
    {
      id: "4",
      name: "Ballot 8",
      numberOfVotes: 22,
    },
    {
      id: "5",
      name: "Ballot 9",
      numberOfVotes: 33,
    },
  ];

  const { chartData } = useViewPollResult(pollResultData);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full px-24">
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: pollResultData.map((ballot) => {
                return ballot.name;
              }),
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: pollResultData.map((ballot) => {
                return ballot.numberOfVotes;
              }),
            },
          ]}
          height={700}
        />
        <div className="text-center text-2xl">{poll.name} votes result</div>
      </div>
    </div>
  );
}
