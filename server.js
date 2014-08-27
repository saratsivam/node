var http = require('http');
var fs = require('fs');
var url = require("url");

http.createServer(function(request, response) {
  var pathname = url.parse(request.url).pathname;  
  fs.readFile('.'+pathname, function(err, contents) {
  	var output = '';
  	var config={'Content-Type':'text/plain'};
    	if(contents){    
    		output=contents;
    		if(pathname.indexOf('.html')!=-1){    			
    			config={'Content-Type':'text/html'};
    		}else if(pathname.indexOf('.js')!=-1){   
    			config={'Content-Type':'application/javascript'};
    		}
    	}else{    		
    		response.writeHead(200);    		
    	}
    	response.writeHead(200,config);    	
    	response.write(output);
	response.end();
  });
}).listen(8080);
