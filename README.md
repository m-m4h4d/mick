# Microbial Chemoresistance Knowledgebase (MiCK)

MiCK is a knowledgebase of microbial gene sequences associated with chemoresistance in cancer. It houses ~1.6 million microbial gene sequences spanning 29 gene types linked to chemoresistance and drug metabolism, curated from recent literature and databases.

Chemoresistance is a major cause of cancer treatment failure, and the gut microbiome can modulate how well chemotherapeutic drugs work. MiCK gives researchers and healthcare professionals a single place to look up the microbial genes involved, the drugs they act on, and their effect on treatment.

**Live site:** <https://my-app-khaki-theta.vercel.app/>

## What you can do

- **Search** the database by drug (5-FU, Capecitabine, Gemcitabine, Irinotecan, Oxaliplatin), by effect (e.g. chemoresistance, chemosensitivity, drug metabolism) or by gene type, or run a keyword search across all fields.
- **Download** the sequence database clustered at different identity thresholds, plus a metadata table of genes, drugs and effects.
- **Browse** key statistics, highlights and FAQs about the knowledgebase.

## Downloads

| Dataset | Contents | File |
| :--- | :--- | :--- |
| MiCK-50 | Sequences clustered at 50% identity | `File_1.faa` |
| MiCK-75 | Sequences clustered at 75% identity | Coming soon |
| MiCK-80 | Sequences clustered at 80% identity | Coming soon |
| MiCK-90 | Sequences clustered at 90% identity | Coming soon |
| MiCK-100 | Sequences clustered at 100% identity | Coming soon |
| Metadata | Gene, drug, CRG, effect and bacterial species | `File_6.xlsx` |

Download files live in `client/public/downloads/` and are served at `/downloads/<file>`. To publish a "Coming soon" dataset, add its file there and remove `unavailable: true` from its entry in `client/src/components/Downloads.js`.

## Project structure

```
client/
  public/downloads/       Downloadable datasets (FASTA and metadata)
  src/data/mick.json      Records searched on the Search page
  src/components/         Page components (Hero, Search, Downloads, Statistics, FAQ, ...)
  src/LandingPage.js      Routes and theme (light/dark mode)
```

The site is a React single-page app built with [Create React App](https://create-react-app.dev/) and [MUI](https://mui.com/). Search runs entirely in the browser against `src/data/mick.json`; there is no backend.

The search data currently contains 26 representative records (accession, gene type, drug, full gene name, original UniProt accession and effect), not the full sequence collection. Searching the full ~1.6 million sequences would need a backend or search service rather than a bundled JSON file.

## Running locally

Requires Node.js 18 or later.

```bash
cd client
npm install
npm start        # dev server at http://localhost:3000
npm run build    # production build in client/build
```

## Deployment

The site is deployed on Vercel with `client` as the project's root directory. Pushes to `master` deploy to production, and pull requests get preview deployments.

## License

Released under the [MIT License](LICENSE).
