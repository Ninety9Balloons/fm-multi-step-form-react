import Step from "./Step";

// eslint-disable-next-line react/prop-types
function MobileStepCounter({ step }) {
    const style =
        "border-solid border-2 border-white text-white p-2 rounded-full w-8 h-8 flex justify-center items-center mx-2 cursor-pointer";

    const activeStyle =
        "bg-light-blue text-marine-blue font-bold border-solid border-2 border-white  p-2 rounded-full w-8 h-8 flex justify-center items-center mx-2";

    return (
        <div className="relative hidden md:block z-20 flex-1 max-h-full ">
            <ul className="flex flex-col justify-start w-full h-full absolute z-20 px-3 py-6">
                <Step
                    stepNumber="1"
                    step="Step 1"
                    stepText="Your Info"
                    style={step === 1 ? activeStyle : style}
                />
                <Step
                    stepNumber="2"
                    step="Step 2"
                    stepText="Select Plan"
                    style={step === 2 ? activeStyle : style}
                />
                <Step
                    stepNumber="3"
                    step="Step 3"
                    stepText="Add-ons"
                    style={step === 3 ? activeStyle : style}
                />
                <Step
                    stepNumber="4"
                    step="Step 4"
                    stepText="Summary"
                    style={step === 4 ? activeStyle : style}
                />
            </ul>

            <div className="absolute z-10 h-full mr-8">
                <img
                    src="assets/images/bg-sidebar-desktop.svg"
                    alt="sidebar image"
                    className="z-10 h-full object-cover rounded-xl"
                />
            </div>
        </div>
    );
}

export default MobileStepCounter;
