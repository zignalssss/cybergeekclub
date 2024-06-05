import React, { useMemo } from "react";

type Props = {
  value: string;
  valueLength: number;
  onChange: (value: string) => void;
};

export default function OPTInput({ value, valueLength, onChange }: Props) {
  const valueItem = useMemo(() => {
    const valueArray = value.split("");
    const item: Array<string> = [];
    for (let i = 0; i < valueLength; i++) {
      const char = valueArray[i];
      const re = new RegExp(/^\d+$/);
      if (re.test(char)) {
        item.push(char);
      } else {
        item.push("");
      }
    }
    return item;
  }, [value, valueLength]);

  const focusToNextInput = (target: HTMLInputElement) => {
    const nextElementSibling =
      target.nextElementSibling as HTMLInputElement | null;
    if (nextElementSibling) {
      nextElementSibling.focus();
    }
  };
  const focusToPrevInput = (target: HTMLInputElement) => {
    const previousElementSibling =
      target.previousElementSibling as HTMLInputElement | null;
    if (previousElementSibling) {
      previousElementSibling.focus();
    }
  };

  const inputOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const target = e.target;
    let targetValue = target.value.trim();
    const re = new RegExp(/^\d+$/);
    const isTargetValueDigit = re.test(targetValue);
    if (!isTargetValueDigit && targetValue !== "") {
      return;
    }
    targetValue = isTargetValueDigit ? targetValue : " ";

    const targetValueLength = targetValue.length;

    if (targetValueLength === 1) {
      const newValue =
        value.substring(0, idx) + targetValue + value.substring(idx + 1);
      onChange(newValue);
      if (!isTargetValueDigit) {
        return;
      }
      focusToNextInput(target);
    } else if (targetValueLength === valueLength) {
      onChange(targetValue);
      target.blur();
    }
  };
  const inputOnkeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = e;
    const target = e.target as HTMLInputElement;
    const targetValue = target.value;

    if (key === "ArrowRight" || key === "ArrowDown") {
      e.preventDefault();
      return focusToNextInput(target);
    }
    if (key === "ArrowLeft" || key === "ArrowUp") {
      e.preventDefault();
      return focusToPrevInput(target);
    }

    target.setSelectionRange(0, targetValue.length);

    if (e.key !== "Backspace" || target.value !== "") {
      return;
    }
    focusToPrevInput(target);
  };
  const inputOnFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const target = e.target;
    target.setSelectionRange(0, target.value.length);
  };
  return (
    <>
      <div className="flex justify-center">
        <label className="flex flex-row md:gap-4 gap-2 max-w-fit w-auto">
          {valueItem.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d{1}"
              maxLength={valueLength}
              value={digit}
              onKeyDown={inputOnkeyDown}
              onChange={(e) => inputOnChange(e, idx)}
              onFocus={inputOnFocus}
              className="h-16 w-10 bg-[#302E2E] text-center rounded-xl font-kanit"
              required
            ></input>
          ))}
        </label>
      </div>
    </>
  );
}
