window.addEventListener('DOMContentLoaded', () => {
    const loadComponent = (id, path) => {
      fetch(path)
        .then(res => res.text())
        .then(html => {
          document.getElementById(id).innerHTML = html;
        });
    };
  
    loadComponent("navbar", "/src/components/navbar.html");
    loadComponent("footer", "/src/components/footer.html");
  });  