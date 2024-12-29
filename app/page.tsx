"use client";

import { useRef, useState } from "react";
import { HomeIcon } from "lucide-react";
import PlanetSection from "@/components/PlanetSection";
import StarField from "@/components/StarField";
import RocketButton from "@/components/RocketButton";
import { Button } from "@/components/ui/button";
import { planets } from "@/lib/data";
import { useSpaceTravel } from "@/hooks/useSpaceTravel";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPlanet, setCurrentPlanet] = useState(-1);
  const { scrollWithEffect } = useSpaceTravel(containerRef);

  const scrollToNextPlanet = () => {
    const nextIndex = currentPlanet + 1;
    if (nextIndex < planets.length) {
      setCurrentPlanet(nextIndex);
      scrollWithEffect(`planet-${nextIndex}`);
    }
  };

  const startExploration = () => {
    setCurrentPlanet(0);
    scrollWithEffect("planet-0");
  };

  const returnHome = () => {
    setCurrentPlanet(-1);
    scrollWithEffect("welcome");
  };

  return (
    <main className="relative h-screen overflow-hidden bg-black">
      <StarField />

      <div
        ref={containerRef}
        className="flex h-screen snap-x snap-mandatory overflow-x-auto scrollbar-hide transition-all duration-500"
      >
        {/* Welcome Section */}
        <section
          id="welcome"
          className="flex min-w-full h-full snap-start items-center justify-center relative"
        >
          <div className="text-center space-y-6 p-8 max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
              Exploration du Système Solaire
            </h1>
            <p className="text-xl text-gray-300">
              Embarquez pour un voyage extraordinaire à travers notre système
              solaire
            </p>
            <Button
              onClick={startExploration}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300"
            >
              Commencer l&apos;exploration
              {/* <RocketButton onClick={() => {}} className="ml-2 inline-block" /> */}
            </Button>
          </div>
        </section>

        {/* Planet Sections */}
        {planets.map((planet, index) => (
          <PlanetSection
            key={planet.id}
            planet={planet}
            index={index}
            isActive={currentPlanet === index}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="fixed bottom-8 right-8 flex gap-4 z-50">
        {currentPlanet >= 0 && (
          <button
            onClick={returnHome}
            className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
            aria-label="Retour à l'accueil"
          >
            <HomeIcon className="h-6 w-6 text-white" />
          </button>
        )}

        {currentPlanet >= 0 && currentPlanet < planets.length - 1 && (
          <RocketButton onClick={scrollToNextPlanet} />
        )}
      </div>
    </main>
  );
}
