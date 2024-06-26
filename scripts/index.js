const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

// Log initial cards to console
console.log(initialCards);

// Profile Edit Modal Elements
const profileEditButton = document.querySelector("#profile-edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");
const profileTitleInput = document.querySelector("#profile-title-input");
const addCardModal = document.querySelector("#add-card-modal");
const profileDescriptionInput = document.querySelector(
  "#profile-description-input"
);
const profileEditForm = profileEditModal.querySelector(".modal__form");
const modalCloseButton = document.querySelector("#modal-close-button");
const addNewCardButton = document.querySelector(".profile-add-button");
const profileFormElement = profileEditModal.querySelector(".modal__form");
const addCardFormElement = addCardModal.querySelector(".modal__form");

// Card Elements
const cardListEl = document.querySelector(".cards__list");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

// Functions
function closePopup() {
  profileEditModal.classList.remove("modal_open");
}

function getCardElement(cardData) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardTitleEl = cardElement.querySelector(".card__title");
  const profileCardDeleteButton = cardElement.querySelector(
    ".card__delete-button"
  );
  const likeButtons = cardElement.querySelectorAll(".card__like-button");

  cardImageEl.src = cardData.link;
  cardImageEl.alt = cardData.name;
  cardTitleEl.textContent = cardData.name;

  // Iterate over each likeButton element
  likeButtons.forEach((likeButton) => {
    // Add a click event listener to each likeButton
    likeButton.addEventListener("click", () => {
      // Toggle the 'card__like-button_active' class on the clicked likeButton
      likeButton.classList.toggle("card__like-button_active");
    });
  });

  // Delete Button Functionality
  profileCardDeleteButton.addEventListener("click", handleDeleteCard);

  return cardElement;
}

function handleDeleteCard(event) {
  event.target.closest(".card").remove();
}

// Event Listeners
profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent;
  profileDescriptionInput.value = profileSubtitle.textContent;
  profileEditModal.classList.add("modal_open");
});

modalCloseButton.addEventListener("click", () => {
  closePopup();
});

profileEditForm.addEventListener("submit", (e) => {
  e.preventDefault();
  profileTitle.textContent = profileTitleInput.value;
  profileSubtitle.textContent = profileDescriptionInput.value;
  closePopup();
});

const cardTitleInput = addCardFormElement.querySelector(
  ".modal__input_type_title"
);
const cardUrlInput = addCardFormElement.querySelector(".modal__input_type_url");

function handleAddCardFormSubmit(event) {
  event.preventDefault();
  const cardElement = getCardElement;
  closeModal(addCardModal);
}

// Initial Card Rendering
initialCards.forEach((cardData) => {
  const cardElement = getCardElement(cardData);
  cardListEl.prepend(cardElement);
});

// Like Button Functionality
// const likeButtons = document.querySelectorAll(".card__like-button");
// likeButtons.forEach((likeButton) => {
//   likeButton.addEventListener("click", () => {
//     likeButton.classList.toggle("card__like-button_active");
//   });
// });

// Delete Button Functionality
// const profileCardDeleteButton = document.querySelector(".card__delete-button");
// profileCardDeleteButton.addEventListener("click", (event) => {
//   event.target.closest(".card").remove();
// });
