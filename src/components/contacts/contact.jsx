import { List } from "./list/list";
import { Form } from "./form/form";
import { useState, useEffect } from "react";
import "./style.css";

export const Contacts = () => {
  // const [contacts, setContacts] = useState([
  //   {
  //     id: "1",
  //     fullname: "YAMAN",
  //     phone_number: "123",
  //   },
  //   {
  //     id: "2",
  //     fullname: "TEMEL",
  //     phone_number: "456",
  //   },
  //   {
  //     id: "3",
  //     fullname: "ATİLLA",
  //     phone_number: "789",
  //   },
  // ]);
  const [contacts, setContacts] = useState([]);

  function deleteId(id) {
    // console.log(id);
    // setContacts([...contacts].filter((i) => i.id !== contact));
    setContacts((prevState) => prevState.filter((item) => item.id !== id));
    // setContacts((prevState) => {
    //   return prevState.filter((item) => item.id !== id);
    // });
  }

  // console.log(contacts);

  useEffect(() => {
    // console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1 className="contact">Contacts</h1>
      <List contacts={contacts} setContacts={setContacts} deleteId={deleteId} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};
