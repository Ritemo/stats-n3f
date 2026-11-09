# Stats N3F (Nationale 3 féminine, Pays Riolais HB)

Appli PWA (GitHub Pages) des stats du championnat N3F, saison 2026-2027. Le code de l'appli est partagé avec `stats-hand`, qui contient aussi le robot qui remplit le Google Sheets des filles. Détails dans le README des deux dépôts.

## Qui je suis et comment je travaille

- Mathieu Cognard. Je ne suis pas développeur : je décris ce que je veux, Claude code, teste et pousse.
- Je travaille surtout depuis mon téléphone (sessions cloud Claude Code), avec un abonnement Claude Pro : économise le quota (pas de relectures inutiles de gros fichiers, pas d'outils qui consomment des tokens en arrière-plan).
- Réponds en français, simplement, sans jargon. Jamais de tiret cadratin (caractère U+2014), ni dans les réponses ni dans les fichiers.
- Uniquement des outils et services gratuits (GitHub Actions, GitHub Pages, Google Sheets, ntfy...). Si quelque chose de payant semble nécessaire, demande d'abord.
- Pousse directement sur `main` une fois les tests passés. Pas de branche ni de pull request sauf si je le demande.
- Tu peux prendre les décisions de design et proposer des améliorations : je valide ou corrige ensuite.
- Le README est écrit pour quelqu'un qui reprendrait le projet sans savoir coder : mets-le à jour quand le fonctionnement change.

## Vérifier avant de pousser

- Lance les tests du dépôt (voir ci-dessous).
- Pour toute modification d'interface, ouvre l'appli avec Playwright (MCP déclaré dans `.mcp.json`) au format téléphone (390 x 844) et vérifie l'affichage, puis au format ordinateur si l'appli s'utilise aussi sur PC.
- Pense au cache du service worker (`sw.js`) : change sa version quand les fichiers de l'appli changent, sinon les téléphones gardent l'ancienne.

## Règles propres à ce projet

- Tests : `node tests/verif.js .`
- `index.html`, `sw.js` et `tests/` sont identiques à ceux de `stats-hand` : la modification se fait dans `stats-hand`, puis Claude recopie lui-même ces fichiers ici et les pousse (pas de robot de synchronisation). Seuls `config.js`, `manifest.json`, les icônes et `logos/` sont propres aux filles.
- Le robot n'est pas ici : il tourne depuis `stats-hand` (`robot-fdm/robot/config_n3f.json`).
- Même logique de stats que les garçons : % d'arrêt calculé au niveau équipe.
