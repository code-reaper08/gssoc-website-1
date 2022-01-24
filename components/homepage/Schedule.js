import React from "react";

function Schedule() {
  return (
    <div>
      <div className="schedule__container container mx-auto my-12 p-8 sm:px-10 md:px-12 lg:px-40 2xl:px-50">
        <div className="schedule__wrapper">
          <div className="schedule mb-14">
            <p className="font-serif font-semibold text-4xl leading-10 text-gray-800 pl-5">
              <span className="font-serif font-semibold text-4xl leading-10 text-[#FF7A19]">
                Schedule
              </span>
              &nbsp;of GSSoC 2022!
            </p>
          </div>
          {/* schedule image */}
          <div className="schedule__img">
            <img
              src="https://github.com/GSSoC-Web/gssoc-assets/blob/main/Schedule/Schedule.png?raw=true"
              alt="schedule"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
