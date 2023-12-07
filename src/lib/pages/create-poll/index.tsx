import {
  GroupRounded,
  ReceiptRounded,
  SettingsRounded,
} from "@mui/icons-material";
import { Box, Tab, Tabs } from "@mui/material";
import GeneralSetting from "./components/general/GeneralSetting";
import useCreatePollPage from "./hooks/CreatePollPage.hook";

export default function CreatePollPage() {
  const { tabIndex, setTabIndex } = useCreatePollPage();

  return (
    <div className="w-full h-full pt-4 px-4 bg-bg-primary">
      <div className="font-semibold">Voting Name:</div>
      <input
        type="text"
        className="w-full h-12 outline-none bg-bg-primary font-semibold text-xl text-primary-600"
        placeholder="Unnamed Voting..."
      />

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabIndex}
          onChange={(event, newValue) => {
            setTabIndex(newValue);
          }}
          aria-label="basic tabs example"
        >
          <Tab
            icon={<SettingsRounded />}
            iconPosition="start"
            label="General"
          />
          <Tab icon={<ReceiptRounded />} iconPosition="start" label="Ballots" />
          <Tab
            icon={<GroupRounded />}
            iconPosition="start"
            label="Eligible voters"
          />
        </Tabs>
      </Box>
      <GeneralSetting value={tabIndex} index={0} />
    </div>
  );
}
