# Game shop

This is a '*proof-of-concept*' online shop for different types of games.  
It does not have an ability to actually buy games, but this website serves as a 'template' for a potentially existing online shop. 
This app serves as a test of skills I have gained in a year of learning Front-End development.  


## Link

The current version(0.6.5) of this app can be viewed [here](https://srysis-game-shop.netlify.app/).


## Features 

- Catalog preview in different view modes
- Filters to filter out games by specific genres, 'settings', format, etc.
- Search bar to search games by their name
- A cart to temporarily store products until 'final payment'
- Cart managing that allows to doublecheck if right product was placed in it, delete one or more products, as well as completely wipe the cart
- Each product has their own unique page on which users can read their description, relevant screenshots and check the price
- All relevant data (cart, filters, etc.) as well as some of the UI data is being stored in 'session storage' to allow for seamless navigation between pages
- The layout of the page is responsive, allowing for it to be viewed on mobile devices (only mobile for now, other devices require more testing)


## Technical information

This web-application was written using React.js framework with usage of JSX(JavaScript X) language.  
It utilizes 'Browser Router' from 'React-Router' package to allow client-side navigation, making it a Single Page Application, without a need for a page reload.  
It also makes use of SASS as a CSS preprocessor for cleaner and more readable CSS code.  
As a 'database', it uses a pre-written JSON file with required information for every product.  

**"Why JSON?"** So the app can be viewed without me needing to host a database for it.  


## Credits

All the information as well as assets were taken from corresponding product pages on [Steam Store](https://store.steampowered.com/).
All materials used in this web-site were used with educational purpose and no money are being made off of it.
