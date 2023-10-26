import axios from "axios";

// GitHubのアクセストークンをセット
const githubAccessToken =
  "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";

// GitHubのユーザー名
const githubUsername = "cmb-sy";

// GitHub APIのベースURL
const githubApiBaseUrl = "https://api.github.com";

// GitHub APIを使用してプロフィール情報を取得
async function getGitHubUserProfile() {
  try {
    const response = await axios.get(
      `${githubApiBaseUrl}/users/${githubUsername}`,
      {
        headers: {
          Authorization: `token ${githubAccessToken}`,
        },
      }
    );

    const userProfile = response.data;
    console.log("GitHubのプロフィール情報:", userProfile);
  } catch (error) {
    console.error("エラー:", error);
  }
}

getGitHubUserProfile();
