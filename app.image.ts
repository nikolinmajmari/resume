const proc = ["wkhtmltoimage",


"--enable-local-file-access",
"--debug-javascript",


"./src/index.html",
"./build/resume.png"]
const p = Deno.run({cmd:proc});
console.log(await p.status());