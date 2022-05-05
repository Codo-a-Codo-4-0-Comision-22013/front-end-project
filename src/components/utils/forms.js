import { useState } from "react";

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
    };
    return {
        value,
        onChange: handleChange,
    };
};


/*  Your password must contain at least one capital letter, one
    *number and one lowercase letter, and it must contain at least 8
    *characters*/
const validateForm = (event) => {
    let pass = event.target.value;
    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    let test = reg.test(pass);
    if (test) {
        this.setState({ value: event.target.value });
    } else {
        alert("password validation unsuccessful. Please try again.");
        return;
    }
};

export { useFormInput, validateForm };