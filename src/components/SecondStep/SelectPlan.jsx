/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./Input";

function SelectPlan({ setPlan, plan, setPlanLength, planLength }) {
    const [isChecked, setIsChecked] = useState(false);

    // Switch between monthly and yearly plan lengths
    const checkHandler = () => {
        setIsChecked(!isChecked);
        if (isChecked) {
            planLength = setPlanLength("Monthly");
        } else {
            planLength = setPlanLength("Yearly");
        }
    };

    return (
        <div className="container z-20  js-tab">
            <h1 className="text-2xl text-marine-blue font-bold mb-2">
                Select Your Plan
            </h1>
            <p className="text-cool-gray">
                You have the option of monthly or yearly billing.
            </p>
            {/* <!-- Plans Container --> */}
            <div className=" my-4">
                {/* <!-- Plan --> */}
                <Input
                    value="Arcade"
                    imgSrc="/assets/images/icon-arcade.svg"
                    imgAlt="Arcade image"
                    planName="Arcade"
                    planCost="$9/mo"
                    onClick={(e) =>
                        setPlan({
                            value: e.target.value,
                            cost:
                                e.target.value === "Arcade"
                                    ? "$9/mo"
                                    : undefined,
                            number: e.target.value === "Arcade" ? 9 : undefined,
                        })
                    }
                    plan={plan}
                />

                {/* <!-- Plan --> */}
                <Input
                    value="Advanced"
                    imgSrc="/assets/images/icon-advanced.svg"
                    imgAlt="Advanced image"
                    planName="Advanced"
                    planCost="$12/mo"
                    onClick={(e) =>
                        setPlan({
                            value: e.target.value,
                            cost:
                                e.target.value === "Advanced"
                                    ? "$12/mo"
                                    : undefined,
                            number:
                                e.target.value === "Advanced" ? 12 : undefined,
                        })
                    }
                    plan={plan}
                />

                {/* <!-- Plan --> */}
                <Input
                    value="Pro"
                    imgSrc="/assets/images/icon-pro.svg"
                    imgAlt="Pro image"
                    planName="Pro"
                    planCost="$15/mo"
                    onClick={(e) =>
                        setPlan({
                            value: e.target.value,
                            cost:
                                e.target.value === "Pro" ? "$15/mo" : undefined,
                            number: e.target.value === "Pro" ? 15 : undefined,
                        })
                    }
                    plan={plan}
                />
            </div>

            {/* <!-- Plan Length --> */}
            <div className="container bg-alabaster p-3 rounded-lg flex justify-center">
                <span
                    className={
                        planLength === "Monthly"
                            ? "text-marine-blue mr-3 text-sm font-bold "
                            : " mr-3 text-sm font-bold text-cool-gray"
                    }
                >
                    Monthly
                </span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        value="yearly"
                        className="sr-only peer"
                        id="plan-length-checkbox"
                        checked={planLength === "Yearly"}
                        onChange={checkHandler}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span
                        className={
                            planLength === "Yearly"
                                ? "text-marine-blue ms-3 text-sm font-bold "
                                : " ms-3 text-sm font-bold text-cool-gray"
                        }
                    >
                        Yearly
                    </span>
                </label>
            </div>
        </div>
    );
}

export default SelectPlan;
