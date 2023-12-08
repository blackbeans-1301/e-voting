import { shortId } from "@/lib/common/helper";
import { Ballot } from "@/lib/package/entities/poll.entity";

type BallotPaperHookProps = {
  ballots: Ballot[];
  setBallots: React.Dispatch<React.SetStateAction<Ballot[]>>;
};

export default function useBallotPaper(props: BallotPaperHookProps) {
  const { ballots, setBallots } = props;

  const addBallot = () => {
    setBallots([...ballots, { id: shortId(), name: "" }]);
  };

  const handleInputChange = (index: number, value: string) => {
    const newBallots = ballots;
    newBallots[index].name = value;

    setBallots([...newBallots]);
  };

  return { addBallot, handleInputChange };
}
