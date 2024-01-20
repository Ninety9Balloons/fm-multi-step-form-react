/* eslint-disable react/prop-types */
import {
    validateName,
    validateEmail,
    validatePhone,
} from "../utils/validation";

function BottomNavBar({
    step,
    setStep,
    nameValue,
    emailValue,
    phoneValue,
    setErrors,
    plan,
}) {
    const handleNext = () => {
        const errors = {};

        // If an input fails validation, it's added to an errors object
        if (step === 1) {
            if (!validateName({ nameValue })) {
                errors.nameInput = "Name - Please enter a valid name";
            }
            if (!validateEmail({ emailValue })) {
                errors.emailInput = "Email - Please enter a valid email";
            }

            if (!validatePhone({ phoneValue })) {
                errors.phoneInput = "Phone - Please enter a valid phone number";
            }

            if (Object.keys(errors).length > 0) {
                setErrors(errors);
            }

            if (Object.keys(errors).length == 0) {
                setErrors({});
                setStep(step + 1);
            }
        }

        if (step === 2 && plan.value !== undefined) {
            setStep(step + 1);
        }

        if (step === 3) {
            setStep(step + 1);
        }

        if (step === 4) {
            setStep(step + 1);
        }
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    if (step !== 5) {
        return (
            <nav
                className="container absolute sm:relative md:mt-10 bottom-0 left-0 bg-white p-4 flex justify-between flex-row-reverse"
                id="bottom-nav"
            >
                <button
                    className={
                        step === 2 && plan.value === undefined
                            ? "bg-red-500 text-white text-sm py-3 px-5 rounded-md"
                            : "bg-marine-blue text-white text-sm py-3 px-5 rounded-md"
                    }
                    id="next-btn"
                    type="button"
                    // disabled={step === 2 && plan === "" ? true : false}
                    onClick={() => {
                        handleNext();
                    }}
                >
                    {`${step === 4 ? "Submit" : "Next"}`}
                </button>

                <button
                    className={`${step === 1 ? "hidden" : "text-cool-gray"}`}
                    id="previous-btn"
                    type="button"
                    onClick={() => {
                        handlePrev();
                    }}
                >
                    Go Back
                </button>
            </nav>
        );
    }
}

export default BottomNavBar;
