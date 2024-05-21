"use client";

import * as Select from "@radix-ui/react-select";
import React, {
  ChangeEvent,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import SearchSVG from "@/assets/icons/cheveron-right.svg";

const SelectItem: (props: any) => any = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      // @ts-ignore
      <Select.Item
        {...props}
        className={`relative flex h-7 cursor-pointer items-center rounded p-4 text-sm outline-amber-400 hover:bg-amber-100 ${props.className}`}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  },
);

function SearchInput({ onChange }: { onChange: (newValue: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!inputRef || inputRef.current === null) {
      return;
    }

    const timeout = setTimeout(() => {
      inputRef.current.focus();
    }, 1);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const onInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    onChange(evt.target.value);
    setTimeout(() => {
      inputRef.current.focus();
    }, 1);
  };

  return (
    <input
      autoFocus
      ref={inputRef}
      onChange={onInputChange}
      className="w-full py-1 outline-none placeholder:pl-1 placeholder:font-sans placeholder:font-normal"
      type="text"
      placeholder="Search categories"
    />
  );
}

// TODO: intl
const SelectInput = function ({ initialValue, name, options }: any) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const onOpenChange = () => {
    setQuery("");
  };

  return (
    <>
      <Select.Root
        onOpenChange={onOpenChange}
        defaultValue={initialValue ?? ""}
        name={name}
      >
        <Select.Trigger
          className="h-10 w-full gap-1 rounded border border-stone-200 bg-white px-4 text-start text-sm outline-amber-400"
          aria-label="Food"
        >
          <Select.Value />
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            className="mt-2 w-[--radix-select-trigger-width] overflow-hidden rounded border border-stone-200 bg-white shadow"
          >
            <Select.Viewport className="p-2">
              <div className="flex items-center justify-start gap-2 px-2 py-1">
                <SearchSVG className="text-stone-400" />
                <SearchInput onChange={(newVal) => setQuery(newVal)} />
              </div>
              <div className="mx-2 mb-2 h-0.5 bg-stone-100"></div>

              {options.map((option: any) => (
                <div
                  key={option.id}
                  className={
                    String(option.name).includes(deferredQuery) ? "" : "hidden"
                  }
                >
                  <SelectItem value={option.id}>{option.name}</SelectItem>
                </div>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
};

SelectInput.Skeleton = function () {
  return <p>TODO Skeleton</p>;
};

export default SelectInput;
