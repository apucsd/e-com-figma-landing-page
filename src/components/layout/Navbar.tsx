import {
  RiUserLine,
  RiHeart3Line,
  RiNotification4Line,
  RiSearchLine,
} from "react-icons/ri";
import Container from "./Container";

const Navbar = () => {
  return (
    <Container>
      <div>
        <div className="md:flex justify-between items-center text-center">
          <div>
            {/* logo */}
            <h1 className="text-2xl md:text-4xl font-medium text-nowrap">
              E-com Logo
            </h1>
          </div>
          <div>
            {/* nav items */}
            <ul className="hidden md:flex justify-center items-center">
              <li className="group cursor-pointer">
                <div className="flex">
                  <span> Home</span>
                  <span className="w-[2px] block h-[24px] mx-[18px] bg-[#959595]"></span>
                </div>
                <div className="w-0 group-hover:w-[70%] block h-[4px] group-hover:bg-[#575757] duration-500 " />
              </li>
              <li className="group cursor-pointer">
                <div className="flex">
                  <span> Trending</span>
                  <span className="w-[2px] block h-[24px] mx-[18px] bg-[#959595]"></span>
                </div>
                <div className="w-0 group-hover:w-[70%] block h-[4px] group-hover:bg-[#575757] duration-500 " />
              </li>
              <li className="group cursor-pointer">
                <div className="flex">
                  <span> Our Mission</span>
                  <span className="w-[2px] block h-[24px] mx-[18px] bg-[#959595]"></span>
                </div>
                <div className="w-0 group-hover:w-[70%] block h-[4px] group-hover:bg-[#575757] duration-500 " />
              </li>
            </ul>
          </div>

          <div className="hidden md:flex justify-center items-center gap-4 text-[#444545]">
            <RiNotification4Line className=" cursor-pointer hover:bg-primary hover:text-white duration-500 h-10 w-10 p-2 border border-black rounded-full" />
            <RiHeart3Line className=" cursor-pointer hover:bg-primary hover:text-white duration-500 h-10 w-10 p-2 border border-black rounded-full" />
            <RiUserLine className=" cursor-pointer hover:bg-primary hover:text-white duration-500 h-10 w-10 p-2 border border-black rounded-full" />
          </div>
        </div>

        <div>
          {/* searchbar */}
          <div className="relative w-[200px] md:w-[581px]  h-[56px] mx-auto my-4">
            <input
              className="bg-[#F9F9F9] border-2 h-full pl-[60px] border-gray-300 hover:border-gray-400 transition-colors rounded-[90px] w-full py-2 px-3 "
              id="username"
              type="text"
              placeholder="Search..."
            />

            <div className="absolute left-4 top-1/2 -translate-y-1/2 inset-y-0 flex items-center">
              <RiSearchLine className="size-6 text-[#575757]" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
