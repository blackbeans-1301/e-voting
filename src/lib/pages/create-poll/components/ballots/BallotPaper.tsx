type BallotPaperProps = {
  value: number;
  index: number;
};

export default function BallotPaper(props: BallotPaperProps) {
  const { value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <div></div>}
    </div>
  );
}
