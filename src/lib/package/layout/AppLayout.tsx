import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout(props: AppLayoutProps) {
  const { children } = props;
  return (
    <div className="w-full h-full">
      {/* header */}
      <div className="w-full h-16 bg-primary-600 flex justify-between items-center px-2">
        <div></div>

        {/* header center */}
        <div className="">
          <div className="align-middle text-center text-white font-bold text-3xl">
            LVHUY
          </div>
        </div>

        <div>
          <AccountCircleIcon sx={{ color: "white", fontSize: 38 }} />
        </div>
      </div>
      {children}
    </div>
  );
}
