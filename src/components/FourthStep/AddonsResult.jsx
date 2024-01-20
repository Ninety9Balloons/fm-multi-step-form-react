/* eslint-disable react/prop-types */
function AddonsResult({ addon }) {
    return (
        <li className="flex justify-between">
            <p className="text-cool-gray text-sm">{addon.value}</p>
            <p className="text-sm text-marine-blue">{addon.cost}</p>
        </li>
    );
}

export default AddonsResult;
