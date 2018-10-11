let placeholder = document.querySelector("#messages");
// let entireElement = placeHolder;
console.log(placeholder);

const newSection = (...extra) => {
  console.log(extra);
  let newElement = document.createElement("section");
  newElement.setAttribute("class", extra[0]);
  newElement.textContent = extra[1];
  placeholder.appendChild(newElement);
  console.log(placeholder);
};

newSection("message", "This is the 1st message.");
newSection("message", "This is the 2nd message.");
newSection("message", "This is the 3rd message.");
newSection("message", "This is the 4th message.");
newSection("message", "This is the 5th message.");
