const settings = {
  user: "root@linux-desktop:~/$ ",
  commands: [`commands`, `about`, `clear`, `github`, `skills`],
};
const { user, commands } = settings;

window.onload = (input) => {
  createLine("Version 1.0", false, true);
  createLine('Type "commands" for help', false, true);
  createLine("", false, true), createLine(user, true, true);
  input = document.getElementById("createdInput");
  setTimeout(() => {
    input.focus();
  }, 100);
  document.onmousedown = (event) => {
    event.preventDefault();
  };
};

document.addEventListener("keydown", (event, input) => {
  input = document.getElementById("createdInput");
  if (event.key === "Enter") {
    if(/<[a-z][\s\S]*>/i.test(input.value)){}
    if (commands.includes(input.value)) {
      switch (input.value) {
        case "about":
          createLine(user + input.value, false, true);
          createLine("", false, true);
          createLine(
            `
          As a front-end developer, you possess medium-level skills in JavaScript, HTML, and CSS. <br> 
          Your expertise in these areas allows you to create engaging and interactive web applications<br>
          for users. You have a passion for staying up-to-date with the latest industry trends and best practices,<br>
          and you are always seeking to enhance your skill set With your abilities, you can contribute to the creation <br> 
          of user-friendly and visually stunning websites.`,
            false,
            true
          );
          createLine("", false, true);
          createLine(user, true, true);
          break;
        case "commands":
          createLine(user + input.value, false, true);
          createLine("", false, true);
          createLine(
            `
          --------------------- COMMANDS ------------------------<br>
           1. ${commands[0]} - showing prompt with commands<br>
           2. ${commands[1]} - command clears the terminal screen<br>
           3. ${commands[2]} - showing prompt with commands<br>
           4. ${commands[3]} - transfer to my github page<br>
           5. ${commands[4]} - Showing up my skills<br>
          `,
            false,
            true
          );
          createLine(user, true, true);
          break;
        case "clear":
          location.reload();
          break;
        case "github":
            window.open("https://github.com/Dziero", "_blank");
            createLine(user + input.value, true, true);
            createLine(user, true, false);
          break;
        case "skills":
          createLine("<h2>Skills</h2>", false, true);
          createLine('<h4 style="color: orange;">Advanced HTML</h4>');
          createLine('<h4 style="color: yellow;">Intermediate JavaScript</h4>');
          createLine('<h4 style="color: yellow;>Intermediate  CSS</h4>');
          createLine('<h4 style="color:#1DD4E2;">Basic Tailwind CSS</h4>');
          createLine(
            '<h4 style="color:#1DD4E2;">Basic Vue</h4>',
            false,
            true
          );
          createLine(user, true, false);
          break;
      }
    } else if (input.value === "") {
      createLine(user, true, true);
    } else if (!commands.includes(input.value)) {
      createLine(user + input.value, false, true);
      createLine(`Command not found: ${input.value}`);
      createLine("", false, true);
      createLine("", false, true);
      createLine(user, true, true);
    }
    input.remove();
  }
});

async function createLine(content, booleanInput = false, booleanBr = false) {
  let newSpan = document.createElement("span");
  newSpan.innerHTML = content;
  document.getElementById("codeLine").appendChild(newSpan);

  if (booleanInput == true) {
    let newInput = document.createElement("input");
    setTimeout(() => {
      newInput.focus();
    }, 100);

    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "createdInput");
    newInput.setAttribute(
      "style",
      `
    outline: none;
    border: none;
    display: inline-block;
    color: white;
    background-color: transparent;
    font-family: 1.3rem Inconsolata, monospace;
    font-size: 16px;
    width: 40%;
  `
    );
    document.getElementById("codeLine").appendChild(newInput);
  }
  if (booleanBr == true) {
    document.getElementById("codeLine").appendChild(document.createElement("br"));
  }
}
