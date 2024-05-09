"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

const SearchNews = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchValue: string) => {
    const params = new URLSearchParams(searchParams);
    if (searchValue) {
      params.set("query", searchValue);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="flex justify-center w-full p-10" >
        <input
          className="input w-4/5 bg-[#302E2E]"
          type="search"
          placeholder="type to search"
          defaultValue={searchParams.get("query")?.toString()}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
};
export default SearchNews;
