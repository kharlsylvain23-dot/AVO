# Brand Site

This project is a simple brand website that showcases a product and allows for future expansion with additional products. The site is structured to provide a clean and user-friendly experience.

## Project Structure

```
brand-site
├── src
│   ├── index.html          # Home page featuring the product as a hero
│   ├── product.html        # Detailed product page
│   ├── components          # Reusable components
│   │   ├── header.html     # Header component
│   │   ├── footer.html     # Footer component
│   │   └── product-card.html # Product card component for displaying products
│   ├── styles              # CSS styles
│   │   └── main.css        # Main stylesheet
│   └── scripts             # JavaScript files
│       └── main.js         # Main JavaScript file for interactivity
├── package.json            # npm configuration file
├── .gitignore              # Git ignore file
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/brand-site.git
   ```

2. **Navigate to the project directory:**
   ```
   cd brand-site
   ```

3. **Install dependencies:**
   ```
   npm install
   ```

4. **Open the project in your browser:**
   - Open `src/index.html` in your preferred web browser to view the home page.

## Features

- **Hero Section:** The home page features a hero section that highlights the product.
- **Product Page:** A dedicated product page provides detailed information about the product.
- **Reusable Components:** The site uses reusable components for the header, footer, and product cards, making it easy to add new products in the future.
- **Responsive Design:** The CSS styles ensure that the site is responsive and looks good on various devices.

## Future Enhancements

- Additional product pages can be created by duplicating `product.html` and updating the content.
- New products can be added by creating new product card components in the `components` directory and updating the home page accordingly.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.