export const ExperienceForm = ({ formData, errors, handleChange, addSkill, removeSkill, nextStep, prevStep }) => (
  <div className=" mt-10">
    <h2 className="text-2xl font-semibold text-white mb-4">Experience</h2>

    
    <div className="mb-4">
      <label className="block text-sm font-medium text-white mb-2">Years of Experience</label>
      <input 
        name="experience" 
        value={formData.experience} 
        onChange={handleChange} 
        placeholder="Enter your experience in years" 
        className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
    </div>


    <div className="mb-4">
      <h3 className="text-lg  text-white mb-2">Skills</h3>

      <div className="flex flex-wrap gap-2">
        {formData.skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-gray-200 text-black px-3 py-1 rounded-full flex items-center"
          >
            {skill} 
            <button 
              onClick={() => removeSkill(skill)} 
              className="ml-2 text-red-600 hover:text-red-800 cursor-pointer"
            >
              ✕
            </button>
          </span>
        ))}
      </div>

   
      <div className="mt-3 flex gap-2">
        <input 
          id="newSkill" 
          placeholder="Add a skill" 
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <button 
          onClick={() => {
            const skillInput = document.getElementById("newSkill");
            const skill = skillInput.value.trim();
            if (skill) {
              addSkill(skill);
              skillInput.value = "";  
            }
          }} 
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
        >
          Add
        </button>
      </div>
      {errors.skills && <p className="text-red-500 text-sm mt-1">{errors.skills}</p>}
    </div>

    <div className="flex justify-between mt-4">
      <button 
        onClick={prevStep} 
        className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300 cursor-pointer"
      >
        Back
      </button>
      <button 
        onClick={nextStep} 
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        Next
      </button>
    </div>
  </div>
);
