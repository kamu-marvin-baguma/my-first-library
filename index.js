const sentence = 'baguma marvin';

const getCapsString = (str) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return null;
}

const getCapsSentence = (sentence) =>
sentence
.split(" ")
.map((word) => getCapsString(word))
.join(" ");
console.log(getCapsSentence(sentence));

// const capitalizeString = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// const capitalizeWords = (str) => str.split(capitalizeWords).join(' ');
// console.log(capitalizeString(sentence));
