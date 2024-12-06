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
        <button id="logger_hide" class="logger_action" style="margin-right:0.5rem;margin-left:auto;">
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZThlYWVkIj48cGF0aCBkPSJtNjQ0LTQyOC01OC01OHE5LTQ3LTI3LTg4dC05My0zMmwtNTgtNThxMTctOCAzNC41LTEydDM3LjUtNHE3NSAwIDEyNy41IDUyLjVUNjYwLTUwMHEwIDIwLTQgMzcuNVQ2NDQtNDI4Wm0xMjggMTI2LTU4LTU2cTM4LTI5IDY3LjUtNjMuNVQ4MzItNTAwcS01MC0xMDEtMTQzLjUtMTYwLjVUNDgwLTcyMHEtMjkgMC01NyA0dC01NSAxMmwtNjItNjJxNDEtMTcgODQtMjUuNXQ5MC04LjVxMTUxIDAgMjY5IDgzLjVUOTIwLTUwMHEtMjMgNTktNjAuNSAxMDkuNVQ3NzItMzAyWm0yMCAyNDZMNjI0LTIyMnEtMzUgMTEtNzAuNSAxNi41VDQ4MC0yMDBxLTE1MSAwLTI2OS04My41VDQwLTUwMHEyMS01MyA1My05OC41dDczLTgxLjVMNTYtNzkybDU2LTU2IDczNiA3MzYtNTYgNTZaTTIyMi02MjRxLTI5IDI2LTUzIDU3dC00MSA2N3E1MCAxMDEgMTQzLjUgMTYwLjVUNDgwLTI4MHEyMCAwIDM5LTIuNXQzOS01LjVsLTM2LTM4cS0xMSAzLTIxIDQuNXQtMjEgMS41cS03NSAwLTEyNy41LTUyLjVUMzAwLTUwMHEwLTExIDEuNS0yMXQ0LjUtMjFsLTg0LTgyWm0zMTkgOTNabS0xNTEgNzVaIi8+PC9zdmc+'/>
        </button>
        <div class="logger_bubbles">
            <div id="logger_clear" class="logger_action">
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZThlYWVkIj48cGF0aCBkPSJNMjgwLTEyMHEtMzMgMC01Ni41LTIzLjVUMjAwLTIwMHYtNTIwaC00MHYtODBoMjAwdi00MGgyNDB2NDBoMjAwdjgwaC00MHY1MjBxMCAzMy0yMy41IDU2LjVUNjgwLTEyMEgyODBabTQwMC02MDBIMjgwdjUyMGg0MDB2LTUyMFpNMzYwLTI4MGg4MHYtMzYwaC04MHYzNjBabTE2MCAwaDgwdi0zNjBoLTgwdjM2MFpNMjgwLTcyMHY1MjAtNTIwWiIvPjwvc3ZnPg=='/>
            </div>
        </div>
    </div>
    `;
body.appendChild(div);
