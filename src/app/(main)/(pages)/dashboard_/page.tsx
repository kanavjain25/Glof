"use client";
import { useEffect, useState } from "react";
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";
import * as React from 'react';

import Link from "next/link";
import Image from "next/image";


const SplashScreen = () => {
    const [value, setValue] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const handleIncrement = (prev: number) => {
            if (prev === 100) {
                setIsComplete(true);  
                return 100;  
            }
            return prev + 10;
        };

        setValue(handleIncrement);
        const interval = setInterval(() => setValue(handleIncrement), 1500);
        return () => clearInterval(interval);
    }, []);
    const sample = [1, 10, 30, 50, 70, 90, 100];
    const MainDashboard = () => {
        return (
            <div className="p-10">
                <header className='fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between'>
                    <aside className='flex items-center gap-[2px]'>
                        <Image
                            src={"/logo2.png"}
                            width={30}
                            height={30}
                            alt='glof'
                            className='shadow-sm cursor-pointer'
                        />
                        <Link href={"/"}>
                            <p className="text-xl font-bold font-sans"> GeoWatch</p>
                        </Link>
                    </aside>
                    <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[50%] hidden md:block">
                        <ul className="flex items-center gap-10 list-none -mt-6">

                            <Link href="/news" className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                News
                            </Link>
                            <Link href="/sample.html" className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                GeoWatch
                            </Link>
                            <Link href="/about" className="px-6 py-2 bg-black text-white rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                                About
                            </Link>
                        </ul>
                    </nav>
                </header>

                {/* Add your main dashboard content here */}
                <div className="flex flex-col gap-12 pt-14 ml-14 overflow-scroll">
                    <div className="flex gap-10">
                        <Image
                            src={"/snow.gif"}
                            height={600}
                            width={600}
                            alt='gif' />
                        <Image
                            src={"/graph.png"}
                            width={600}
                            height={600}
                            alt="graph" />
                    </div>
                    <div className="flex gap-10">
                        <Image
                            src={"/heatflux.png"}
                            height={600}
                            width={600}
                            alt='heatflux' />
                        <Image
                            src={"/WindSpeed.png"}
                            width={600}
                            height={600}
                            alt="windspeed" />
                    </div>
                </div>
            </div>
        );
    };

    if (isComplete) {
        // Render the main dashboard when loading is complete
        return <MainDashboard />;
    }

    return (
        <div className="flex justify-center items-center h-screen bg-black">
            <AnimatedCircularProgressBar
                max={100}
                min={0}
                value={value}
                gaugePrimaryColor="#ffffff"
                gaugeSecondaryColor="rgba(0, 0, 0, 0.1)"
            />

        </div>
    );
};

export default SplashScreen;
