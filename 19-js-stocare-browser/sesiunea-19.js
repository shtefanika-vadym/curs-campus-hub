// Campus Hub · sesiunea 19 · stocare în browser
// Fișierul stă în js și se leagă de evenimente/evenimente.html, deschis cu Live Server.
// Scrii sub fiecare bloc, salvezi și pagina se reîncarcă singură: rezultatul se vede în pagină, în Console și în F12 → Application.
//
// Atenție: un nume (de variabilă sau de funcție) se declară o singură dată într-un fișier.
// Exercițiile 1-5 au nume proprii (vizitator2, camp3, text5 ...). Exercițiul 4 se face în Console, nu în fișier; Exercițiul 9 schimbă și evenimente.css și evenimente.html.
// De la Exercițiul 6, codul gata scris are numele lui (evenimente, lista, randeaza, camp, descriere, butonAdauga),
// iar funcțiile pe care le scrii au nume fixe: salveazaInBrowser și incarcaDinBrowser.
// Exercițiile merg unul după altul, pe aceeași pagină, deci nu comentezi nimic după ce termini.
// La DATE DE PORNIRE, codul de sub bloc e deja scris: nu-l modifici. Console arată o linie de titlu pentru fiecare exercițiu.


/* ===== Exercițiul 1 · GHIDAT · 5 min · Prima amintire =====
   CE FACI: Pui în localStorage numele unui vizitator și îl găsești în panoul Application.
   PAȘI:
   1. Scrie localStorage.setItem("vizitator", "Ana"); în fișier.
   2. Salvează fișierul: pagina se reîncarcă singură.
   3. Deschide F12, tab-ul Application, apoi Local Storage și adresa paginii.
   4. Găsește rândul vizitator cu valoarea Ana.
   5. Schimbă „Ana” în numele tău, salvează și uită-te din nou în rând.
   OUTPUT AȘTEPTAT:
     Application → Local Storage → rândul vizitator, cu valoarea Ana
     Dacă schimbi „Ana” în numele tău, rândul se schimbă la următoarea salvare a fișierului
   INDICIU: localStorage.setItem("cheie", "valoare") → pune o valoare în dulap, sub o
     etichetă · ambele între ghilimele · F12 → Application → Local Storage → adresa paginii
     → rândul apare în tabel.
   GREȘEALĂ FRECVENTĂ: Scrii localStorage.setItem(vizitator, "Ana"), fără ghilimele la
     cheie: JavaScript caută o variabilă vizitator, nu o găsește și apare o eroare în
     Console. */

console.log("--- Exercițiul 1 ---");

localStorage.setItem("vizitator", "Ana");


/* ===== Exercițiul 2 · SINGUR · 1 min · Citește amintirea =====
   CE FACI: Pagina citește vizitatorul din dulap și îl salută; dacă nu există, îl numește
     „oaspete”.
   PAȘI:
   1. Selectează #descriere în descriere2.
   2. Citește cheia "vizitator" în vizitator2, cu localStorage.getItem, urmat de operatorul
      nullish: ?? "oaspete".
   3. Scrie în descriere2.textContent: "Bine ai revenit, " + vizitator2 + "!".
   4. Schimbă cheia în "nu-exista" și vezi salutul; apoi pune "vizitator" la loc.
   OUTPUT AȘTEPTAT:
     Cu cheia "vizitator": descrierea devine „Bine ai revenit, Ana!”
     Cu cheia "nu-exista": descrierea devine „Bine ai revenit, oaspete!”
   INDICIU: localStorage.getItem("cheie") → întoarce valoarea ca text, sau null dacă
     lipsește · valoare ?? rezerva → operatorul nullish (nullish coalescing) ia rezerva doar
     când valoarea e null sau undefined · pune rezultatul într-o variabilă, ca să-l poți
     folosi.
   GREȘEALĂ FRECVENTĂ: Uiți operatorul nullish (?? "oaspete") și cheia lipsește: getItem dă
     null, iar pe pagină apare „Bine ai revenit, null!”. */

