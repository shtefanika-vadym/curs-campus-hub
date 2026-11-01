# curs-campus-hub

Repo-ul cursului Web Development (IT School, cohorta 2026). Îl scrie doar trainerul. Tu doar faci `git pull` și copiezi din el.

> **Prima dată aici?** Citește [`GHID-STUDENT.md`](GHID-STUDENT.md): pașii, Pull Request-ul pe GitHub și ce faci când te blochezi.

## Ce găsești aici

```
curs-campus-hub/
└── 13-js-tipuri-de-date/
    └── sesiunea-13.js          exercițiile sesiunii, de copiat în proiectul tău
```

Fiecare sesiune are un folder, cu fișierele ei direct în el. Copiezi fișierele în **proiectul tău** (`campus-hub`), de exemplu `sesiunea-13.js` în `campus-hub/js/`.

## Sesiunea 13 pe scurt

1. În `curs-campus-hub`: `git pull`.
2. În `campus-hub`: `git checkout main`, `git pull`, `git checkout -b sesiunea-13`.
3. Copiază `13-js-tipuri-de-date/sesiunea-13.js` în `campus-hub/js/`.
4. Deschide fișierul în VS Code, rezolvă exercițiile și rulează cu **Ctrl+Alt+N**.
5. `git add .`, `git commit -m "Sesiunea 13: tipuri de date"`, `git push origin sesiunea-13`, apoi Pull Request în `main`.

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
