var script = document.createElement("script");
script.src = chrome.runtime.getURL("src/pages/background/index.js");
(document.head || document.documentElement).appendChild(script);

const body = document.getElementsByTagName("body")[0];

const div = document.createElement("div");
div.setAttribute("class", "logger_container my-extension");
div.innerHTML = `
    <ul id="debug_list" class="logger_list">
    </ul>
    <div class="logger_toolbar">
        <div class="logger_bubbles">
            <div id="logger_clear" class="logger_action">
                <!-- Trash -->
                <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZThlYWVkIj48cGF0aCBkPSJNMjgwLTEyMHEtMzMgMC01Ni41LTIzLjVUMjAwLTIwMHYtNTIwaC00MHYtODBoMjAwdi00MGgyNDB2NDBoMjAwdjgwaC00MHY1MjBxMCAzMy0yMy41IDU2LjVUNjgwLTEyMEgyODBabTQwMC02MDBIMjgwdjUyMGg0MDB2LTUyMFpNMzYwLTI4MGg4MHYtMzYwaC04MHYzNjBabTE2MCAwaDgwdi0zNjBoLTgwdjM2MFpNMjgwLTcyMHY1MjAtNTIwWiIvPjwvc3ZnPg=='/>
            </div>
        </div>
        <button id="logger_hide" class="logger_action">
            <!-- Eye Open -->
            <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjZThlYWVkIj48cGF0aCBkPSJNNDgwLTMyMHE3NSAwIDEyNy41LTUyLjVUNjYwLTUwMHEwLTc1LTUyLjUtMTI3LjVUNDgwLTY4MHEtNzUgMC0xMjcuNSA1Mi41VDMwMC01MDBxMCA3NSA1Mi41IDEyNy41VDQ4MC0zMjBabTAtNzJxLTQ1IDAtNzYuNS0zMS41VDM3Mi01MDBxMC00NSAzMS41LTc2LjVUNDgwLTYwOHE0NSAwIDc2LjUgMzEuNVQ1ODgtNTAwcTAgNDUtMzEuNSA3Ni41VDQ4MC0zOTJabTAgMTkycS0xNDYgMC0yNjYtODEuNVQ0MC01MDBxNTQtMTM3IDE3NC0yMTguNVQ0ODAtODAwcTE0NiAwIDI2NiA4MS41VDkyMC01MDBxLTU0IDEzNy0xNzQgMjE4LjVUNDgwLTIwMFptMC0zMDBabTAgMjIwcTExMyAwIDIwNy41LTU5LjVUODMyLTUwMHEtNTAtMTAxLTE0NC41LTE2MC41VDQ4MC03MjBxLTExMyAwLTIwNy41IDU5LjVUMTI4LTUwMHE1MCAxMDEgMTQ0LjUgMTYwLjVUNDgwLTI4MFoiLz48L3N2Zz4='/>
        </button>
    </div>
    `;
body.appendChild(div);