console.log("--- Exercițiul 2 ---");

const descriere2 = document.querySelector("#descriere");
const vizitator2 = localStorage.getItem("vizitator") ?? "oaspete";
descriere2.textContent = "Bine ai revenit, " + vizitator2 + "!";


/* ===== Exercițiul 3 · SINGUR · 3 min · Câmpul își amintește =====
   CE FACI: Ce scrii în câmpul „Numele evenimentului” rămâne acolo și după ce reîncarci
     pagina.
   PAȘI:
   1. Selectează #input-eveniment în camp3.
   2. Ascultă "input" pe camp3; în funcție, salvează event.target.value sub cheia "ciorna",
      cu setItem.
   3. La pornire, citește cheia "ciorna" în ciorna3, cu getItem.
   4. Dacă ciorna3 nu e null, pune-o în camp3.value.
   5. Scrie ceva în câmp, reîncarcă pagina: textul revine.
   OUTPUT AȘTEPTAT:
     Scrii „Hackathon de toamnă” în câmp → în Application apare rândul ciorna, cu același text
     Reîncarci pagina → câmpul arată din nou „Hackathon de toamnă”
   INDICIU: "input" → se produce la fiecare literă · event.target.value → textul din câmp
     (sesiunea 18) · setItem salvează, getItem citește · getItem dă null când nu e nimic
     salvat, deci verifici înainte să-l pui în câmp.
   GREȘEALĂ FRECVENTĂ: Salvezi cu setItem, dar uiți să pui textul înapoi în camp3.value la
     pornire: în Application rândul apare, însă câmpul rămâne gol după reîncărcare. */

console.log("--- Exercițiul 3 ---");

const camp3 = document.querySelector("#input-eveniment");
camp3.addEventListener("input", (event) => {
  localStorage.setItem("ciorna", event.target.value);
});
const ciorna3 = localStorage.getItem("ciorna");
if (ciorna3 !== null) {
  camp3.value = ciorna3;
}


/* ===== Exercițiul 4 · GHIDAT · 6 min · Local sau session? =====
   CE FACI: Pui câte o valoare în fiecare dulap și afli care rămâne într-un tab nou. Scrii
     direct în Console, nu în fișier.
   PAȘI:
   1. Deschide F12 și tab-ul Console.
   2. Scrie localStorage.setItem("limba", "română") și apasă Enter.
   3. Scrie sessionStorage.setItem("pas", "2") și apasă Enter.
   4. În Application, găsește câte un rând în Local Storage și în Session Storage.
   5. Deschide adresa paginii într-un tab nou și uită-te din nou în Application: care dulap
      a păstrat rândul?
   OUTPUT AȘTEPTAT:
     Tab-ul în care ai scris: Local Storage are rândul limba (română), Session Storage are rândul pas (2)
     Tab nou, aceeași adresă: Local Storage are încă limba; Session Storage e gol
   INDICIU: Aceleași funcții, alt dulap: localStorage sau sessionStorage · Console rulează o
     singură dată ce scrii; fișierul ar rula din nou în fiecare tab nou · Application are
     două liste: Local Storage și Session Storage.
   GREȘEALĂ FRECVENTĂ: Scrii sessionStorage.setItem în fișier, nu în Console: se rulează din
     nou în tab-ul nou și rândul apare și acolo, deci nu mai vezi diferența. */

console.log("--- Exercițiul 4 ---");

// Exercițiul 4 se face în Console (F12), nu în fișier. Comenzile:
// localStorage.setItem("limba", "română");
// sessionStorage.setItem("pas", "2");


