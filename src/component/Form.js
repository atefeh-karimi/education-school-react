import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Btn } from "./btn";
import "./FormStyle.css";

function Form() {
  const theme = {
    textColor: "white",
    backgroundColor: "#f75842",
    hoverTextColor: "white",
    width: "max-content",
  };
  let schema = yup.object().shape({
    firstName: yup
      .string()
      .min(2, "پرکردن فیلد الزامی است!")
      .matches(
        "^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F ]+$",
        "نام خود را به فارسی واردکنید!"
      )
      .required("پرکردن فیلد الزامی است!"),
    lastName: yup
      .string()
      .required("پرکردن فیلد الزامی است!")
      .matches(
        "^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F ]+$",
        "نام خانوادگی خود را به فارسی واردکنید!"
      ),
    massage: yup
      .string()
      .matches(
        "^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F ]+$",
        "متن خود را به فارسی واردکنید!"
      )
      .min(25, "پرکردن فیلد الزامی است!")
      .required("پرکردن فیلد الزامی است!"),
    email: yup
      .string()
      .email("فرمت ایمیل وارد شده معتبر نمی‌باشد!")
      .required("پرکردن فیلد الزامی است!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit = (data, e) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  return (
    <>
      {isValid && isSubmitted ? (
        <div className="succesMsg">
          {" "}
          <div className="alert alert-success" role="alert">
            ارسال فرم با موفقیت انجام شد!
          </div>
        </div>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__fullName">
            <div>
              <input
                {...register("firstName")}
                type="text"
                name="firstName"
                placeholder="نام"
              />
              <br />
              <small className="text-danger">{errors.firstName?.message}</small>
            </div>
            <div>
              <input
                {...register("lastName")}
                type="text"
                name="lastName"
                placeholder="نام خانوادگی"
              />{" "}
              <br />
              <small className="text-danger">{errors.lastName?.message}</small>
            </div>
          </div>
          <div>
            <input
              {...register("email")}
              style={{ direction: "ltr" }}
              type="email"
              name="email"
              placeholder="Example@gmail.com"
            />
            <br />
            <small className="text-danger">{errors.email?.message}</small>
          </div>
          <div>
            <textarea
              {...register("massage")}
              name="massage"
              rows="4"
              placeholder="متن پیام"
            ></textarea>{" "}
            <br />
            <small className="text-danger">{errors.massage?.message}</small>
          </div>

          <Btn
            type="submit"
            theme={theme}
            disabled={!isValid || isSubmitting || isSubmitted}
          >
            ارسال
            {isSubmitting && (
              <span className="spinner-border spinner-border-sm me-1"></span>
            )}
          </Btn>
        </form>
      )}
    </>
  );
}

export default Form;
