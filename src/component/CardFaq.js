import React from "react";
import "./styles/CardFaq.style.css";

function CardFaq() {
  /* show/hide faq answer */

  const faqs = document.querySelectorAll(".faq");
  faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
      faq.classList.toggle("open");

      //change icon
      const icon = faq.querySelector(".faq__icon i");
      if (icon.className === "fas fa-plus") {
        icon.className = "fas fa-minus";
      } else {
        icon.className = "fas fa-plus";
      }
    });
  });

  return (
    <article className="faq">
      <div className="faq__icon">
        <i className="fas fa-plus"></i>
      </div>
      <div className="question__answer">
        <h4>چگونه می توان آموزش موردنظر خود را تهیه نمود؟</h4>
        <p>
          لورم با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
          است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
          است.
        </p>
      </div>
    </article>
  );
}

export default CardFaq;