/* ===== Exercițiul 5 · GHIDAT · 7 min · Evenimentul tău, ca text =====
   CE FACI: Salvezi un eveniment real, un obiect, în localStorage și îl citești înapoi.
   PAȘI:
   1. Scrie obiectul evenimentTau, cu cheile nume și locuri; alege un eveniment real al tău.
   2. Cu JSON.stringify, fă din el un text în text5 și afișează-l cu console.log.
   3. Salvează text5 în localStorage, sub cheia "eveniment".
   4. Citește cheia înapoi și desfă-o cu JSON.parse în citit5; afișează citit5.nume cu
      console.log.
   5. În Application, uită-te la rândul eveniment: textul are acolade și ghilimele.
   OUTPUT AȘTEPTAT:
     Console: {"nume":"Meetup React","locuri":25}
     Console: Meetup React
     Application → Local Storage → rândul eveniment, cu textul {"nume":"Meetup React","locuri":25}
   INDICIU: JSON.stringify(obiect) → obiectul devine text · localStorage păstrează doar text
     · JSON.parse(text) → textul devine din nou obiect, pe care poți scrie citit5.nume ·
     parse se pune în jurul lui getItem.
   GREȘEALĂ FRECVENTĂ: Citești cu getItem și scrii direct citit.nume: e text, nu obiect, iar
     rezultatul e undefined. Fără JSON.parse nu poți intra în el. */

console.log("--- Exercițiul 5 ---");

const evenimentTau = { nume: "Meetup React", locuri: 25 };
const text5 = JSON.stringify(evenimentTau);
console.log(text5);
localStorage.setItem("eveniment", text5);
const citit5 = JSON.parse(localStorage.getItem("eveniment"));
console.log(citit5.nume);


/* ===== Exercițiul 6 · SINGUR · 3 min · Salvează lista =====
   CE FACI: După fiecare schimbare, lista de evenimente se pune în dulap, ca text, sub cheia
     campusHub.
   PAȘI:
   1. Scrie funcția salveazaInBrowser(); funcțiile gata scrise o cheamă deja după fiecare
      schimbare.
   2. În ea, pune într-un obiect date lista și urmatorulId: { evenimente: evenimente,
      urmatorulId: urmatorulId }.
   3. Cu JSON.stringify, fă din date un text și salvează-l cu setItem, sub cheia
      "campusHub".
   4. Adaugă un eveniment, șterge altul și uită-te în Application la rândul campusHub.
   DATE DE PORNIRE: le găsești deja scrise sub acest bloc.
   OUTPUT AȘTEPTAT:
     La început: trei carduri, fiecare cu Rezervă, Editează și Șterge; Workshop CSS e tăiat
     Adaugi „Concert” → al patrulea card; în Application, rândul campusHub ține lista
     Ștergi un eveniment → textul din rând se schimbă
   INDICIU: un obiect poate ține și o listă, și un număr: { evenimente: evenimente,
     urmatorulId: urmatorulId } · JSON.stringify(date) → text ·
     localStorage.setItem("campusHub", text) · funcțiile adauga, sterge, salveaza și rezerva
     o cheamă deja.
   GREȘEALĂ FRECVENTĂ: Uiți urmatorulId în obiectul date: după încărcare, evenimentele noi
     ar primi id-uri deja folosite. */

console.log("--- Exercițiul 6 ---");
let evenimente = [
  { id: 1, nume: "Hackathon", locuri: 20, pret: 90 },
  { id: 2, nume: "Workshop CSS", locuri: 0, pret: 40 },
  { id: 3, nume: "Meetup", locuri: 35, pret: 0 },
];
let urmatorulId = 4;
let idInEditare = null;
const lista = document.querySelector("#lista-evenimente");
const camp = document.querySelector("#input-eveniment");
const descriere = document.querySelector("#descriere");
const contor = document.querySelector("#contor");
const butonAdauga = document.querySelector("#buton-adauga");

function creeazaButon(text, clasa, actiune, id, laClick) {
  const buton = document.createElement("button");
  buton.classList.add(clasa);
  buton.textContent = text;
  buton.setAttribute("data-actiune", actiune);
  buton.setAttribute("data-id", id);
  if (laClick) buton.addEventListener("click", laClick);
  return buton;
}

