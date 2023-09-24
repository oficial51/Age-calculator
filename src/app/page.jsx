"use client";

import { Poppins } from "next/font/google";
import Image from "next/image";
import { useState, useEffect } from "react";
import { intervalToDuration } from "date-fns";

import arrow from "../../public/icon-arrow.svg";

const poppins = Poppins({
  weight: ["400", "700", "200", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

let newa = {};

export default function Home() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState({
    days: "--",
    months: "--",
    years: "--",
  });
  const [emptyDay, setEmptyDay] = useState(false);
  const [emptyMonth, setEmptyMonth] = useState(false);
  const [emptyYear, setEmptyYear] = useState(false);

  const birthdate = `${year}/${month}/${day}`;

  function calc(birthdate) {
    newa = intervalToDuration({
      start: new Date(birthdate),
      end: new Date(),
    });
    setResult(newa);
  }

  const finalF = () => {
    setEmptyDay(false);
    setEmptyMonth(false);
    setEmptyYear(false);

    if (day == "") {
      setEmptyDay(true);
      return;
    }

    if (month == "") {
      setEmptyMonth(true);
    }
    if (year == "") {
      setEmptyYear(true);
    }
    calc(birthdate);
  };

  return (
    <main
      className={`${poppins.className} w-screen h-screen flex justify-center bg-[#F0F0F0]`}
    >
      <div className="h-[487px] lg:w-[810px] lg:h-[627px] w-[343px] shadow-sm rounded-3xl rounded-br-[100px] lg:rounded-br-[180px] lg:mt-[165px] mt-[88px] bg-white">
        <div className="flex mt-[52px] lg:mt-[59px] lg:ml-[55px] justify-center lg:justify-start">
          <label
            htmlFor="Day"
            className={`w-[88px] ${
              emptyDay == true ||
              emptyMonth == true ||
              emptyYear == true ||
              day > 31 ||
              month > 12 ||
              year > 2023
                ? "text-[#E74E59]"
                : null
            } lg:w-[154px] ml-[13px] lg:ml-0 text-[12px] tracking-[2px] text-[#5B5B5B] font-bold uppercase lg:h-[92px] h-[72px]`}
          >
            Day
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              placeholder="DD"
              className={`mt-[10px] ${
                emptyDay == true ||
                emptyMonth == true ||
                emptyYear == true ||
                day > 31 ||
                month > 12 ||
                year > 2023
                  ? "border-[#E74E59]"
                  : null
              } text-base w-[85px] cursor-pointer lg:w-[154px] box-border text-[20px] lg:text-[25px] pl-[15px] lg:h-[70px] h-[52px] rounded-lg font-bold text-black border`}
              min="1"
              max="31"
              id="Day"
            />
            {emptyDay == true ? (
              <h4 className="text-[#E74E59] normal-case text-[11px] tracking-normal">
                This field is required
              </h4>
            ) : null}
            {day > 31 ? (
              <h4 className="text-[#E74E59] normal-case text-[11px] tracking-normal">
                Must be a valid day
              </h4>
            ) : null}
          </label>
          <label
            htmlFor="Month"
            className={`w-[88px] ${
              emptyDay == true ||
              emptyMonth == true ||
              emptyYear == true ||
              day > 31 ||
              month > 12 ||
              year > 2023
                ? "text-[#E74E59]"
                : null
            } lg:w-[154px] ml-[13px] text-[12px] lg:ml-[32px] tracking-[2px] text-[#5B5B5B] font-bold uppercase lg:h-[92px] h-[72px]`}
          >
            Month
            <input
              type="number"
              className={`mt-[10px] ${
                emptyDay == true ||
                emptyMonth == true ||
                emptyYear == true ||
                day > 31 ||
                month > 12 ||
                year > 2023
                  ? "border-[#E74E59]"
                  : null
              } text-base w-[85px] cursor-pointer lg:w-[154px] box-border text-[20px] lg:text-[25px] pl-[15px] lg:h-[70px] h-[52px] rounded-lg font-bold text-black border`}
              placeholder="MM"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              id="Month"
              min="1"
              max="12"
            />
            {emptyMonth == true ? (
              <h4 className="text-[#E74E59] normal-case text-[11px] tracking-normal">
                This field is required
              </h4>
            ) : null}
            {month > 12 ? (
              <h4 className="text-[#E74E59] normal-case text-[11px] tracking-normal">
                Must be a valid month
              </h4>
            ) : null}
          </label>
          <label
            htmlFor="Year"
            className={`w-[88px] ${
              emptyDay == true ||
              emptyMonth == true ||
              emptyYear == true ||
              day > 31 ||
              month > 12 ||
              year > 2023
                ? "text-[#E74E59]"
                : null
            } lg:w-[154px] ml-[13px] lg:ml-[32px] text-[12px] tracking-[2px] text-[#5B5B5B] font-bold uppercase lg:h-[92px] h-[72px]`}
          >
            Year
            <input
              type="number"
              className={`mt-[10px] ${
                emptyDay == true ||
                emptyMonth == true ||
                emptyYear == true ||
                day > 31 ||
                month > 12 ||
                year > 2023
                  ? "border-[#E74E59]"
                  : null
              } text-base w-[85px] cursor-pointer lg:w-[154px] box-border text-[20px] lg:text-[25px] pl-[15px] lg:h-[70px] h-[52px] rounded-lg font-bold text-black border`}
              placeholder="YYYY"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              id="Year"
              min="1900"
              max="2023"
            />
            {emptyYear == true ? (
              <h4 className="text-[#E74E59] normal-case text-[11px] tracking-normal">
                This field is required
              </h4>
            ) : null}
            {year > 2023 ? (
              <h4 className="text-[#E74E59] normal-case text-[11px] tracking-normal">
                Must be in the past
              </h4>
            ) : null}
          </label>
        </div>
        <div className="bg-[#EDEDED] h-[1px] lg:h-[2px] w-[295px] lg:w-[607px] lg:flex flex-row mx-auto lg:mx-0 lg:ml-[55px] lg:mt-[51px] mt-[71px]">
          <div className="bg-[#844FF7] hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer   hover:bg-[#151515] w-[64px] lg:w-[92px] lg:h-[92px] lg:bottom-[46px] lg:left-[607px] rounded-full relative bottom-8 left-[113px] flex items-center justify-center h-[64px]">
            <Image
              src={arrow}
              alt="arrow down"
              onClick={finalF}
              className="h-[24px] lg:h-[44px]"
            ></Image>
          </div>
        </div>
        <div className="mt-[54px] lg:mt-[24px] ml-[15px] lg:ml-[55px]">
          <p className="text-[57px] lg:text-[101px] text-[#854BFF] lg:tracking-normal tracking-[-2px] font-extrabold italic">
            {result ? result.years : "--"}
            <span className="text-black ml-[11px]  tracking-[-1px] font-bold italic">
              years
            </span>
          </p>
          <p className="text-[57px] lg:text-[101px] mt-[-23px] text-[#854BFF] lg:tracking-normal lg:mt-[-50px] tracking-[-2px] font-extrabold italic">
            {result ? result.months : "--"}
            <span className="text-black font-bold ml-[11px] italic  tracking-[-1px]">
              months
            </span>
          </p>
          <p className="text-[57px] lg:text-[101px] mt-[-23px] lg:mt-[-50px] text-[#854BFF] tracking-[-2px] lg:tracking-normal font-extrabold italic">
            {result ? result.days : "--"}
            <span className="text-black ml-[11px]  tracking-[-1px] font-bold italic">
              days
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
