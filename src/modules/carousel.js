export const next = () => {
  const newClasses = [];

  for (let i = 1; i <= 5; i++) {
    const current = document.querySelector(`.nr${i}`);
    let newItem = i + 1;

    if (i === 5) {
      newItem = 1;
    }

    newClasses.push({ element: current, newClass: `nr${newItem}` });
  }

  newClasses.forEach(item => {
    item.element.classList.remove(`nr${item.element.className.match(/nr(\d)/)[1]}`);
    item.element.classList.add(item.newClass);
  });
}

export const previous = () => {
  const newClasses = [];
  for (let i = 1; i <= 5; i++) {
    const current = document.querySelector(`.nr${i}`);
    let newItem = i+1;

    if (i === 5) {
      newItem = 1;
    }
    newClasses.push({element: current, newClass: `nr${newItem}` });
  }
  newClasses.forEach(item => {
    item.element.classList.remove(`nr${item.element.className.match(/nr(\d)/)[1]}`);
    item.element.classList.add(item.newClass);
  });
}
