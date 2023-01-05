export async function setupInsta() {
  let appId = "5584640844994706";
  let redUri = "https://httpstat.us/200";
  let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
  window.open(url, "_blank").focus();
}
