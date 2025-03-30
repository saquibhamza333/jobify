import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { editApplication } from "../redux/applicationSlice"; 

import { useNavigate } from "react-router-dom";
import SummarySection from "../components/SummarySection";
import EditableField from "../components/EditableField";
const ApplicationSummaryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const applications = useSelector((state) => state.applications.applications);


  const latestApplication = applications?.length > 0 ? applications[applications.length - 1] : {};
  const [formData, setFormData] = useState({ ...latestApplication });
  const [editMode, setEditMode] = useState({});


  if (!applications || applications.length === 0) {
    return (
      <div className="max-w-lg text-center mt-20">
        <h2 className="text-2xl font-semibold text-gray-800">No Applications Found</h2>
        <button onClick={() => navigate("/")} className="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
          Start Application
        </button>
      </div>
    );
  }

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = (field) => {
    dispatch(editApplication(formData));
    setEditMode({ ...editMode, [field]: false });
  };

  return (
    <div className=" p-8 mt-20 w-full">
      <h2 className="text-2xl font-bold  text-white mb-6 text-center">Application Summary</h2>

      <SummarySection title="Personal Information">
        <EditableField label="Name" field="name" value={formData.name} editMode={editMode} setEditMode={setEditMode} handleChange={handleChange} handleSave={handleSave} />
        <EditableField label="Email" field="email" value={formData.email} editMode={editMode} setEditMode={setEditMode} handleChange={handleChange} handleSave={handleSave} />
        <EditableField label="Phone" field="phone" value={formData.phone} editMode={editMode} setEditMode={setEditMode} handleChange={handleChange} handleSave={handleSave} />
      </SummarySection>

      <SummarySection title="Experience">
        <EditableField label="Years of Experience" field="experience" value={formData.experience} editMode={editMode} setEditMode={setEditMode} handleChange={handleChange} handleSave={handleSave} />
        <EditableField label="Skills" field="skills" value={formData.skills?.join(", ") || "None"} editMode={editMode} setEditMode={setEditMode} handleChange={handleChange} handleSave={handleSave} />
      </SummarySection>

      <SummarySection title="Additional Information">
        <EditableField label="Cover Letter" field="coverLetter" value={formData.coverLetter} editMode={editMode} setEditMode={setEditMode} handleChange={handleChange} handleSave={handleSave} />
        <EditableField label="Preferred Start Date" field="startDate" value={formData.startDate} editMode={editMode} setEditMode={setEditMode} handleChange={handleChange} handleSave={handleSave} />
      </SummarySection>
    </div>
  );
};

export default ApplicationSummaryPage