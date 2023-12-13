import { Poll } from "@/lib/package/entities/poll.entity";
import { useRouter } from "next/navigation";

type PollCardHookProps = {
  poll: Poll;
};

export default function useVoterPollCard({ poll }: PollCardHookProps) {
  const router = useRouter();
  const onButtonClicked = () => {
    console.log("Button Clicked");
    router.push(`voting/${poll.id}`)
  };

  return { onButtonClicked };
}
