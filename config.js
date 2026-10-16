/* DOLL-E 3D viewer settings. Edit this file, then upload it with the rest of the site.
   Nothing here is secret: a Google OAuth client ID and a referrer-restricted API key are meant to be public.
   Never put a client SECRET, a password, or CAD files in this repository. */
window.DOLLE_CONFIG = {
  // Google OAuth "Web application" client ID (lets team members sign in and sync PRIVATE folders). See README.md.
  CLIENT_ID: "222276729155-tslvvo7llt8794u6qkigmovrgaqkm6fq.apps.googleusercontent.com",
  // Who may press Sync Drive. Put your Google address(es) here, or the SHA-256 of the address (see README) so it is not published.
  // Leave empty to allow any signed-in account that can open the folder. When set, API_KEY (no sign-in) mode is disabled.
  ALLOWED_EMAILS: ["3ece2ecdca560b58a0ec0b93e4abe5fb32d06f7fb4bce1d6f12b2fe30e993617"],  // SHA-256 of the owner's address; add more addresses or hashes here later
  // Optional: API key for folders shared as "Anyone with the link" (no sign-in). Restrict it to your site's address.
  API_KEY: "",
  // Drive folder pre-filled in the box ("Models for Printing"); users can paste any other folder link.
  DEFAULT_FOLDER: "1Vka0dTtLh3qXDyfco32eW1hycAJZlRuF"
};
