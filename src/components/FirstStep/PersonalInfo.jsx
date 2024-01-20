/* eslint-disable react/prop-types */

import Input from "./Input";

function PersonalInfo({
    nameValue,
    setNameValue,
    emailValue,
    setEmailValue,
    phoneValue,
    setPhoneValue,
    errors,
}) {
    return (
        <div className="container z-20 js-tab">
            <h1 className="text-2xl text-marine-blue font-bold mb-2">
                Personal info
            </h1>
            <p className="text-cool-gray">
                Please provide your name, email address, and phone number.
            </p>
            {/* <!-- Form Container --> */}
            <div className="flex flex-col">
                <Input
                    label="Name"
                    errorLabel={errors.nameInput}
                    type="text"
                    valid={!errors.nameInput}
                    onChange={(e) => setNameValue(e.target.value)}
                    value={nameValue}
                    placeholder="e.g. Stephen King"
                />

                <Input
                    label="Email"
                    errorLabel={errors.emailInput}
                    type="email"
                    valid={!errors.emailInput}
                    onChange={(e) => setEmailValue(e.target.value)}
                    value={emailValue}
                    placeholder="stephenking@lorem.com"
                />
                <Input
                    label="Phone Number"
                    errorLabel={errors.phoneInput}
                    type="tel"
                    valid={!errors.phoneInput}
                    onChange={(e) => setPhoneValue(e.target.value)}
                    value={phoneValue}
                    placeholder="+1 234 567 890"
                />
            </div>

          
        </div>
    );
}

export default PersonalInfo;
