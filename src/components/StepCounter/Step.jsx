/* eslint-disable react/prop-types */
function Step({ step, stepNumber, stepText, style }) {
    return (
        <li className="my-3">
            <div className="flex items-center">
                <p className={style}>{stepNumber}</p>
                <div>
                    <p className="text-xs text-gray-300 uppercase">{step}</p>
                    <p className="uppercase text-white text-xs font-bold">
                        {stepText}
                    </p>
                </div>
            </div>
        </li>
    );
}

export default Step;
