# Stats Hand : Nationale 3 féminine

Appli web (PWA) des statistiques du championnat de Nationale 3 féminine, saison 2026-2027, pour les joueuses du Pays Riolais HB.

- Appli : https://ritemo.github.io/stats-n3f/
- Appli garçons et **robot d'import des feuilles de match** : dépôt [`stats-hand`](https://github.com/Ritemo/stats-hand) (tout y est expliqué)

## Ce qui est propre à ce dépôt

| Fichier | Rôle |
|---|---|
| `config.js` | Seul fichier propre à l'appli filles : titre, adresse CSV du Google Sheets, numéros d'onglets (gid), sujets de notification. |
| `manifest.json`, `icon-*.png`, `logos/` | Nom, icônes et logos des clubs de la poule. |
| `index.html`, `sw.js`, `tests/` | **Recopiés automatiquement** depuis `stats-hand`, aussitôt après chaque modification faite par Claude, et toutes les 15 minutes par sécurité (robot `.github/workflows/sync-hand.yml`). Ne pas les modifier ici : toute modification se fait dans `stats-hand`. |
| `.github/workflows/verif-deploy.yml` | Test puis mise en ligne à chaque modification (même fonctionnement que les garçons), y compris après une synchronisation. |
| `.github/workflows/sync-hand.yml` | Synchronisation du code commun depuis `stats-hand`, déclenchée par Claude après chaque modification, toutes les 15 minutes par sécurité, ou à la demande (*Run workflow*). Alerte sur `prhb-alerte-r7k2q` en cas d'échec. |

Le robot qui remplit le Google Sheets des filles tourne depuis `stats-hand` (fichier `robot-fdm/robot/config_n3f.json`, variable `ROBOT_MODE_N3F`).

## Notifications (ntfy.sh)

- `prhb-n3f-r7k2q` : match du Pays Riolais et journées complètes ;
- `prhb-n3f-tous-r7k2q` : tous les résultats ;
- `prhb-alerte-r7k2q` : alerte technique, pour la personne qui gère l'appli : problème du robot (erreur, panne, feuille absente 24 h après un match) ou mise en ligne bloquée.

## Nouvelle saison

1. Nouveau Google Sheets partagé en éditeur avec le compte de service et publié en CSV.
2. Ici : `sheet`, `gid`, `marque` et `championnat` dans `config.js`, logos dans `logos/`.
3. Dans `stats-hand` : `config_n3f.json` (`sheet_id`, `poule_url`, `journees`, `equipes`).

Pour le dépannage et les limites gratuites, voir le README de `stats-hand`.
