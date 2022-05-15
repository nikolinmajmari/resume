# resume
Simple Resume From Html/Css/Javascript to pdf or img.


## Usage

directly from cmd `wkhtmltopdf --no-stop-slow-scripts --enable-local-file-access --debug-javascript ./src/index.html ./build/resume.pdf`
for pdf
##
run for image ``wkhtmltoimage --no-stop-slow-scripts --enable-local-file-access --debug-javascript ./src/index.html ./build/resume.img``
##
or 

- Install deno 
- Install wkhtml2pdf 
- run `chmod 777 ./build.sh`
- run `./build.sh`


Example 
![](./build/resume.png)

Modify `./src/me.js` to enter your information