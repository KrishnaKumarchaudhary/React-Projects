import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
function BookList() {
  return (
    <section className="booklist">
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
      <Book></Book>
    </section>
  );
}
const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
      <Price></Price>
    </article>
  );
};
const Image = () => {
  return (
    <>
      <img
        alt=""
        src="https://images-eu.ssl-images-amazon.com/images/I/81l3rZK4lnL._AC_UL600_SR600,400_.jpg"
      ></img>
    </>
  );
};
const Title = () => {
  return (
    <>
      <h1>Ikigai: The Japanese secret to a long and happy life.</h1>
    </>
  );
};
const Author = () => {
  return (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
      Héctor García
    </h4>
  );
};
const Price = () => {
  return <h3>Rs. 123</h3>;
};
ReactDOM.render(<BookList />, document.getElementById("root"));
