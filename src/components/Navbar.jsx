export const Navbar = () => {
  return (
    <div className="w-full h-16 px-6 md:px-12 flex items-center justify-between shadow-md bg-white">
      {/* Logo */}
      <div className="text-3xl font-bold">
        <p>FOOD<span className="text-red-600">EAT</span></p>
      </div>

      {/* Navigation Menu */}
      <div>
        <ul className="flex gap-6 text-lg font-bold">
          <li className="cursor-pointer hover:text-red-600 transition duration-300">HOME</li>
          <li className="cursor-pointer hover:text-red-600 transition duration-300">MENU</li>
          <li className="cursor-pointer hover:text-red-600 transition duration-300">ABOUT</li>
          <li className="cursor-pointer hover:text-red-600 transition duration-300">PROFILE</li>
        </ul>
      </div>
    </div>
  );
};
