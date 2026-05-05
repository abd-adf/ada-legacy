// UTM tracking — injecte utm_source, utm_medium, utm_content dans les champs cachés du formulaire
(function () {
  const params = new URLSearchParams(window.location.search);
  ['utm_source', 'utm_medium', 'utm_content'].forEach(function (key) {
    const el = document.getElementById(key);
    if (el && params.get(key)) el.value = params.get(key);
  });
})();
