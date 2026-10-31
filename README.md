# Stats Hand N3F : mode d'emploi

Ce dépôt contient l'appli de statistiques de l'équipe **seniors filles du Pays Riolais HB** (Nationale 3 féminine) : https://ritemo.github.io/stats-n3f/

**Le mode d'emploi complet est dans le dépôt voisin [stats-hand](https://github.com/Ritemo/stats-hand#readme)** : fonctionnement, gestes courants, que faire si ça casse, passage à la saison suivante. C'est aussi là que se trouve le **robot**, qui remplit les statistiques des deux équipes.

## Ce qui est propre à ce dépôt

| Fichier | Rôle |
|---|---|
| `config.js` | réglages de l'appli filles : nom, Google Sheets des filles, accords au féminin, abonnements de notifications. **Ne pas le remplacer par celui des garçons.** |
| `manifest.json`, `icon-*.png` | nom et icône de l'appli sur le téléphone |
| `logos/` | logos des clubs de la poule (voir `LISTE-LOGOS.txt`) |

Les autres fichiers (`index.html`, `sw.js`, `tests/verif.js`, `.github/workflows/verif-deploy.yml`) sont **identiques** à ceux de stats-hand. Pour une mise à jour de l'appli, on dépose le même `index.html` (et `sw.js` s'il a changé) dans les deux dépôts.

## Repères

| Élément | Valeur |
|---|---|
| Google Sheets des filles | ID `1bFnSlIoJ8UMcl6yyvGi6OhxzJTprp04G0fQuj0fx8i0` |
| Notifications, match du Pays Riolais | abonnement ntfy `prhb-n3f-r7k2q` |
| Notifications, tous les résultats | abonnement ntfy `prhb-n3f-tous-r7k2q` |
| Alertes pour la personne qui gère l'appli | abonnement ntfy `prhb-alerte-r7k2q` |
