var s = document.createElement("script");
s.src = chrome.runtime.getURL("src/pages/background/index.js");
(document.head || document.documentElement).appendChild(s);

const body = document.getElementsByTagName("body")[0];

const div = document.createElement("div");
div.setAttribute("class", "logger_container");
div.innerHTML = `
    <ul id="debugList" class="logger_list">
    </ul>
    <div style="display:flex">
        <button id="logger_hide" class="logger_action" style="margin-right:0.5rem;margin-left:auto;">Hide</button>
        <div class="logger_bubbles">
            <div id="logger_clear" class="logger_action">Clear</div>
        </div>
    </div>
    `;
body.appendChild(div);
