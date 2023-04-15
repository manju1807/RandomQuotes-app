window.onload = () => {
  const quote = document.getElementById('quote');
  const author = document.getElementById('author');
  const button1 = document.getElementById('getbtn');
  const button2 = document.getElementById('refreshbtn');
  button2.style.display = 'none';

  button1.addEventListener('click', () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        button2.style.display = 'inline-block';
        quote.textContent = '"' + data.content + '"';
        author.textContent = "- "+data.author;
        button1.style.display = 'none';
      })
      .catch(error => console.error(error));
  });

  button2.addEventListener('click', () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        quote.textContent = data.content;
        author.textContent = "- " + data.author;
      })
      .catch(error => console.error(error));
  });
};
