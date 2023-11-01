import { v4 as uuidv4 } from 'uuid';
import { hello_backend } from "../../declarations/hello_backend/index";
    
let file = null;
let data = null;
let uploadedFiles = [];



  const handleFileChange = (selectedFile) => {
    file = selectedFile;
    let idCardBase64 = "";
    getBase64(selectedFile, (result) => {
      idCardBase64 = result;
      console.log("idCardBase64", idCardBase64);
      handleSaveFile(idCardBase64);
      data = idCardBase64;
    });
  };

  function getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log("reader", reader);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const handleUpload = () => {
    if (file) {
      let idCardBase64 = "";
      getBase64(file, (result) => {
        idCardBase64 = result;
      });
    }
  };

  function handleSaveFile(idCardBase64) {
    try {
      let response = hello_backend.saveFile(uuidv4(), idCardBase64);
      if (response) {
        alert("Upload Successfully");
      }
    } catch (error) {
      alert(error);
    }
  }






// Function to show/hide image upload form
const uploadBtn = document.getElementById("uploadBtn");
const imageUploadForm = document.getElementById("imageUploadForm");

uploadBtn.addEventListener("click", () => {
    if (imageUploadForm.style.display === "block") {
        imageUploadForm.style.display = "none";
    } else {
        imageUploadForm.style.display = "block";
    }
});

// Function to handle image upload and form submission
const imageInput = document.getElementById("imageInput");
const description = document.getElementById("description");
const submitBtn = document.getElementById("submitBtn");
const travelPosts = document.getElementById("travelPosts");

submitBtn.addEventListener("click", async() => {
    // Handle form submission here
    const imageFile = imageInput.files[0];
    const experienceText = description.value;
    await handleFileChange(imageFile);
    // You can send this data to your backend for processing
    // For now, let's just create a new post element
    const post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
        <img src="${URL.createObjectURL(imageFile)}" alt="Travel Image">
        <p>${experienceText}</p>
    `;
    travelPosts.appendChild(post);

    // Clear form
    imageInput.value = "";
    description.value = "";

    // Hide image upload form
    // let g = hello_backend.greet("this", "hello@hgello.jo");
    // console.log(g);
    imageUploadForm.style.display = "none";
});
