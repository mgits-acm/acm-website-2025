import EventCardTemplate from "./EventCardTemplate";

export default function EventSection(){
    return(
        <main className="w-screen h-max gap-6 flex flex-col items-center justify-center p-5 mt-10">
            <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="uppercase font-black text-4xl">Events</h1>
                <button className="md:hidden px-10 font-bold py-2 bg-[#F13838] text-white">2K24</button>
            </div>
            <div className="h-max w-full">
                <div className="flex-1"></div>
                <div className="flex flex-col flex-3 md:flex-row gap-2 md:gap-16 items-center justify-center">
                    <EventCardTemplate />
                    <EventCardTemplate />
                    <EventCardTemplate />
                    <EventCardTemplate />
                    <EventCardTemplate />
                </div>
                <div className="flex-1"></div>
            </div>
        </main>
    )
}