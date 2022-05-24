// 공백 제거 replaceAll 사용
const email = " suns etinmygarden@gmail.com";
console.log(email.replaceAll(" ", ""));

// 공백 제거 replace 사용(정규식 방법)
const email1 = " ailish 04@naver.com";
console.log(email1.replace(/ /gi, ""));
