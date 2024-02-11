export default function HeaderNav (){
    return (
      <div className="flex items-center justify-around bg-blue-700 px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="text-nowrap text-2xl capitalize font-bold text-white">Syukri Gazali</div>
          <div className="block lg:hidden">
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
          </div>
        </div>
        <div className="flex items-center justify-between w-full ">
            <div className="flex gap-x-5 items-center justify-center w-full">
                <a href="#" className="block px-3 py-4 text-white hover:text-blue-200">My Story</a>
                <a href="#" className="block px-3 py-4 text-white hover:text-blue-200">Ability & Skills</a>
                <a href="#" className="block px-3 py-4 text-white hover:text-blue-200">My Crafted Work</a>
                <a href="#" className="block px-3 py-4 text-white hover:text-blue-200">Contact</a>
            </div>
            <div>
                <a href="#" className="block px-3 py-2 text white text-nowrap bg-white hover:bg-blue-500">Button CTA</a>
            </div>
        </div>
      </div>
    );
};