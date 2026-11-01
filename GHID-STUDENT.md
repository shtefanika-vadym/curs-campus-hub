# Ghid pentru student: cum lucrăm și ce faci când te blochezi

Citește o dată tot ghidul. Apoi ține-l deschis când ceva nu merge: probabil găsești problema în secțiunea **Când te blochezi**.

## 1. Regula de aur

Înainte de orice comandă Git, scrie:

```
git status
```

Îți spune pe ce branch ești, ce ai modificat și ce urmează. Dacă nu înțelegi ce vezi, copiază rezultatul și trimite-l trainerului.

## 2. Cele două foldere

Ai pe calculator **două foldere**, unul lângă altul:

```
Documente/
├── curs-campus-hub/    materialele trainerului
└── campus-hub/         proiectul TĂU
```

| | `curs-campus-hub` | `campus-hub` |
|---|---|---|
| Ce e | Materialele cursului | Proiectul tău, pe care îl construiești toată etapa |
| Cine scrie în el | **Doar trainerul** | **Doar tu** |
| Ce faci tu aici | `git pull` și **copiezi** fișiere de aici | Lucrezi, faci commit, branch și Pull Request |

**Nu scrii și nu salvezi nimic în `curs-campus-hub`.** Doar copiezi din el. Așa nu apar conflicte.

## 3. Prima dată: pregătirea

### Ai deja Campus Hub pe GitHub (tema din sesiunea 11)

Continui în repo-ul tău. Nu creezi altul.

### Nu ai repo sau ți s-a stricat tot

Repeți pașii din sesiunea 11, pe folderul tău cu Campus Hub: `git init`, `git add .`, `git commit`, `git remote add origin` și `git push`. Dacă nu mai ai nici folderul, cere trainerului linkul repo-ului Campus Hub: apeși **Code**, apoi **Download ZIP**, și continui de acolo.

### Aduci repo-urile pe calculator

1. Pe pagina repo-ului apasă butonul verde **Code**, copiază adresa de la **HTTPS**.
2. Deschide terminalul în folderul unde vrei proiectele (ex. `Documente`) și rulează:
   ```
   git clone ADRESA-COPIATĂ
   ```
3. Fă același lucru pentru `curs-campus-hub`:
   ```
   git clone https://github.com/shtefanika-vadym/curs-campus-hub.git
   ```

La prima trimitere (`git push`), Git poate cere să te autentifici cu GitHub, într-o fereastră de browser. Urmează pașii. Dacă nu merge, spune-i trainerului.

## 4. Rutina unei sesiuni (în terminal)

```
1.  cd curs-campus-hub
    git pull                                     adu materialele noi

2.  cd ../campus-hub
    git checkout main
    git pull                                     adu ultimele schimbări ale tale de pe GitHub
    git checkout -b sesiunea-13                    branch nou pentru sesiune

3.  copiază 13-js-tipuri-de-date/sesiunea-13.js din curs-campus-hub  în  campus-hub/js

4.  deschizi fișierul sesiunii în VS Code, lucrezi, salvezi și rulezi cu Code Runner (Ctrl+Alt+N);
    rezultatul apare în panoul Output

5.  git add .
    git commit -m "Sesiunea 13: tipuri de date"
    git push origin sesiunea-13
```

De ce `git push origin sesiunea-13` și nu doar `git push`: branch-ul e nou, iar Git nu știe încă unde să-l trimită. Îi spui tu: `origin` e adresa repo-ului tău, apoi numele branch-ului.

Apoi continui pe GitHub, la pasul următor.

## 5. Pull Request pe GitHub (în browser)

1. Deschide repo-ul tău pe GitHub. După `git push`, apare sus un banner galben cu **Compare & pull request**. Apasă-l.
   Nu apare? Mergi la fila **Pull requests**, apoi **New pull request**. Alege **base: `main`** și **compare: `sesiunea-13`**.
2. Pune un **titlu** care spune ce ai făcut (ex. „Sesiunea 13: tipuri de date”) și 1-2 propoziții de **descriere**.
3. Apasă **Create pull request**.
4. Verifică în fila **Files changed** că vezi doar ce ai vrut să schimbi.
5. Apasă **Merge pull request**, apoi **Confirm merge**.
6. (Opțional) apasă **Delete branch**: branch-ul și-a făcut treaba.
7. Înapoi în terminal, în `campus-hub`:
   ```
   git checkout main
   git pull
   ```
   Acum `main` are și sesiunea 13.

## 6. Cum îți verifici munca față de trainer

După sesiune, trainerul trimite un link de tip:

```
github.com/…/curs-campus-hub/compare/s13-start...s13-final
```

Deschide-l în browser. Roșu înseamnă ce s-a șters, verde ce s-a adăugat. E **doar de citit**: dacă vrei o bucată, o copiezi tu în proiectul tău.

## 7. Când te blochezi

Găsește mesajul pe care îl vezi. Unele soluții șterg modificări, deci citește avertismentele.

### În `curs-campus-hub`

