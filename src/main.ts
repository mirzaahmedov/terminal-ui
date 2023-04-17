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
drwxr-xr-x  3 root         root   4096 Feb  7 17:49 ..
drwxr-xr-x  3 mirzaahmedov wheel  4096 Apr  3 16:07 Astro
-rw-------  1 mirzaahmedov wheel  3742 Apr 15 16:17 .bash_history
-rw-r--r--  1 mirzaahmedov wheel    21 Feb  2 11:38 .bash_logout
-rw-r--r--  1 mirzaahmedov wheel    78 Feb  8 14:35 .bash_profile
-rw-r--r--  1 mirzaahmedov wheel   453 Feb 17 14:08 .bashrc
drwxr-xr-x  2 mirzaahmedov wheel  4096 Mar 13 15:42 bin
drwxr-xr-x 21 mirzaahmedov wheel  4096 Apr  7 15:42 .cache
drwxr-xr-x  3 mirzaahmedov wheel  4096 Feb  8 14:35 .cargo
drwxr-xr-x  4 mirzaahmedov wheel  4096 Apr 14 14:39 Chrome
drwxr-xr-x 31 mirzaahmedov wheel  4096 Apr  7 15:50 .config
drwxr-xr-x  4 mirzaahmedov wheel  4096 Apr  6 17:47 Files
drwxr-xr-x  5 mirzaahmedov wheel  4096 Apr  7 15:50 FontBase
drwxr-xr-x 15 mirzaahmedov wheel  4096 Apr 17 11:21 .fonts
drwxr-xr-x  3 mirzaahmedov wheel  4096 Apr  3 16:08 .giget
-rw-r--r--  1 mirzaahmedov wheel   112 Feb 28 14:16 .gitconfig
drwx------  2 mirzaahmedov wheel  4096 Feb 17 13:40 .gnupg
drwxr-xr-x  4 mirzaahmedov wheel  4096 Apr  3 14:12 go
drwxr-xr-x  5 mirzaahmedov wheel  4096 Apr  3 14:03 Golang
-rw-r--r--  1 mirzaahmedov wheel   570 Feb 11 11:06 .gtkrc-2.0
drwxr-xr-x  3 mirzaahmedov wheel  4096 Apr 17 11:42 HTML
drwx------  3 mirzaahmedov wheel  4096 Feb  9 10:28 .icons
drwxr-xr-x 61 mirzaahmedov wheel  4096 Apr  8 15:22 LeetCode
-rw-------  1 mirzaahmedov wheel    62 Apr 15 15:46 .lesshst
drwxr-xr-x  2 mirzaahmedov wheel  4096 Feb  9 15:18 Linux
`
const content2 = `drwxr-xr-x  4 mirzaahmedov wheel  4096 Feb  8 14:31 .local
drwx------  4 mirzaahmedov wheel  4096 Feb  7 18:13 .mozilla
-rw-r--r--  1 mirzaahmedov wheel     1 Apr 15 13:36 .NERDTreeBookmarks
drwxr-xr-x  2 mirzaahmedov wheel  4096 Mar 29 14:23 .ngrok
drwxr-xr-x  5 mirzaahmedov wheel  4096 Apr 15 12:43 Nodejs
-rw-------  1 mirzaahmedov wheel   186 Mar  2 18:22 .node_repl_history
drwxr-xr-x  6 mirzaahmedov wheel  4096 Mar 29 14:19 .npm
drwx------  3 mirzaahmedov wheel  4096 Feb  9 15:57 .pki
drwxr-xr-x  3 mirzaahmedov wheel  4096 Feb 24 15:14 Postman
-rw-r--r--  1 mirzaahmedov wheel    21 Feb  8 14:35 .profile
drwxr-xr-x 13 mirzaahmedov wheel  4096 Apr 14 16:15 React
drwxr-xr-x  6 mirzaahmedov wheel  4096 Feb  8 14:37 .rustup
drwx------  2 mirzaahmedov wheel  4096 Mar 24 13:01 .ssh
drwxr-xr-x  3 mirzaahmedov wheel  4096 Feb  8 10:28 .system
drwxr-xr-x  3 mirzaahmedov wheel  4096 Feb  9 10:27 .themes
drwx------  4 mirzaahmedov wheel  4096 Feb 13 09:51 .thunderbird
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
