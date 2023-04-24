export const SIGN_IN_FORM_INPUTS_ARRAY= [
    {
    name: "email",
    value:"email",
    rules: {
        required: "Email is required",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address"

    },
    },
},

{
    name: "password",
    value:"password",
    rules: {
            required: "Password is required",
    },
},
    
];

export const DEFAULT_FORM_VALUES = {
    SIGN_IN: {
        email: "",
        password: "",
    }
}
