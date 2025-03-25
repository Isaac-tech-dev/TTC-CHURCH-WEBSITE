//import React from 'react'
"use client";
import Image from "next/image";
import Edified from "../public/new/Edified.png";

function GetEdified() {
  return (
    <div
      className={`flex xl:flex-row justify-between flex-col md:px-[60px] px-[20px] md:py-[100px] py-[50px] md:space-x-5 bg-[#FFFFFF]`}
    >
      {/* Left Side */}
      <div
        className={`flex flex-col justify-start items-start xl:w-2/5 w-full mb-[10px]`}
      >
        <h2 className={`text-[28px] font-regular`}>A Rich Experience,</h2>
        <h2 className={`text-[28px] font-bold`}>
          <strong>Get Edified</strong>
        </h2>

        <div className={`mt-[20px]`}>
          <span
            className={`text-[16px] md:text-[18px] font-regular text-justify`}
          >
            We are committed to cultivating followers who are firmly rooted in
            the teachings of God's word, demonstrating a vibrant faith that
            yields remarkable outcomes.
          </span>
          <br />
          <br />
          <br />
          <span
            className={`text-[16px] md:text-[18px] font-regular text-justify`}
          >
            We are devoted to prayer and fasting, exhibiting both the gifts and
            virtues of the Holy Spirit, engaging in worship, offering reverence
            to God in all aspects of life, and harnessing the divine power
            continuously
          </span>
        </div>
      </div>

      {/* Links */}
      <div className={`flex items-center justify-center md:w-[65%]`}>
        <div
          className={`bg-[#D72929] w-[100%] xl:h-[130px] h-[90px] relative rounded-[6px] flex items-center justify-center`}
        >
          <div
            className={`absolute xl:-bottom-20 -bottom-7 xl:left-[10%] lg:left-[10%] md:left-[10%] flex xl:flex-row lg:flex-row md:flex-row items-center space-x-6 z-0`}
          >
            {/* Live Stream */}
            <div
              className={`flex flex-row items-center justify-center shadow-md rounded-[13px] bg-[#fff] xl:w-[250px] xl:h-[153px] lg:w-[200px] lg:h-[100px] md:w-[150px] md:h-[80px] space-x-4 lg:px-[10px] px-[20px] lg:py-[5px] py-[10px]`}
            >
              <svg
                width="33"
                height="26"
                viewBox="0 0 33 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16595 0.516772C7.31932 0.680544 7.44099 0.875024 7.524 1.0891C7.60701 1.30317 7.64974 1.53263 7.64974 1.76437C7.64974 1.99611 7.60701 2.22557 7.524 2.43964C7.44099 2.65371 7.31932 2.8482 7.16595 3.01197C4.69074 5.65849 3.30021 9.24767 3.30021 12.9901C3.30021 16.7325 4.69074 20.3217 7.16595 22.9682C7.3235 23.1309 7.44916 23.3255 7.53561 23.5406C7.62206 23.7558 7.66757 23.9871 7.66947 24.2213C7.67137 24.4554 7.62964 24.6876 7.5467 24.9043C7.46376 25.1211 7.34128 25.3179 7.1864 25.4835C7.03152 25.6491 6.84735 25.78 6.64463 25.8687C6.44191 25.9574 6.2247 26.002 6.00567 25.9999C5.78665 25.9979 5.5702 25.9493 5.36895 25.8568C5.1677 25.7644 4.98569 25.6301 4.83352 25.4617C-1.61117 18.5739 -1.61117 7.40457 4.83352 0.516772C5.14285 0.186188 5.56234 0.000475921 5.99974 0.000475921C6.43713 0.000475921 6.85662 0.186188 7.16595 0.516772ZM28.1677 0.516772C34.6108 7.40633 34.6108 18.5739 28.1677 25.4617C27.8584 25.7925 27.4388 25.9785 27.0013 25.9787C26.5637 25.9789 26.144 25.7932 25.8345 25.4625C25.5249 25.1319 25.351 24.6833 25.3508 24.2156C25.3507 23.7478 25.5243 23.2991 25.8336 22.9682C28.3089 20.3217 29.6994 16.7325 29.6994 12.9901C29.6994 9.24767 28.3089 5.65849 25.8336 3.01197C25.5241 2.68108 25.3502 2.23231 25.3502 1.76437C25.3502 1.29643 25.5241 0.847656 25.8336 0.516772C26.1432 0.185889 26.563 9.22421e-09 27.0007 0C27.4384 -9.22421e-09 27.8582 0.185889 28.1677 0.516772ZM12.0601 5.58475C12.3693 5.91543 12.5431 6.36388 12.5431 6.83146C12.5431 7.29905 12.3693 7.7475 12.0601 8.07818C11.4596 8.72007 10.9832 9.48213 10.6582 10.3208C10.3332 11.1595 10.166 12.0585 10.166 12.9663C10.166 13.8741 10.3332 14.773 10.6582 15.6117C10.9832 16.4505 11.4596 17.2125 12.0601 17.8544C12.2132 18.0182 12.3347 18.2127 12.4176 18.4267C12.5004 18.6408 12.543 18.8701 12.5429 19.1017C12.5428 19.3334 12.5001 19.5627 12.4171 19.7766C12.3341 19.9906 12.2125 20.185 12.0593 20.3487C11.906 20.5124 11.7241 20.6423 11.5239 20.7308C11.3237 20.8194 11.1091 20.8649 10.8925 20.8649C10.6758 20.8648 10.4613 20.8191 10.2611 20.7304C10.061 20.6417 9.87917 20.5117 9.72602 20.3478C7.89476 18.3901 6.86598 15.7349 6.86598 12.9663C6.86598 10.1977 7.89476 7.54248 9.72602 5.58475C9.87921 5.42079 10.0611 5.29073 10.2614 5.20199C10.4616 5.11325 10.6763 5.06757 10.8931 5.06757C11.1098 5.06757 11.3245 5.11325 11.5247 5.20199C11.725 5.29073 11.9069 5.42079 12.0601 5.58475ZM23.5375 5.58475C25.3688 7.54248 26.3975 10.1977 26.3975 12.9663C26.3975 15.7349 25.3688 18.3901 23.5375 20.3478C23.2264 20.669 22.8097 20.8468 22.3772 20.8428C21.9447 20.8388 21.531 20.6533 21.2252 20.3264C20.9193 19.9994 20.7458 19.5571 20.7421 19.0948C20.7383 18.6324 20.9046 18.187 21.2051 17.8544C21.8056 17.2125 22.2819 16.4505 22.6069 15.6117C22.9319 14.773 23.0992 13.8741 23.0992 12.9663C23.0992 12.0585 22.9319 11.1595 22.6069 10.3208C22.2819 9.48213 21.8056 8.72007 21.2051 8.07818C20.9046 7.7456 20.7383 7.30017 20.7421 6.83781C20.7458 6.37546 20.9193 5.93318 21.2252 5.60623C21.531 5.27928 21.9447 5.09383 22.3772 5.08981C22.8097 5.08579 23.2264 5.26353 23.5375 5.58475ZM16.6326 10.4693C17.2888 10.4693 17.9181 10.748 18.3822 11.2441C18.8462 11.7401 19.1069 12.4129 19.1069 13.1144C19.1069 13.8159 18.8462 14.4887 18.3822 14.9848C17.9181 15.4808 17.2888 15.7595 16.6326 15.7595C15.9764 15.7595 15.347 15.4808 14.883 14.9848C14.419 14.4887 14.1583 13.8159 14.1583 13.1144C14.1583 12.4129 14.419 11.7401 14.883 11.2441C15.347 10.748 15.9764 10.4693 16.6326 10.4693Z"
                  fill="black"
                />
              </svg>

              <div
                className={`flex-col justify-start items-start lg:block hidden`}
              >
                <h3
                  className={`text-[14px] font-inter-semibold text-[#D72929]`}
                >
                  LIVE SERMONS
                </h3>
                <span className={`text-[12px] font-inter-regular`}>
                  Stream Messages live!
                </span>
              </div>
            </div>

            {/* Video Sermons */}
            <div
              className={`flex flex-row items-center justify-center shadow-md rounded-[13px] bg-[#fff] xl:w-[250px] xl:h-[153px] lg:w-[200px] lg:h-[100px] md:w-[150px] md:h-[80px] space-x-4 lg:px-[10px] px-[20px] lg:py-[5px] py-[10px]`}
            >
              <svg
                width="43"
                height="29"
                viewBox="0 0 43 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 22.6522V6.34783C2 5.19471 2.45655 4.08882 3.2692 3.27345C4.08186 2.45807 5.18406 2 6.33333 2H24.75C25.8993 2 27.0015 2.45807 27.8141 3.27345C28.6268 4.08882 29.0833 5.19471 29.0833 6.34783V22.6522C29.0833 23.8053 28.6268 24.9112 27.8141 25.7265C27.0015 26.5419 25.8993 27 24.75 27H6.33333C5.18406 27 4.08186 26.5419 3.2692 25.7265C2.45655 24.9112 2 23.8053 2 22.6522ZM39.1973 3.61087L30.5307 11.3565C30.4164 11.4583 30.325 11.5831 30.2622 11.7229C30.1995 11.8626 30.1669 12.0141 30.1667 12.1674V16.0326C30.1669 16.1859 30.1995 16.3374 30.2622 16.4771C30.325 16.6169 30.4164 16.7417 30.5307 16.8435L39.1973 24.5891C39.3535 24.7283 39.5464 24.8191 39.7528 24.8508C39.9592 24.8825 40.1704 24.8537 40.3608 24.7678C40.5513 24.6819 40.713 24.5426 40.8264 24.3666C40.9398 24.1907 41.0001 23.9856 41 23.7761V4.42391C41.0001 4.21439 40.9398 4.00932 40.8264 3.83338C40.713 3.65744 40.5513 3.51813 40.3608 3.43222C40.1704 3.34632 39.9592 3.31748 39.7528 3.34917C39.5464 3.38087 39.3535 3.47175 39.1973 3.61087Z"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <div
                className={`flex-col justify-start items-start lg:block hidden`}
              >
                <h3
                  className={`text-[14px] font-inter-semibold text-[#D72929]`}
                >
                  VIDEO SERMONS
                </h3>
                <span className={`text-[12px] font-inter-regular`}>
                  Get blessed and edified
                </span>
              </div>
            </div>

            {/* Audio Sermons */}
            <div
              className={`flex flex-row items-center justify-center shadow-md rounded-[13px] bg-[#fff] xl:w-[250px] xl:h-[153px] lg:w-[200px] lg:h-[100px] md:w-[100px] md:h-[80px] space-x-4 lg:px-[10px] px-[20px] lg:py-[5px] py-[10px]`}
            >
              <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 0C16.949 5.92397e-05 17.3825 0.16493 17.718 0.46334C18.0536 0.76175 18.268 1.17295 18.3205 1.61893L18.3333 1.83345V31.1686C18.3328 31.6359 18.1539 32.0854 17.8331 32.4252C17.5123 32.765 17.0739 32.9695 16.6074 32.9968C16.141 33.0242 15.6816 32.8725 15.3233 32.5725C14.965 32.2726 14.7347 31.8471 14.6795 31.3831L14.6667 31.1686V1.83345C14.6667 1.34719 14.8598 0.880842 15.2036 0.537004C15.5475 0.193166 16.0138 0 16.5 0ZM9.16667 5.50034C9.6529 5.50034 10.1192 5.69351 10.463 6.03734C10.8068 6.38118 11 6.84752 11 7.33379V25.6682C11 26.1545 10.8068 26.6209 10.463 26.9647C10.1192 27.3085 9.6529 27.5017 9.16667 27.5017C8.68044 27.5017 8.21412 27.3085 7.8703 26.9647C7.52649 26.6209 7.33333 26.1545 7.33333 25.6682V7.33379C7.33333 6.84752 7.52649 6.38118 7.8703 6.03734C8.21412 5.69351 8.68044 5.50034 9.16667 5.50034ZM23.8333 5.50034C24.3196 5.50034 24.7859 5.69351 25.1297 6.03734C25.4735 6.38118 25.6667 6.84752 25.6667 7.33379V25.6682C25.6667 26.1545 25.4735 26.6209 25.1297 26.9647C24.7859 27.3085 24.3196 27.5017 23.8333 27.5017C23.3471 27.5017 22.8808 27.3085 22.537 26.9647C22.1932 26.6209 22 26.1545 22 25.6682V7.33379C22 6.84752 22.1932 6.38118 22.537 6.03734C22.8808 5.69351 23.3471 5.50034 23.8333 5.50034ZM1.83333 11.0007C2.31956 11.0007 2.78588 11.1938 3.1297 11.5377C3.47351 11.8815 3.66667 12.3479 3.66667 12.8341V20.1679C3.66667 20.6542 3.47351 21.1205 3.1297 21.4644C2.78588 21.8082 2.31956 22.0014 1.83333 22.0014C1.3471 22.0014 0.880787 21.8082 0.536971 21.4644C0.193154 21.1205 0 20.6542 0 20.1679V12.8341C0 12.3479 0.193154 11.8815 0.536971 11.5377C0.880787 11.1938 1.3471 11.0007 1.83333 11.0007ZM31.1667 11.0007C31.6157 11.0007 32.0491 11.1656 32.3847 11.464C32.7202 11.7624 32.9346 12.1736 32.9872 12.6196L33 12.8341V20.1679C32.9995 20.6352 32.8206 21.0847 32.4998 21.4245C32.179 21.7643 31.7406 21.9688 31.2741 21.9962C30.8076 22.0236 30.3483 21.8718 29.99 21.5718C29.6316 21.2719 29.4014 20.8465 29.3462 20.3824L29.3333 20.1679V12.8341C29.3333 12.3479 29.5265 11.8815 29.8703 11.5377C30.2141 11.1938 30.6804 11.0007 31.1667 11.0007Z"
                  fill="black"
                />
              </svg>

              <div
                className={`flex-col justify-start items-start lg:block hidden`}
              >
                <h3
                  className={`text-[14px] font-inter-semibold text-[#D72929]`}
                >
                  AUDIO SERMONS
                </h3>
                <span className={`text-[12px] font-inter-regular`}>
                  Listen to all PT sermons
                </span>
              </div>
            </div>
          </div>
          {/* Image at the bottom */}
          <Image
            src={Edified}
            className={`absolute -bottom-48 left-[15%] w-3/4 xl:block hidden`}
            alt="Background Image"
          />
        </div>
      </div>
    </div>
  );
}

export default GetEdified;
