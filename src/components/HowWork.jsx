import React from "react";

const steps = [
  {
    number: 1,
    title: "Upload Your Blurry Image",
    description:
      "Upload any low-resolution or blurry image you want to enhance. Our AI is ready to work its magic.",
  },
  {
    number: 2,
    title: "Enhance with AI",
    description:
      "Let our enhancement engine sharpen, upscale, and restore your image automatically — no manual tweaks needed.",
  },
  {
    number: 3,
    title: "Download or Share",
    description:
      "Download your enhanced image instantly or share it with a simple link — crisp, clean, and ready to use.",
  },
];

const HowWork = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto p-6 border-red-600  border-t-2 rounded-2xl shadow-2xl mb-10">
        <div className="flex-1">
          <span className="text-lg border-b text-red-600">How it Work</span>
          <h1 className="text-4xl font-bold mb-8  mt-10">Two Easy Steps</h1>

          <div className="space-y-8 mt-14 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start mt-8">
                <div
                  className=" rounded-full border  w-7 h-7 p-6 flex justify-center items-center  
                    text-primary
                  font-semibold text-xl text-center"
                >
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-lg  ">{step.title}</h3>
                  <p className="text-gray-500 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center max-lg:hidden">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/man-thinking-illustration-download-in-svg-png-gif-file-formats--boy-confusion-something-new-people-pack-illustrations-4498271.png?f=webp"
            className="h-full rounded-md w-full object-cover object-center"
          />
        </div>
      </div>
    </>
  );
};

export default HowWork;
