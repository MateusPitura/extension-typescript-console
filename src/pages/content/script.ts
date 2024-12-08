var logger_addToList = (_message: any) => {
  let message = JSON.stringify(_message);
  if (message === "{}" || !message) {
    message = _message.toString();
  }
  document.getElementById("debug_list")?.insertAdjacentHTML(
    "beforeend",
    `<li class="logger_item log">
      <p class="logger_text">${message.toString()}</p>
      <div class="logger_close_button">
        <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyMHB4IiBmaWxsPSIjMDAwMDAwIj48cGF0aCBkPSJtMjkxLTI0MC01MS01MSAxODktMTg5LTE4OS0xODkgNTEtNTEgMTg5IDE4OSAxODktMTg5IDUxIDUxLTE4OSAxODkgMTg5IDE4OS01MSA1MS0xODktMTg5LTE4OSAxODlaIi8+PC9zdmc+'/>
      </div>
    </li>`
  );
  const button = (
    document.getElementById("debug_list")?.lastChild as HTMLElement
  ).getElementsByTagName("button")[0];
  if (button !== null) {
    button!.onclick = () =>
      (button!.parentNode?.parentNode as HTMLElement)?.remove();
  }
  return;
};

interface Console {
  olog: (arg: any) => void;
}

if (typeof console !== "undefined") {
  if (typeof console.log !== "undefined") {
    console.olog = console.log;
  } else {
    console.olog = () => {};
  }
}

console.log = (...message) => {
  console.olog(...message);
  if ([...message][0].includes("🌠")) {
    logger_addToList(message);
  }
};

var logger_hideAll = (action?: string) => {
  const bubbles = document.getElementsByClassName(
    "logger_bubbles"
  )[0] as HTMLElement;
  const list = document.getElementsByClassName("logger_list")[0] as HTMLElement;
  if (action !== "hide" && bubbles.style.display === "none") { // Unhide
    bubbles.style.display = "flex";
    list.style.display = "block";
    localStorage.setItem("logger_is_hidden", "false");
    if (document.getElementById("logger_hide")) {
      document.getElementById("logger_hide")!.innerHTML = `
        <!-- Eye Open -->
        <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZThlYWVkIj48cGF0aCBkPSJNNDgwLTMyMHE3NSAwIDEyNy41LTUyLjVUNjYwLTUwMHEwLTc1LTUyLjUtMTI3LjVUNDgwLTY4MHEtNzUgMC0xMjcuNSA1Mi41VDMwMC01MDBxMCA3NSA1Mi41IDEyNy41VDQ4MC0zMjBabTAtNzJxLTQ1IDAtNzYuNS0zMS41VDM3Mi01MDBxMC00NSAzMS41LTc2LjVUNDgwLTYwOHE0NSAwIDc2LjUgMzEuNVQ1ODgtNTAwcTAgNDUtMzEuNSA3Ni41VDQ4MC0zOTJabTAgMTkycS0xNDYgMC0yNjYtODEuNVQ0MC01MDBxNTQtMTM3IDE3NC0yMTguNVQ0ODAtODAwcTE0NiAwIDI2NiA4MS41VDkyMC01MDBxLTU0IDEzNy0xNzQgMjE4LjVUNDgwLTIwMFptMC0zMDBabTAgMjIwcTExMyAwIDIwNy41LTU5LjVUODMyLTUwMHEtNTAtMTAxLTE0NC41LTE2MC41VDQ4MC03MjBxLTExMyAwLTIwNy41IDU5LjVUMTI4LTUwMHE1MCAxMDEgMTQ0LjUgMTYwLjVUNDgwLTI4MFoiLz48L3N2Zz4='/>
      `;
    }
  } else { // Hide
    localStorage.setItem("logger_is_hidden", "true");
    bubbles.style.display = "none";
    list.style.display = "none";
    if (document.getElementById("logger_hide")) {
      document.getElementById("logger_hide")!.innerHTML = `
        <!-- Eye Closed -->
        <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZThlYWVkIj48cGF0aCBkPSJtNjQ0LTQyOC01OC01OHE5LTQ3LTI3LTg4dC05My0zMmwtNTgtNThxMTctOCAzNC41LTEydDM3LjUtNHE3NSAwIDEyNy41IDUyLjVUNjYwLTUwMHEwIDIwLTQgMzcuNVQ2NDQtNDI4Wm0xMjggMTI2LTU4LTU2cTM4LTI5IDY3LjUtNjMuNVQ4MzItNTAwcS01MC0xMDEtMTQzLjUtMTYwLjVUNDgwLTcyMHEtMjkgMC01NyA0dC01NSAxMmwtNjItNjJxNDEtMTcgODQtMjUuNXQ5MC04LjVxMTUxIDAgMjY5IDgzLjVUOTIwLTUwMHEtMjMgNTktNjAuNSAxMDkuNVQ3NzItMzAyWm0yMCAyNDZMNjI0LTIyMnEtMzUgMTEtNzAuNSAxNi41VDQ4MC0yMDBxLTE1MSAwLTI2OS04My41VDQwLTUwMHEyMS01MyA1My05OC41dDczLTgxLjVMNTYtNzkybDU2LTU2IDczNiA3MzYtNTYgNTZaTTIyMi02MjRxLTI5IDI2LTUzIDU3dC00MSA2N3E1MCAxMDEgMTQzLjUgMTYwLjVUNDgwLTI4MHEyMCAwIDM5LTIuNXQzOS01LjVsLTM2LTM4cS0xMSAzLTIxIDQuNXQtMjEgMS41cS03NSAwLTEyNy41LTUyLjVUMzAwLTUwMHEwLTExIDEuNS0yMXQ0LjUtMjFsLTg0LTgyWm0zMTkgOTNabS0xNTEgNzVaIi8+PC9zdmc+'/>
      `;
    }
  }
};

var logger_clearAll = () => {
  const list = document.getElementsByClassName("logger_list")[0];
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
};

if (document.getElementById("logger_hide") !== null) {
  document.getElementById("logger_hide")!.onclick = () => logger_hideAll();
}

if (document.getElementById("logger_clear") !== null) {
  document.getElementById("logger_clear")!.onclick = () => logger_clearAll();
}

if (localStorage.getItem("logger_is_hidden") !== "false") {
  logger_hideAll("hide");
}
