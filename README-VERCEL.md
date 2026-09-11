# Kanto in tasca — versione indipendente da Grok

Questa versione è stata preparata per essere pubblicata su Vercel tramite GitHub.

## Cosa è stato cambiato

- Rimossi i collegamenti specifici all'ambiente Grok/grok.me e al relativo preview bridge.
- Rimossa l'autenticazione Grok non utilizzata dall'app.
- Rimossi i componenti server/database non utilizzati: l'app salva i progressi nel browser con Zustand/localStorage.
- Aggiunto `vercel.json` con configurazione TanStack Start + Nitro per Vercel.
- Aggiunto manifest PWA standard in `public/manifest.webmanifest`.
- Conservate pagine, dati, grafica, navigazione e progressi dell'app.

## Pubblicazione su Vercel

1. Carica questa cartella in un repository GitHub.
2. Vai su Vercel e scegli **Add New → Project**.
3. Importa il repository GitHub.
4. Lascia che Vercel riconosca il progetto. Il repository contiene già `vercel.json`.
5. Deploy.

Non servono variabili d'ambiente per la versione attuale.

## Nota sui progressi

I progressi sono salvati nel `localStorage` del dispositivo/browser. Quindi non serve un database, ma i progressi non vengono sincronizzati automaticamente tra dispositivi diversi.

Se in futuro vuoi login, sincronizzazione cloud o condivisione dei progressi tra iPhone e PC, sarà necessario aggiungere un database persistente e un sistema di autenticazione indipendente da Grok.
