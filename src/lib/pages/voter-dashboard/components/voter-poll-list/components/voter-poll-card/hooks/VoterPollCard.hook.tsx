import { Poll } from "@/lib/package/entities/poll.entity";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type PollCardHookProps = {
  poll: Poll;
};

export default function useVoterPollCard({ poll }: PollCardHookProps) {
  const router = useRouter();
  const onButtonClicked = () => {
    console.log("Button Clicked");
    if(poll && poll.isVoted === true && poll.isActived === true) {
      toast.error("Bạn đã vote cho cuộc bầu cử này")
    }
    else router.push(`voting/${poll.id}`)
  };

  return { onButtonClicked };
}
