// ============ RÉGLAGES DE L'APPLI FILLES (dépôt stats-n3f) ============
// Seul fichier propre à cette appli : index.html et sw.js sont identiques dans les deux dépôts.
// À déposer une fois ; il n'y a normalement plus jamais besoin d'y toucher.
self.APP = {
  id: "n3f",                         // préfixe des mémoires du téléphone et du cache (ne pas changer)
  titre: "Stats Hand N3F",           // nom de l'onglet du navigateur
  feminin: true,                     // accords : joueuses, buteuses, gardiennes
  marque: ["Nationale 3", "féminine", "Poule N3F, saison 2026-2027"],   // en-tête de l'accueil
  championnat: "Nationale 3 féminine",                                  // sous-titre des pages club
  // Google Sheets publié en CSV, et numéro (gid) de chaque onglet lu par l'appli
  sheet: "https://docs.google.com/spreadsheets/d/e/2PACX-1vTQEvx7jxWxdWHj4nMG3XGBZf-J3eoTf5ZpgSciZ2gHBo8rFvdzTiTyiMdyBcRGRAAOXCOmadSHDjgA/pub?output=csv",
  gid: { joueurs: "1558817234", gardiens: "507833729", clubs: "233541778", journees: "1026016815",
         joueursJ: "1094642153", matchs: "1359507357", calendrier: "741357139" },
  ntfy: "prhb-n3f-r7k2q",            // notifications : Pays Riolais seulement
  ntfyTous: "prhb-n3f-tous-r7k2q",   // notifications : tous les résultats
  cache: "hand-n3f-cache",           // copie hors connexion des données
  nomsCourts: { "ASCAP Pays de Montbéliard HB": "ASCAP Montbéliard", "Ent. Saône Mamirolle HB (B)": "Mamirolle", "HBC Quingey Val de Loue": "Quingey" }
};
