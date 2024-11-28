# Closest Section Highlighting

This project highlights the section closest to the vertical center of the viewport as you scroll. The closest section is visually emphasized by adding a special class to it, which triggers CSS animations and styling.

## Features

- **Dynamic Highlighting:** As you scroll, the section closest to the center of the screen is highlighted.
- **CSS Effects:** Uses CSS transitions and box shadows to emphasize the closest section.
- **Responsive Design:** The layout adapts to different screen sizes and scroll behavior.

## How It Works

1. The page contains multiple sections, each with an image and a few paragraphs.
2. The JavaScript function `findClosestVerticalDiv` determines which section is closest to the vertical center of the viewport.
3. The closest section is given a special `closest` class, which applies a scaling effect and a backdrop blur for emphasis.
4. The function is called on page load and every time the user scrolls.

## Setup

1. Clone the repository.
2. Open `index.html` in your browser to view the effect in action.
3. Make sure you have the CSS file (`styles.css`) and the JavaScript file (`index.js`) in place for full functionality.

## Known Limitations

- **Single-User Focus:** The design is geared towards a single-user experience and does not support collaborative features.
- **Basic UI:** The layout and functionality are minimal and could be enhanced with more interactive elements.

## Future Enhancements

- **Task Tracking:** Incorporate task management features for better user engagement.
- **Advanced Animations:** Add more complex animations and transitions to improve the user experience.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
