var logger_addToList = (_message: any) => {
  let message = JSON.stringify(_message);
  if (message === "{}" || !message) {
    message = _message.toString();
  }
  document.getElementById("debugList")?.insertAdjacentHTML(
    "beforeend",
    `<li class="bg-white log" style="display:block;">
        <div style="display:flex;width:100%;">
            <button 
              style="margin-left:auto;" 
              class="logger_x_button"
            >
                x
            </button>
        </div>
        <div>
            <p>${message.toString()}</p>
        </div>
    </li>`
  );
  const button = (
    document.getElementById("debugList")?.lastChild as HTMLElement
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
  if (action !== "hide" && bubbles.style.display === "none") {
    bubbles.style.display = "flex";
    list.style.display = "block";
    localStorage.setItem("logger_is_hidden", "false");
    if (document.getElementById("logger_hide")) {
      document.getElementById("logger_hide")!.innerHTML = "<span>Hide</span>";
    }
  } else {
    localStorage.setItem("logger_is_hidden", "true");
    bubbles.style.display = "none";
    list.style.display = "none";
    if (document.getElementById("logger_hide")) {
      document.getElementById("logger_hide")!.innerHTML = "<span><</span>"; // Trocar por um ícone
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
