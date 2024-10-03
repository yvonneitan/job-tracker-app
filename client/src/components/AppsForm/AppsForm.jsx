import React, { useState } from "react";
import axios from "axios";
import "./AppsForm.scss";

const baseUrl = "http://localhost:8080";
const dataUrl = "http://localhost:8080/data";

const AppsForm = () => {
  const [formData, setFormData] = useState({
    time_of_application: "",
    job_title: "",
    company: "",
    job_link: "",
    deadline: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    try {
      const response = await axios.post(baseUrl, formData);
      console.log("my response is ", response);
      if (response) {
        console.log("Form submitted successfully");
        setFormData({
          time_of_application: "",
          job_title: "",
          company: "",
          job_link: "",
          deadline: "",
        });
      } else {
        console.error("Error submitting form:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form">
      <h2 className="form__title">New Job Application Form</h2>
      <form className="form__body" onSubmit={handleSubmit}>
        <div className="form__group form__group--time">
          <label className="form__label" htmlFor="time_of_application">
            Time of Application
          </label>
          <input
            className="form__input"
            type="time"
            id="time_of_application"
            name="time_of_application"
            value={formData.time_of_application}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form__group form__group--job-title">
          <label className="form__label" htmlFor="job_title">
            Job Title
          </label>
          <input
            className="form__input"
            type="text"
            id="job_title"
            name="job_title"
            value={formData.job_title}
            onChange={handleChange}
            placeholder="Enter job title"
            required
          />
        </div>

        <div className="form__group form__group--company">
          <label className="form__label" htmlFor="company">
            Company
          </label>
          <input
            className="form__input"
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Enter company name"
            required
          />
        </div>

        <div className="form__group form__group--job-link">
          <label className="form__label" htmlFor="job_link">
            Link to the Job on the Company Site
          </label>
          <input
            className="form__input"
            type="url"
            id="job_link"
            name="job_link"
            value={formData.job_link}
            onChange={handleChange}
            placeholder="Enter URL"
            required
          />
        </div>

        <div className="form__group form__group--deadline">
          <label className="form__label" htmlFor="deadline">
            Deadline
          </label>
          <input
            className="form__input"
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form__group form__group--submit">
          <button className="form__button" type="submit">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppsForm;
