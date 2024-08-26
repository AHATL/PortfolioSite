const navData = [
  { title: "Home", url: "index.html" },
  {
    title: "Projects",
    url: "#",
    dropdown: [],
  },
  { title: "About", url: "#about" },
  { title: "Contact", url: "#contact" },
];

function populateProjectDropdowns() {
  projects.forEach((project) => {
    const dropdownItem = {
      title: project.name,
      url: `project.html?id=${project.id}`,
    };
    navData[1].dropdown.push(dropdownItem);
  });
}

function createNav() {
  populateProjectDropdowns();

  const nav = document.createElement('nav');
  const ul = document.createElement('ul');

  navData.forEach((item) => {
    const li = document.createElement('li');

    if (item.dropdown) {
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      li.appendChild(a);

      const dropdownUl = document.createElement('ul');
      dropdownUl.className = 'dropdown';

      item.dropdown.forEach((dropdownItem) => {
        const dropdownLi = document.createElement('li');
        const dropdownA = document.createElement('a');
        dropdownA.href = dropdownItem.url;
        dropdownA.textContent = dropdownItem.title;
        dropdownLi.appendChild(dropdownA);
        dropdownUl.appendChild(dropdownLi);
      });

      li.appendChild(dropdownUl);
      li.classList.add('has-dropdown');
    } else {
      const a = document.createElement('a');
      a.href = item.url;
      a.textContent = item.title;
      li.appendChild(a);
    }

    ul.appendChild(li);
  });

  nav.appendChild(ul);
  return nav;
}

document.addEventListener('DOMContentLoaded', function() {
  const navContainer = document.getElementById('nav-container');
  navContainer.appendChild(createNav());
});