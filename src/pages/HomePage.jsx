import React from 'react';
import JobCard from '../components/JobCard';

import jobs from "../data/jobData"


const HomePage = () => {
  return (
    <div className="w-full min-h-screen p-10 mt-10 bg-gray-950">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};


export default HomePage;
