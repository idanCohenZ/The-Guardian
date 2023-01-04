import axios from "axios";

const INSTAGRAM_URL = process.env.INSTAGRAM_URL;
const APP_ID = process.env.APP_ID;
const OAUTH_URI = process.env.OAUTH_URI;

export async function getToken() {
  const response = await axios.get(
    INSTAGRAM_URL +
      `client_id=${APP_ID}&redirect_uri=${OAUTH_URI}&scope=user_profile,user_media&response_type=code`
  );

  return response;
}
