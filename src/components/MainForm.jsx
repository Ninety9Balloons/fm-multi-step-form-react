import { useState } from "react";

import ThankYou from "./FinalStep/ThankYou";
import PersonalInfo from "./FirstStep/PersonalInfo";
import Summary from "./FourthStep/Summary";
import SelectPlan from "./SecondStep/SelectPlan";
import MobileStepCounter from "./StepCounter/MobileStepCounter";
import DesktopStepCounter from "./StepCounter/DesktopStepCounter";
import AddOns from "./ThirdStep/AddOns";
import BottomNavBar from "./BottomNavBar";

function MainForm() {
    const [step, setStep] = useState(1);
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [errors, setErrors] = useState({});
    const [plan, setPlan] = useState({ undefined });
    const [planLength, setPlanLength] = useState("Monthly");
    const [addon, setAddon] = useState([]);

    return (
        <div className="container flex flex-col  w-full items-center relative h-screen sm:justify-center sm:items-center">
            <MobileStepCounter step={step} />

            <div className="bg-white md:h-[600px] max-h-[600px] md:w-[90%] flex z-20 w-full p-6 rounded-xl">
                <DesktopStepCounter step={step} />
                <form className="flex sm:flex-col  h-full md:w-[70%] justify-between">
                    {/* <!-- Personal Info --> */}
                    {step === 1 && (
                        <PersonalInfo
                            nameValue={nameValue}
                            setNameValue={setNameValue}
                            emailValue={emailValue}
                            setEmailValue={setEmailValue}
                            phoneValue={phoneValue}
                            setPhoneValue={setPhoneValue}
                            errors={errors}
                            step={step}
                            setStep={setStep}
                        />
                    )}
                    {/* <!-- Select Your Plan --> */}
                    {step === 2 && (
                        <SelectPlan
                            setPlan={setPlan}
                            plan={plan}
                            planLength={planLength}
                            setPlanLength={setPlanLength}
                        />
                    )}
                    {/* <!-- Pick Add-ons --> */}
                    {step === 3 && <AddOns addon={addon} setAddon={setAddon} />}
                    {/* <!-- Finishing Up --> */}
                    {step === 4 && (
                        <Summary
                            plan={plan}
                            planLength={planLength}
                            addon={addon}
                        />
                    )}
                    {/* <!-- Thank You --> */}
                    {step === 5 && <ThankYou />}
                    {/* <!-- Bottom Bar Container --> */}
                    <BottomNavBar
                        nameValue={nameValue}
                        emailValue={emailValue}
                        phoneValue={phoneValue}
                        step={step}
                        setStep={setStep}
                        errors={errors}
                        setErrors={setErrors}
                        plan={plan}
                        planLength={planLength}
                    />
                </form>
            </div>
        </div>
    );
}

export default MainForm;
