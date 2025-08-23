const cl = (text) => console.log(text);

const solution = (s, skip, index) => {
  let answer = "";
  const skipCharSet = new Set(skip.split("").map((ele) => ele.charCodeAt()));
  const inputCharArr = s.split("");

  const handleOverflow = (crntCharCode) =>
    ((crntCharCode - "a".charCodeAt()) % 26) + "a".charCodeAt();

  inputCharArr.forEach((char) => {
    let crntCharCode = char.charCodeAt();

    for (let i = 1; i <= index; i++) {
      crntCharCode += 1;

      crntCharCode = handleOverflow(crntCharCode);
      while (skipCharSet.has(crntCharCode)) {
        crntCharCode += 1;
        crntCharCode = handleOverflow(crntCharCode);
      }
    }

    answer += String.fromCharCode(crntCharCode);
  });
  return answer;
};
