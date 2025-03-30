import React from "react";
import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobData";

const JobDetailsPage = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id.toString() === id); 

  if (!job) {
    return <p className="text-center text-lg text-red-600 mt-10">Job not found.</p>;
  }

  return (
    <div className="max-w-3xl  p-6 mt-20">
     
      <div className="flex items-center gap-4">
        <img src={job.logo} alt={job.company} className="w-16 h-16 rounded-md" />
        <div>
          <h2 className="text-2xl font-bold text-white">{job.title}</h2>
          <p className="text-white">{job.company}</p>
        </div>
      </div>

    
      <p className="mt-4 text-white">{job.fullDescription}</p>

      <div className="mt-5 flex flex-col gap-2 text-white">
        <p>
          <strong>Experience:</strong> {job.experience}
        </p>
        <p>
          <strong>Salary:</strong> {job.salary}
        </p>
      </div>

      
      <div className="mt-5">
        <h3 className="text-lg font-semibold text-white">Requirements:</h3>
        <ul className="list-disc list-inside mt-2 text-white">
          {job.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>

      
      <div className="mt-6 flex gap-4">
        <Link to="/" className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600">
          Back to Jobs
        </Link>
        <Link to={`/apply/${job.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default JobDetailsPage;
