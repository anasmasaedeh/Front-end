const categoryList = document.querySelector('.categories-grid');

fetch('http://localhost:3000/api/categories',{
    method:"GET",
    headers:{ "Content-Type": "application/json",
    }
})
  .then(response => response.json())
  .then(data => {
    data.forEach(category => {
      const categoryEl = document.createElement('div');
      categoryEl.classList.add('category');

      const linkEl = document.createElement('a');
      linkEl.href = `products.html?category=${category.id}`;
      linkEl.textContent = category.name;

      const headerEl = document.createElement('h3');
      headerEl.appendChild(linkEl);

      categoryEl.appendChild(headerEl);
      categoryList.appendChild(categoryEl);
    });
  });
