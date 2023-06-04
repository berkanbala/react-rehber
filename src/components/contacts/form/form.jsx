import { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

export const Form = ({ addContact, contacts }) => {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      id: contacts.length + 1,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <div>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone_number"
          value={form.phone_number}
          placeholder="(xxx) -xxx-xx-xx"
          onChange={onChangeInput}
          pattern="[0-9]{10}"
          maxLength={"10"}
        ></input>
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
};
