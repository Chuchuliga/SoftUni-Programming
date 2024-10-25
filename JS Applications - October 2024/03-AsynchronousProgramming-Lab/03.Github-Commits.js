async function githubCommits() {
  const output = document.getElementById("commits");

  const username = document.getElementById("username").value;
  const repo = document.getElementById("repo").value;

  const url = `https://api.github.com/users/${username}/${repo}/commits`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw await response.json();
    }

    const data = await response.json();

    output.innerHTML = data
      .map((c) => `<li>${c.commit.author.name}">${c.commit.message}</li>`)
      .join("\n");
  } catch (err) {
    output.innerHTML = `<li>Error: ${err.message}</li>`;
  }
}
