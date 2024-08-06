import { useEffect, useState } from "react";
import style from "./modal.module.scss";
import flag from "../../assets/flag.svg";
import close from "../../assets/close.svg";
import search from "../../assets/search.svg";
import Dropdown from "../Dropdown/Dropdown";

const Modal = ({ showModal, setShowModal }) => {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let [tab, setTab] = useState(1);
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.keyCode === 27) {
        setShowModal(false);
      }
    };

    const handleResize = () => setWindowWidth(window.innerWidth);

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
      setTab(1);
    };
  }, [setShowModal]);

  const handleAdd = () => {
    if (windowWidth > 767) {
      // logic for add Experience
    } else {
      // logic for next trigger button
      setTab(2);
    }
  };

  return (
    <>
      {showModal && (
        <div className="rounded-xl bg-white shadow-modalShadow fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[640px] pb-6 md:w-[343px]">
          <button
            className="absolute right-4 top-4 w-11 h-11 grid place-items-center hover:bg-lightBG rounded-lg outline-outLineClr"
            onClick={() => setShowModal(false)}
          >
            <img src={close} alt="" />
          </button>
          <div className="bg-[url('./src/assets/circles.svg')] bg-no-repeat pb-4">
            <div className={style.circle}>
              <img src={flag} className="relative top-5 left-5 mb-8" alt="" />
            </div>
            <div className="py-0 px-6">
              <h1 className="text-base font-semibold text-textClr mb-1">
                Add Experience
              </h1>
              <p className="text-lightBLue font-normal text-sm">
                Share where you’ve worked on your profile.
              </p>
            </div>
          </div>
          <form className="px-6 py-2">
            {(tab === 1 || windowWidth > 767) && (
              <div>
                <label
                  className="font-medium text-textClr text-sm"
                  htmlFor="title"
                >
                  Title
                </label>{" "}
                <br />
                <input
                  className="shadow-inputShadow w-[100%] py-3 px-4 rounded-lg border border-lightGray mt-1 outline-outLineClr"
                  type="text"
                  placeholder="What is your title?"
                />
              </div>
            )}

            {(tab === 1 || windowWidth > 767) && (
              <div className="flex justify-between mt-4 gap-4 md:flex-col">
                <div className="relative md:w-[100%]">
                  <label
                    htmlFor="company"
                    className="font-medium text-textClr text-sm"
                  >
                    Company
                  </label>{" "}
                  <br />
                  <img src={search} className="absolute top-11 left-3" alt="" />
                  <input
                    type="text"
                    placeholder="Search for company"
                    className=" shadow-inputShadow border border-lightGray py-3 pr-4 pl-10 rounded-lg outline-outLineClr mt-1 md:w-[100%]"
                  />
                </div>
                <div className={style.webInput}>
                  <label
                    htmlFor="web"
                    className="font-medium text-textClr text-sm"
                  >
                    Website
                  </label>{" "}
                  <br />
                  <div className="flex items-center mt-1 w-[100%]">
                    <p className="border border-lightGray p-3 rounded-l-lg shadow-inputShadow">
                      https://
                    </p>
                    <input
                      type="text"
                      placeholder="www.example.com"
                      className="border border-lightGray py-3 px-4 rounded-r-lg w-[100%] outline-outLineClr shadow-inputShadow"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="mt-4 flex items-center gap-4">
              {(tab === 1 || windowWidth > 767) && (
                <div className="relative md:w-[100%]">
                  <label
                    htmlFor="location"
                    className="font-medium text-textClr text-sm"
                  >
                    Location
                  </label>{" "}
                  <br />
                  <img src={search} className="absolute top-11 left-3" alt="" />
                  <input
                    type="text"
                    placeholder="Search for city"
                    className="border border-lightGray py-3 pr-4 pl-10 rounded-lg outline-outLineClr shadow-inputShadow mt-1 md:w-[100%]"
                  />
                </div>
              )}

              <div className={` ${tab === 2 ? "md:block" : "md:hidden"}`}>
                <label htmlFor="" className="font-medium text-textClr text-sm ">
                  Employment
                </label>{" "}
                <br />
                <Dropdown />
              </div>
            </div>

            <div className={`mt-4 ${tab === 1 ? "md:hidden" : "md:block"}`}>
              <label
                className="font-medium text-textClr text-sm"
                htmlFor="title"
              >
                Title
              </label>{" "}
              <br />
              <input
                className="shadow-inputShadow w-[100%] py-3 px-4 rounded-lg border border-lightGray mt-1 outline-outLineClr"
                type="text"
                placeholder="What is your title?"
              />
            </div>

            <div className={`mt-4 ${tab === 1 ? "md:hidden" : "md:block"}`}>
              <label
                htmlFor=""
                className="font-medium text-textClr text-sm flex items-center gap-1"
              >
                Description
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
                  />
                </svg>
              </label>
              <textarea
                className="w-[100%] border border-lightGray resize-none py-3 px-4 rounded-lg mt-1 outline-outLineClr shadow-inputShadow"
                name=""
                id=""
                rows={6}
                placeholder="e.g. I joined Stripe’s Customer Success team to help them scale their checkout product. I focused mainly on onboarding new customers and resolving complaints."
              ></textarea>
            </div>

            <div className=" mt-8 items-center justify-center gap-2 hidden md:flex">
              <div
                onClick={() => setTab(1)}
                className={`w-3 h-3 ${
                  tab === 1 ? "bg-purple" : "bg-lightGray"
                } rounded-full cursor-pointer`}
              ></div>
              <div
                onClick={() => setTab(2)}
                className={`w-3 h-3 ${
                  tab === 2 ? "bg-purple" : "bg-lightGray"
                } rounded-full cursor-pointer`}
              ></div>
            </div>
            <div className="flex mt-4 gap-4 md:flex-col md:mt-8 md:flex-col-reverse">
              <button className="border border-secondarygray p-3 flex gap-1 items-center rounded-md w-[50%] justify-center text-textClr cursor-pointer outline-outLineClr md:w-[100%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                  />
                </svg>
                Save as draft
              </button>
              <button
                onClick={handleAdd}
                className="border border-secondarygray p-3 flex gap-1 items-center rounded-md w-[50%] justify-center text-textClr cursor-pointer bg-purple text-white outline-outLineClr md:w-[100%]"
              >
                {windowWidth > 767 || tab === 2 ? "Add experience" : "Next"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Modal;
