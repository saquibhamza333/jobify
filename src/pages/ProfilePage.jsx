import { useState } from "react";
import { useUser } from "../context/UserContext";
import { FiEdit } from "react-icons/fi";

const ProfilePage = () => {
  const { user, updateUser } = useUser();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center min-h-screen w-full bg-gray-950 p-4 mt-10">
      <div className=" p-6 md:p-8  relative w-full">
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-white  ">Profile</h2>
          <button 
            onClick={() => setIsEditing(!isEditing)} 
            className="text-gray-300 hover:text-gray-800 transition cursor-pointer"
          >
            <FiEdit size={20} />
          </button>
        </div>

       
        {!isEditing ? (
          <div className="space-y-4">
            <ProfileField label="Username" value={user.username} />
            <ProfileField label="Email" value={user.email} />
            <ProfileField label="Phone" value={user.phone || "Not provided"} />
            <ProfileField label="Experience" value={user.experience || "Not specified"} />
            <ProfileField label="Location" value={user.location || "Not specified"} />
            <ProfileField label="Available to join in" value={`${user.availability || "0"} days`} />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-white">
            <EditableField label="Username" name="username" value={formData.username} onChange={handleChange} />
            <EditableField label="Email" name="email" value={formData.email} onChange={handleChange} />
            <EditableField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
            <EditableField label="Experience" name="experience" value={formData.experience} onChange={handleChange} />
            <EditableField label="Location" name="location" value={formData.location} onChange={handleChange} />
            <EditableField label="Available to join in (days)" name="availability" value={formData.availability} onChange={handleChange} />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
              Save Changes
            </button>
          </form>
        )}
      </div>
    </div>
  );
};


const ProfileField = ({ label, value }) => (
  <div>
    <p className="text-white text-md font-bold mb-2">{label}</p>
    <p className="text-gray-50 text-sm ">{value}</p>
  </div>
);

const EditableField = ({ label, name, value, onChange }) => (
  <div>
    <label className="text-white text- mb-4 ">{label}</label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
  </div>
);


export default ProfilePage