/* eslint-disable react/prop-types */
function Input({
    id,
    label,
    errorLabel,
    type,
    placeholder,
    value,
    onChange,
    valid,
}) {
    return (
        <div className="flex flex-col">
            <label
                htmlFor={id}
                className={`${
                    valid
                        ? "text-marine-blue text-xs font-bold mt-3 md:mt-5"
                        : "text-red-500 text-xs font-bold mt-3 md:mt-5"
                }`}
            >
                {valid ? label : errorLabel}
            </label>
            <input
                type={type}
                id={id}
                className="border-2 p-2 rounded-md mt-1"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                required
            />
        </div>
    );
}

export default Input;
