"use client"; // Enable client-side interactivity

import { useEffect, useState } from "react";
import GridDistortion from "../app/Components/GridDistortion";
import RotatingText from "../app/Components/RotatingText";
import { FaGraduationCap } from "react-icons/fa"; // Import graduation cap icon

export default function HomePage() {
  const [daysLeft, setDaysLeft] = useState(0);
  const graduationDate = new Date("2025-06-1"); // Replace with your graduation date

  useEffect(() => {
    const calculateDaysLeft = () => {
      const today = new Date();
      const timeDifference = graduationDate.getTime() - today.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setDaysLeft(daysDifference);
    };

    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 86400000); // Update every 24 hours

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Background Image Section */}
      <div className="absolute inset-0 w-full h-full overflow-hidden h-96 sm:h-full"> {/* Adjust height for mobile */}
        <GridDistortion
          imageSrc="/images/civil.webp" // Update the image source
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
          className="custom-class"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 text-center text-black px-6 sm:px-8 md:px-12 lg:px-20 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            We are Civil Engineers
          </h1>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg" style={{ width: '350px' }}>
            <RotatingText
              texts={["We build houses", "We construct bridges", "We design roads", "We create infrastructure"]}
              mainClassName="px-2 py-1 sm:px-3 sm:py-2 bg-cyan-300 text-black overflow-hidden justify-center rounded-lg text-lg sm:text-xl md:text-2xl lg:text-3xl"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1 sm:pb-2"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={4000}
            />
          </div>
        </div>

        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-6 flex items-center justify-center">
          <FaGraduationCap className="mr-2" /> {/* Add graduation cap icon */}
          {daysLeft > 0 ? `${daysLeft} Days Until Graduation!` : "We Made It!"}
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-6">
          Celebrating the Journey of the Class of 2023
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 px-4 max-w-2xl text-black mt-6 bg-grey px-4 py-2 sm:px-6 sm:py-3 font-semibold hover:bg-blue-100 transition-colors text-sm sm:text-base md:text-lg">
          From late-night study sessions to groundbreaking projects, we’ve built more than structures – we’ve built lifelong friendships and unforgettable memories.
        </p>

        <a
          href="/memories"
          className="mt-6 bg-white text-blue-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors text-sm sm:text-base md:text-lg"
        >
          Explore Our Journey
        </a>
      </div>
    </div>
  );
}
