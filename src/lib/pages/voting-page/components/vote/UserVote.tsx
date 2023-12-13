import { Candidate } from "@/lib/package/entities/poll.entity";
import AppButton from "@/lib/package/global-components/AppButton";
import { toast } from "react-toastify";
import BallotItem from "./components/ballot-item/BallotItem";
import useUserVote from "./hooks/UserVote.hook";

type UserVoteProps = {
  pollId: string;
  ballots: Candidate[];
};

export default function UserVote(props: UserVoteProps) {
  const { pollId, ballots } = props;
  const { selectedBallot, setSelectedBallot } = useUserVote();

  return (
    <div className="w-full h-full">
      <div className="px-8">
        {ballots.map((ballot) => {
          return (
            <BallotItem
              key={ballot.id}
              ballot={ballot}
              isSelected={
                selectedBallot ? selectedBallot.id === ballot.id : false
              }
              onClick={() => {
                setSelectedBallot(ballot);
              }}
            />
          );
        })}
      </div>

      <div className="fixed flex justify-between items-center w-full h-20 border-gray-200 border-t-[1px] bottom-0 px-8">
        <div>
          <div className="">
            Selected:{" "}
            <span className="text-xl text-gray-700 font-semibold">
              {selectedBallot ? selectedBallot.name : ""}
            </span>
          </div>
        </div>
        <AppButton
          title="Submit"
          handler={() => {
            console.log("submit");
            toast.success("Submit successfully!");
          }}
        />
      </div>
    </div>
  );
}
