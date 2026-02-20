// Matrix Rain
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01HARSHJADON$#@";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#005f3b";
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(drawMatrix, 94);

const terminal = document.getElementById("terminal");

const commands = [
  {
    cmd: "> whoami",
    output: "Harsh Jadon – Computer Science Engineering Student\nI build things with code."
  },
  {
    cmd: "> cat about.txt",
    output: "B.Tech CSE | Echelon Institute of Technology\nAffiliated with J.C. Bose University (YMCA)\nFocused on DSA, Web Dev & real projects."
  },
  {
    cmd: "> ls skills/",
    output: "C  C++  Python  JavaScript\nHTML  CSS\nGit  GitHub  VS Code\nDSA  OOPS  DBMS"
  },
  {
    cmd: "> git log --oneline",
    output:
      `a3f92e1 Started coding journey
b7c10aa Learned C & C++
c91ad02 Built academic mini-projects
d8e44f5 Hand Gesture Control System
e2a77c9 Built this terminal portfolio`
  },
  {
    cmd: "> cat projects.log",
    output:
      `• Hand Gesture Control System
  Tech: Python, OpenCV, MediaPipe, PyAutoGUI

• Terminal Portfolio
  Tech: HTML, CSS, JavaScript`
  },
  {
    cmd: "> sudo hire harsh",
    output:
      `Access granted.
Result: Highly motivated developer with strong fundamentals.
Status: READY FOR INTERNSHIPS & PLACEMENTS 🚀`
  },
  {
    cmd: "> contact --show github",
    output:
      `github.com/harshjadon1`   },
  {
    cmd: "> contact --show linkedin",
    output:
      `linkedin.com/in/harsh-jadon`
  }
  ,
  {
    cmd: "> contact --show email",
    output:
      `jadonharsh209@gmail.com`
  }
];


let commandIndex = 0;

function typeText(text, element, speed = 32) {
  return new Promise(resolve => {
    let i = 0;
    const interval = setInterval(() => {
      element.innerHTML += text[i];
      i++;
      if (i === text.length) {
        clearInterval(interval);
        resolve();
      }
    }, speed);
  })
}

async function startTerminal() {
  for (const item of commands) {
    const cmdLine = document.createElement("div");
    cmdLine.className = "command";
    terminal.appendChild(cmdLine);

    await typeText(item.cmd, cmdLine);

    if (commands[6].output === "") {
      
    }


    const output = document.createElement("pre");
    output.className = "output";
    terminal.appendChild(output);
    await typeText(item.output, output, 20);
  }
}

console.log(commands[6].output)
startTerminal();
