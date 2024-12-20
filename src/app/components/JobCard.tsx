/* eslint-disable @next/next/no-img-element */
"use client";

import { Job } from "@/app/components/JobList";
import React from "react";

interface JobCardProps {
  data: Job;
  addSelectedKeyword: (keyword: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ data, addSelectedKeyword }) => {
  const {
    company,
    logo,
    new: isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = data;

  const handleBadgeClick = (badge: string) => {
    addSelectedKeyword(badge); // Add the selected badge to the container
  };

  return (
    <div
      className={`job-card bg-white p-6 rounded-lg shadow-md md:mt-0 flex flex-col md:flex-row justify-between ${
        featured ? "border-l-4 border-primary" : ""
      }`}>
      <div className="flex flex-col md:flex-row items-start -mt-12 md:mt-2">
        <img
          src={logo}
          alt={`${company} logo`}
          className="rounded-full mr-4 custom-logo"
        />
        <div className="flex flex-col items-left gap-2 mt-4 md:mt-0">
          <div className="flex items-center space-x-2">
            <h3 className="text-primary font-bold">{company}</h3>
            {isNew && (
              <span className="bg-primary text-white text-xs uppercase font-bold p-2 rounded-full">
                New!
              </span>
            )}
            {featured && (
              <span className="bg-black text-white text-xs uppercase font-bold p-2 rounded-full">
                Featured
              </span>
            )}
          </div>
          <h2 className="text-lg font-bold text-neutral-veryDarkGrayishCyan">
            {position}
          </h2>
          <div className="text-neutral-darkGrayishCyan text-sm">
            {postedAt} · {contract} · {location}
          </div>
        </div>
      </div>
      <hr className="my-4 hide-divider" />
      <div className="flex flex-wrap gap-4 items-center mt-2">
        {[...languages, ...tools].map((skill, index) => (
          <span
            key={index}
            onClick={() => handleBadgeClick(skill)}
            className="cursor-pointer bg-neutral-lightGrayishCyanBg text-primary font-bold text-xs px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
