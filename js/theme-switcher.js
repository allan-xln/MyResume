const switcher = document.getElementById("theme");

const switchTheme = () => {
    let dataTheme, newTheme;
    const rootElement = document.documentElement;

    dataTheme = rootElement.getAttribute('data-theme');
    newTheme = (dataTheme === 'light' ? 'dark' : 'light');

    rootElement.setAttribute('data-theme', newTheme);
}

switcher.addEventListener("click", () => switchTheme());