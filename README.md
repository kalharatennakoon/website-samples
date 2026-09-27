# Website Samples

An interactive showcase of sample websites for different kinds of businesses, by Kalhara Tennakoon.
Visitors pick a category tab, preview the live sample site in **desktop** or **mobile** view, and send an enquiry.

**Live site:** https://kalharatennakoon.github.io/website-samples/

## Samples included

| Tab | Sample business (fictional) | File |
|---|---|---|
| Restaurants & Cafés | Kithul Kitchen | `samples/restaurant.html` |
| Grocery & Retail Shops | FreshBasket | `samples/grocery.html` |
| Clothing Boutiques | Loom & Leaf | `samples/clothing.html` |
| Mobile Phone Shops | PhoneHub | `samples/mobile.html` |
| Solar & Engineering | SunPeak Solar | `samples/solar.html` |
| Schools & Institutes | Horizon Institute | `samples/education.html` |
| Hotels & Villas | Palm Cove Villas | `samples/hotel.html` |
| Personal Portfolios | Amaya Perera | `samples/portfolio.html` |

Plain HTML, CSS and JavaScript. No build step and no dependencies.

## Before you publish: add your contact details

Open `assets/app.js` and edit the two lines at the top:

```js
const CONTACT = {
  whatsapp: '94771234567',   // country code + number, digits only
  email: 'you@example.com'
};
```

If `whatsapp` is left empty, the WhatsApp button is hidden and enquiries open an email instead.

## Deploy to GitHub Pages

1. Create a new **public** repository named `website-samples`.
2. Upload everything in this folder (keep the folder structure) and commit to `main`.
3. Go to **Settings → Pages**, set *Source* to **Deploy from a branch**, then choose **main** and **/ (root)**, and click Save.
4. After a minute or two the site is live at `https://<your-username>.github.io/website-samples/`.

Using git instead:

```bash
git init
git add .
git commit -m "Website samples showcase"
git branch -M main
git remote add origin https://github.com/<your-username>/website-samples.git
git push -u origin main
```

## Sharing a specific sample

Every tab has its own link, for example:

- `…/website-samples/?sample=restaurant`
- `…/website-samples/?sample=solar`

The IDs are `restaurant`, `grocery`, `clothing`, `mobile`, `solar`, `education`, `hotel` and `portfolio`.
Each sample also works as a standalone page, e.g. `…/website-samples/samples/hotel.html`.

## Adding a new category

1. Copy an existing file in `samples/` (it links to the shared `shared.css` and `shared.js`) and edit it.
2. Add an entry to the `SAMPLES` list in `assets/app.js`.

## Credits

Photos from [Unsplash](https://unsplash.com), used under the Unsplash License. All businesses, people, prices and reviews in the samples are fictional.
