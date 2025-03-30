export const PersonalInfoForm = ({ formData, errors, handleChange, nextStep }) => (
  <div className=" p-6  mt-10">
    <h2 className="text-2xl font-semibold text-white mb-4">Personal Information</h2>
    
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-white">Name</label>
        <input 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Enter your name" 
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-white">Email</label>
        <input 
          name="email" 
          type="email"
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Enter your email" 
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-white">Phone</label>
        <input 
          name="phone" 
          type="tel"
          value={formData.phone} 
          onChange={handleChange} 
          placeholder="Enter your phone number" 
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
      </div>

      <button 
        onClick={nextStep} 
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
      >
        Next
      </button>
    </div>
  </div>
);

