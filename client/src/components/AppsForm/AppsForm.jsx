import React, { useState } from 'react';
import './AppsForm.scss';

const AppsForm = () => {
  const [formData, setFormData] = useState({
    timeOfApplication: '',
    jobTitle: '',
    company: '',
    jobLink: '',
    deadline: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        setFormData({
          timeOfApplication: '',
          jobTitle: '',
          company: '',
          jobLink: '',
          deadline: ''
        });
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="form">
      <h2 className="form__title">New Job Application Form</h2>
      <form className="form__body" onSubmit={handleSubmit}>
        <div className="form__group form__group--time">
          <label className="form__label" htmlFor="timeOfApplication">Time of Application</label>
          <input
            className="form__input"
            type="time"
            id="timeOfApplication"
            name="timeOfApplication"
            value={formData.timeOfApplication}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form__group form__group--job-title">
          <label className="form__label" htmlFor="jobTitle">Job Title</label>
          <input
            className="form__input"
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            placeholder="Enter job title"
            required
          />
        </div>

        <div className="form__group form__group--company">
          <label className="form__label" htmlFor="company">Company</label>
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
          <label className="form__label" htmlFor="jobLink">Link to the Job on the Company Site</label>
          <input
            className="form__input"
            type="url"
            id="jobLink"
            name="jobLink"
            value={formData.jobLink}
            onChange={handleChange}
            placeholder="Enter URL"
            required
          />
        </div>

        <div className="form__group form__group--deadline">
          <label className="form__label" htmlFor="deadline">Deadline</label>
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
          <button className="form__button" type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  );
};

export default AppsForm;
