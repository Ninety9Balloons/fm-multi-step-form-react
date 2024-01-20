export function validateName({ nameValue }) {
    if (nameValue === "") {
        return false;
    }

    return true;
}

export function validateEmail({ emailValue }) {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
        return true;
    }
}

export function validatePhone({ phoneValue }) {
    if (
        // eslint-disable-next-line no-useless-escape
        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
            phoneValue
        )
    ) {
        return true;
    }
}
