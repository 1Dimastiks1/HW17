const input = document.querySelector(".text-input");
const button = document.querySelector(".my-button");

button.onclick = function () {
  button.textContent = input.value;
};

    const image = document.querySelector(".my-image");

    image.src = "https://i.pinimg.com/736x/84/f0/a1/84f0a1ab2f0169b776b2aaf544c8638e.jpg";

    const link = document.querySelector(".my-link");
    const photo = document.querySelector(".photo");

    link.href = "https://youtu.be/K6CkfrPvk7Q?t=7212";

    photo.alt = "Красиве зображення";

    const firstItem = document.querySelector(".my-list li");

    firstItem.textContent = "Новий текст";