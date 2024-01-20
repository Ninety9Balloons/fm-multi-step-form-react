import AddonsResult from "./AddonsResult";

/* eslint-disable react/prop-types */
function Summary({ plan, planLength, addon }) {
    let total = 0;
    let addonTotal = () => {
        for (let i = 0; i < addon.length; i++) {
            total += Number(addon[i].number);
        }
    };

    addonTotal();

    return (
        <div className="container z-20  js-tab">
            <h1 className="text-2xl text-marine-blue font-bold mb-2">
                Finishing up
            </h1>
            <p className="text-cool-gray">
                Double-check everything looks OK before confirming.
            </p>

            {/* <!-- Results Container --> */}
            <div className="container bg-alabaster rounded-lg p-4 mt-3">
                {/* <!-- Plan Result --> */}
                <div className="container flex items-center">
                    <div className="container">
                        {/* <!-- Plan --> */}
                        <h2 className="font-bold  text-marine-blue text-sm">
                            {plan.value} (<span>{planLength}</span>)
                        </h2>
                        <a
                            href="#"
                            className="text-cool-gray underline text-sm"
                        >
                            Change
                        </a>
                    </div>
                    <p className="font-bold text-marine-blue text-sm">
                        {plan.cost}
                    </p>
                </div>

                <hr className="mt-2 mb-3" />

                {/* <!-- Add-ons Results --> */}
                <ul id="add-ons-result-list">
                    {addon.map((item) => {
                        return <AddonsResult key={item.value} addon={item} />;
                    })}
                </ul>
            </div>

            {/* <!-- Total --> */}
            <div className="container flex justify-between mt-4 p-4">
                <p className="text-sm text-cool-gray">Total (per month)</p>
                <p className="font-bold text-marine-blue">
                    +${total + plan.number}/mo
                </p>
            </div>
        </div>
    );
}

export default Summary;
