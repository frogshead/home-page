+++
title = "Sivusto pyörii nyt Zolalla"
date = 2026-06-29
+++

Sivusto on rakennettu uudelleen [Zola](https://www.getzola.org/)-staattisella
sivustogeneraattorilla. CV pysyy yhtenä kevyenä, JavaScriptittömänä sivuna, mutta
nyt sen rinnalla on tämä muistiinpanot-osio markdown-pohjaisille kirjoituksille.

## Miksi Zola?

- Yksi binääri, ei riippuvuuksia — sama buildi paikallisesti ja CI:ssä.
- Markdown sisällölle, mallit ulkoasulle.
- Lopputulos on edelleen pelkkää staattista HTML:ää ja CSS:ää, joka tarjoillaan
  samalta nginx-palvelimelta kuin ennenkin.

```bash
# Paikallinen esikatselu
zola serve

# Tuotantobuildi -> public/
zola build
```

Lisää muistiinpanoja tähän kunhan ehtii.
