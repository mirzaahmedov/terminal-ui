import { ITerminalOptions, Terminal } from "xterm"
import { FitAddon } from "xterm-addon-fit"

import "xterm/css/xterm.css"

const options: ITerminalOptions = {
  fontSize: 30,
  fontFamily: "Anonymous Pro",
  convertEol: true,
  cursorBlink: false,
  cursorStyle: "block",
  allowTransparency: true,
  theme: {
    background: "rgba(0, 0, 0, 0)",
    foreground: "#86f6f0",
    cursor: "#86f6f0",
  },
  scrollback: 0,
  scrollOnUserInput: true,
}

const term = new Terminal(options)
const fitAddon = new FitAddon()

term.open(document.getElementById("app") as HTMLElement)
term.loadAddon(fitAddon)

fitAddon.fit()

const content = `$ ls -al
total 196
drwx------ 34 mirzaahmedov wheel  4096 Apr 17 11:42 .
-rw-------  1 mirzaahmedov wheel    62 Apr 15 15:46 .lesshst
drwxr-xr-x  2 mirzaahmedov wheel  4096 Feb  9 15:18 Linux
`
const content2 = `drwxr-xr-x  4 mirzaahmedov wheel  4096 Feb  8 14:31 .local
drwx------  4 mirzaahmedov wheel  4096 Feb  7 18:13 .mozilla
drwxr-xr-x  3 mirzaahmedov wheel  4096 Feb  9 14:53 Typescript
drwxr-xr-x  2 mirzaahmedov wheel  4096 Feb  9 10:43 .vim
-rw-------  1 mirzaahmedov wheel 18146 Feb 17 14:08 .viminfo`



function type(text: string){

  return new Promise<void>((resolve) => {
    let i = 0
    const callback = () => {
      if(i < text.length){
        term.write(text[i])
        i++
        requestAnimationFrame(callback)
      } else {
        resolve()
      }
    }
    requestAnimationFrame(callback)
  })
}

type("Booting ").then(() => {
  type(content).then(() => {
    type(content2)
  })
})


// setTimeout(() => term.write(`
// ░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
// ░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
// ░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
// ░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
// ░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
// ░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝
// `), 1000)