function creeazaCard(eveniment) {
  const card = document.createElement("div");
  card.classList.add("card");
  if (eveniment.locuri === 0) {
    card.classList.add("epuizat");
  }
  const actiuni = document.createElement("div");
  actiuni.classList.add("card-actions");
  if (eveniment.id === idInEditare) {
    const campNume = document.createElement("input");
    campNume.classList.add("card-input");
    campNume.value = eveniment.nume;
    card.appendChild(campNume);
    actiuni.appendChild(creeazaButon("Salvează", "btn-edit", "salveaza", eveniment.id, () => salveaza(eveniment.id, campNume.value)));
    actiuni.appendChild(creeazaButon("Anulează", "btn-delete", "anuleaza", eveniment.id, () => anuleaza()));
  } else {
    const titlu = document.createElement("h3");
    titlu.textContent = eveniment.nume;
    const info = document.createElement("p");
    info.textContent = eveniment.locuri + " locuri · " + eveniment.pret + " lei";
    card.appendChild(titlu);
    card.appendChild(info);
    actiuni.appendChild(creeazaButon("Rezervă", "btn-edit", "rezerva", eveniment.id, () => rezerva(eveniment.id)));
    actiuni.appendChild(creeazaButon("Editează", "btn-edit", "editeaza", eveniment.id));
    actiuni.appendChild(creeazaButon("Șterge", "btn-delete", "sterge", eveniment.id));
  }
  card.appendChild(actiuni);
  return card;
}

function randeaza() {
  lista.innerHTML = "";
  evenimente.forEach((eveniment) => lista.appendChild(creeazaCard(eveniment)));
  contor.textContent = evenimente.length;
}

function adauga() {
  if (camp.value === "") {
    descriere.textContent = "Scrie numele evenimentului";
    return;
  }
  evenimente.push({ id: urmatorulId, nume: camp.value, locuri: 30, pret: 50 });
  urmatorulId = urmatorulId + 1;
  descriere.textContent = "Eveniment adăugat!";
  camp.value = "";
  salveazaInBrowser();
  randeaza();
}

function sterge(id) {
  evenimente = evenimente.filter((eveniment) => eveniment.id !== id);
  salveazaInBrowser();
  randeaza();
}

function editeaza(id) {
  idInEditare = id;
  randeaza();
}

function salveaza(id, numeNou) {
  const index = evenimente.findIndex((eveniment) => eveniment.id === id);
  evenimente[index].nume = numeNou;
  idInEditare = null;
  salveazaInBrowser();
  randeaza();
}

function anuleaza() {
  idInEditare = null;
  randeaza();
}

function rezerva(id) {
  const index = evenimente.findIndex((eveniment) => eveniment.id === id);
  if (evenimente[index].locuri === 0) {
    descriere.textContent = "Nu mai sunt locuri";
    return;
  }
  evenimente[index].locuri = evenimente[index].locuri - 1;
  descriere.textContent = "Loc rezervat!";
  sessionStorage.setItem("ultimulRezervat", evenimente[index].nume);
  rezervari.push(evenimente[index].nume);
  localStorage.setItem("rezervari", JSON.stringify(rezervari));
  salveazaInBrowser();
  randeaza();
}

butonAdauga.addEventListener("click", adauga);

lista.addEventListener("click", (event) => {
  const actiune = event.target.getAttribute("data-actiune");
  const id = Number(event.target.getAttribute("data-id"));
  switch (actiune) {
    case "sterge":
      sterge(id);
      break;
    case "editeaza":
      editeaza(id);
      break;
    default:
      return;
  }
});

randeaza();

function salveazaInBrowser() {
  const date = { evenimente: evenimente, urmatorulId: urmatorulId };
  localStorage.setItem("campusHub", JSON.stringify(date));
}


