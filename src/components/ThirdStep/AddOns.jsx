/* eslint-disable react/prop-types */
import Input from "./Input";

function AddOns({ addon, setAddon }) {
    // If checked, saves the name, check status, cost, and cost number of an addon
    const checkHandler = (e) => {
        if (e.target.checked === true) {
            setAddon([
                ...addon,
                {
                    value: e.target.value,
                    checked: e.target.checked,
                    cost: e.target.getAttribute("data-amount"),
                    number: e.target.getAttribute("data-number"),
                },
            ]);
        }

        // Filters out an addon if they are unchecked
        if (e.target.checked === false) {
            const nextAddon = addon.filter((a) => a.value !== e.target.value);
            setAddon(nextAddon);
        }
    };

    return (
        <div className="container z-20  js-tab">
            <h1 className="text-2xl text-marine-blue font-bold mb-2">
                Pick add-ons
            </h1>
            <p className="text-cool-gray">
                Add-ons help enhance your gaming experience.
            </p>

            {/* <!-- Add ons container --> */}

            <div className="container mt-4">
                {/* <!-- Add on --> */}
                <Input
                    value="Online service"
                    dataAmount="+$1/mo"
                    dataNumber="1"
                    checked={addon.some((a) => a.value === "Online service")}
                    addonDetail="Access to multiplayer games"
                    onClick={(e) => checkHandler(e)}
                />
                {/* <!-- Add on --> */}
                <Input
                    value="Larger storage"
                    dataAmount="+$2/mo"
                    dataNumber="2"
                    checked={addon.some((a) => a.value === "Larger storage")}
                    addonDetail="Extra 1TB of cloud save"
                    onClick={(e) => checkHandler(e)}
                />
                {/* <!-- Add on --> */}
                <Input
                    value="Customizable profile"
                    dataAmount="+$2/mo"
                    dataNumber="2"
                    checked={addon.some(
                        (a) => a.value === "Customizable profile"
                    )}
                    addonDetail=" Custome theme on your profile"
                    onClick={(e) => checkHandler(e)}
                />
            </div>
        </div>
    );
}

export default AddOns;
