# Règles du projet ada-legacy

## UTM tracking sur les formulaires Netlify

Chaque landing page avec un formulaire Netlify doit capturer les paramètres UTM de l'URL pour les retrouver dans l'export CSV.

### Règle

1. **Inclure le script** juste avant `</body>` :
   ```html
   <script src="js/utm.js"></script>
   ```

2. **Ajouter les 3 champs cachés** dans le formulaire, après `bot-field` :
   ```html
   <input type="hidden" name="utm_source" id="utm_source">
   <input type="hidden" name="utm_medium" id="utm_medium">
   <input type="hidden" name="utm_content" id="utm_content">
   ```

Le script `js/utm.js` lit automatiquement `?utm_source=`, `?utm_medium=` et `?utm_content=` dans l'URL et injecte les valeurs dans ces champs au chargement de la page.

### Exemple d'URL trackée
```
https://ton-site.com/ma-landing/?utm_source=email&utm_medium=newsletter&utm_content=bouton-cta
```

Les valeurs apparaissent ensuite dans l'export CSV de Netlify Forms.

---

## Champs du formulaire Netlify (ada-legs-fr)

| `name` | Type | Notes |
|---|---|---|
| `form-name` | hidden | valeur fixe `ada-legs-fr` |
| `bot-field` | text (caché) | honeypot anti-spam |
| `utm_source` | hidden | UTM tracking |
| `utm_medium` | hidden | UTM tracking |
| `utm_content` | hidden | UTM tracking |
| `envoi` | radio | `Email` ou `Courrier` |
| `civilite` | select | `Madame` / `Monsieur` |
| `nom` | text | requis |
| `prenom` | text | |
| `telephone` | tel | champ commun aux deux modes |
| `email` | email | visible si mode Email |
| `adresse` | text | visible si mode Courrier |
| `code_postal` | text | visible si mode Courrier |
| `ville` | text | visible si mode Courrier |

> Le champ `telephone` est unique et placé dans `fields-common` pour éviter le doublon qui causait un tableau `["valeur", ""]` dans l'export CSV.
