const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = '.' + req.url;
    if (filePath === './') filePath = './index.html';
    
    const extname = path.extname(filePath).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.svg': 'image/svg+xml',
        '.otf': 'font/otf'
    };
    
    const contentType = mimeTypes[extname] || 'application/octet-stream';
    
    fs.readFile(filePath, (error, content) => {
        if (error) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
});

const PORT = 8080;
server.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔═══════════════════════════════════╗
║        SİBER MACERA OYUNU         ║
║         Mobil Server Aktif        ║
╚═══════════════════════════════════╝

🚀 Server çalışıyor: http://localhost:${PORT}
📱 Mobil erişim için IP adresleri:
   • WiFi: http://[BILGISAYAR-IP]:${PORT}
   • Hotspot: http://192.168.137.1:${PORT}

🔧 Çıkmak için Ctrl+C tuşlayın
    `);
});
