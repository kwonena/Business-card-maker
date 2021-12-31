import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "ena",
      company: "samsung",
      theme: "dark",
      email: "eeena214@gmail.com",
      message: "go for it",
      fileName: "ena",
      fileURL: null,
    },
    {
      id: "2",
      name: "ena",
      company: "samsung",
      theme: "light",
      email: "eeena214@gmail.com",
      message: "go for it",
      fileName: "ena",
      fileURL: "ena.png",
    },
    {
      id: "3",
      name: "ena",
      company: "samsung",
      theme: "colorful",
      email: "eeena214@gmail.com",
      message: "go for it",
      fileName: "ena",
      fileURL: null,
    },
  ]);
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
