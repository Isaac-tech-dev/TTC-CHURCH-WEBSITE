"use client";
import Image from "next/image";
import PT from "../../public/new/lead/PT.png";
import PT2 from "../../public/new/lead/PT2.png";

const About = () => {
  return (
    <section className={`w-full md:px-[60px] py-12 flex flex-col md:flex-row items-start justify-around`}>
      {/* Left: Title & Image */}
      <div className={`w-full flex flex-col items-center md:items-start px-[20px]`}>
        {/* Title above image */}
        <div className={`text-center xl:text-left md:text-center mb-4 w-full`}>
          <h2 className={`md:text-[36px] text-[20px] font-extrabold text-[#231F60]`}>BIO</h2>
          <h3 className={`md:text-[36px] text-[20px] font-extrabold text-[#231F60] mt-2`}>
            AND MINISTRY JOURNEY
          </h3>
        </div>

        <Image
          src={PT2}
          alt="Pastor Tony Abraham"
          width={500}
          height={500}
          className={`shadow-lg`}
        />
      </div>

      {/* Right: Text Content */}
      <div className={`w-full h-full leading-[35px] space-y-[30px] px-[20px]`}>
        <p className={`mt-4 text-gray-700 text-justify`}>
          Pastor Tony Abraham is a lead pastor of{" "}
          <b>The Triumphant Community</b>, Ota. He has been instrumental in
          fostering a thriving congregation built on faith, transformation, and
          community.
        </p>

        <p className="mt-4 text-gray-700 text-justify">
          With a heart ablaze for prayer, Pastor Tony is also the convener of{" "}
          <b>Fervour</b>, a powerful prayer meeting where believers gather to
          seek God, intercede for one another, and witness His miraculous power.
          Through fervent prayers and intercession, lives have been touched,
          hearts mended, and testimonies birthed.
        </p>

        <p className="mt-4 text-gray-700 text-justify">
          He also leads <b>Digging Deep</b>, an intensive Bible study initiative
          that immerses participants in Scripture for in-depth spiritual growth.
          Additionally, through <b>The Growth Platform</b>, Pastor Tony mentors
          individuals, guiding them in faith, personal development, and life's
          challenges.
        </p>

        <p className="mt-4 text-gray-700 text-justify">
          Having embarked on his faith journey at a young age, Pastor Tony's
          life is a testament to God's grace and the power of unwavering faith.
          His sermons are known for their depth, relatability, and practical
          insights, equipping believers to navigate life with courage.
        </p>

        <p className="mt-4 text-gray-700 text-justify">
          Above all, he is a devoted husband to his beloved wife,{" "}
          <b>Mrs. Modoluwamu Abraham</b>. Together, they continue to impact
          lives and advance God's kingdom.
        </p>
      </div>
    </section>
  );
};

export default About;
