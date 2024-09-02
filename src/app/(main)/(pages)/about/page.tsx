"use client"
import Navbar from '@/components/global/navbar'
import React from 'react'
import { HoverEffect } from '@/components/ui/card-hover-effect';
import { projects } from '@/data/projects';


type Props = {}

const About = (props: Props) => {
  return (
    <>
    <Navbar/>
        <div className="w-full mx-ato px-8 pt-16">
          <HoverEffect items={projects} />
        </div>
        </>
      );
    }
export default About