# curs-campus-hub

Repo-ul cursului Web Development (IT School, cohorta 2026). Îl scrie doar trainerul. Tu doar faci `git pull` și copiezi din el.

> **Prima dată aici?** Citește [`GHID-STUDENT.md`](GHID-STUDENT.md): pașii, Pull Request-ul pe GitHub și ce faci când te blochezi.

## Ce găsești aici

```
curs-campus-hub/
├── 13-js-tipuri-de-date/
│   └── sesiunea-13.js          exercițiile sesiunii, de copiat în proiectul tău
├── 14-js-functii/
│   └── sesiunea-14.js          exercițiile sesiunii 14, de copiat în proiectul tău
├── 15-js-obiecte/
│   └── sesiunea-15.js          exercițiile sesiunii 15, de copiat în proiectul tău
├── 16-js-array/
│   └── sesiunea-16.js          exercițiile sesiunii 16, de copiat în proiectul tău
├── 17-js-dom-manipulare/
│   ├── evenimente/             pagina Evenimente (HTML și CSS), de copiat în proiectul tău
│   └── js/
│       └── sesiunea-17.js      exercițiile sesiunii 17, de copiat în campus-hub/js
├── 18-js-dom-evenimente/
│   └── sesiunea-18.js          exercițiile sesiunii 18, de copiat în campus-hub/js
└── 19-js-stocare-browser/
    └── sesiunea-19.js          exercițiile sesiunii 19, de copiat în campus-hub/js
```

Fiecare sesiune are un folder, cu fișierele ei direct în el. Copiezi fișierele în **proiectul tău** (`campus-hub`), de exemplu `sesiunea-13.js` în `campus-hub/js/`.

## Sesiunea 13 pe scurt

1. În `curs-campus-hub`: `git pull`.
2. În `campus-hub`: `git checkout main`, `git pull`, `git checkout -b sesiunea-13`.
3. Copiază `13-js-tipuri-de-date/sesiunea-13.js` în `campus-hub/js/`.
4. Deschide fișierul în VS Code, rezolvă exercițiile și rulează cu **Ctrl+Alt+N**.
5. `git add .`, `git commit -m "Sesiunea 13: tipuri de date"`, `git push origin sesiunea-13`, apoi Pull Request în `main`.

## Sesiunea 14 pe scurt

1. În `curs-campus-hub`: `git pull`.
2. În `campus-hub`: `git checkout main`, `git pull`, `git checkout -b sesiunea-14`.
3. Copiază `14-js-functii/sesiunea-14.js` în `campus-hub/js/`.
4. Deschide fișierul în VS Code, rezolvă exercițiile și rulează cu **Ctrl+Alt+N**.
5. `git add .`, `git commit -m "Sesiunea 14: funcții"`, `git push origin sesiunea-14`, apoi Pull Request în `main`.

## Sesiunea 15 pe scurt

1. În `curs-campus-hub`: `git pull`.
2. În `campus-hub`: `git checkout main`, `git pull`, `git checkout -b sesiunea-15`.
3. Copiază `15-js-obiecte/sesiunea-15.js` în `campus-hub/js/`.
4. Deschide fișierul în VS Code, rezolvă exercițiile și rulează cu **Ctrl+Alt+N**.
5. `git add .`, `git commit -m "Sesiunea 15: obiecte"`, `git push origin sesiunea-15`, apoi Pull Request în `main`.

## Sesiunea 16 pe scurt

1. În `curs-campus-hub`: `git pull`.
2. În `campus-hub`: `git checkout main`, `git pull`, `git checkout -b sesiunea-16`.
3. Copiază `16-js-array/sesiunea-16.js` în `campus-hub/js/`.
4. Deschide fișierul în VS Code, rezolvă exercițiile și rulează cu **Ctrl+Alt+N**.
5. `git add .`, `git commit -m "Sesiunea 16: array"`, `git push origin sesiunea-16`, apoi Pull Request în `main`.

## Sesiunea 17 pe scurt

1. În `curs-campus-hub`: `git pull`.
2. În `campus-hub`: `git checkout main`, `git pull`, `git checkout -b sesiunea-17`.
3. Copiază folderul `17-js-dom-manipulare/evenimente` în `campus-hub/` și fișierul `17-js-dom-manipulare/js/sesiunea-17.js` în `campus-hub/js/`.
4. În `campus-hub/index.html`, la linkul „Evenimente” din meniu, pune `href="evenimente/evenimente.html"`.
5. Deschide `evenimente/evenimente.html` cu **Live Server**, rezolvă exercițiile în `js/sesiunea-17.js`; rezultatul se vede în pagină și în Console (F12).
6. `git add .`, `git commit -m "Sesiunea 17: manipularea DOM"`, `git push origin sesiunea-17`, apoi Pull Request în `main`.

## Sesiunea 18 pe scurt

1. În `curs-campus-hub`: `git pull`.
2. În `campus-hub`: `git checkout main`, `git pull`, `git checkout -b sesiunea-18`.
3. Copiază `18-js-dom-evenimente/sesiunea-18.js` în `campus-hub/js/`.
4. În `campus-hub/evenimente/evenimente.html` pune linia `<script defer src="../js/sesiunea-18.js"></script>`.
5. Deschide `evenimente/evenimente.html` cu **Live Server**, rezolvă exercițiile în `js/sesiunea-18.js`; rezultatul se vede în pagină și în Console (F12).
6. `git add .`, `git commit -m "Sesiunea 18: DOM cu evenimente"`, `git push origin sesiunea-18`, apoi Pull Request în `main`.

## Sesiunea 19 pe scurt

1. În `curs-campus-hub`: `git pull`.
2. În `campus-hub`: `git checkout main`, `git pull`, `git checkout -b sesiunea-19`.
3. Copiază `19-js-stocare-browser/sesiunea-19.js` în `campus-hub/js/`.
4. În `campus-hub/evenimente/evenimente.html` schimbă linia script în `<script defer src="../js/sesiunea-19.js"></script>`.
5. Deschide `evenimente/evenimente.html` cu **Live Server**, rezolvă exercițiile în `js/sesiunea-19.js`; rezultatul se vede în pagină, în Console și în F12 → Application. Exercițiul 4 se face în Console, iar Exercițiul 9 schimbă și `evenimente.css` și `evenimente.html`.
6. `git add .`, `git commit -m "Sesiunea 19: stocare în browser"`, `git push origin sesiunea-19`, apoi Pull Request în `main`.

## Tag-uri: „pozele” repo-ului

Fiecare sesiune are două tag-uri: **`sNN-start`** (fișierul cu exercițiile goale) și **`sNN-final`** (fișierul cu soluțiile trainerului).

| Vrei să… | Comanda |
|---|---|
| Vezi ce a scris trainerul în sesiune | `git diff s13-start s13-final` |
| Ai rămas în urmă și vrei fișierul cu exercițiile | `git checkout s13-start`, copiezi fișierul, apoi `git checkout main` |
| Te uiți la soluția trainerului | `git checkout s13-final`, apoi `git checkout main` |

Mesajul lung despre `detached HEAD` e normal: doar privești o „poză” din trecut.

Pe GitHub, același diff e la `…/compare/s13-start...s13-final`.

## Regula

Proiectul tău (Campus Hub) este **al tău** și crește de la o sesiune la alta. Aici nu editezi nimic. Dacă ai modificat din greșeală: `git status`, apoi `git restore .`.
