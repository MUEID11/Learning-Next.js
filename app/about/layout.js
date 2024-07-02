import Link from "next/link";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="mt-6">
      <nav className="mb-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">mission</Link>
          </li>
          <li>
            <Link href="/about/vision">vision</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default layout;
