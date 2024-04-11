"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

function FilterColors() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    searchTerm ? params.set("query", searchTerm) : params.delete("query");
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full p-4">
      <label
        htmlFor="input"
        className="pr-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Filter:
      </label>
      <input
        id="input"
        type="text"
        placeholder="Enter name or hex value"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-600 focus:border-blue-600 block p-2.5"
      />
    </form>
  );
}

export default FilterColors;
