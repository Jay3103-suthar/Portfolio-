const USERNAME = "Jay3103-suthar";
const BASE = "https://api.github.com";

export const fetchProfile = async () => {
  const res = await fetch(`${BASE}/users/${USERNAME}`);
  if (!res.ok) throw new Error("Error fetching GitHub profile");
  return res.json();
};

export const fetchRepos = async () => {
  const res = await fetch(
    `${BASE}/users/${USERNAME}/repos?sort=updated&per_page=20`
  );
  if (!res.ok) throw new Error("Error fetching repos");
  return res.json();
};
