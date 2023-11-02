# Simple-TypeScript-Note-Keeper

To use TypeScript, you need to have Node.js and npm (Node Package Manager) installed on your machine. Then:

>Initialize a new project using npm init -y.
>Install TypeScript using npm install typescript --save-dev.
>Compile TypeScript to JavaScript using the TypeScript compiler:
css
npx tsc main.ts

::This will generate a main.js file that contains the compiled JavaScript. Adjust your index.html to reference this JavaScript file instead of the TypeScript file::
html

<script src="main.js"></script>


Now, when you open index.html in a browser, you'll have a functional note keeper app where you can add and delete notes.
