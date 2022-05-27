/* 애니메이션 스크롤 이동 */
const animationMove = function (selector) {
  // selector 매개변수로 이동할 대상 요소 노드 가져오기
  const targetEl = document.querySelector(selector);
  // 현재 웹 브라우저의 스크롤 정보(y 값)
  const browserScrollY = window.pageYOffset;
  // 이동할 대상의 위치(y 값)
  const targetScorllY = targetEl.getBoundingClientRect().top + browserScrollY;
  // 스크롤 이동
  window.scrollTo({ top: targetScorllY, behavior: "smooth" });
};

// 스크롤 이벤트 연결하기
const scollMoveEl = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scollMoveEl.length; i++) {
  scollMoveEl[i].addEventListener("click", function (e) {
    const target = this.dataset.target;
    animationMove(target);
  });
}
