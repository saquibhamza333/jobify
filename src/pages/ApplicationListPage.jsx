import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteApplication } from "../redux/applicationSlice"; 
import { FaTrash } from "react-icons/fa"; 


const ApplicationListPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const applications = useSelector((state) => state.applications.applications);

  if (applications.length === 0) {
    return (
      <div className="mx-auto text-center mt-24 ">
        <h2 className="text-2xl font-semibold text-gray-300">No Applications Found</h2>
        <p className="text-gray-300 mt-2">You haven't submitted any job applications yet.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Apply Now
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-2xl mt-20 bg-gray-950">
      <h2 className="text-2xl font-semibold text-gray-300 mb-4">Submitted Applications</h2>

      <ul>
        {applications.map((application, index) => (
          <li key={index} className="border-b border-gray-300 py-4 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-white mb-2">{application.name}</h3>
              <p className="text-gray-300 mb-2">Experience: {application.experience} years</p>
              <p className="text-gray-300 truncate w-64 mb-2">{application.coverLetter}</p>
              <button
                onClick={() => navigate(`/application/${index}`)}
                className="mt-2 bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
              >
                View Details
              </button>
            </div>

               <button
              onClick={() => dispatch(deleteApplication(application.id))}
              className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition duration-300 flex items-center gap-2 cursor-pointer"
            >
              <FaTrash className="w-5 h-5" /> Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApplicationListPage;