/* ===== Exercițiul 7 · GHIDAT · 8 min · Încarcă lista =====
   CE FACI: La pornire, pagina citește lista din dulap și o desenează, ca să rămână după
     reîncărcare.
   PAȘI:
   1. Scrie funcția incarcaDinBrowser() și citește în ea cheia campusHub în text, cu
      getItem.
   2. Dacă text e null, oprește funcția cu return: nu e nimic salvat încă.
   3. Cu JSON.parse, fă din text obiectul date; pune date.evenimente în evenimente și
      date.urmatorulId în urmatorulId.
   4. Cheamă randeaza() în funcție, apoi cheamă funcția o dată, sub ea.
   5. Adaugă un eveniment și reîncarcă pagina: evenimentul rămâne.
   OUTPUT AȘTEPTAT:
     Adaugi „Concert” și reîncarci pagina (F5) → Concertul e tot în listă, iar contorul arată 4
     Ștergi Workshop CSS și reîncarci → rămâne șters
   INDICIU: getItem dă null când nimic nu e salvat: if (text === null) return; ·
     JSON.parse(text) → obiectul date · evenimente = date.evenimente; urmatorulId =
     date.urmatorulId; · randeaza() desenează lista nouă · funcția se cheamă o dată, la
     final, ca să ruleze la pornire.
   GREȘEALĂ FRECVENTĂ: Scrii funcția, dar uiți să o chemi, sub ea: salvarea merge, dar la
     pornire nu se întâmplă nimic și lista rămâne cea de start. */

console.log("--- Exercițiul 7 ---");

function incarcaDinBrowser() {
  const text = localStorage.getItem("campusHub");
  if (text === null) return;
  const date = JSON.parse(text);
  evenimente = date.evenimente;
  urmatorulId = date.urmatorulId;
  randeaza();
}
incarcaDinBrowser();


/* ===== Exercițiul 8 · SINGUR · 2 min · Ciorna se șterge =====
   CE FACI: După ce adaugi un eveniment, ciorna din câmp nu mai trebuie păstrată în dulap.
   PAȘI:
   1. Folosește butonAdauga din codul gata scris: nu declari nimic nou.
   2. Cu addEventListener, ascultă "click" pe butonAdauga, cu o funcție arrow.
   3. În funcție, șterge cheia "ciorna" cu localStorage.removeItem.
   4. Scrie un nume în câmp, apasă „Adaugă” și reîncarcă: câmpul e gol, iar rândul ciorna a
      dispărut din Application.
   OUTPUT AȘTEPTAT:
     Scrii „Meetup React” în câmp → în Application apare ciorna = Meetup React
     Click pe „Adaugă” → rândul ciorna dispare, câmpul se golește
     Reîncarci pagina → câmpul e gol, iar Meetup React e în listă
   INDICIU: butonAdauga.addEventListener("click", () => { ... }) ·
     localStorage.removeItem("cheie") → șterge un singur rând, după etichetă · pe același
     buton pot sta două ascultătoare: adauga și al tău.
   GREȘEALĂ FRECVENTĂ: Scrii localStorage.removeItem("ciorna") direct, în afara funcției:
     ciorna se șterge la fiecare încărcare a paginii, nu la click pe „Adaugă”. */

console.log("--- Exercițiul 8 ---");

butonAdauga.addEventListener("click", () => {
  localStorage.removeItem("ciorna");
});


