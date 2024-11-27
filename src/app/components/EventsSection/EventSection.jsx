export default function EventSection(){
    return(
        <main className="w-screen h-max flex flex-col items-center justify-center p-5 mt-10">
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="uppercase font-black text-4xl">Events</h1>
                <button className="md:hidden px-10 font-bold py-2 bg-[#F13838] text-white">2K24</button>
            </div>
            <div className="h-max w-4/6">
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    <div className="w-full md:w-1/3 h-[50vh] bg-[#F13838] rounded-[30px]"></div>
                    <div className="w-full md:w-1/3 h-[50vh] bg-[#F13838] rounded-[30px]"></div>
                    <div className="w-full md:w-1/3 h-[50vh] bg-[#F13838] rounded-[30px]"></div>
                </div>
            </div>
        </main>
    )
}