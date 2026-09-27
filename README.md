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