/* ===== Exercițiul 9 · GHIDAT · 21 min · Temă luminoasă și întunecată, cu Copilot =====
   CE FACI: Un buton comută pagina între tema luminoasă și cea întunecată, iar alegerea
     rămâne după reîncărcare.
   PAȘI:
   1. În Copilot, modul Ask, cere întâi să-ți explice prefers-color-scheme și
      window.matchMedia, apoi tema cu variabile CSS.
   2. Verifică răspunsul; în evenimente.css pune culorile în variabile: :root luminoase,
      body.intunecat întunecate.
   3. Adaugă butonul buton-tema; la click comută clasa intunecat pe body și salvează cheia
      "tema" în localStorage.
   4. În temaSistem pune "intunecat" dacă window.matchMedia("(prefers-color-scheme:
      dark)").matches e true, altfel "luminos".
   5. Citește "tema" cu ?? temaSistem și pune clasa pe body; șterge rândul tema din
      Application și reîncarcă.
   OUTPUT AȘTEPTAT:
     Click pe „Schimbă tema” → pagina devine întunecată (fundal închis, text deschis); încă un click → înapoi în luminos
     Reîncarci pagina → rămâne tema aleasă; în Application → Local Storage, rândul tema are valoarea intunecat
     Ștergi rândul tema și reîncarci → pagina ia tema sistemului (întunecată, dacă sistemul e în modul întunecat)
   EXPLICAȚIE:
   - prefers-color-scheme este o setare a sistemului tău (Windows, telefon): modul luminos
     sau cel întunecat. Pagina o poate citi, ca să pornească în tema pe care o preferi tu.
   - window.matchMedia("(prefers-color-scheme: dark)") întreabă browserul: „sistemul e în
     modul întunecat?”. Partea .matches e răspunsul: true sau false.
   - De ce temaSistem: dacă utilizatorul n-a ales încă nimic (cheia tema lipsește, deci
     getItem dă null), pagina ia tema sistemului. Dacă a ales, rămâne alegerea lui, salvată
     în localStorage.
   - Cum testezi tema sistemului: în Application șterge rândul tema și reîncarcă, ca la
     prima vizită. Ca să vezi diferența, schimbă modul luminos/întunecat din setările
     sistemului.
   - Prompt de exemplu pentru Copilot, modul Ask. Context: pagina Campus Hub, cu HTML, CSS
     și JavaScript. Ce văd: culorile sunt scrise direct în CSS. Ce vreau: să-mi explici mai
     întâi cum funcționează prefers-color-scheme și window.matchMedia, apoi cum fac o temă
     luminoasă și una întunecată cu variabile CSS, comutată dintr-un buton și păstrată după
     reîncărcare. Limite: fără biblioteci, explică pașii, nu scrie tot codul.
   INDICIU: Prompt cu patru părți: context, ce vezi, ce vrei, limite (exemplu complet mai
     sus, la EXPLICAȚIE) · cer, citesc, verific, decid (sesiunea 17) · CSS: :root {
     --fundal: #f8fafc; --text: #333333; --card: #ffffff; } body.intunecat { --fundal:
     #111827; --text: #f9fafb; --card: #1f2937; } body { background-color: var(--fundal);
     color: var(--text); } .header, .card { background-color: var(--card); } ·
     document.body.classList.toggle("intunecat") → pune sau scoate clasa ·
     window.matchMedia("(prefers-color-scheme: dark)").matches → true sau false · if (...) {
     temaSistem = "intunecat"; } · localStorage.getItem("tema") ?? temaSistem → tema salvată
     de utilizator, sau a sistemului la prima deschidere.
   GREȘEALĂ FRECVENTĂ: Pui clasa intunecat pe alt element decât body: variabilele nu se
     aplică. Sau uiți setItem: tema se pierde la reîncărcare. Sau testezi tema sistemului
     fără să ștergi rândul tema: rămâne alegerea salvată. */

console.log("--- Exercițiul 9 ---");

const butonTema = document.querySelector("#buton-tema");
butonTema.addEventListener("click", () => {
  document.body.classList.toggle("intunecat");
  if (document.body.classList.contains("intunecat")) {
    localStorage.setItem("tema", "intunecat");
  } else {
    localStorage.setItem("tema", "luminos");
  }
});
let temaSistem = "luminos";
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  temaSistem = "intunecat";
}
const tema = localStorage.getItem("tema") ?? temaSistem;
if (tema === "intunecat") {
  document.body.classList.add("intunecat");
}

