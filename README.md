<img width="497" height="227" alt="Screenshot 2026-03-29 112719" src="https://github.com/user-attachments/assets/22df4817-0698-41d1-8e69-d2f52b1b940c" />

# 🎯 Guess the Number!

Ein browserbasiertes Zahlenratespiel – entstanden beim Lernen im Rahmen der Frontend Developer Zertifizierung JavaScript.

---

## 🎮 Wie es funktioniert

Das Spiel generiert eine zufällige Zahl zwischen 1 und 20. Der Spieler gibt eine Zahl ein und bekommt einen Hinweis ob die gesuchte Zahl größer oder kleiner ist – bis die richtige Zahl gefunden wird. Bei einem Treffer startet eine Konfetti-Animation. 🎊

---

## ✨ Besonderheiten

> 🎲 **Zufallszahl per `Math.random()`** – die gesuchte Zahl wird bei jedem Seitenaufruf neu generiert, kein Spiel ist gleich

> 🎊 **Konfetti-Animation** – bei einem Treffer wird die [js-confetti](https://github.com/loonywizard/js-confetti) Library ausgelöst

> ♿ **Kein Page Reload** – das Formular wird per `onsubmit` + `return false` abgefangen, die Seite bleibt stabil

> 🧩 **Saubere DOM-Selektion** – alle Elemente werden per `document.getElementById()` referenziert

---

## 📁 Projektstruktur

```
/
├── index.html
├── css/
│   └── style.css
└── js/
    ├── script.js
    └── js-confetti.browser.js
```

---

## 🛠️ Technologien

- **HTML5** – semantisches Markup, natives Formular mit `onsubmit`
- **CSS3** – `linear-gradient`, `clamp()`, `backdrop-filter`, `::after` Pseudo-Element, Glassmorphism-Input
- **JavaScript** – `Math.random()`, `Math.round()`, DOM-Manipulation, Event Handling
- **js-confetti** – Konfetti-Library für den Gewinn-Moment

---

## 📚 Kontext

Teil der **Softwareentwicklerin Frontend Javascript Zertifizierung** bei GFN (extern zertifiziert durch WPI), März – Juni 2026.
