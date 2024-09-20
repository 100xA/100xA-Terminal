import command from "../config.json";

// Imports for commands
import { HELP } from "./commands/help";
import { BANNER } from "./commands/banner";
import { ABOUT } from "./commands/abouts";
import { DEFAULT } from "./commands/default";
import { PROJECTS } from "./commands/projects";
import { createWhoami } from "./commands/whoami";
import { createPhil } from "./commands/phil";
import { createWhoAreYou } from "./commands/whoareyou";
import { BLOG } from "./commands/blog";

// Constants
const COMMANDS = ["help", "about", "projects", "whoami", "banner", "clear"];
const HISTORY: string[] = [];
const WRITELINESCOPY = document.getElementById("write-lines");
const TERMINAL = document.getElementById("terminal");
const USERINPUT = document.getElementById("user-input") as HTMLInputElement;
const PROMPT = document.getElementById("prompt");

// Variables
let mutWriteLines = document.getElementById("write-lines");
let historyIdx = 0;
let tempInput = "";
let isSudo = false;
let bareMode = false;
let img = new Image();

// Utility functions
const scrollToBottom = () => {
  const MAIN = document.getElementById("main");
  if (MAIN) {
    MAIN.scrollTop = MAIN.scrollHeight;
  }
};

const displayText = (item: string, idx: number) => {
  setTimeout(() => {
    if (!mutWriteLines) return;
    const p = document.createElement("p");
    p.innerHTML = item;
    mutWriteLines.parentNode!.insertBefore(p, mutWriteLines);
    scrollToBottom();
  }, 40 * idx);
};

const displayImage = (item: string) => {
  img.src = item;
  img.height = 300;

  document.getElementById("body")!.appendChild(img);
  setTimeout(() => {
    document.getElementById("body")?.removeChild(img);
  }, 10000);
};

// Event handlers
const userInputHandler = (e: KeyboardEvent) => {
  const key = e.key;

  switch (key) {
    case "Enter":
      e.preventDefault();
      enterKey();
      scrollToBottom();
      break;
    case "Escape":
      USERINPUT.value = "";
      break;
    case "ArrowUp":
      arrowKeys(key);
      e.preventDefault();
      break;
    case "ArrowDown":
      arrowKeys(key);
      break;
    case "Tab":
      tabKey();
      e.preventDefault();
      break;
  }
};

const enterKey = () => {
  if (!mutWriteLines || !PROMPT) return;
  const resetInput = "";
  let newUserInput;
  const userInput = USERINPUT.value;

  if (bareMode) {
    newUserInput = userInput;
  } else {
    newUserInput = `<span class='output'>${userInput}</span>`;
  }

  HISTORY.push(userInput);
  historyIdx = HISTORY.length;

  if (userInput === "clear") {
    commandHandler(userInput.toLowerCase().trim());
    USERINPUT.value = resetInput;
    return;
  }

  const div = document.createElement("div");
  div.innerHTML = `<span id="prompt">${PROMPT.innerHTML}</span> ${newUserInput}`;

  if (mutWriteLines.parentNode) {
    mutWriteLines.parentNode.insertBefore(div, mutWriteLines);
  }

  if (userInput.trim().length !== 0) {
    commandHandler(userInput.toLowerCase().trim());
  }

  USERINPUT.value = resetInput;
};

const tabKey = () => {
  const currInput = USERINPUT.value;

  for (const ele of COMMANDS) {
    if (ele.startsWith(currInput)) {
      USERINPUT.value = ele;
      return;
    }
  }
};

const arrowKeys = (e: string) => {
  switch (e) {
    case "ArrowDown":
      if (historyIdx !== HISTORY.length) {
        historyIdx += 1;
        USERINPUT.value = HISTORY[historyIdx];
        if (historyIdx === HISTORY.length) USERINPUT.value = tempInput;
      }
      break;
    case "ArrowUp":
      if (historyIdx === HISTORY.length) tempInput = USERINPUT.value;
      if (historyIdx !== 0) {
        historyIdx -= 1;
        USERINPUT.value = HISTORY[historyIdx];
      }
      break;
  }
};

const commandHandler = (input: string) => {
  if (input.startsWith("rm -rf") && input.trim() !== "rm -rf") {
    if (isSudo) {
      if (input === "rm -rf src" && !bareMode) {
        bareMode = true;

        setTimeout(() => {
          if (!TERMINAL || !WRITELINESCOPY) return;
          TERMINAL.innerHTML = "";
          TERMINAL.appendChild(WRITELINESCOPY);
          mutWriteLines = WRITELINESCOPY;
        });

        setTimeout(() => {
          writeLines(["What made you think that was a good idea?", "<br>"]);
        }, 200);

        setTimeout(() => {
          writeLines(["Now everything is ruined.", "<br>"]);
        }, 1200);
      } else if (input === "rm -rf src" && bareMode) {
        writeLines(["there's no more src folder.", "<br>"]);
      } else {
        if (bareMode) {
          writeLines(["What else are you trying to delete?", "<br>"]);
        } else {
          writeLines([
            "<br>",
            "Directory not found.",
            "type <span class='command'>'ls'</span> for a list of directories.",
            "<br>",
          ]);
        }
      }
    } else {
      writeLines(["Permission not granted.", "<br>"]);
    }
    return;
  }

  switch (input) {
    case "clear":
      setTimeout(() => {
        if (!TERMINAL || !WRITELINESCOPY) return;
        TERMINAL.innerHTML = "";
        TERMINAL.appendChild(WRITELINESCOPY);
        mutWriteLines = WRITELINESCOPY;
      });
      break;
    case "banner":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(BANNER);
      break;
    case "help":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(HELP);
      break;
    case "whoami":
      writeLines(createWhoami());
      break;
    case "about":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      if (bareMode) {
        writeLines(["Nothing to see here.", "<br>"]);
        break;
      }
      writeLines(ABOUT);
      break;
    case "claudia":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(["Spacko XD"]);
      break;
    case "paddy":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(["Hurensohn"]);
      break;
    case "angi":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(["Igitt Frau"]);
      break;
    case "projects":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(PROJECTS);
      break;
    case "blog":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(BLOG);
      break;
    case "rejtan":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      displayImage(
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Jan_Matejko_-_Upadek_Polski_%28Reytan%29.jpg/800px-Jan_Matejko_-_Upadek_Polski_%28Reytan%29.jpg",
      );
      break;

    case "phil":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(createPhil());
      break;

    case "rm -rf":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(["don't try again.", "<br>"]);
      break;

    case "ls":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines(["Sorry, nothing to see", "<br>"]);
      break;
    case "whoareyou":
      if (document.body.contains(img)) {
        document.getElementById("body")?.removeChild(img);
      }
      writeLines([createWhoAreYou()]);
      writeLines(["<br>"]);
      displayImage("https://100xa.github.io/assets/images/avatar.jpeg");
      break;
    default:
      writeLines(DEFAULT);
      break;
  }
};

const writeLines = (message: string[]) => {
  message.forEach((item, idx) => {
    displayText(item, idx);
  });
};

const initEventListeners = () => {
  if (command) {
    if (command.username) {
      const USER = document.getElementById("user");
      const PRE_USER = document.getElementById("pre-user");
      if (USER) USER.innerText = command.username;
      if (PRE_USER) PRE_USER.innerText = command.username;
    }
  }

  window.addEventListener("load", () => {
    writeLines(BANNER);
  });

  USERINPUT.addEventListener("keypress", userInputHandler);
  USERINPUT.addEventListener("keydown", userInputHandler);
};

initEventListeners();
