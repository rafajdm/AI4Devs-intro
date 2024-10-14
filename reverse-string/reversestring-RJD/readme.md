# Reverse String Web Application

This is a simple web application that allows users to input a string and reverse it. The application provides a clean and responsive user interface using the Tailwind CSS framework. Additionally, users can copy the reversed text to their clipboard.

## Features

- **Text Input**: Users can input a text string in the provided input field.
- **Reverse Button**: By clicking the "Invertir ♻️" button, the entered text will be reversed.
- **Copy Button**: After the text is reversed, users can click the "Copiar 📋" button to copy the reversed text to their clipboard.
- **Responsive Design**: The application is fully responsive and works well on both desktop and mobile devices, thanks to Tailwind CSS.
- **Unit Tests**: Jasmine is used for unit testing. Jasmine's test output is displayed at the bottom of the page without affecting the layout of the main content.

## Technologies Used

- **HTML**: Used to structure the web page.
- **Vanilla JavaScript**: Handles the functionality of inverting the string and copying the result to the clipboard.
- **Tailwind CSS**: Provides simple and efficient styling for the UI.
- **Jasmine**: Used for writing unit tests, and its output is displayed at the bottom of the screen.

## How to Use

1. Clone or download the repository containing the project files (`index.html` and `script.js`).
2. Open the `index.html` file in your web browser.
3. Enter a string in the input field labeled `Introduce un texto`.
4. Click the `Invertir ♻️` button to reverse the text.
5. The reversed text will appear below the input.
6. Click the `Copiar 📋` button to copy the reversed text to your clipboard.

## Files in the Project

- `index.html`: Contains the structure of the web page and integrates Tailwind CSS via CDN for styling.
- `script.js`: Contains the JavaScript code that reverses the string and allows copying of the reversed text.
- `spec/scriptSpec.js`: Contains Jasmine unit tests.

## Code Explanation

### HTML Structure (index.html)

The HTML is structured to place the form and its contents at the bottom of the screen, while ensuring it remains centered horizontally. The Jasmine test output is positioned below the form at the bottom of the viewport.

The key sections include:

- **A container (`div`)** that wraps the entire application. It is positioned at the bottom of the page using Flexbox (`flex-col` for vertical alignment) and Tailwind utility classes.
- **A form** where users can input a text string and click the "Invertir ♻️" button to reverse it.
- **A paragraph** that displays the reversed text.
- **A "Copiar 📋" button** that allows users to copy the reversed text to their clipboard.
- **Jasmine Test Output**: Positioned absolutely at the bottom of the viewport, so it doesn't interfere with the page layout.

Here's an excerpt from the updated HTML:

```html
<body class="bg-gray-100 flex flex-col items-center justify-center min-h-screen relative">

    <!-- Main container for the app -->
    <div class="bg-white shadow-md rounded-lg p-6 w-full max-w-md text-center mb-4">
        <h1 class="text-3xl font-bold mb-4">Inversor de texto</h1>
        <form id="invertForm" class="flex items-center justify-center mb-4">
            <input type="text" id="textInput" class="border border-gray-300 rounded-md p-2 flex-grow text-lg" placeholder="Introduce un texto">
            <button type="submit" class="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 flex items-center ml-2">
                Invertir 🔃
            </button>
        </form>
        <p class="text-lg mb-4">Texto invertido: <span id="reversedText" class="text-black font-semibold"></span></p>
        <button id="copyButton" class="bg-gray-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 flex items-center mx-auto">
            Copiar 📋
        </button>
    </div>

    <script src="script.js"></script>
</body>
```

### JavaScript (script.js)

The JavaScript file contains two main functionalities:

- **String Reversal**: Listens for the form’s submission, reverses the input text, and displays it.
- **Clipboard Copy**: Adds a listener to the “Copy” button, allowing the user to copy the reversed text to their clipboard.

```javascript
document.getElementById('invertForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const textInput = document.getElementById('textInput').value;
    const reversedText = textInput.split('').reverse().join('');
    document.getElementById('reversedText').textContent = reversedText;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const reversedText = document.getElementById('reversedText').textContent;
    navigator.clipboard.writeText(reversedText).then(function() {
        alert("Text copied to clipboard!");
    }, function(err) {
        console.error('Failed to copy text: ', err);
    });
});
```

### Jasmine Test Output

- The Jasmine test output is styled to appear at the bottom of the page without affecting the position of the form or other content. This is achieved by adding the following CSS rule to position the Jasmine output:

```css
.jasmine_html-reporter {
    position: absolute;
    bottom: 0;
    width: 100%;
}
```

### Styling with Tailwind CSS

Tailwind CSS is loaded from a CDN for quick styling without a custom CSS file. Tailwind classes ensure the page is responsive and styled cleanly with minimal effort. The buttons, input fields, and text use standard Tailwind utility classes like:

- bg-blue-500: Sets the background color of the reverse button to blue.
- hover:bg-blue-600: Adds a hover effect to change the background color slightly on mouse-over.
- rounded-md: Adds rounded corners to the buttons and input fields.
- text-white: Makes the button text white.
- flex, items-center, justify-center: Aligns elements using Flexbox for a clean layout.

## Installation

No installation is needed, as the application is client-side only. You can run it locally by opening index.html in a web browser.

## Future Enhancements

- Add validation for empty input or non-alphabetical characters.
- Provide localization options for multiple languages.
- Include a clear/reset button to reset the input field and output.

## License

This project is open source and available under the MIT License.


## Key Updates:

1. **HTML Structure Section**: Now mentions that the Jasmine test output is positioned at the bottom of the viewport using `absolute` positioning.
2. **CSS Explanation**: Includes details about the custom CSS added to keep Jasmine's output at the bottom of the screen.
3. **Updated HTML Snippet**: Reflects the updated layout with Flexbox for centering and absolute positioning for Jasmine’s output.