"user strict";

// const body = document.body;
const { body } = document;

const changeBackground = (int) => {
  // Check if background already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }

  // Reset CSS class for body
  body.className = "";
  previousBackground === `background-${int}`
    ? false
    : body.classList.add(`background-${int}`);
};
