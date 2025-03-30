import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addApplication } from "../redux/applicationSlice"; 

export const AdditionalInfoForm = ({ formData, errors, handleChange, prevStep }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
   
    dispatch(addApplication(formData));


    navigate("/applications");
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold text-white mb-4">Additional Information</h2>


      <div className="mb-4">
        <label className="block text-sm font-medium text-white mb-2">Cover Letter</label>
        <textarea 
          name="coverLetter" 
          value={formData.coverLetter} 
          onChange={handleChange} 
          placeholder="Write your cover letter here..." 
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none h-28 resize-none"
        />
        {errors.coverLetter && <p className="text-red-500 text-sm mt-1">{errors.coverLetter}</p>}
      </div>


      <div className="mb-4">
        <label className="block text-sm font-medium text-white mb-2">Preferred Start Date</label>
        <input 
          name="startDate" 
          type="date" 
          value={formData.startDate} 
          onChange={handleChange} 
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {errors.startDate && <p className="text-red-500 text-sm mt-1">{errors.startDate}</p>}
      </div>

      
      <div className="flex justify-between mt-4">
        <button 
          onClick={prevStep} 
          className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300 cursor-pointer"
        >
          Back
        </button>
        <button 
          onClick={handleSubmit} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
