let validation = new JustValidate("#forma",{
    errorLabelStyle: {
        color: "var(--error-color)",
    }
});
validation.addField("#forma__input-email",[
    {
        rule: "required",
        errorMessage: "Enter your email"
    },
    {
        rule: "email",
        errorMessage: "Invalid format entered"
    },
])
  .onSuccess(() => {
    const formaInput = document.querySelector(".forma__input");
    formaInput.value = "";
});