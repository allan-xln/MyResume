document.addEventListener('DOMContentLoaded', () => {

    const navButtons = document.querySelectorAll("#nav-scroll");

    const closeSidebar = () => {
        document.querySelector('.sidebar').classList.remove('active');
        document.querySelector('.menu-btn').style.visibility = 'visible';
    }

    document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.sidebar').classList.add('active');
        document.querySelector('.menu-btn').style.visibility = 'hidden';
    });

    document.querySelector('.close-btn').addEventListener('click', () => closeSidebar());
    navButtons.forEach(button => button.addEventListener('click', () => closeSidebar()));
});