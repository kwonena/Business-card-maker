import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
  // Object 형식으로 카드 정보 저장
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "ena",
      company: "samsung",
      theme: "dark",
      email: "eeena214@gmail.com",
      message: "go for it",
      fileName: "ena",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "ena",
      company: "samsung",
      theme: "light",
      email: "eeena214@gmail.com",
      message: "go for it",
      fileName: "ena",
      fileURL: "ena.png",
    },
    3: {
      id: "3",
      name: "ena",
      company: "samsung",
      theme: "colorful",
      email: "eeena214@gmail.com",
      message: "go for it",
      fileName: "ena",
      fileURL: null,
    },
  });

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

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
