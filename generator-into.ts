// utilisationn des generator

/**
 * 
 * Extraire les numbers dans une chaine de string 
 */

const article = `
  Lorem Ipsum is 12 simply dummy text of the printing and 40 typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500 s,
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
  release of Letraset sheets containing Lorem Ipsum passages, and more recently 
  with desktop publishing software like 500.89.56 Aldus PageMaker including versions
   of Lorem 200 Ipsum
`;

function* findNumberInSting(text: string) {
  let currentNumberAsString = '';
  for (const char of text) {
    if (isNumber(char)) {
      currentNumberAsString += char;
    } else if (currentNumberAsString) {
      yield Number(currentNumberAsString);
      currentNumberAsString = '';
    }
  }
  if (currentNumberAsString) {
    yield Number(currentNumberAsString);
  }
}

function isNumber(char: string) {
  return /[0-9]/.test(char);
}

const iterator = findNumberInSting(article);
let isDone: boolean | undefined = false;

while (!isDone) {
  const { value, done } = iterator.next();
  isDone = done;
  console.log(value);
}
