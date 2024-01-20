function ThankYou() {
    return (
        <div className="container z-20 py-16 px-5 js-tab">
            <div className="flex flex-col items-center">
                <img
                    src="assets/images/icon-thank-you.svg"
                    alt="thank you image"
                    className="w-12 mt-5 mb-5"
                />
                <h1 className="text-2xl text-marine-blue font-bold mb-2">
                    Thank You!
                </h1>
                <p className="text-cool-gray text-center">
                    Thanks for confirming your subscription! We hope you have
                    fun using our platform. If you ever need support, please
                    feel free to email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    );
}

export default ThankYou;
