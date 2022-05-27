// 텍스트 작성과 삭제 즉시 실행 함수
(function () {
  // span 요소 노드 가져오기
  const spanEl = document.querySelector("main h2 span");
  // 화면에 표시할 문장 배열
  const txtArr = ["Front-End Developer", "프론트엔드 개발자"];
  // 배열의 인덱스 초깃값
  let index = 0;
  // 화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
  let currentTxt = txtArr[index].split("");

  // 텍스트 쓰기 효과
  function writeTxt() {
    spanEl.textContent += currentTxt.shift(); // 배열의 요소를 앞에서부터 한 개씩 출력
    if (currentTxt.length !== 0) {
      // 배열의 길이 확인(0이 아니라면 배열 요소를 모두 출력할 때까지 witeTxt() 함수 반복 호출)
      setTimeout(writeTxt, Math.floor(Math.random() * 100)); // 0부터 100사이의 숫자 무작위로 구해져 작성되는 글자 속도 매번 달라지게 함
    } else {
      // currentTxt 배열이 비었을 경우 실행
      currentTxt = spanEl.textContent.split("");
      setTimeout(deleteTxt, 3000); // 3초 뒤에 텍스트를 지움
    }
  }
  writeTxt();

  // 텍스트 삭제 효과
  function deleteTxt() {
    currentTxt.pop(); // 배열 요소를 끝에서부터 한 개씩 삭제
    spanEl.textContent = currentTxt.join(""); // 현재 배열에 있는 요소를 하나의 문자열로 합침
    if (currentTxt.length !== 0) {
      // 할당된 배열이 비었는지 확인, 값이 남아있으면 다시 deleteTxt() 함수 호출
      setTimeout(deleteTxt, Math.floor(Math.random() * 100));
    } else {
      // 모든 배열이 삭제되면 else문 실행
      index = (index + 1) % txtArr.length;
      currentTxt = txtArr[index].split("");
      writeTxt();
    }
  }
})();
