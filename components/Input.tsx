import type { InputHTMLAttributes } from "react";

function Input({
  id,
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label?: string }) {
  return (
    <div className="flex items-start mb-4">
      <div className="w-1/4 text-right">
        {label && (
          <label
            htmlFor={id}
            className="pr-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        )}
      </div>
      <div className="w-3/4">
        <input
          name={id}
          id={id}
          className="mb-1 outline-none bg-gray-50 border border-gray-300 text-gray-900 
                    text-sm rounded-lg focus:ring-1 w-[200px] focus:ring-blue-600 
                    focus:border-blue-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...props}
        />
      </div>
    </div>
  );
}

export default Input;
