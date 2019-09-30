const user = "bouwe";
const apiHostname = "https://nitwit-api.azurewebsites.net";

const timelineUrl = `${apiHostname}/users/${user}/timeline`;
const postsUrl = `${apiHostname}/users/${user}/posts`;
const followingUrl = `${apiHostname}/users/${user}/following`;

export default { user, timelineUrl, postsUrl, followingUrl };