// În evenimente.css:
// :root { --fundal: #f8fafc; --text: #333333; --card: #ffffff; }
// body.intunecat { --fundal: #111827; --text: #f9fafb; --card: #1f2937; }
// body { background-color: var(--fundal); color: var(--text); }
// .header, .card { background-color: var(--card); }
//
// În evenimente.html, în <body>, sub antet:
// <button id="buton-tema" type="button">Schimbă tema</button>


/* ===== TEMĂ DE ACASĂ · Campus Hub își amintește rezervările =====
   CE FACI: Pagina ține minte, cât timp tab-ul e deschis, ultimul eveniment rezervat, iar în
     browser ține un jurnal al tuturor rezervărilor.
   PAȘI:
   1. În rezerva(id), după „Loc rezervat!”, salvează în sessionStorage, sub cheia
      "ultimulRezervat", numele evenimentului rezervat.
   2. La pornire, citește cheia "ultimulRezervat"; dacă nu e null, scrie în
      descriere.textContent „Ultimul rezervat: ” și numele.
   3. Scrie rezervari, un array: la pornire citește cheia "rezervari" din localStorage, cu
      operatorul nullish: ?? "[]" ca text de rezervă, și desfă-o cu JSON.parse.
   4. În rezerva(id), adaugă cu push numele evenimentului în rezervari, apoi salvează
      array-ul cu JSON.stringify, sub cheia "rezervari".
   5. Afișează în Console, la pornire, „Rezervări în total: ” și rezervari.length.
   6. În Application, uită-te la cheia rezervari din Local Storage și la ultimulRezervat din
      Session Storage.
   7. De studiat singur, pe javascript.info sau MDN: cookies. În Console scrie
      document.cookie = "tema=intunecat; max-age=60", apoi afișează document.cookie și caută
      rândul în Application → Cookies.
   8. Trimite lucrul pe GitHub: branch sesiunea-19, Pull Request unit în main.
   OUTPUT AȘTEPTAT (exemplu):
     Click pe „Rezervă” la Hackathon, apoi reîncarci → descrierea arată „Ultimul rezervat: Hackathon”
     Console: Rezervări în total: 1 (apoi 2, 3, la fiecare rezervare nouă)
     Tab nou, aceeași adresă → „Ultimul rezervat” nu mai apare, dar Console arată tot rezervările din jurnal
     Console: tema=intunecat; în Application → Cookies, rândul tema are coloana Expires, iar după un minut dispare
   INDICIU: Revezi: setItem și getItem (Exercițiile 1 și 2), sessionStorage (Exercițiul 4),
     JSON.stringify și JSON.parse (Exercițiul 5), ?? (Exercițiul 2), if cu null (Exercițiile
     3 și 7) · rezervari trebuie să existe înainte de rezerva, ca să poți face push în ea ·
     textul de rezervă pentru un array gol: „[]” · rezerva e deja în codul gata scris ·
     cookies: document.cookie = "nume=valoare; max-age=60" adaugă un cookie care expiră în
     60 de secunde, iar document.cookie citit dă toate cookie-urile ca un singur text;
     compară-l cu localStorage: ce are în plus? (expirare, trimis la server).
   GREȘEALĂ FRECVENTĂ: Citești rezervari cu getItem și o folosești direct ca array: e text,
     iar rezervari.push nu există. Fără JSON.parse nu poți adăuga în ea. */

console.log("--- Tema de acasă ---");
const rezervari = JSON.parse(localStorage.getItem("rezervari") ?? "[]");
const ultimulRezervat = sessionStorage.getItem("ultimulRezervat");
if (ultimulRezervat !== null) {
  descriere.textContent = "Ultimul rezervat: " + ultimulRezervat;
}
console.log("Rezervări în total: " + rezervari.length);

// Cookies, de studiat singur, în Console:
// document.cookie = "tema=intunecat; max-age=60";
// console.log(document.cookie);
