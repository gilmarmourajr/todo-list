# Restaurant Page
Built as part of The Odin Project's curriculum.

Live server link: https://gilmarmourajr.github.io/restaurant-page/

**Description:** Designed and created a web page for a restaurant. The website has no native HTML, and is entirely generated in Javascript, using webpacks. This project was made to learn more about webpacks and module programming.

# Instructions
These Instructions are taken directly from The Odin Project website.

<ol>
  <li>Start the project the same way you began the webpack tutorial project, by creating the package.json file and setting up Webpack.</li>
  <ul>
    <li>Remember, you only need to install and configure the things you need for your project. For example, if you do not plan to have local image files linked in your HTML template, you will not need to install and configure html-loader.</li>
  </ul>
  <li>Create a .gitignore file in the root of your project. It should contain the text node_modules and dist on separate lines.</li>
  <li>Set up an HTML skeleton inside of src/template.html. Inside the body, add a <header> element that contains a nav with buttons (not links!) for different “tabs” (for example buttons for “Home”, “Menu” or “About” etc). Below the header, add a single div id="content".</li>
  <li>Inside of src/index.js write a console.log or alert statement and then run npx webpack serve. Open http://localhost:8080 in your browser and check your JavaScript is running.</li>
  <li>Inside div#content, create a homepage for your restaurant. You might want to include an image, headline, and some text about how wonderful the restaurant is; you do not have to make this look too fancy. It’s okay to hard-code these into the HTML for now just to see how they look on the page.</li>
  <li>Now remove everything inside div#content from the HTML (so you still have the <header> and <nav> with an empty <div id="content"> below it) and instead create them by using JavaScript only, e.g. by appending each new element to div#content once the page is first loaded. Since we’re all set up to write our code in multiple files, let’s write this initial page-load function inside of its own module and then import and call it inside of index.js.</li>
  <li>Next, set up your restaurant site to use tabbed browsing to access the Menu and Contact pages. Look at the behavior of this student’s live preview site for visual inspiration.</li>
  <ol>
    <li>Put the contents of each “tab” inside of its own module. Each module will export a function that creates a div element, adds the appropriate content and styles to that element and then appends it to the DOM.</li>
    <li>Write the tab-switching logic inside of index.js. You should have event listeners for each button in the header navbar that wipes out the current contents of div#content and then runs the correct ‘tab module’ to populate it with the new contents again.</li>
  </ol>
