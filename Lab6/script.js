function fetchCustomUsers() {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        const users = data.results;
        displayCustomUsers(users);
      })
      .catch((error) => console.error("Error fetching users:", error));
  }
  
  function displayCustomUsers(users) {
    const userContainer = document.getElementById("customUserContainer");
  
    userContainer.innerHTML = "";
  
    users.forEach((user) => {
      const userCard = document.createElement("div");
      userCard.classList.add("custom-user-card");
  
      userCard.innerHTML = `
              <img src="${user.picture.large}" alt="User picture">
              <p>Cell: ${user.cell}</p>
              <p>City: ${user.location.city}</p>
              <p>Postcode: ${user.location.postcode}</p>
              <p>Email: ${user.email}</p>
          `;
  
      userContainer.appendChild(userCard);
    });
  }
  
  window.onload = fetchCustomUsers;
  
  document
    .getElementById("loadCustomUsersButton")
    .addEventListener("click", fetchCustomUsers);
  