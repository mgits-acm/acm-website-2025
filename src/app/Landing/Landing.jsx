import Image from "next/image";
import styles from './landing.module.css'

export default function Landing(){
    return(
        <div className="relative flex w-[calc(100vw-1rem)] md:w-screen rounded-xl overflow-hidden md:rounded-t-none h-[40vh] md:h-[90vh]">
           <div className="w-full h-full flex ">
                <div className={` md:${styles.landingClipping} flex-1 h-full flex items-center ml-28 bg-white z-10`}>
                    <div className="flex flex-col ">
                        <h1 className="font-black text-[50px] md:text-[150px] w-[100px] leading-none text-slate-700">MITS ACM.</h1>
                        <p className="text-slate-700 font-medium text-md md:text-2xl">ACM Students chapter</p>
                    </div>
                </div>
                <div className="flex-1 h-full"></div>
           </div>
           <div className="sm:flex absolute  w-full h-full ">
                <Image src='/drone-shot.webp' alt="college" layout="fill"  className="md:object-contain md:object-right object-cover" />
           </div>
        </div>
    )
}