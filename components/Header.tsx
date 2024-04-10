// "use client";

import Link from "next/link";

function Header() {
  return (
    <nav
      className={`bg-gray-800 flex justify-between items-center h-14 px-8 py-4`}
    >
      <Link href="/" className="flex items-center">
        <p className={`text-gray-100 ml-4 font-semibold text-xl mr-auto`}>
          The Unit - Task Assignement
        </p>
      </Link>
    </nav>
  );
}

export default Header;
