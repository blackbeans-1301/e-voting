import React from "react";
import useEligibleVoter from "./EligibleVoter.hook";

type BallotPaperProps = {
  value: number;
  index: number;
  voters: string[];
  setVoters: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function BallotPaper(props: BallotPaperProps) {
  const { value, index, voters, setVoters } = props;
  const { handleInputChange, addBallot } = useEligibleVoter({
    voters,
    setVoters,
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
                    <th className="border px-4 py-2">Eligible Votes</th>
                  </tr>
                </thead>
                <tbody>
                  {voters.map((value, index) => (
                    <tr key={index}>
                      <td className="border px-4 py-2">
                        <input
                          type="text"
                          placeholder="Voter's Email"
                          value={value}
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
                Add Voter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
