<<<<<<< HEAD
// 사용자에게 파일을 인자로 받아서
// 파일을 업로드한 뒤
// 업로드가 됐다면 서버에 있는 이미지의 url을 리턴
class ImageUploader {
<<<<<<< HEAD
=======
  upload(file) {
    return "file";
=======
class ImageUploader {
>>>>>>> 70d5869e6e0879253690d2a8cb272a3a09debfb2
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "dgqh0zsnf");
<<<<<<< HEAD
=======

>>>>>>> 70d5869e6e0879253690d2a8cb272a3a09debfb2
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/demo/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
<<<<<<< HEAD
=======
>>>>>>> 66e92b6aa263f6bbbbe19f7bc3e8f7983113e894
>>>>>>> 70d5869e6e0879253690d2a8cb272a3a09debfb2
  }
}

export default ImageUploader;
