import AppButton from "@/lib/package/global-components/AppButton";
import {
  GroupRounded,
  ReceiptRounded,
  SettingsRounded,
} from "@mui/icons-material";
import { Box, Tab, Tabs } from "@mui/material";
import BallotPaper from "./components/ballots/BallotPaper";
import GeneralSetting from "./components/general/GeneralSetting";
import EligibleVoters from "./components/voters/EligibleVoter";
import useCreatePollPage from "./hooks/CreatePollPage.hook";

export default function CreatePollPage() {
  const {
    tabIndex,
    pollName,
    pollId,
    ballotPapers,
    voters,
    votingTime,
    invitationLink,
    setBallotPapers,
    setPollName,
    setTabIndex,
    setVoters,
    setVotingTime,
    setInvitationLink,
  } = useCreatePollPage();

  const createElectionHandler = () => {
    console.log("start poll");
    console.log(pollName)
    console.log(votingTime)
    console.log(voters)
  }

  return (
    <div className="w-full h-full bg-bg-primary">
      <div className="px-4 py-4">
        <div className="font-semibold">Voting Name:</div>
        <input
          type="text"
          className="w-full h-12 outline-none bg-bg-primary font-semibold text-xl text-gray-700"
          placeholder="Unnamed Voting..."
          onChange={(event) => {
            setPollName(event.target.value);
          }}
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
            <Tab
              icon={<ReceiptRounded />}
              iconPosition="start"
              label="Ballots"
            />
            <Tab
              icon={<GroupRounded />}
              iconPosition="start"
              label="Eligible voters"
            />
          </Tabs>
        </Box>

        <div className="pt-4 w-full h-full">
          <GeneralSetting
            value={tabIndex}
            index={0}
            pollName={pollName}
            ballotPapers={[{ id: "1", name: "hello" }]}
            voters={["200@gmail.com", "test@gmail.com"]}
            votingTime={30}
            pollId={pollId}
            invitationLink={"https://google.com"}
          />
          <BallotPaper
            value={tabIndex}
            index={1}
            ballots={ballotPapers}
            setBallots={setBallotPapers}
          />
          <EligibleVoters
            value={tabIndex}
            index={2}
            voters={voters}
            setVoters={setVoters}
          />
        </div>
      </div>
      <div className="fixed flex justify-between items-center px-4 w-full h-20 border-gray-200 border-t-[1px] bottom-0">
        <div></div>
        <AppButton
          title="Start Poll"
          handler={() => {
            createElectionHandler()
          }}
        />
      </div>
    </div>
  );
}
