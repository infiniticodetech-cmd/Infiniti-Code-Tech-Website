# Infiniti Code website - run in VS Code (Windows and Mac)

Folder contents
- `index.html`        the full website (HTML + CSS + JS)
- `assets/intro.mp4`  the intro video with voice
- `.vscode/launch.json`  one-click launch in Chrome/Edge with sound autoplay allowed

## Run it with instant video + voice (Windows and Mac)
1. Install Google Chrome (or Microsoft Edge) and VS Code.
2. VS Code > File > Open Folder... > choose the `ICT-Website` folder.
3. Open "Run and Debug":  Windows Ctrl+Shift+D   |   Mac Cmd+Shift+D
4. In the dropdown choose "ICT site - Chrome (instant video + sound)".
5. Press F5 (or the green Play button).
   Chrome opens in a separate window and the video and voice start by themselves.
   Turn the computer volume up first.

## Other ways to open it
- Live Server extension (right-click index.html > Open with Live Server):
  the video starts at once but the browser keeps the voice muted until the first click/tap.
- Double-click index.html: same as above.

## Important - this is a company website
The launch setting above only affects YOUR computer. Browsers (Chrome, Safari, Firefox, Edge,
phones) never allow a website to play sound before the visitor has tapped or clicked once,
so on the live site visitors get the video muted and the voice starts at their first tap/click.
To upload the site: upload the whole folder (index.html + assets) to your hosting.


## Page navigation (single-section view)
The site now shows one page at a time: **Home, Services, Projects, About Us, Leadership, Careers, Contact**.
- Routing lives in `js/pages.js`; sections are assigned to pages with `data-page="..."` in `index.html`. Home loads by default and URLs like `index.html#careers` open that page directly.
- To move a section to another page, change its `data-page` value. To add a page, add its key to `PAGES`/`TITLES` in `js/pages.js` and a nav link `href="#key"`.

## Leadership
Profile cards show the first letter of each name. Edit names, designations and bios in the `#ceo` section of `index.html`.

## Careers
Job cards are the `.job` articles in `#careers`. Add or edit a card (keep `data-role` / `data-exp`); **Apply Now** opens a modal and submits through Web3Forms using the same key as the enquiry form (`WEB3FORMS_KEY` in `js/script.js`).

Resume uploads are sent as a file attachment via Web3Forms (file attachments require a Web3Forms plan that supports them; max 5 MB here).
