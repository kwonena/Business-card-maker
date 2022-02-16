// 사용자에게 파일을 인자로 받아서
// 파일을 업로드한 뒤
// 업로드가 됐다면 서버에 있는 이미지의 url을 리턴
class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ego4opmw");
    const result = await fetch(
      "https://api.cloudinary.com/v1_1/dgqh0zsnf/upload",
      {
        method: "POST",
        body: data,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
