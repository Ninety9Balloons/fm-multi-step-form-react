// eslint-disable-next-line react/prop-types
function MobileStepCounter({ step }) {
    const style =
        "border-solid border-2 border-white text-white p-2 rounded-full w-8 h-8 flex justify-center items-center mx-2 cursor-pointer";

    const activeStyle =
        "bg-light-blue text-marine-blue font-bold border-solid border-2 border-white  p-2 rounded-full w-8 h-8 flex justify-center items-center mx-2";

    return (
        <div className="relative w-full md:hidden">
            <div className="container w-full absolute z-10 block">
                <img
                    src="assets/images/bg-sidebar-mobile.svg"
                    alt="sidebar image"
                    className="absolute w-full z-10 max-h-[180px]"
                />
            </div>
            {/* <!-- Step Number Container Mobile --> */}

            <div className="container relative z-20 my-8">
                <ul className="flex justify-center">
                    <li className={`${step === 1 ? activeStyle : style}`}>
                        <p>1</p>
                    </li>
                    <li className={`${step === 2 ? activeStyle : style}`}>
                        <p>2</p>
                    </li>
                    <li className={`${step === 3 ? activeStyle : style}`}>
                        <p>3</p>
                    </li>
                    <li className={`${step === 4 ? activeStyle : style}`}>
                        <p>4</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MobileStepCounter;
