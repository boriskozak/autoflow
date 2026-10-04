# Auto Flow — Lead Gen Dashboard

A static, no-build dashboard for Florida fleet company and heavy equipment
prospect management, plus a vehicle management tracker.

## Pages

- `index.html` — Lead gen dashboard: searchable/filterable prospect cards
  (fleet and equipment companies), email template with merge fields, and
  emailed-status tracking via `localStorage`.
- `vehicle-tracker.html` — Vehicle management system: track vehicles from
  intake through sale, with parts, costs, transport, and profitability.

## Assets

- `leadgen.css` — Dark-theme styles for the dashboard (Outfit + Inter fonts).
- `leadgen.js` — Dashboard logic and prospect database. Company names are real;
  contact names marked ✓ were found via public sources; others are placeholder
  names for real roles — verify on LinkedIn/Apollo before emailing.

## Run

No build step. Serve the folder and open `index.html`:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

Or open `index.html` directly in a browser (fonts load from Google Fonts CDN).
