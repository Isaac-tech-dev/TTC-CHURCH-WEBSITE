"use client";
import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";
import Mail from "../../public/new/mail.png";

function NewsLetter() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSeAc_qSQsGjJ05utwiGK-EDK3b0V0XhQhGJiLEUsZGLtSCxZg/formResponse"; // Replace with your Google Form's "action" URL
  const NAME_ENTRY_ID = "entry.1219302248"; // Replace with your Name field entry ID
  const EMAIL_ENTRY_ID = "entry.362650348"; // Replace with your Email field entry ID

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields.");
      return;
    }

    const formData = new FormData();
    formData.append(NAME_ENTRY_ID, name);
    formData.append(EMAIL_ENTRY_ID, email);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors", // Required for Google Forms
      });

      alert("Subscribed to Newsletter Successfully!");

      setName("");
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

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);
  };

  return (
    <div
      className={`flex xl:flex-row lg:flex-row flex-col justify-between items-center md:px-[60px] px-[20px] py-[20px] bg-[#F8FCFF] h-full`}
    >
      <div
        className={`flex flex-col xl:w-2/4 w-full xl:justify-start xl:items-start lg:justify-start lg:items-start md:justify-center md:items-center`}
      >
        <div className={`flex flex-row items-center w-full`}>
          <h2 className={`md:text-[32px] text-[24px] font-inter-semibold`}>
            Become a part of our Family
          </h2>
          <Image
            src={Mail}
            className={`w-[10%] xl:block lg:block hidden`}
            alt=""
          />
        </div>
        <span
          className={`md:text-[20px] text-[14px] font-inter-regular md:w-[60%] w-full`}
        >
          Get notifications about TTC Meetings, Sermons, events, announcements
          and resources directly to you.
        </span>
      </div>

      {/* Subscribe Form */}
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col xl:justify-end xl:items-end lg:justify-end lg:items-end justify-center items-center space-y-4 xl:mb-0 lg:mb-0 md:mb-[20px] w-full md:mt-0 mt-[10px]`}
      >
        <input
          placeholder="Name"
          value={name}
          className={`px-[10px] py-[15px] xl:w-[400px] lg:w-[300px] md:w-[300px] w-full border-[1.5px] border-[#7A7A7A] rounded-[7px]`}
          type="name"
          onChange={handleNameChange}
        />
        <input
          placeholder="Email Address"
          value={email}
          type="email"
          className={`px-[10px] py-[15px] xl:w-[400px] lg:w-[300px] md:w-[300px] w-full border-[1.5px] border-[#7A7A7A] rounded-[7px]`}
          onChange={handleEmailChange}
        />
        <button
          className={`bg-[#231F60] px-[10px] py-[10px] w-[160px] items-center justify-center flex rounded-[7px]`}
        >
          <h2 className={`text-[#fff] text-[14px] font-inter-regular`}>
            Subscribe
          </h2>
        </button>
      </form>
    </div>
  );
}

export default NewsLetter;
