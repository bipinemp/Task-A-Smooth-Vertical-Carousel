function findClosestVerticalDiv() {
  // finds all the sections
  const sections = document.querySelectorAll(".section");
  // calculates the center of the screen vertically
  const viewportCenter = window.innerHeight / 2;

  // it holds the section which is nearest to the center
  let closestSection = null;
  // it holds the smallest distance between a section's center and the visible screen's center
  // initally Infinity so that any distance is less that that
  let minDistance = Infinity;

  // removes previousl sections who are closest
  sections.forEach((section) => {
    section.classList.remove("closest");
  });

  sections.forEach((section) => {
    // it gives height width top bottom of the section element
    const rect = section.getBoundingClientRect();

    // the distance between the section's top + section's height / 2 is the section's center
    const sectionCenter = rect.top + rect.height / 2;
    // for calculating the distance between the section's center and viewport center
    const distance = Math.abs(sectionCenter - viewportCenter);

    // the closest section is set which's center is closest to viewport center
    if (distance < minDistance) {
      minDistance = distance;
      closestSection = section;
    }
  });

  // adding the class for styling to the center section
  if (closestSection) {
    closestSection.classList.add("closest");
  }
}

// invoking the function for the initial loading the page
findClosestVerticalDiv();

// the function get's called everytime user scrolls the page
window.addEventListener("scroll", findClosestVerticalDiv);
