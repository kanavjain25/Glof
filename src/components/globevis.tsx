"use client"
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import Globe from 'globe.gl';
import * as THREE from 'three';

interface EarthquakeFeature {
    geometry: {
        coordinates: [number, number];
    };
    properties: {
        mag: number;
        title: string;
    };
}
const world = Globe({ animateIn: false })
.globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
.bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png');


const CLOUDS_IMG_URL = './clouds.png'; // from https://github.com/turban/webgl-earth
    const CLOUDS_ALT = 0.004;
    const CLOUDS_ROTATION_SPEED = -0.006; // deg/frame

    new THREE.TextureLoader().load(CLOUDS_IMG_URL, cloudsTexture => {
      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(world.getGlobeRadius() * (1 + CLOUDS_ALT), 75, 75),
        new THREE.MeshPhongMaterial({ map: cloudsTexture, transparent: true })
      );
      world.scene().add(clouds);

      (function rotateClouds() {
        clouds.rotation.y += CLOUDS_ROTATION_SPEED * Math.PI / 180;
        requestAnimationFrame(rotateClouds);
      })();
    });

interface HexBin {
    points: EarthquakeFeature[];
    sumWeight: number;
}
const GlobeVis: React.FC = () => {
    const globeContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (globeContainerRef.current) {
            const weightColor = d3.scaleLinear<number, string>()
                .domain([0, 60])
                .range(['lightblue', 'darkred'])
                .clamp(true);


            const myGlobe = Globe()

                .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
                .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
                .hexBinPointLat((d: EarthquakeFeature) => d.geometry.coordinates[1])
                .hexBinPointLng((d: EarthquakeFeature) => d.geometry.coordinates[0])
                .hexBinPointWeight((d: EarthquakeFeature) => d.properties.mag)
                .hexAltitude(({ sumWeight }: HexBin) => sumWeight * 0.0025)
                .hexTopColor((d: HexBin) => weightColor(d.sumWeight))
                .hexSideColor((d: HexBin) => weightColor(d.sumWeight))
                .hexLabel((d: HexBin) => `
          <b>${d.points.length}</b> earthquakes in the past month:<ul><li>
            ${d.points.slice().sort((a, b) => b.properties.mag - a.properties.mag).map(d => d.properties.title).join('</li><li>')}
          </li></ul>
        `)(globeContainerRef.current);

            fetch('//earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month.geojson')
                .then(res => res.json())
                .then(equakes => {
                    myGlobe.hexBinPointsData(equakes.features);
                });
        }
    }, []);

    return (
        <div ref={globeContainerRef} className="w-full h-full" />
    );
};

export default GlobeVis;
