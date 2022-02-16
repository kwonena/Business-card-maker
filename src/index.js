import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
import ImageFileInput from "./components/image_file_input/image_file_input";
import ImageUploader from "./service/image_uploader";
import CardRepository from "./service/card_repository";
import { firebaseApp } from "./service/firebase";

const authService = new AuthService(firebaseApp);
const imageUploader = new ImageUploader();
const cardRepository = new CardRepository(firebaseApp);
// FileInput이 필요로 할 때 index.js에서만 수정할 수 있다
// 디펜던시 인젝션 (Dependency Injection)
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
