const activePage = window.location.pathname.split("/").pop();
document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute("href") === activePage) {
        link.classList.add('active');
        console.log(`Active link set for: ${link.getAttribute("href")}`);
    } else {
        link.classList.remove('active');
    }
});
