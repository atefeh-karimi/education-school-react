import React from "react";
import { Btn } from "./btn";
import "./FormStyle.css";

function Form() {
  const theme = {
    textColor: "white",
    backgroundColor: "#f75842",
    hoverTextColor: "white",
    width: "max-content",
  };
  return (
    <form className="contact__form">
      <div className="form__fullName">
        <input type="text" name="first-name" placeholder="نام" required />
        <input
          type="text"
          name="last-name"
          placeholder="نام خانوادگی"
          required
        />
      </div>
      <input
        style={{ direction: "ltr" }}
        type="email"
        name="email-address"
        placeholder="Example@gmail.com"
        required
      />
      <textarea
        name="massage"
        rows="6"
        placeholder="متن پیام"
        required
      ></textarea>
      <Btn type="submit" theme={theme}>
        ارسال
      </Btn>
    </form>
  );
}

export default Form;
