import { POLL_MOCK } from "../../common/dashboard.constant";
import PollCard from "./components/project-card/PollCard";

export default function PollList() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap mx-4 mt-6">
        {POLL_MOCK.map((poll) => {
          return <PollCard poll={poll} key={poll.id} />;
        })}
      </div>
    </div>
  );
}
