import axios from "axios";

export async function setupInsta() {
  const appId = process.env.REACT_APP_INSTA_APP_ID;
  const redUri = process.env.REACT_APP_OAUTH_URI;
  let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
  window.open(url, "_blank").focus();
}

export async function getPosts(username) {
  const response = await axios.get("http://localhost:8000/posts");
  const posts = response.data.data;
  return posts;
}
