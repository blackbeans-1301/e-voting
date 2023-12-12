import { Poll } from "@/lib/package/entities/poll.entity";
import { useEffect, useState } from "react";
import VoterPollCard from "./components/voter-poll-card/VoterPollCard";

export default function VoterPollList() {
  const [polls, setPolls] = useState<Poll[]>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getElections()
  }, [])

  const getElections = async () => {
    try {
      setLoading(true)
      const res = await fetch('/api/election', {
        method: "GET",
      })
      .then((res) => res.json())
      .then((res) => {
        console.log(res); 
        setPolls(res)
        setLoading(false)
      });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
    {loading ? 
      <p>Loadin...</p> :
      <div>
        <div className="w-full h-full">
          <div className="flex flex-wrap mx-4 mt-6">
            {polls && polls.map((poll: any) => {
              return <VoterPollCard poll={poll} key={poll.id} />;
            })}
          </div>
        </div>
      </div>
    }
    </>
  );
}
