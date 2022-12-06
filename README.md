# Awesome KoliBri-Themes

Dieses Projekt hat zum Ziel, zahlreiche repräsentative Styleguides und Design Systeme in Form von Themes umzusetzen, um die Flexibilität der KoliBri-Komponenten zu testen und weiter zu verbessern.

## Themes

### Öffentliche Verwaltung

#### Bundesländer

Link: <https://www.datenportal.bmbf.de/portal/de/G122.html>

- BW = Baden-Württemberg
- BY = Bayern
- BE = Berlin
- BB = Brandenburg
- HB = Bremen
- HH = Hamburg
- HE = Hessen
- MV = Mecklenburg-Vorpommern
- NI = Niedersachsen
- NW = Nordrhein-Westfalen
- RP = Rheinland-Pfalz
- SL = Saarland
- SN = Sachsen
- ST = Sachsen-Anhalt
- SH = Schleswig-Holstein
- TH = Thüringen

### Privatwirtschaft

- BAHN = Deutsche Bahn
- SPK = Sparkasse
- UKV = Union Krankenversicherung AG
- VKB = Versicherungskammer Bayern

## Integration

Die Verwendung der Themes mit der [barrierefreien Web Componenten Bibliothek KoliBri](https://github.com/public-ui) ist sehr einfach. Mittels der Register-Methode kann ein Theme mit den Komponenten "gekoppelt" werden.

```html
<head>
	<link href="https://use.fontawesome.com/releases/v6.2.1/css/all.css" rel="stylesheet" />
	<script type="module">
		import { register } from 'https://esm.sh/@public-ui/core';
		import { defineCustomElements } from 'https://esm.sh/@public-ui/components/dist/loader';
		import { TH } from 'https://esm.sh/@public-oss/kolibri-themes';
		register(TH, [defineCustomElements])
			.then(() => {})
			.catch(console.warn);
	</script>
	<body class="th" data-theme="th">
		...
	</body>
</head>
```

> Mehr Informationen können über die [Dokumentation](https://public-ui.github.io) oder das [Cheat Sheet](https://public-ui.github.io/kolibri-accessible-web-components.cheat-sheet.html) erhalten werden.

## Bekannte Herausforderungen

- Aktuell werden die einzelnen Themes nicht durch separate Dateien vom NPM-Paket exportiert, so dass beim Bauen (Bundling) immer der Code aller Themes mit verbaut wird.
