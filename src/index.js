import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";
<<<<<<< HEAD
import ImageFileInput from "./components/image_file_input/image_file_input";
import ImageUploader from "./service/image_uploader";

const authService = new AuthService();
const imageUploader = new ImageUploader();

// FileInput이 필요로 할 때 index.js에서만 수정할 수 있다
// 디펜던시 인젝션 (Dependency Injection)
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

=======
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = (props) => {
  <ImageFileInput {...props} imageUploader={imageUploader} />;
};
>>>>>>> 66e92b6aa263f6bbbbe19f7bc3e8f7983113e894
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
