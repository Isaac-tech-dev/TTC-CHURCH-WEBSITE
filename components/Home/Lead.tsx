"use client";
import Image from "next/image";
import PT from "../../public/new/PT.png";
import Link from "next/link";

const Lead = () => {
  return (
    <section
      className={`flex flex-col md:flex-row-reverse items-center justify-between gap-10 px-[20px] md:px-[60px] py-12 bg-[#F8F5F5]`}
    >
      {/* Left Image Section */}
      <div className={`relative flex items-center justify-center`}>
        <Image
          src={PT} // Replace with the actual image path
          alt="Triumphant Community"
          width={467}
          height={616}
          className={`rounded-xl shadow-lg`}
        />
      </div>

      {/* Right Text Section */}
      <div className={`md:w-[50%]`}>
        <h2
          className={`md:text-[48px] md:text-start text-[20px] text-center font-bold text-[#231F60] mb-4`}
        >
          MEET THE LEAD
        </h2>
        <p
          className={`mb-4 md:text-[18px] md:text-justify text-[14px] text-justify w-full`}
        >
          <span className={`font-extrabold`}>Pastor Tony Abraham </span>is the
          lead pastor of the triumphant community which is a leading faith
          believing community that aims to see its members victorious in Christ
          and victorious with Christ.
        </p>
        <p
          className={`mb-4 md:text-[18px] md:text-justify text-[14px] text-justify w-full`}
        >
          With a heart ablaze for prayer, Pastor Tony is also the convener of
          Fervour, a powerful prayer meeting where believers gather to seek God,
          intercede for one another, and witness His miraculous power. Through
          fervent prayers and intercession, lives have been touched, hearts
          mended, and testimonies birthed{" "}
          <Link href="/lead">
            <span className="text-[#F41123] cursor-pointer">read more...</span>
          </Link>
        </p>
        <Link href="/lead">
          <button className="bg-[#231F60] text-white md:w-[148px] h-[48px] p-[10px] rounded-[15px] flex items-center justify-center w-full">
            See More
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Lead;
