import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
      <label htmlFor="phone">Phone:</label>
      <input type="tel" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"/>
      <label htmlFor="email" >Email:</label>
      <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="submit" />
    </form>  
  );
};
