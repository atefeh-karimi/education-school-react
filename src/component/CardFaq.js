import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./styles/CardFaq.style.css";

function CardFaq({ title, body }) {
  const [icon, setIcon] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIcon(!icon);
  };

  return (
    <article className="faq" onClick={handleClick}>
      <div className="faq__icon">
        <small>{icon ? <FaMinus /> : <FaPlus />}</small>
      </div>
      <div className="question__answer">
        <h4>{title}</h4>
        {isOpen && <p>{body}</p>}
      </div>
    </article>
  );
}

export default CardFaq;
