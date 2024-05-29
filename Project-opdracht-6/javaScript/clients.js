function fetchUserData() {
  fetch(
    "https://randomuser.me/api/?results=12&inc=name,gender,nat,location,picture&noinfo"
  )
    .then((response) => response.json())
    .then((data) => {
      displayUserData(data.results);
    })
    .catch((error) => {
      console.error("Er is een fout opgetreden: ", error);
    });
}

function displayUserData(users) {
  const container = document.getElementById("users-container");

  users.forEach((user) => {
    const userArticle = document.createElement("article");
    userArticle.classList.add("user");

    const photo = document.createElement("img");
    photo.src = user.picture.large;
    photo.alt = "Profile foto";
    photo.style.borderRadius = "50%";
    photo.style.border = "1px solid black";
    photo.style.marginBottom = "10px";
    userArticle.appendChild(photo);

    const title = document.createElement("h3");
    title.textContent = `${user.name.title}. ${user.name.first} ${user.name.last}`;
    title.style.textAlign = "center";
    userArticle.appendChild(title);

    const address = document.createElement("p");
    address.textContent = `Adres: ${user.location.street.name} ${user.location.street.number}, ${user.location.city}, ${user.location.country}`;
    address.style.textAlign = "center";
    userArticle.appendChild(address);

    container.appendChild(userArticle);
  });
}

fetchUserData();
