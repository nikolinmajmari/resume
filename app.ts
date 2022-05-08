const proc = ["wkhtmltopdf","./src/index.html","./build/resume.pdf"]
const p = Deno.run({cmd:proc});
console.log(await p.status());