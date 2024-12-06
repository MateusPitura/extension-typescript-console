var logger_addToList = (_message: any, variant: string) => {
	const styles: { [key: string]: string } = {
		log: "bg-white",
		info: "bg-blue",
		warn: "bg-yellow",
		error: "bg-red",
	};
	let message = JSON.stringify(_message);
	if (message === "{}" || !message) {
		message = _message.toString();
	}
	let display = "block";
	if (
		document
			.getElementById(`logger_${variant}`)
			?.classList.contains("logger_inactive")
	) {
		display = "none";
	}
	document.getElementById("debugList")?.insertAdjacentHTML(
		"beforeend",
		`<li class="${styles[variant]} ${variant}" style="display:${display};">
                <div style="display:flex;width:100%;">
                    <button 
                        style="margin-left:auto;" 
                        class="logger_x_button">x</button>
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
	oerror: (arg: any) => void;
	owarn: (arg: any) => void;
	oinfo: (arg: any) => void;
}

if (typeof console !== "undefined") {
	if (typeof console.log !== "undefined") {
		console.olog = console.log;
	} else {
		console.olog = () => {};
	}
	if (typeof console.error !== "undefined") {
		console.oerror = console.error;
	} else {
		console.oerror = () => {};
	}
	if (typeof console.warn !== "undefined") {
		console.owarn = console.warn;
	} else {
		console.owarn = () => {};
	}
	if (typeof console.info !== "undefined") {
		console.oinfo = console.info;
	} else {
		console.oinfo = () => {};
	}
}

console.log = (message: unknown) => {
	console.olog(message);
	logger_addToList(message, "log");
};

console.error = (message: unknown) => {
	console.oerror({ message });
	logger_addToList(message, "error");
};

console.warn = (message: unknown) => {
	console.owarn(message);
	logger_addToList(message, "warn");
};

console.info = (message: unknown) => {
	console.oinfo(message);
	logger_addToList(message, "info");
};

var logger_hideByClass = (logger_class: string) => {
	const elements = document.getElementsByClassName(
		logger_class
	) as HTMLCollectionOf<HTMLElement>;
	if (elements === null && elements[0] == undefined) {
		return;
	}
	let changeTo = "none";
	if ((elements[0] as HTMLElement)!.style.display === "none") {
		changeTo = "block";
	}
	for (const elem of elements) {
		(elem as HTMLElement).style.display = changeTo;
	}
	const button = document.getElementById(`logger_${logger_class}`);
	if (button === null) {
		return;
	}
	if (changeTo === "none") {
		button!.classList.add("logger_inactive");
	} else {
		button!.classList.remove("logger_inactive");
	}
};

["log", "error", "warn", "info"].forEach((element: string) => {
	if (document.getElementById(`logger_${element}`) !== null) {
		document.getElementById(`logger_${element}`)!.onclick = () =>
			logger_hideByClass(element);
	}
});

var logger_hideAll = (action?: string) => {
	const bubbles = document.getElementsByClassName(
		"logger_bubbles"
	)[0] as HTMLElement;
	const list = document.getElementsByClassName(
		"logger_list"
	)[0] as HTMLElement;
	if (action !== "hide" && bubbles.style.display === "none") {
		bubbles.style.display = "flex";
		list.style.display = "block";
		localStorage.setItem("logger_is_hidden", "false");
		if (document.getElementById("logger_hide")) {
			document.getElementById("logger_hide")!.innerHTML =
				"<span>X</span>";
		}
	} else {
		localStorage.setItem("logger_is_hidden", "true");
		bubbles.style.display = "none";
		list.style.display = "none";
		if (document.getElementById("logger_hide")) {
			document.getElementById("logger_hide")!.innerHTML =
				"<span><</span>";
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
