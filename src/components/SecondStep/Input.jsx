/* eslint-disable react/prop-types */
function Input({ value, imgSrc, imgAlt, planName, planCost, onClick, plan }) {
    return (
        <div className="container flex flex-col">
            <input
                type="radio"
                name="plans"
                id={value}
                className="appearance-none peer/arcade"
                value={value}
                onChange={onClick}
                checked={plan.value === value ? true : false}
            />
            <label
                htmlFor={value}
                className="container flex border-2 border-light-gray rounded-lg p-3 mb-3 peer-checked/arcade:bg-alabaster peer-checked/arcade:border-purplish-blue"
            >
                <img src={imgSrc} alt={imgAlt} />
                <div className="container ml-4">
                    <h2 className="font-bold text-marine-blue">{planName}</h2>
                    <p className="text-cool-gray">{planCost}</p>
                </div>
            </label>
        </div>
    );
}

export default Input;
