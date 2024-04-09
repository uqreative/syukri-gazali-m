export default function HeaderNav() {
  return (
    <div className="bg-slate-800">
      <div className="flex flex-col lg:flex-row">
        <div className="flex items-center justify-between px-4 py-4 lg:py-0 border-b  border-blue-700 lg:border-b-0">
          <div className="text-nowrap text-2xl capitalize font-bold text-white">
            Syukri Gazali
          </div>
          <div>
            <button className="focus:outline-none text-white block lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between w-full py-4 lg:py-0">
          <div className="flex flex-col lg:flex-row gap-x-5 items-start lg:items-center justify-clLenter">
            <a
              href="/"
              className="block px-3 py-4 text-white hover:text-blue-200"
            >
              My Story
            </a>
            <a
              href="/"
              className="block px-3 py-4 text-white hover:text-blue-200"
            >
              Ability & Skills
            </a>
            <a
              href="/"
              className="block px-3 py-4 text-white hover:text-blue-200"
            >
              My Crafted Work
            </a>
            <a
              href="/"
              className="block px-3 py-4 text-white hover:text-blue-200"
            >
              Contact
            </a>
          </div>
          <div className="flex flex-col lg:flex-row gap-x-5">
            <a
              href="/"
              className="block m-2 px-3 py-2 text white text-nowrap bg-white hover:bg-blue-500"
            >
              Button CTA
            </a>
            <a
              href="/"
              className="block m-2 px-3 py-2 text white text-nowrap bg-white hover:bg-blue-500"
            >
              Button Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
