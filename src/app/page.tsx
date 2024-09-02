"use client"
import { Globe } from "@/components/global/globe";
import Navbar from "@/components/global/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <main className="[background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]">
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [backgrond:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)] pt-36">
          <div className="flex h-[60%] w-[100%] justify-center items-center">
            <div className="flex flex-col justify-center w-1/2 pr-4">
              <p className="text-2xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold pb-6">
                Glacial Lake Outburst Floods  &#40;GLOFs &#41;
              </p>
              <p className="text-2xl md:text-[20px] bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold pt-4">
                GLOF&apos;s pose a significant threat to communities living downstream of glacial lakes. These floods occur when the moraine containing a glacial lake fails, releasing massive amounts of water suddenly and causing devastating downstream flooding. As climate change accelerates the melting of glaciers, the number and size of glacial lakes are increasing, heightening the risk of GLOFs.
              </p>
            </div>
            <div className="relative h-full w-[40%] ">
              <Image
                src={"/pic.png"}
                height={600}
                width={600}
                alt="glacier"
                className="object-contain rounded-[45px]"
              />
            </div>
          </div>
          <span className="relative h-[130%] w-[130%] right-0">
            <Globe />
          </span>
          <div className="flex md:text-5xl items-center flex-col justify-start min-h-sceen">
          <p className="text-2xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-sans font-bold te text-justify pb-7">Our Vision</p>
            <p className="text-2xl md:text-xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 font-sans font-bold px-5 text-justify">
              GeoWatch is a comprehensive risk-assessment and early warning platform that ensures community perseverance against future disasters. The platform supports advanced anomaly detection, enabling analysts to identify unusual patterns and potential threats with high precision. Its graphical analysis tools provide detailed visualizations of risk factors and trends, while 3D mapping offers an immersive view of geographical areas at risk. Flood path detection and contouring capabilities allow researchers to model and predict flood trajectories accurately, facilitating more informed decision-making and strategic planning. From life saving alerts to community resilience, our platform enhances disaster preparedness by offering real-time monitoring, risk assessments, and actionable insights. By monitoring critical indicators in real time, the early warning system provides the crucial lead time needed for effective emergency response.
            </p>
          </div>

          <div className="flex flex-col h-[60%]">
            <div className="flex items-center justify-center flex-col pt-11">
              <Link href={"/sample.html"}>
                <Button size={'lg'} className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black ">
                    Get Started
                  </span>
                </Button>
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </main>

      </>
  );
}
