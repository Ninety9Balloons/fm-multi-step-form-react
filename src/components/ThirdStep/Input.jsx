/* eslint-disable react/prop-types */
function Input({
    value,
    dataAmount,
    dataNumber,
    addonDetail,
    checked,
    onClick,
}) {
    return (
        <div className="flex items-center justify-between mb-4 py-3 px-4 rounded-lg border-2 border-light-gray">
            <input
                id={value}
                type="checkbox"
                value={value}
                data-amount={dataAmount}
                data-number={dataNumber}
                name="add-ons"
                onClick={onClick}
                checked={checked}
                className="w-5 h-5 mr-2 text-blue-600 bg-gray-100 border-light-gray rounded"
            />
            <div className="container flex justify-between items-center">
                <label
                    htmlFor={value}
                    className="ms-2 text-gray-900 dark:text-gray-300"
                >
                    <h2 className="text-md font-bold text-marine-blue">
                        {value}
                    </h2>
                    <p className="text-xs">{addonDetail}</p>
                </label>
                <p className="text-xs text-purplish-blue font-bold">
                    {dataAmount}
                </p>
            </div>
        </div>
    );
}

export default Input;
