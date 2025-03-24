document.addEventListener("DOMContentLoaded", function () {
  // DOM 선택 부분
  const showDialogButton = document.querySelector(".clone-modal-open");
  const closeDialogButton = document.querySelector(".clone-modal-close");
  const panelDialog = document.querySelector(".clone-modal");

  // 함수 구현 부분
  function showDialog() {
    panelDialog.showModal();
    showDialogButton.style.display = "none";
  }

  function closeDialog() {
    // 애니메이션 클래스 추가
    panelDialog.classList.add("swing-out-top-bck");

    // 애니메이션이 끝난 후 close 실행
    panelDialog.addEventListener(
      "animationend",
      function onAnimationEnd() {
        panelDialog.close();
        panelDialog.classList.remove("swing-out-top-bck"); // 애니메이션 클래스 제거
        panelDialog.removeEventListener("animationend", onAnimationEnd); // 이벤트 리스너 제거
        if (showDialogButton.style.display === "none") {
          showDialogButton.style.display = "block";
        }
      },
      { once: true }
    );
  }

  // 이벤트 리스너 등록
  showDialogButton.addEventListener("click", showDialog);
  closeDialogButton.addEventListener("click", closeDialog);
});
