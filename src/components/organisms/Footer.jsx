import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="shadow-lg bg-green-600 dark:bg-green-600 mt-4">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-white sm:text-center">
            © 2024{" "}
            <a href="#" class="hover:underline">
              Ecovision
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer
