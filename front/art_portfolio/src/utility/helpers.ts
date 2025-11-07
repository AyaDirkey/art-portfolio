export const getFacebookUrl = (facebook: string) => {
    // If it's already a full URL, return it as is
    if (facebook.startsWith("http://") || facebook.startsWith("https://")) {
      return facebook;
    }
    // Otherwise, construct the URL from the username
    return `https://www.facebook.com/${facebook}`;
  };
  export const getFacebookProfileName = (url: string): string => {
    try {
      // Ensure the URL is valid and is a Facebook URL
      const urlObj = new URL(url);
      if (!urlObj.hostname.includes("facebook.com")) {
        return "Facebook Profile"; // Fallback for non-facebook URLs
      }

      // Handle URLs like: https://www.facebook.com/username
      // The pathname will be "/username"
      if (urlObj.pathname !== "/" && urlObj.pathname !== "/profile.php") {
        // Remove the leading slash and any trailing slashes
        return urlObj.pathname.replace(/^\/+|\/+$/g, "");
      }

      // Handle URLs like: https://www.facebook.com/profile.php?id=12345
      // We need to get the 'id' from the query parameters
      const params = new URLSearchParams(urlObj.search);
      const id = params.get("id");
      if (id) {
        return `Profile ID: ${id}`;
      }
      return "Facebook Profile";
    } catch (e) {
      console.error(e, "Invalid URL provided to getFacebookProfileName:", url);
      return "Facebook Profile";
    }
  };