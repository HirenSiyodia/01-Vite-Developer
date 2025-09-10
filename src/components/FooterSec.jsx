import React from "react";
import CodeIcon from "../icons/CodeIcon";

const FooterSec = () => {
  return (
    <footer class="bg-white rounded-lg shadow-sm dark:bg-gray-900 m-2">
      <div class="w-full max-w-screen-xl mx-auto md:py-4">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="#" class="flex items-center mb-2 ">
            <CodeIcon size={20} className="text-black " />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white ml-2">
              Vite Developer
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-2 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-3" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2025{" "}
          <a href="#" class="hover:underline">
            Hiren Siyodia™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterSec;
