import React from "react";
import CardFaq from "../../component/CardFaq";
import { content } from "../../content/faqContent";
import "./faqsStyle.css";

function Faqs() {
  return (
    <section className="faqs">
      <h2>سوالات متداول</h2>
      <div className="container faqs__container">
        {content.map((c) => {
          return <CardFaq key={c.id} {...c} />;
        })}
      </div>
    </section>
  );
}

export default Faqs;
