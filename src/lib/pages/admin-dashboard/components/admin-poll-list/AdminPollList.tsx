import { POLL_MOCK } from "../../common/dashboard.constant";
import AdminPollCard from "./components/admin-poll-card/AdminPollCard";

export default function AdminPollList() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-wrap mx-4 mt-6">
        {POLL_MOCK.map((poll) => {
          return <AdminPollCard poll={poll} key={poll.id} />;
        })}
      </div>
    </div>
  );
}
