import { useState } from "react";
// import Iconx from "../../../media/icons/x.png";

export const List = ({ contacts, deleteId }) => {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  // console.log(contacts);
  // const deleteId = () => {
  //   console.log("sil");
  // };
  return (
    <div>
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span className="id">{contact.id}</span>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
            <button className="close" onClick={() => deleteId(contact.id)}>
              &#10005;
              {/* <img src={Iconx} alt="" /> */}
            </button>
          </li>
        ))}
      </ul>
      <p className="totalContact">Total Contact ({filtered.length})</p>
    </div>
  );
};
