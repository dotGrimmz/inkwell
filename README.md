# inkwell

## Title
Anime List 


## Description
Displays a list of popular anime 

## Clone Repo
 git clone https://github.com/dotGrimmz/inkwell
  
  cd /inkwell
  
  run npm start
  
  
 ## Notes from the Developer
 
Backend: I usually abstract away differnt parts of handling requests with a controller file, this then passes the req to a service file which handles the logic for the data
manipulation. This case did not have a direct database for my api to integrate with but if it did I would have a schema or domain file which holds the shape and property
types of the object. 

Frontend: Next JS client side rendering was new for me, component lifecycle was one issue I strugged with when it came to fetching and displaying the data 
usually rendering from the client side. A service class file would have been created on a larger application to call methods from the front end which the headers and cookies required for auth are set
