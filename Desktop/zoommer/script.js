
  function loadHTML(filename, elementSelector) {
    fetch(filename)
      .then(response => response.text())
      .then(data => {
        document.querySelector(elementSelector).innerHTML = data;
      })
      .catch(error => console.log('Error loading file:', error));
  }

  document.addEventListener("DOMContentLoaded", function() {
    loadHTML('header.html', 'header');
    loadHTML('footer.html', 'footer');
  });
