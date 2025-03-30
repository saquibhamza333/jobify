import { FaPencilAlt } from "react-icons/fa";

const EditableField = ({ label, field, value, editMode, setEditMode, handleChange, handleSave }) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <p className="text-white w-full">
        <strong className="text-white">{label}:</strong>
        {editMode[field] ? (
          <input
            type="text"
            value={value}
            onChange={(e) => handleChange(field, e.target.value)}
            className="ml-2 p-1 border text-white rounded"
          />
        ) : (
          <span className="ml-2">{value}</span>
        )}
      </p>
      {editMode[field] ? (
        <button onClick={() => handleSave(field)} className="text-blue-600 ml-2 cursor-pointer">✅</button>
      ) : (
        <FaPencilAlt className="text-gray-500 ml-2 cursor-pointer" onClick={() => setEditMode({ ...editMode, [field]: true })} />
      )}
    </div>
  );
};


export default EditableField;