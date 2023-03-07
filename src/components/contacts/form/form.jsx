import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

export const Form = ({ addContact, contacts }) => {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          name="fullname"
          placeholder="full name"
          value={form.fullname}
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          name="phone_number"
          value={form.phone_number}
          placeholder="phone number"
          onChange={onChangeInput}
        ></input>
      </div>
      <div className="btn">
        <button>add</button>
      </div>
    </form>
  );
};
