import { useState } from "react";

export default function useCreatePollPage() {
  const [tabIndex, setTabIndex] = useState(0);

  return { tabIndex, setTabIndex };
}
