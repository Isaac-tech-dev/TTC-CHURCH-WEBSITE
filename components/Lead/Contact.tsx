"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";

const Contact = () => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLScgbBayMCmNbahbbs6miGERLiYaCRdFGYzZ4KN8pCuDbXL_Jg/formResponse"; // Replace with your Google Form's "action" URL

  const NAME_ENTRY_ID = "entry.1104066759"; // Ministry Name
  const LOCATION_ENTRY_ID = "entry.1618368439"; // Location
  const PHONE_ENTRY_ID = "entry.1992657524"; // Phone Number
  const EMAIL_ENTRY_ID = "entry.135749552"; // Email Address

  // Date fields are split into year, month, and day
  const DATE_YEAR_ENTRY_ID = "entry.386929787_year";
  const DATE_MONTH_ENTRY_ID = "entry.386929787_month";
  const DATE_DAY_ENTRY_ID = "entry.386929787_day";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !location || !date || !phone) {
      alert("Please fill in all fields.");
      return;
    }

    const [year, month, day] = date.split("-");

    const formData = new FormData();
    formData.append(NAME_ENTRY_ID, name);
    formData.append(LOCATION_ENTRY_ID, location);
    formData.append(PHONE_ENTRY_ID, phone);
    formData.append(EMAIL_ENTRY_ID, email);
    formData.append(DATE_YEAR_ENTRY_ID, year);
    formData.append(DATE_MONTH_ENTRY_ID, month);
    formData.append(DATE_DAY_ENTRY_ID, day);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Forms
      });

      alert("Subscribed to Newsletter Successfully!");

      setName("");
      setLocation("");
      setDate("");
      setPhone("");
      setEmail("");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };
  const handleLocationChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLocation(event.target.value);
  };
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setDate(event.target.value);
  };
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };
  return (
    <section className={`md:px-[60px] px-[20px] py-12`}>
      <h2
        className={`md:text-[48px] text-[16px] font-bold text-indigo-900 text-center`}
      >
        INVITATIONS TO MEETINGS & MINISTRATIONS
      </h2>
      <p
        className={`text-center text-gray-700 mt-2 md:text-[24px] text-[12px]`}
      >
        Contact Pastor Tony Abraham through{" "}
        <a
          href="https://www.linktree.com"
          target="_blank"
          className={`text-red-500 font-bold`}
        >
          www.linktree.com
        </a>{" "}
        or reach by filling the form below
      </p>

      <div className={`mt-8 bg-[#F0F0F0] w-full p-8 rounded-lg shadow-lg`}>
        <form
          className={`grid grid-cols-1 md:grid-cols-2 gap-6`}
          onSubmit={handleSubmit}
        >
          <div>
            <label className={`block text-indigo-900 font-medium`}>
              Ministry Name
            </label>
            <input
              type="text"
              className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Enter Ministry Name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div>
            <label className={`block text-indigo-900 font-medium`}>
              Location
            </label>
            <input
              type="text"
              className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Enter Location"
              value={location}
              onChange={handleLocationChange}
            />
          </div>

          <div>
            <label className={`block text-indigo-900 font-medium`}>
              Meeting/Ministration Date
            </label>
            <input
              type="date"
              className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              value={date}
              onChange={handleDateChange}
            />
          </div>

          <div>
            <label className={`block text-indigo-900 font-medium`}>
              Phone Number
            </label>
            <input
              type="tel"
              className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Enter Phone Number"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>

          <div className={`md:col-span-2 md:w-[49%]`}>
            <label className={`block text-indigo-900 font-medium`}>
              E-mail Address
            </label>
            <input
              type="email"
              className={`w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              placeholder="Enter E-mail Address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className={`mt-6 md:text-start text-center`}>
            <button
              className={`bg-indigo-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition`}
            >
              Send Invite ✈
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
