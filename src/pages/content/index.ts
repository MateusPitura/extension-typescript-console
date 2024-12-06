var s = document.createElement("script");
s.src = chrome.runtime.getURL("src/pages/background/index.js");
(document.head || document.documentElement).appendChild(s);

const body = document.getElementsByTagName("body")[0];

const div = document.createElement("div");
div.setAttribute("class", "logger_container");
div.innerHTML = `
    <ul id="debugList" class="logger_list">
    </ul>
    <div style="display:flex;">
        <button id="logger_hide" class="logger_action" style="margin-right:0.5rem;margin-left:auto;">x</button>
        <div class="logger_bubbles">
            <div id="logger_log" class="logger_bubble bg-white">Log</div>
            <div id="logger_info" class="logger_bubble bg-blue">Info</div>
            <div id="logger_warn" class="logger_bubble bg-yellow">Warning</div>
            <div id="logger_error" class="logger_bubble bg-red">Error</div>
            <div id="logger_clear" class="logger_action">Clear</div>
        </div>
    </div>
    `;
body.appendChild(div);
