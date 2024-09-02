"use client"
import Navbar from '@/components/global/navbar'
import { LinkPreview } from '@/components/ui/link-preview'
import Image from 'next/image'
import React from 'react'



type Props = {}

const News = (props: Props) => {
  return (
    <main className='h-full w-full overflow-scroll'>
      <Navbar />
      <section className="container mx-auto pt-24 p-4 space-y-4">
        {/* Article 1 */}
        <article className="flex flex-col md:flex-row items-center bg-neutral-900 p-4 rounded-md shadow-lg">
          <div className="w-full md:w-[25%]">
            <Image
              src="/1.png"
              alt="Article Image 1"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-[75%] md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {" "}
              <LinkPreview
                url="https://www.drishtiias.com/daily-updates/daily-news-analysis/glacial-lake-outburst-flood-in-sikkim"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                South Lhonak Lake, Sikkim</LinkPreview>{" "}</h2>
            <p className="text-md md:text-lg text-gray-300">
              Continuous rainfall in Sikkim triggered a devastating disaster that claimed the lives of 42 people, including 23 Indian Army personnel, and left over 70 individuals missing. The catastrophic event, which involved an avalanche from the ice-capped regions surrounding a lake, led to a Glacial Lake Outburst Flood (GLOF). This released a massive volume of water downstream, causing severe flooding in the Teesta River and wreaking havoc across four districts. The flooding destroyed homes, wrecked more than 30 bridges, and critically damaged the Chungthang Hydro-Dam on the Teesta River. The 2011 magnitude 6.9 earthquake and other seismic activities had already escalated the GLOF risk in the area, and this latest disaster has ravaged portions of Sikkim&apos;s largest hydropower project, marking a tragic blow to the region.
            </p>
          </div>
        </article>

        {/* Article 2 */}
        <article className="flex flex-col md:flex-row items-center bg-neutral-900 p-4 rounded-md shadow-lg">
          <div className="w-full md:w-[25%]">
            <Image
              src="/2.png"
              alt="Article Image 2"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-[75%] md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {" "}
              <LinkPreview
                url="https://www.thehindu.com/sci-tech/energy-and-environment/uttarakhand-will-study-glacial-lakes-to-avoid-outburst-scenarios/article68340516.ece"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Chorabari Lake, Uttarakhand</LinkPreview>{" "}
            </h2>
            <p className="text-md md:text-lg text-gray-300">
              Heavy rainfall in June 2013 triggered flash flooding and landslides throughout the Indian Himalayan state of Uttarakhand, killing more than 6000 people. The vast majority of fatalities and destruction resulted directly from a lake outburst and debris flow disaster originating from above the village of Kedarnath on June 16 and 17.
              The early onset of heavy monsoon rainfall &#40;390 mm, June 10-17&#41; immediately following a 4-week period of unusually rapid snow cover depletion and elevated streamflow was the crucial hydrometeorological factor, resulting in slope saturation and significant run-off into the small seasonal glacial lake. Between mid-May and mid-June 2013, snow-covered area above Kedarnath decreased by around 50 %. The unusual situation of the lake being dammed in a steep, unstable paraglacial environment but fed entirely from snowmelt and rainfall within a fluvial dominated watershed
            </p>
          </div>
        </article>

        {/* Article 3 */}
        <article className="flex flex-col md:flex-row items-center bg-neutral-900 p-4 rounded-md shadow-lg">
          <div className="w-full md:w-[25%]">
            <Image
              src="/3.png"
              alt="Article Image 3"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-[75%] md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {" "}
              <LinkPreview
                url="https://www.sciencedirect.com/science/article/abs/pii/S2352938522000520#:~:text=On%20Sunday%20morning%20of%207,dead%20after%20long%20search%20operation"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Ronti Lake, Uttarakhand</LinkPreview>{" "}
            </h2>
            <p className="text-md md:text-lg text-gray-300">
              On Sunday morning of 7th February 2021 at 10:08Hrs, a massive flashflood took place along RishiGanga river valley of Chamoli district. As per the official records, among 204 died people only 80 dead bodies retrieved and 124 people&apos;s bodies still missing which were later declared dead after long search operation.
            </p>
          </div>
        </article>


        <article className="flex flex-col md:flex-row items-center bg-neutral-900 p-4 rounded-md shadow-lg">
          <div className="w-full md:w-[25%]">
            <Image
              src="/4.png"
              alt="Article Image 3"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-[75%] md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {" "}
              <LinkPreview
                url="https://www.thehindu.com/sci-tech/science/lessons-from-ladakhs-glacial-lake-outburst/article33048752.ece"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Tso Moriri Lake, Ladakh</LinkPreview>{" "}
            </h2>
            <p className="text-md md:text-lg text-gray-300">
              In August 2014, a glacial lake outburst flood hit the village of Gya in Ladakh, destroying houses, fields and bridges. Using remote sensing data, researchers from Germany have mapped the evolution of Gya glacial lake and note the cause of the flood. it was not a spillover but rather a tunnelling drainage process. “Imagine a bucket full of water. It can overflow when you drop a stone, or the water can drain if there is a hole under the bucket. Similarly, here the flooding did not happen due to the spillovers due to an avalanche or landslide, rather there was a thawing of the ice cores in the moraine &#91;It is a field of dirt and rocks that have been pushed along by the glacier as it moves&#93; drained through the subsurface tunnels.
            </p>
          </div>
        </article>


        <article className="flex flex-col md:flex-row items-center bg-neutral-900 p-4 rounded-md shadow-lg">
          <div className="w-full md:w-[25%]">
            <Image
              src="/5.png"
              alt="Article Image 3"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-[75%] md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {" "}
              <LinkPreview
                url="https://blogs.agu.org/landslideblog/2009/05/26/the-pareechu-landslide-and-flood-2005/"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Pareechu Lake</LinkPreview>{" "}
            </h2>
            <p className="text-md md:text-lg text-gray-300">
              In July 2003, a large landslide occurred on the Pareechu River, which led In July 2003, a massive landslide on the Pareechu stream in Tibet blocked the river and created a large lake. The dam formed by the landslide eventually breached on June 26, 2005, unleashing a devastating flood. Satellite images from NASA and Google Earth tracked the event&apos;s progression, showing the lake&apos;s formation and the eventual failure of the natural dam. By February 2005, the lake remained intact despite winter conditions, but the dam&apos;s breach later that year resulted in a flood with a discharge rate of 2,000 cubic meters per second.The flood caused significant damage, destroying eight bridges and 15 kilometers of road in India, with an estimated $177 million in damages. While there were no reported casualties in India, a few fatalities were reported in Tibet. The Pareechu landslide and flood highlight the destructive power of natural disasters and the need for effective monitoring and risk management in such vulnerable areas.
            </p>
          </div>
        </article>


        <article className="flex flex-col md:flex-row items-center bg-neutral-900 p-4 rounded-md shadow-lg">
          <div className="w-full md:w-[25%]">
            <Image
              src="/6.webp"
              alt="Article Image 3"
              width={300}
              height={200}
              className="rounded-md"
            />
          </div>
          <div className="w-full md:w-[75%] md:pl-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {" "}
              <LinkPreview
                url="https://www.indiatoday.in/science/story/chamoli-disaster-ice-avalanche-tapovan-uttarakhand-ndrf-1815444-2021-06-16"
                className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
              >
                Ronti Lake, Uttarakhand</LinkPreview>{" "}
            </h2>
            <p className="text-md md:text-lg text-gray-300">
            &quot;In 2016, a significant geological event began to unfold on the slopes of Ronti Peak in the Chamoli district of Uttarakhand. A large mass of rock and ice, previously stable, started to dislodge from the peak&apos;s slopes. This initial movement, detected through satellite imagery, indicated a gradual but concerning slip of several tens of meters over the years.

              The shifting rock mass on Ronti Peak set the stage for the devastating disaster that would occur in February 2021. Over the years, the gradual displacement of this rock and ice mass contributed to the eventual formation of a massive rock and ice avalanche. The accumulated instability culminated in a catastrophic event that transformed into a highly destructive debris flow, causing widespread damage and loss of life. The 2016 displacement was a key precursor to the tragic events that unfolded later, highlighting the critical need for ongoing monitoring of such geological activities.&quot;
            </p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default News