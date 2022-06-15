## Folder Structure
This template follows a very simple project structure:

- assets: Asset folder to store all images, vectors, fonts, etc.
	-	styles: CSS/CSS in JS style files.
- src: This folder is the main container of all the code inside your application.
- constants: Folder to store any kind of constant that you have.
- config: Configuration files for multi stage builds/third party apis/database
- controllers:  This folder would contain all the functions for your APIs.
- routes: This folder would contain all the routes that you have created using Express Router and what they do would be exported from a Controller file.
- models: This folder would contain all your schema files and and the functions required for the schema would also lie over here.
- middleware: This folder would contain all the middleware that you have created, whether it be authentication/some other function.
- utils: Folder to store any common function such as calculate radius, different date formatting functions
- templates (Optional): If your code requires you to send certain emails/ HTML code to the client-side, store it in this files

