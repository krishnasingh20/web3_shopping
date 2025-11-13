Step-by-step work i have done-->

Created React App
→ Used npx create-react-app shopping-app to start the project.

Created folder structure
→ Made components folder for Header, ProductList, ProductCard, and API calling.

Built Header component
→ Added a logo on the left.
→ Added a search bar on the right.
→ On typing in the search bar, it calls the search function to filter products.

Created API Calling component
→ Wrote a function to fetch product data from the given API link.
→ Used fetch() to get JSON data.
→ Handled loading and error cases properly.

Made ProductList component
→ Got product data from the API component.
→ Displayed all products using ProductCard.
→ If the user types in the search bar, only matching products are shown.

Made ProductCard component
→ Displayed product image, name, price, and small description.
→ Used simple design (clean and readable).

Connected everything in App.jsx
→ Imported Header, ProductList, and passed the search function and data properly.
→ App runs smoothly with search and product display.

Added search functionality
→ Used a search input in Header.jsx.
→ The search text is passed to App.jsx and then to ProductList.
→ ProductList filters the products whose names include the search text.