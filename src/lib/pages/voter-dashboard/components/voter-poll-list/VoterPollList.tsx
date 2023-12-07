import { POLL_MOCK } from "../../common/dashboard.constant";
import VoterPollCard from "./components/voter-poll-card/VoterPollCard";

export default function VoterPollList() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap mx-4 mt-6">
        {POLL_MOCK.map((poll) => {
          return <VoterPollCard poll={poll} key={poll.id} />;
        })}
      </div>
    </div>
  );
}
