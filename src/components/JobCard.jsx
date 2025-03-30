import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  console.log(job.logo);
  return (
    <div className="m-5 min-[320]:">
      <div className=" mx-2 mt-10 grid  grid-cols-12 space-x-8 overflow-hidden rounded-lg border py-8 text-gray-300 shadow transition hover:shadow-lg sm:mx-auto">
        <div className="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-300 hover:text-gray-700 sm:-order-1 sm:ml-2">
          <div className="group relative h-16 w-16 overflow-hidden rounded-lg">
            <img src={job.logo} alt={job.company} className="h-full w-full object-fit text-gray-300" />
          </div>
        </div>
        <div className="col-span-11 flex flex-col pr-8 text-left sm:pl-4 ml-4">
          <h3 className="text-sm text-gray-300">{job.company}</h3>
          <div className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl">
            {job.title}
          </div>
          <p className="overflow-hidden pr-7 text-sm">{job.description}</p>

          <div className="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-300 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
            <div>
              Experience:
              <span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">
                {job.experience} Years
              </span>
            </div>
            <div>
              Salary:
              <span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">
                {job.salary}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <Link
              to={`/job/${job.id}`}
              className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

