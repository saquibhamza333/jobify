import { useState } from "react";
import * as Yup from "yup";

const useFormHandler = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    skills: [],
    coverLetter: "",
    startDate: ""
  });
  const [errors, setErrors] = useState({});

  const schemas = {
    1: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be 10 digits")
        .required("Phone is required"),
    }),
    2: Yup.object().shape({
      experience: Yup.number()
        .min(0, "Experience cannot be negative")
        .required("Experience is required"),
      skills: Yup.array().min(1, "At least one skill is required"),
    }),
    3: Yup.object().shape({
      coverLetter: Yup.string().required("Cover letter is required"),
      startDate: Yup.date().required("Start date is required"),
    })
  };

  const validateStep = async () => {
    try {
      await schemas[step].validate(formData, { abortEarly: false });
      return true;
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const addSkill = (skill) => {
    setFormData({ ...formData, skills: [...formData.skills, skill] });
  };

  const removeSkill = (skill) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((s) => s !== skill),
    });
  };

  const nextStep = async () => {
    if (await validateStep()) setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return { formData, errors, handleChange, addSkill, removeSkill, nextStep, prevStep, step };
};

export default useFormHandler;