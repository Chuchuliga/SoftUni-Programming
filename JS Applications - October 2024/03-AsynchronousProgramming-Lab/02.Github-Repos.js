async function githubRepos() {
  const output = document.getElementById("repos");

  const username = document.getElementById("username").value;
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw await response.json();
    }

    const data = await response.json();

    output.innerHTML = data
      .map((e) => `<li><a href="${e.html_url}">${e.full_name}</a></li>`)
      .join("\n");
  } catch (err) {
    output.innerHTML = `<li>Error: ${err.message}</li>`;
  }
}
