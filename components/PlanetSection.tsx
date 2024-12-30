"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Planet } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PlanetSectionProps {
  planet: Planet;
  index: number;
  isActive: boolean;
}

export default function PlanetSection({
  planet,
  index,
  isActive,
}: PlanetSectionProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      id={`planet-${index}`}
      className="relative flex min-w-full h-full snap-start items-center justify-center p-8 "
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isActive ? 1 : 1,
            scale: isHovered ? 1.1 : 1,
            rotate: isHovered ? 10 : 0,
          }}
          transition={{ duration: 0.8 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="w-1/2 relative mt-24 md:mt-0 "
        >
          <div className="aspect-square relative ">
            <Image
              src={planet.image}
              alt={planet.name}
              fill
              className="object-contain "
              priority
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isActive ? 1 : 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 pr-8 mb-10 md:mb-0 "
        >
          <Card className="bg-black/10 backdrop-blur-md border-gray-800 rounded-lg">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-white">
                {planet.name}
              </CardTitle>
              <CardDescription className="text-gray-300">
                {planet.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-200 ">
                <p>{planet.description}</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {Object.entries(planet.facts).map(([key, value]) => (
                    <div key={key} className="bg-white/5 p-3 rounded-lg">
                      <div className="text-sm text-gray-400">{key}</div>
                      <div className="text-lg font-semibold">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
