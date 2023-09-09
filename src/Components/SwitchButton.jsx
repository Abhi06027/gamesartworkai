import { useState } from "react";
import { Switch } from "@headlessui/react";
import Button from "./Button";

const SwitchButton = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className=" bg-[#f6f6f6] w-full h-8  px-2  rounded-[12px] flex items-center justify-between">
      <Button
        name={"High Resolution"}
        style="text-sm text-black text-opacity-90"
      />

      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? "bg-blue-600" : "bg-[#9b9c9e]"}
          relative inline-flex h-[19px] w-[35px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
};

export default SwitchButton;
