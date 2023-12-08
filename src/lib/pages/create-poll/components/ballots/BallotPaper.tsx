import { Ballot } from "@/lib/package/entities/poll.entity";
import React from "react";
import useBallotPaper from "./BallotPaper.hook";

type BallotPaperProps = {
  value: number;
  index: number;
  ballots: Ballot[];
  setBallots: React.Dispatch<React.SetStateAction<Ballot[]>>;
};

export default function BallotPaper(props: BallotPaperProps) {
  const { value, index, ballots, setBallots } = props;
  const { handleInputChange, addBallot } = useBallotPaper({
    ballots,
    setBallots,
  });

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <div className="w-full h-full">
          <div className="w-full h-full">
            <div className="container mx-auto mt-8">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2">Ballots</th>
                  </tr>
                </thead>
                <tbody>
                  {ballots.map((value, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          placeholder="Ballot Name"
                          value={value.name}
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
                          className="w-full border p-2 rounded-md"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <button
                onClick={addBallot}
                className="mt-4 p-2 bg-blue-500 text-white rounded-md"
              >
                Add Ballot
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
