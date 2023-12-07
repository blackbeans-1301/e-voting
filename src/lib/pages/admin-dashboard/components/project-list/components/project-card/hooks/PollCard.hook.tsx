import { Poll } from "@/lib/package/entities/poll.entity";
import { PopoverOrigin } from "@mui/material";

type PollCardHookProps = {
  poll: Poll;
};

export default function usePollCard({ poll }: PollCardHookProps) {
  const onButtonClicked = () => {
    console.log("Button Clicked");
  };

  return { onButtonClicked };
}
