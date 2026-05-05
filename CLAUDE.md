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
