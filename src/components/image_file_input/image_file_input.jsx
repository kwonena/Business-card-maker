import React, { useRef } from "react";
import styles from "./image_file_input.module.css";

<<<<<<< HEAD
=======
<<<<<<< HEAD
const ImageFileInput = ({ imageUploader }) => <button>Del</button>;
=======
>>>>>>> 70d5869e6e0879253690d2a8cb272a3a09debfb2
const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

<<<<<<< HEAD
  // 함수 자체에 async를 붙여 비동기적으로 사용 가능
  const onChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: "fileName",
      url: "url",
=======
  const onChange = async (event) => {
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    console.log(uploaded);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
>>>>>>> 70d5869e6e0879253690d2a8cb272a3a09debfb2
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "No file"}
      </button>
    </div>
  );
};
<<<<<<< HEAD
=======
>>>>>>> 66e92b6aa263f6bbbbe19f7bc3e8f7983113e894
>>>>>>> 70d5869e6e0879253690d2a8cb272a3a09debfb2

export default ImageFileInput;
