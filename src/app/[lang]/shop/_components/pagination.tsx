"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

function PageSelectorButton({ value, active }: any) {
  const [isScrolling, setIsScrolling] = useState(false);
  const searchParams = useSearchParams();

  const newSearchParams = new URLSearchParams(searchParams);
  newSearchParams.set("page", value.toString());

  return (
    <li className="relative">
      <Link
        onClick={(evt: any) => {
          if (value === searchParams.get("page")) {
            return;
          }

          if (!isScrolling) {
            evt.preventDefault();
          }
          setIsScrolling(true);
          window.scrollTo(0, 0);
          setTimeout(() => {
            setIsScrolling(false);
            evt.target.click();
          }, 600);
        }}
        href={"/shop?" + newSearchParams.toString()}
        scroll={false}
        className={`flex h-12 w-12 cursor-pointer items-center justify-center bg-white hover:bg-amber-50 focus:z-10 ${active ? "text-amber-400" : ""}`}
      >
        {value}
      </Link>
      {active ? (
        <div className="absolute left-[-1px] top-[-1px] h-[50px] w-[50px] rounded-md border border-amber-400"></div>
      ) : null}
    </li>
  );
}

function PrevPageSelectorButton() {
  return (
    <input
      type="button"
      className={`h-12 w-12 cursor-pointer bg-white hover:bg-amber-50`}
      value={"<"}
    />
  );
}

function NextPageSelectorButton() {
  return (
    <input
      type="button"
      className={`h-12 w-12 cursor-pointer bg-white hover:bg-amber-50`}
      value={">"}
    />
  );
}

function Unknownpages() {
  return (
    <input
      type="button"
      className={`h-12 w-12 cursor-pointer bg-stone-50 text-stone-600`}
      value={"..."}
    />
  );
}

// TODO: INTL
// TODO: Page Selectors needs to be ul li with Links to the according pages
// TODO: new SearchParams(currentSearchParams) + page=newPage
// TODO: active link not clickable
export default function Pagination() {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <div className="mb-24 mt-2 flex w-full flex-col items-center justify-center gap-4">
      <div>
        <p>Zeige Artikel 1 bis 27 von 223</p>
      </div>

      <ol className="flex gap-[1px] rounded-md border border-stone-100 bg-stone-100">
        <PrevPageSelectorButton />
        <PageSelectorButton value="1" active={currentPage === 1} />
        <PageSelectorButton value="2" active={currentPage === 2} />
        <PageSelectorButton value="3" active={currentPage === 3} />
        <Unknownpages />
        <PageSelectorButton value="5" active={currentPage === 5} />
        <PageSelectorButton value="6" active={currentPage === 6} />
        <PageSelectorButton value="7" active={currentPage === 7} />
        <NextPageSelectorButton />
      </ol>
    </div>
  );
}
