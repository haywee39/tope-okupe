function toggleNav() {
    const sidenav = document.getElementById('sidenav');
    const main = document.getElementById('main');
    sidenav.classList.toggle('open');
    main.classList.toggle('shifted');
}

function showContent(sectionId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    const activeContent = document.getElementById(sectionId);
    activeContent.style.display = 'block';
}