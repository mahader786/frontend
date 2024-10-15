const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Serve the HTML form
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html>');
        res.write('<head><title>Form Details</title></head>');
        res.write('<body><form action="/message" method="post"><input type="text" name="name" /><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }


    if(url === '/message' && method === 'post'){
        const body =[];
        req.on('data',(chunk)=>{
            console.log('chunk')
            console.log(chunk)
        })

        fs.writeFileSync('form.txt','dummy')
        res.setHeader('Location','/')
        res.statusCode = 302;
        return res.end()
    }

});

server.listen(3500, () => {
    console.log('Server is running on port 3500');
});


