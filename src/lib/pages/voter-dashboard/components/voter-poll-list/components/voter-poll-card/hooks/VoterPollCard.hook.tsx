import { Poll } from "@/lib/package/entities/poll.entity";

type PollCardHookProps = {
  poll: Poll;
};

export default function useVoterPollCard({ poll }: PollCardHookProps) {
  const onButtonClicked = () => {
    console.log("Button Clicked");
  };

  return { onButtonClicked };
}
