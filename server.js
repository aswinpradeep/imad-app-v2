var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1=
{
    title:'article1',
    date:'feb 14,2017',
    heading:'article 1 h3',
    content:
 `
    <p>
                
                p1A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content
                 A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content
                 
                  A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content
                
                
            </p>
            <p>
               p2 A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content
                 A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content
                 
                  A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content
                
            </p>
            
            <p>
               p3 A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content
                 A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content  A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content
                 
                  A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content A! content
                
                
                
            </p> 

`





};


function createtemplate(data)
{
    
 var title=data.title;
 var heading=data.heading;
 var date=data.date;
 var content=data.content;
    

var HtmlTemplate=

`
<html>
    <head>
        <title>
            
            ${title}
        </title>
        
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
       
        
    </head>
    <body>
        
    <div class="container">
        
        <div>
            <a href="/">home</a>
            
        </div>
        <hr/>
        
        <h3>
            
            ${heading}
        </h3>
        
        <div>
            ${date}
        </div>
        
        <div>
           ${content}
        </div>
        
</div>        
    
    </body>
    
</html>

`
;
return HtmlTemplate;


}



app.get('/', function (req, res) 
  {
    res.sendFile(path.join(__dirname, 'ui', 'index.html'));
  }
);


app.get('/article1',function(req,res)
  {
    
      res.send(createtemplate(article1));
  }
);
app.get('/article2',function(req,res)
  {
    
      res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
  }
);
app.get('/article3',function(req,res)
  {
    
      res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
  }
);



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
