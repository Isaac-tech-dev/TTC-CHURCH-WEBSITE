"use client";
import Image from "next/image";
import PT from "../../public/new/lead/PT.png";

const About = () => {
  return (
    <section className={`px-[20px] md:px-[60px] py-[20px] bg-[#000000]`}>
      <h2 className={`xl:text-[40px] md:hidden text-[20px] text-[#FF0909] font-bold`}>
        MEET THE LEAD
      </h2>

      <div className={`w-full flex flex-col md:flex-row items-center justify-end`}>
        {/* Image Section */}
        <div className={`xl:w-[635px] md:absolute xl:left-[28%] md:left-[9%] xl:top-[35%] md:top-[22%] flex items-center justify-center`}>
          <Image src={PT} alt="Pastor Tony Abraham" className={`md:w-[451px] w-[50%] md:h-[801px] h-[50%]  object-cover`} />
        </div>

        {/* First Column - Right Side */}
        <div className={`md:w-[638px] w-full`}>
          <p className={`md:text-[20px] text-[18px] text-justify leading-[35px] font-normal text-white`}>
            Pastor Tony Abraham is a dynamic and inspiring leader, passionately
            dedicated to serving God and His people. As the lead pastor of The
            Triumphant Community, Ota, he has been instrumental in fostering a
            thriving congregation built on faith, transformation, and community.
            <br />
            <br />
            With a heart ablaze for prayer, Pastor Tony is also the convener of
            Fervour, a powerful prayer meeting where believers gather to seek
            God, intercede for one another, and witness His miraculous power.
            Through fervent prayers and intercession, lives have been touched,
            hearts mended, and testimonies birthed.
          </p>
        </div>
      </div>

      {/* Second Column - Below Image */}
      <div className={`mt-6 md:w-[635px] w-full`}>
        <p className={`md:text-[20px] text-[18px] text-justify leading-[35px] font-normal text-white`}>
          He also leads Digging Deep, an intensive Bible study initiative that
          immerses participants in Scripture for in-depth spiritual growth.
          Additionally, through The Growth Platform, Pastor Tony mentors
          individuals, guiding them in faith, personal development, and life’s
          challenges.
          <br />
          <br />
          Having embarked on his faith journey at a young age, Pastor Tony's
          life is a testament to God’s grace and the power of unwavering
          faith. His sermons are known for their depth, relatability, and
          practical insights, equipping believers to navigate life with
          courage. Above all, he is a devoted husband to his beloved wife,
          Lady Modoluwamu Abraham. Together, they continue to impact lives and
          advance God’s kingdom.
        </p>
      </div>
    </section>
  );
};

export default About;
