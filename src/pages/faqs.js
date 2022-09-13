import React from "react";
import CardFaq from "../component/CardFaq";
import "./faqsStyle.css";

function Faqs() {
  return (
    <section className="faqs">
      <h2>سوالات متداول</h2>
      <div className="container faqs__container">
        <CardFaq />
      </div>
    </section>
  );
}

export default Faqs;
