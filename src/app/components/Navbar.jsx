import Image from "next/image";

export default function Navbar() {
    return(
        <div className="w-screen relative md:absolute  top-0 z-50 ">
            <nav className="flex p-2 w-full h-full items-center justify-between ">
                <div className=" w-16 h-16  md:w-20 relative">
                    <Image src='/icons/acmlogo.png' alt="logo" fill className="object-contain" />
                </div>
                <button className="w-16 h-16 md:w-20 md:h-20 md:hidden relative">
                    <Image src='/icons/menu.svg' alt="menu" fill className="object-contain" />
                </button>
            </nav>
        </div>
    )
}