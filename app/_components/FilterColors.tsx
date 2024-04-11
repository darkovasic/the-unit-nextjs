"use client";

function FilterColors() {
  return (
    <form className="flex items-center w-full p-4">
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
        className="w-full outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-blue-600 focus:border-blue-600 block p-2.5"
      />
    </form>
  );
}

export default FilterColors;
