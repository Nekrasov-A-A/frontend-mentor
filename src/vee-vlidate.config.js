import { extend } from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import { configure } from "vee-validate";

extend("minmax", {
  validate(value, { min, max }) {
    return +value >= +min && +value <= +max;
  },
  params: ["min", "max"],
  message: "From {min} to {max}",
});

extend("required", {
  ...required,
  message: "This field is required",
});

extend("email", {
  ...email,
  message: "Please write valid email",
});

configure({
  classes: {
    valid: "is-valid",
    invalid: "is-invalid",
  },
});
