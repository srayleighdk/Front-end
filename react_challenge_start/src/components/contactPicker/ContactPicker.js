import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option key="" defaultValue="">Select a contact</option>
      {contacts.map((contact) => {
        return <option value={contact.name} key={contact.name}>{contact.name}</option>
      })}
    </select>
  );
};
