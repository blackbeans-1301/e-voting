import AppButton from "@/lib/package/global-components/AppButton";
import AdminPollList from "./components/admin-poll-list/AdminPollList";

export default function AdminDashboardPage() {
  return (
    <div className="w-full h-full">
      <div className="mx-8 text-center font-semibold text-xl text-gray-800 py-3 flex justify-between">
        <div>
          <AppButton title="Create Poll" handler={() => {}} />
        </div>
        <div>Welcome to LVHUY</div>
        <div></div>
      </div>

      <AdminPollList />
    </div>
  );
}
