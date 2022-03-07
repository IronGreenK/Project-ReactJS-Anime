import React from "react";
import Message from "./../Common/Message";
import ButtonPrimary from "./../Common/ButtonPrimary";

const NotFound = () => (
  <>
    <Message text="404: URL Not Found" />
    <ButtonPrimary type="back" to="/" />
  </>
);

export default NotFound;
