import React from "react";

import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <label htmlFor="date">Date:</label>
      <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <label htmlFor="time">Time:</label>
      <input type="time" name="time" min={getTodayString()} value={time} onChange={(e) => setTime(e.target.value)}/>
      <ContactPicker contacts={contacts} value={contact} onChange={(e) => setContact(e.target.value)}/>
      <input type="submit"/>
    </form>
  );
};
