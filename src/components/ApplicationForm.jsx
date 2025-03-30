import React from "react";
import useFormHandler from "../hooks/useFormHandler";
import { PersonalInfoForm } from "./PersonalInfoForm";
import { ExperienceForm } from "./ExperienceForm";
import { AdditionalInfoForm } from "./AdditionalInfoForm";

const ApplicationForm = () => {
  const { formData, errors, handleChange, addSkill, removeSkill, nextStep, prevStep, step } = useFormHandler();

  return (
    <div className="p-6  mt-10 text-white">
      {step === 1 && <PersonalInfoForm formData={formData} errors={errors} handleChange={handleChange} nextStep={nextStep} />}
      {step === 2 && <ExperienceForm formData={formData} errors={errors} handleChange={handleChange} addSkill={addSkill} removeSkill={removeSkill} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <AdditionalInfoForm formData={formData} errors={errors} handleChange={handleChange} prevStep={prevStep} />}
    </div>
  );
};

export default ApplicationForm;
