# DOLL-E 3D model viewer (website version)

A static website: no server needed. Open STEP, STL, 3MF and OBJ files in the browser, with size readouts in mm and inches, a parts list, section cut, wireframe, edge lines, preset views and PNG snapshots.

**No CAD files are stored in this repository.** Models come from Google Drive (button **Sync Drive**) or from your own computer (**Add files…** or drag and drop). Everything is processed inside the visitor's browser; nothing is uploaded anywhere.

three.js 0.160.0 and occt-import-js 0.0.23 load from the jsDelivr CDN, so this repository holds only four small files.

## Files

| File | What it is |
|---|---|
| `index.html` | the viewer |
| `config.js` | settings: Google client ID, optional API key, default Drive folder |
| `.nojekyll` | tells GitHub Pages to serve files as they are |

## Publish on GitHub Pages

1. Create a new repository on GitHub (private repos need a paid plan for Pages; public is fine because no CAD is in it).
2. Upload the files in this folder, including the hidden `.nojekyll` file.
3. Repository **Settings → Pages → Build and deployment**: Source "Deploy from a branch", branch `main`, folder `/ (root)`.
4. After a minute the site is at `https://<your-user>.github.io/<repo>/`.

## One-time Google setup (needed for Sync Drive)

Sync Drive asks the visitor to sign in with Google and reads only what that person can already open. A person who lacks access to the Drive folder gets an error, so the models are not exposed by the website.

1. Go to <https://console.cloud.google.com/>, create a project (for example "DOLL-E viewer").
2. **APIs & Services → Library**: enable **Google Drive API**.
3. **APIs & Services → OAuth consent screen**: user type External (or Internal if your organisation allows it). Add the scope `.../auth/drive.readonly`. While the app is in **Testing**, add each teammate's Google address under **Test users** (up to 100). Testing mode shows an "unverified app" warning once per person; that is expected.
4. **Credentials → Create credentials → OAuth client ID → Web application**. Under **Authorized JavaScript origins** add `https://<your-user>.github.io` (no path). For local tests also add `http://localhost:8000`.
5. Copy the client ID into `config.js` (`CLIENT_ID`) and re-upload `config.js`. A client ID is meant to be public. Never put a client **secret** anywhere in this repository.

University or organisation Google accounts may block third-party apps; if sign-in is refused, ask the account admin to allow the app, or sign in with a personal Google account that has been given access to the folder.

### Public folders without sign-in (optional)

If a folder is shared as "Anyone with the link", create an **API key** (Credentials → API key), restrict it to the Drive API and to your site address (HTTP referrers), and put it in `config.js` as `API_KEY`. Leave `CLIENT_ID` empty. Do not do this for folders that should stay private.

## Restricting Sync Drive to you

Two layers, strongest first:

1. **Google enforces it.** Keep the OAuth consent screen in **Testing** and list only your own address under **Test users**. Google refuses everybody else at sign-in, and the Drive folder's own sharing still decides what any account can read. A visitor cannot get around this by changing the page.
2. **The page checks the account.** In `config.js` set `ALLOWED_EMAILS: ["you@example.com"]`. After sign-in the page reads the account's email, and anyone not on the list is refused and signed out. This is a convenience check: someone could edit their own copy of the page, but without Google's permission that gains nothing.

To avoid publishing your address, put its SHA-256 instead. In PowerShell (use the lower-case address):

```
$e="you@example.com"; [BitConverter]::ToString([Security.Cryptography.SHA256]::Create().ComputeHash([Text.Encoding]::UTF8.GetBytes($e))).Replace("-","").ToLower()
```

Other people can still open the site and use **Add files…**, but they cannot sync your Drive. They will see no models unless they load files themselves.

## Entry gate

When `ALLOWED_EMAILS` is set in `config.js`, anyone can open the site address but sees only a **Sign in with Google** screen. Accounts not on the list are refused and signed out; listed accounts enter and can use **Sync Drive**. Add more people later by adding their addresses (or SHA-256 hashes, see above) to `ALLOWED_EMAILS`.

Because GitHub Pages is static hosting, this gate is a page-level check, not server security: someone who edits their own copy of the page can skip the screen. That gains them nothing, because the repository holds no CAD files and Google's own rules decide what any account can read from Drive. Keep the OAuth consent screen in Testing with only approved accounts as test users for a second, Google-enforced layer. The gate needs `CLIENT_ID` to be set.

## Using it

1. Open the site and paste a Drive **folder link** (the address of the folder in your browser; the box is pre-filled with the "Models for Printing" folder).
2. Press **Sync Drive**. It lists the folder and its subfolders, downloads STEP/STL/3MF/OBJ files, PDFs (opened as drawings) and zips (CAD files inside are extracted), and caches them in the browser so unchanged files are not downloaded again.
3. Click a model. Add `?folder=<link or id>` to the page address to pre-fill the box, `&sync=1` to sync automatically, and `&open=<file name>&view=top|front|right|iso` to open a model straight away.

Google-native files (Docs, Sheets) are skipped. Very large files (hundreds of MB) can exhaust browser memory.

## Run it locally

```
python -m http.server 8000
```

then open <http://localhost:8000/>.

## Notes

- Units for STL/3MF files are assumed to be millimetres.
- `Clear` removes the files from the page; the browser cache keeps downloaded Drive files until the site data is cleared.
- Based on the local DOLL-E viewer; three.js 0.160.0 and occt-import-js 0.0.23 from jsDelivr.
