const proc = ["wkhtmltopdf",

"--no-stop-slow-scripts",
"--enable-local-file-access",
"--debug-javascript",
"./src/index.html",
"./build/resume.pdf"]
const p = Deno.run({cmd:proc});
console.log(await p.status());