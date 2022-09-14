import React from "react";
import ListItems from "../component/ListItems";

function List({ data, titleList }) {
  return (
    <div>
      <h4 className="text-white fw-bold">{titleList}</h4>
      <ul>
        {data.map((c) => {
          return <ListItems key={c.id} title={c.title} url={c.url} />;
        })}
      </ul>
    </div>
  );
}

export default List;
