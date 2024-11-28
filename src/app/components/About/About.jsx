export default function AboutSection(){
    return(
        <main className="w-screen h-max">
            <div className="w-full p-5  md:p-10 flex items-center justify-center">
                {/**Buffer?? */}
                <div className="w-11/12 bg-slate-600 rounded-lg sm:p-[2px] p-[1px] opacity-50"></div>
            </div>
            <div className="gap-10 p-5 flex items-center justify-center flex-col">
                <h1 className="uppercase font-black text-4xl">
                    About Us
                </h1>
                <p className="w-10/12 md:w-4/6 text-justify md:text-center font-light text-lg md:text-2xl">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in  laying out print, graphic or web designs. The passage is attributed to  an unknown typesetter in the 15th century who is thought to have  scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a  type specimen book. It usually begins with:
                </p>
            </div>
        </main>
    )
}