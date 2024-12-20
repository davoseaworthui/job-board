"use client";

import JobCard from "@/app/components/JobCard";
import React, { useEffect, useState } from "react";

export interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

const JobList: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch job data");
        }
        return response.json();
      })
      .then((data) => {
        setJobs(data);
        setFilteredJobs(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
        setLoading(false);
      });
  }, []);

  const addSelectedKeyword = (keyword: string) => {
    const lowercasedKeyword = keyword.toLowerCase();
    if (!selectedKeywords.includes(lowercasedKeyword)) {
      const newKeywords = [...selectedKeywords, lowercasedKeyword];
      setSelectedKeywords(newKeywords);
      filterAndSortJobs(newKeywords); // Filter and sort jobs when keyword is added
    }
  };

  const removeSelectedKeyword = (keyword: string) => {
    const newKeywords = selectedKeywords.filter(
      (kw) => kw !== keyword.toLowerCase()
    );
    setSelectedKeywords(newKeywords);
    filterAndSortJobs(newKeywords); // Filter and sort jobs when keyword is removed
  };

  // Clear all selected keywords (badges)
  const clearSelectedKeywords = () => {
    setSelectedKeywords([]);
    setFilteredJobs(jobs); // Reset to show all jobs when cleared
  };

  const filterAndSortJobs = (keywords: string[]) => {
    if (keywords.length === 0) {
      setFilteredJobs(jobs); // Show all jobs when no keywords are selected
    } else {
      // Filter jobs based on matching languages or tools
      const filtered = jobs.filter((job) =>
        keywords.every((kw) =>
          [...job.languages, ...job.tools].some(
            (skill) => skill.toLowerCase() === kw.toLowerCase()
          )
        )
      );

      const sortedJobs = filtered.sort((a, b) => {
        // Convert postedAt to Date object for comparison
        const dateA = new Date(a.postedAt);
        const dateB = new Date(b.postedAt);
        return dateB.getTime() - dateA.getTime(); // Sort by most recent first
      });

      setFilteredJobs(sortedJobs);
    }
  };

  if (loading) {
    return <p>Loading jobs...</p>;
  }

  return (
    <div>
      {selectedKeywords.length > 0 && (
        <div className="filter-box relative mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2 bg-white p-6 rounded-lg shadow-md border border-neutral-lightGrayishCyan">
            <div className="flex flex-row gap-4">
              {selectedKeywords.map((keyword, index) => (
                <div
                  key={index}
                  className="flex items-center bg-neutral-lightGrayishCyanBg text-primary font-bold text-sm rounded h-7 overflow-hidden">
                  <span className="px-2">{keyword}</span>
                  <button
                    onClick={() => removeSelectedKeyword(keyword)}
                    className="ml-auto text-white bg-primary w-5 h-full flex items-center justify-center text-xs font-bold">
                    ×
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={clearSelectedKeywords}
              className="ml-2 text-neutral-darkGrayishCyan bg-white rounded-full p-2 text-sm">
              Clear
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-6 sm:px-4 md:px-10 lg:px-12">
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            data={job}
            addSelectedKeyword={addSelectedKeyword}
          />
        ))}
      </div>
    </div>
  );
};

export default JobList;