| Ce vezi | Ce înseamnă | Ce faci |
|---|---|---|
| `Already up to date.` | Nu e nimic nou | E normal. Trainerul n-a publicat încă |
| `Your local changes … would be overwritten by merge` | Ai modificat fișiere în `curs-campus-hub` | Copiază ce vrei să păstrezi în `campus-hub`, apoi `git restore .` și `git pull` |
| `untracked working tree files would be overwritten` | Ai creat fișiere cu același nume ca cele noi | Mută-le în `campus-hub`, șterge-le de aici, apoi `git pull` |
| Nu merge nimic, nu știi ce ai schimbat | Folderul e „murdar” | Șterge tot folderul `curs-campus-hub` și clonează-l din nou. Nu conține nimic al tău |
| `fatal: not a git repository` | Ești în folderul greșit | Rulează `cd` în `curs-campus-hub` sau `campus-hub` |
| `unknown revision s13-final` | Tag-ul nu s-a adus încă | `git fetch --tags`, apoi `git pull` |

### În `campus-hub`

| Ce vezi | Ce înseamnă | Ce faci |
|---|---|---|
| `Your local changes … would be overwritten` la `git pull` sau `git checkout` | Ai modificări necomise | Vezi **„Ai modificări necomise”** mai jos |
| `CONFLICT (content): Merge conflict in …` | Același loc din fișier e schimbat în două feluri | Rezolvi ca în sesiunea 12: în VS Code apeși unul dintre butoanele **Accept Current Change**, **Accept Incoming Change** sau **Accept Both Changes**, apoi `git add .`, `git commit` și `git push origin numele-branchului` |
| `The current branch … has no upstream branch` | Branch-ul e nou și Git nu știe unde să-l trimită | Spune-i explicit: `git push origin numele-branchului` |
| `rejected … non-fast-forward` | GitHub are commit-uri pe care tu nu le ai | `git pull`, apoi `git push` |
| `HEAD detached` | Te uiți la o „poză” veche, nu la un branch | `git checkout main` |
| Nu mai vezi un fișier | L-ai șters din greșeală | `git restore numele-fisierului` |

### Ai modificări necomise (cel mai frecvent)

Alege **una** dintre variante:

**A. Vrei să le păstrezi. Recomandat.**
```
git add .
git commit -m "Lucru în curs"
git pull
```

**B. Vrei să le pui deoparte puțin.**
```
git stash -u        pune modificările deoparte
git pull
git stash pop       le aduce înapoi
```

**C. Nu mai ai nevoie de ele.** Atenție: se pierd definitiv.
```
git restore .       anulează modificările din fișierele existente
git status          vezi dacă au rămas fișiere noi; le ștergi manual dacă nu le vrei
```

### Ai făcut commit pe `main` în loc de branch

Nu te panica: commit-ul nu se pierde.

```
git branch sesiunea-13            păstrezi commit-ul pe un branch nou
git checkout main
git fetch origin
git reset --hard origin/main      main redevine ca pe GitHub (ATENȚIE: șterge modificările necomise)
git checkout sesiunea-13            continui pe branch
```

Dacă nu ești sigur, oprește-te și cere ajutor înainte de `git reset --hard`.

### Ai rămas în urmă la o sesiune

În `curs-campus-hub`:
```
git checkout s13-start        fișierul sesiunii, cu exercițiile goale
```
Copiază fișierul în `campus-hub/js/`, apoi revino:
```
git checkout main
```
Dacă vrei să vezi soluția trainerului: `git checkout s13-final`, te uiți în fișier, apoi `git checkout main`.

Mesajul lung despre `detached HEAD` e normal aici: doar privești.

### Scriptul nu merge

| Ce vezi | Ce faci |
|---|---|
| `node is not recognized` | Node nu e instalat sau terminalul a fost deschis înainte de instalare. Închide terminalul și deschide unul nou |
| Nu apare nimic în Output | Salvează fișierul (Ctrl+S) și rulează din nou cu Code Runner (Ctrl+Alt+N) |
| `Identifier '…' has already been declared` | Ai declarat același nume cu `let` de două ori în același fișier. A doua oară scrii doar numele, fără `let` |

### Contribuțiile nu apar pe profilul tău GitHub

Verifică trei lucruri:
1. Commit-urile sunt pe `main` (după ce ai unit Pull Request-ul).
2. Email-ul din Git e același cu cel din contul GitHub: `git config --global user.email`.
3. Ai așteptat până la 24 de ore.

### Ultima soluție: reiei de la zero

Dacă nu mai înțelegi nimic și nu ai modificări importante necomise:

1. Redenumește folderul stricat: `campus-hub` devine `campus-hub-vechi`.
2. Clonează din nou repo-ul tău de pe GitHub: `git clone ADRESA`.

Tot ce ai **trimis** pe GitHub (`git push`) se întoarce. Ce a rămas doar pe calculator, necomis, se află în `campus-hub-vechi`.

## 8. Ce nu faci

- Nu scrii cod în `curs-campus-hub`.
- Nu faci `git reset --hard` sau `git clean` fără să fi citit avertismentul de mai sus.
- Nu lucrezi direct pe `main`: fiecare sesiune are propriul ei branch.
- Nu te rușina să ceri ajutor: trimite rezultatul comenzii `git status`.
