import { List } from "./list/list";
import { Form } from "./form/form";
import { useState, useEffect } from "react";
import "./style.css";

export const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "YAMAN",
      phone_number: "123",
    },
    {
      fullname: "TEMEL",
      phone_number: "456",
    },
    {
      fullname: "ATİLLA",
      phone_number: "789",
    },
  ]);

  useEffect(() => {
    // console.log(contacts);
  }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};
