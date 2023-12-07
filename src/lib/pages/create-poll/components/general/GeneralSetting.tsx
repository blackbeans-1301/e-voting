type GeneralSettingProps = {
  value: number;
  index: number;
};

export default function GeneralSetting(props: GeneralSettingProps) {
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
