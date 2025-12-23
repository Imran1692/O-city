import { FaHeart } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";
function Navber() {
    const [showMenu,setShowMenu] = useState(false);
    const menubar = () => {
        setShowMenu(!showMenu);
    }
    return (
        <header className="bg-white mx-10 fixed top-0 left-0 right-0 ">
            <nav className="md:h-[12vh] h-[10vh] px-2 py-2 mx-6  flex justify-between items-center ">
                {/* Logo */}
                <a href="#" className="text-3xl font-bold">
                    <span className="text-amber-400">O</span>
                    <span className="">-</span>
                    city
                </a>

                {/* Desktop Menu */}

                <ul className="md:flex items-center gap-x-15 hidden ">
                    <li>
                        <a href="#" className="font-semibold  text-amber-500 tracking-wider ">Home </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold  tracking-wider hover:text-amber-500">About Us </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold  tracking-wider hover:text-amber-500">Process </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold  tracking-wider hover:text-amber-500">Contact Us </a>
                    </li>
                </ul>

                {/* Nav serch */}
                <div className="md:flex items-center gap-2 border border-zinc-300 rounded-full px-3 h-11 
                focus-within:ring-2 focus-within:ring-amber-400 transition hidden">
                    <input type="text" placeholder="input what you went" className="focus:outline-none px-1.5 h-9 " />
                    <button className=" bg-amber-400 hover:bg-gradient-to-b from-amber-400 to-amber-600  transition h-10 w-10 flex items-center justify-center rounded-full text-xl">
                        <IoSearch />
                    </button>
                </div>

                {/* icons */}
                <div className="flex items-center gap-6">
                    <a href="#" className="text-2xl">
                        <FaHeart />
                    </a>
                    <a href="#" className="text-2xl">
                        <TiShoppingCart />
                    </a>
                    {/* menubar */}
                    <a href="#" className="text-2xl" onClick={menubar}>
                       { showMenu ? <RiMenu4Fill />:<IoMenu />}
                    </a>
                </div>
                {/* Mobile design */}
                <ul className={`flex flex-col items-center  gap-y-15 gap-x-15 md:hidden bg-amber-500/15 backdrop-blur-sm backdrop-blur-2xl rounded-2xl p-10 absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2': " "}`}>
                    <li>
                        <a href="#" className="font-semibold  text-amber-500 tracking-wider ">Home </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold  tracking-wider hover:text-amber-500">About Us </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold  tracking-wider hover:text-amber-500">Process </a>
                    </li>
                    <li>
                        <a href="#" className="font-semibold  tracking-wider hover:text-amber-500">Contact Us </a>
                    </li>
                    <li 
                      className="flex     items-center gap-2 border    border-zinc-300 rounded-full  px-3 h-11 
                     focus-within:ring-2 focus-within:ring-amber-400  transition ">
                        <input type="text" placeholder="input what you went" className="focus:outline-none px-1.5 h-9 " />
                        <button className=" bg-amber-400 hover: bg-gradient-to-b from-amber-400 to-amber-600 transition h-10 w-10 flex items-center justify-center rounded-full text-xl">
                            <IoSearch />
                        </button>
                    </li>
                </ul>

            </nav>
        </header>
    )
}
export default Navber;