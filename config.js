/* DOLL-E 3D viewer settings. Edit this file, then upload it with the rest of the site.
   Nothing here is secret: a Google OAuth client ID and a referrer-restricted API key are meant to be public.
   Never put a client SECRET, a password, or CAD files in this repository. */
window.DOLLE_CONFIG = {
  // Google OAuth "Web application" client ID (lets team members sign in and sync PRIVATE folders). See README.md.
  CLIENT_ID: "222276729155-tslvvo7llt8794u6qkigmovrgaqkm6fq.apps.googleusercontent.com",
  // Who may press Sync Drive. Put your Google address(es) here, or the SHA-256 of the address (see README) so it is not published.
  // Leave empty to allow any signed-in account that can open the folder. When set, API_KEY (no sign-in) mode is disabled.
  ALLOWED_EMAILS: [
    "3ece2ecdca560b58a0ec0b93e4abe5fb32d06f7fb4bce1d6f12b2fe30e993617",
    "948b18518398e18ab4de187d459cf345aa594699dcb16d4baee432f4b4b011aa",
    "fc706ec4ca517bb9170ecbbf57087be686fe2160d0013ba2cde6ab5b419e0688",
    "16ce432308322546110593c6cb0d57618fe0961d427dc93c76640a7eee39e27b",
    "bd32626b0091408260828569a03638a41a7ca09e1ed0ba5b2812c4836748f966"
  ],  // SHA-256 hashes of approved addresses (team contact matrix, 5 addresses); add more addresses or hashes here
  // Optional: API key for folders shared as "Anyone with the link" (no sign-in). Restrict it to your site's address.
  API_KEY: "",
  // Drive folder pre-filled in the box ("Models for Printing"); users can paste any other folder link.
  DEFAULT_FOLDER: "1Vka0dTtLh3qXDyfco32eW1hycAJZlRuF"
};
