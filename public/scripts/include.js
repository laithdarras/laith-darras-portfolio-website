// window.addEventListener('DOMContentLoaded', () => {
//   const loadComponent = (id, path) => {
//     fetch(path)
//       .then(res => {
//         if (!res.ok) {
//           throw new Error(`Failed to load ${path}: ${res.status} ${res.statusText}`);
//         }
//         return res.text();
//       })
//       .then(html => {
//         document.getElementById(id).innerHTML = html;
//       })
//       .catch(err => {
//         console.error(err);
//         document.getElementById(id).innerHTML = `<p>Error loading component: ${err.message}</p>`;
//       });
//   };

//   loadComponent("navbar", "components/navbar.html");
//   loadComponent("footer", "components/footer.html");
// });