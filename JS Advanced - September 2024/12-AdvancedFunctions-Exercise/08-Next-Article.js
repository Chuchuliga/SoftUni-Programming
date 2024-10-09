function nextArticle(input) {
  const div = document.getElementById("content");

  return () => {
    const firstElement = input.shift();

    if (firstElement) {
      const article = document.createElement("article");
      article.textContent = firstElement;
      div.appendChild(article);
    }
  };
}