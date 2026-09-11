import type { Location } from "./types";

export const LOCATIONS_2: Location[] = [
  {
    id: "grotta-diglett",
    name: "Grotta Diglett",
    kind: "cave",
    part: 4,
    blurb: "Scorciatoia verso Plumbeopoli. Dugtrio e Chansey.",
    steps: [
      {
        text: "Misty vi accompagna all’ingresso. La grotta è piena di Diglett; con fortuna escono Dugtrio. Chansey è Special Spawn.",
      },
      {
        text: "L’uscita sbuca sul Percorso 2. Lì un assistente di Oak insegna Bagliore al Compagno. Trace vi consiglia il Tunnel Roccioso, via Percorso 9.",
      },
      {
        text: "Prima: con Fendente prendete Pietrafoglia sul Percorso 2, MT11 Fuocofatuo a Smeraldopoli e Ambra Antica al museo di Plumbeopoli.",
      },
    ],
    items: [],
    encounters: [
      { name: "Zubat", place: "Grotta", levels: "13–18" },
      { name: "Diglett", place: "Grotta", levels: "13–18" },
      { name: "Dugtrio", place: "Grotta", levels: "13–18" },
      { name: "Chansey", place: "Special spawn", levels: "13–18", special: true },
    ],
    trainers: [],
  },
  {
    id: "percorso-9-10",
    name: "Percorsi 9 e 10",
    kind: "route",
    part: 4,
    blurb: "Lorelei ferma il Team Rocket. Poi il Tunnel Roccioso.",
    steps: [
      {
        text: "Il Percorso 9 (serve Fendente) ha evoluzioni di primo stadio: Raticate, Nidorina, Nidorino, Fearow.",
      },
      {
        text: "Al Centro Pokémon del Percorso 10 quattro reclute Rocket vi circondano. Interviene Lorelei dei Super4, in sella a Lapras, e li mette in fuga.",
      },
      {
        text: "Prima del tunnel sconfiggete la Coach Giselda: vi dona la MT13 Breccia. Con Surf, più avanti, qui ci sono Dratini e Dragonair.",
      },
    ],
    items: [
      { name: "Superpozione", where: "Percorso 9, sud-ovest" },
      { name: "Superpozione", where: "Percorso 9, nord del Campeggiatore" },
      { name: "Poké Ball ×5", where: "Percorso 9, sud-ovest del Marmocchio" },
      { name: "Superpozione", where: "Percorso 10, nord-est dell’area recintata" },
      { name: "Profumo invito", where: "Percorso 10, nord" },
      { name: "MT13 Breccia", where: "Donata dalla Coach Giselda" },
      { name: "Pietratuono", where: "Est della Centrale Elettrica" },
      { name: "Mega Ball ×3", where: "Sud, ovest dell’entrata del tunnel" },
    ],
    encounters: [
      { name: "Raticate", place: "Erba", levels: "17–23" },
      { name: "Nidorina", place: "Erba", levels: "17–23" },
      { name: "Nidorino", place: "Erba", levels: "17–23" },
      { name: "Krabby", place: "Erba, Percorso 10", levels: "18–23" },
      { name: "Chansey", place: "Special spawn", levels: "17–23", special: true },
      { name: "Dratini", place: "Surf, Percorso 10", levels: "18–23" },
      { name: "Dragonair", place: "Surf, Percorso 10", levels: "18–23" },
    ],
    trainers: [
      {
        klass: "Coach",
        name: "Giselda",
        reward: "2600£",
        team: [
          { name: "Poliwhirl", level: 25 },
          { name: "Primeape", level: 26 },
        ],
      },
      {
        klass: "Recluta Team Rocket",
        name: "",
        reward: "616£",
        team: [{ name: "Raticate", level: 22 }],
      },
    ],
  },
  {
    id: "tunnel-roccioso",
    name: "Tunnel Roccioso",
    kind: "cave",
    part: 4,
    blurb: "Machop, Kangaskhan, Cubone. Uscita su Lavandonia.",
    steps: [
      {
        text: "Rifornitevi: gli allenatori sono tosti. Selvatici di valore: Machop, Graveler, Rhyhorn, Kangaskhan. Charmander è Special Spawn.",
      },
      {
        text: "Serve Bagliore nelle zone buie. L’uscita sud è il Percorso 10 verso Lavandonia: ancora tre allenatori e siete in città.",
      },
    ],
    items: [
      { name: "Repellente", where: "Piano terra, nord-est dell’entrata nord" },
      { name: "Fune di Fuga", where: "Piano terra, sud-est della sezione nord" },
      { name: "Poké Ball", where: "Uomo vicino alle scale" },
      { name: "Polvostella", where: "Piano terra, nord della seconda stanza" },
      { name: "Perla", where: "Piano terra, angolo sud-ovest" },
      { name: "Revitalizzante", where: "Piano −1, angolo sud-ovest" },
      { name: "Supercolpo", where: "Piano −1, nord-est del Cinturanera" },
      { name: "Mega Ball ×3", where: "Piano −1, angolo nord-est" },
      { name: "Cura Totale", where: "Piano −1, sezione nord-est" },
    ],
    encounters: [
      { name: "Zubat", place: "Grotta", levels: "18–23" },
      { name: "Golbat", place: "Grotta", levels: "18–23" },
      { name: "Machop", place: "Grotta", levels: "18–23" },
      { name: "Geodude", place: "Grotta", levels: "18–23" },
      { name: "Graveler", place: "Grotta", levels: "18–23" },
      { name: "Onix", place: "Grotta", levels: "18–23" },
      { name: "Cubone", place: "Grotta", levels: "18–23" },
      { name: "Rhyhorn", place: "Grotta", levels: "18–23" },
      { name: "Kangaskhan", place: "Grotta", levels: "18–23" },
      { name: "Charmander", place: "Special spawn", levels: "18–23", special: true },
    ],
    trainers: [
      { klass: "Pokéfanatico", name: "Ashton", reward: "1104£, 3 Poké Ball", team: [{ name: "Slowpoke", level: 23 }] },
      { klass: "Pokéfanatico", name: "Gabriele", reward: "1104£, 3 Poké Ball", team: [{ name: "Kangaskhan", level: 23 }] },
      {
        klass: "Fantallenatrice",
        name: "Clementina",
        reward: "2500£, 5 Ultra Ball",
        team: [
          { name: "Vulpix", level: 24 },
          { name: "Kadabra", level: 25 },
        ],
      },
    ],
  },
  {
    id: "lavandonia",
    name: "Lavandonia",
    kind: "town",
    part: 4,
    blurb: "Cubone entra in torre. Scambio Diglett di Alola.",
    steps: [
      {
        text: "Vedete Cubone entrare nella Torre Pokémon, seguito da Trace. Prima andate al Centro: una Bellezza scambia Diglett per Diglett di Alola.",
      },
      {
        text: "La torre è inaccessibile dopo il primo piano finché non avete la Spettrosonda, nel Rifugio Rocket di Azzurropoli.",
      },
    ],
    items: [{ name: "Mega Ball ×20", where: "Uomo vicino al Percorso 8" }],
    encounters: [
      { name: "Diglett (Alola)", place: "Scambio con Diglett", levels: "25", gift: true },
    ],
    trainers: [],
  },
  {
    id: "torre-pokemon",
    name: "Torre Pokémon",
    kind: "building",
    part: 4,
    blurb: "Trace, uno spettro e il piccolo Cubone.",
    steps: [
      {
        text: "Al piano terra un’anziana vi dona un completo formale. Al primo piano Trace vi sfida: il suo Eevee è ora Jolteon (Pikachu) o Raichu (Eevee).",
      },
      {
        text: "Cubone scappa per lo scontro. La Coach Naoko, sconfitta, vi dà 5 Caramelle Pikachu o Eevee.",
      },
      {
        text: "Al secondo piano uno spettro fa fuggire Trace. Servirà la Spettrosonda. Uscite a ovest sul Percorso 8: Jessie e James parlano di Giovanni e di Mr. Fuji.",
      },
    ],
    items: [
      { name: "Completo formale", where: "Anziana, piano terra" },
      { name: "Caramelle Pikachu ×5", where: "Coach Naoko", version: "lgp" },
      { name: "Caramelle Eevee ×5", where: "Coach Naoko", version: "lge" },
    ],
    encounters: [
      { name: "Gastly", place: "Torre (dopo Spettrosonda)", levels: "21–26" },
      { name: "Haunter", place: "Torre (dopo Spettrosonda)", levels: "21–26" },
      { name: "Cubone", place: "Torre", levels: "21–26" },
    ],
    trainers: [
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "2240£",
        version: "lgp",
        boss: "rival",
        team: [
          { name: "Pidgeotto", level: 27 },
          { name: "Gloom", level: 27 },
          { name: "Jolteon", level: 28 },
        ],
      },
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "2240£",
        version: "lge",
        boss: "rival",
        team: [
          { name: "Pidgeotto", level: 27 },
          { name: "Gloom", level: 27 },
          { name: "Raichu", level: 28 },
        ],
      },
      { klass: "Coach", name: "Naoko", reward: "2800£", team: [{ name: "Geodude", level: 28 }] },
    ],
  },
  {
    id: "percorso-7-8",
    name: "Percorsi 7 e 8",
    kind: "route",
    part: 4,
    blurb: "Da Lavandonia ad Azzurropoli, via sotterranea.",
    steps: [
      {
        text: "Il Percorso 8 a ovest porta alla Via Sotterranea Est. Dall’altra parte il Percorso 7 sbuca ad Azzurropoli.",
      },
      {
        text: "La palestra di Azzurropoli è chiusa finché non sgomberate il Rifugio Rocket sotto la Sala Giochi.",
      },
    ],
    items: [],
    encounters: [
      { name: "Vulpix", place: "Erba, Percorso 7–8", levels: "22–27", version: "lgp" },
      { name: "Growlithe", place: "Erba, Percorso 7–8", levels: "22–27", version: "lge" },
      { name: "Meowth", place: "Erba", levels: "22–27", version: "lge" },
      { name: "Abra", place: "Erba", levels: "22–27" },
      { name: "Kadabra", place: "Erba", levels: "22–27" },
    ],
    trainers: [],
  },
  {
    id: "azzurropoli",
    name: "Azzurropoli",
    kind: "town",
    part: 4,
    blurb: "Sala Giochi, palestra di Erika e il pulsante dietro al poster.",
    steps: [
      {
        text: "La palestra è inaccessibile: il Team Rocket occupa la Sala Giochi. Entrate e ascoltate Jessie e James: c’è un pulsante segreto dietro un poster.",
      },
      {
        text: "Il poster è coperto da una recluta. Sconfiggetela, premete il pulsante, scendete nel Rifugio.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      {
        klass: "Recluta Team Rocket",
        name: "",
        reward: "812£",
        team: [{ name: "Raticate", level: 29 }],
      },
    ],
  },
  {
    id: "rifugio-rocket",
    name: "Rifugio Rocket",
    kind: "building",
    part: 5,
    blurb: "Spinner, Chiave ascensore, Archer e Giovanni.",
    steps: [
      {
        text: "Una recluta a sud del −1 vi dà il completo Rocket. I labirinti spinner: seguite le frecce fino a un ostacolo o alla mattonella d’arresto.",
      },
      {
        text: "Al −4 una recluta lancia la Chiave ascensore sul muro. Spostate la sedia e mandate Pikachu/Eevee nel condotto per recuperarla.",
      },
      {
        text: "Al −3: Jessie e James (Weezing e Arbok), poi Archer, poi Giovanni. Cubone è lì. Sconfitto Giovanni ottenete la Spettrosonda.",
      },
      {
        text: "Fuori, un Tecnico del Suono insegna Solcanubi al Compagno: volo rapido tra le città visitate. Tornate a Lavandonia con Trace.",
      },
    ],
    items: [
      { name: "Completo Rocket", where: "Piano −1, recluta a sud delle scale" },
      { name: "Ultra Ball ×5", where: "Piano −1, stanza ovest" },
      { name: "Caramella potenza ×3", where: "Piano −1, sotto il tavolo stanza est" },
      { name: "MT05 Riposo", where: "Piano −2, nord del labirinto spinner" },
      { name: "MT20 Neropulsar", where: "Piano −3, sud delle scale" },
      { name: "Caramella Rara", where: "Piano −3, est del labirinto" },
      { name: "Chiave ascensore", where: "Piano −4, condotto d’aria con il Compagno" },
      { name: "Revitalizzante Max", where: "Piano −4, dietro la scrivania di Giovanni" },
      { name: "Spettrosonda", where: "Donata da Giovanni" },
    ],
    encounters: [],
    trainers: [
      {
        klass: "Team Rocket",
        name: "Jessie e James",
        reward: "3072£",
        boss: "rocket",
        team: [
          { name: "Weezing", level: 32 },
          { name: "Arbok", level: 32 },
        ],
      },
      {
        klass: "Generale",
        name: "Archer",
        reward: "3300£",
        boss: "rocket",
        team: [
          { name: "Weezing", level: 33 },
          { name: "Golbat", level: 33 },
        ],
      },
      {
        klass: "Capo del Team Rocket",
        name: "Giovanni",
        reward: "5600£",
        boss: "rocket",
        team: [
          { name: "Persian", level: 35 },
          { name: "Rhyhorn", level: 35 },
        ],
      },
    ],
  },
  {
    id: "torre-pokemon-2",
    name: "Torre Pokémon — ritorno",
    kind: "building",
    part: 5,
    blurb: "Spettrosonda, Marowak e Mr. Fuji.",
    steps: [
      {
        text: "Con Trace entrate per salvare Cubone. La Spettrosonda rivela gli spettri: sono Gastly e Haunter.",
      },
      {
        text: "In cima lo spettro della madre di Cubone, un Marowak, vi affronta. Dopo la lotta Mr. Fuji è libero. Vi dona il Flauto Poké, che sveglia i Snorlax.",
      },
    ],
    items: [
      { name: "Attacco X", where: "Primo piano, nord-est della scala" },
      { name: "Flauto Poké", where: "Donato da Mr. Fuji" },
    ],
    encounters: [
      { name: "Gastly", place: "Torre", levels: "21–31" },
      { name: "Haunter", place: "Torre", levels: "21–31" },
      { name: "Cubone", place: "Torre", levels: "21–31" },
      { name: "Marowak", place: "Boss, piano alto", levels: "30", special: true },
    ],
    trainers: [
      {
        klass: "Spettro",
        name: "Marowak",
        reward: "—",
        boss: "legend",
        team: [{ name: "Marowak", level: 30 }],
      },
    ],
  },
  {
    id: "palestra-azzurropoli",
    name: "Palestra Azzurropoli",
    kind: "gym",
    part: 5,
    blurb: "Erika, tipo Erba. Fuoco o Veleno.",
    gym: {
      leader: "Erika",
      type: "Erba",
      badge: "Medaglia Arcobaleno",
      tm: "MT12 Megassorbimento",
      tip: "Labirinto di piante. Fuoco (Growlithe, Vulpix, Charmander) o Veleno coprono tutto il team. Vileplume è il più tosto.",
    },
    steps: [
      {
        text: "Dopo il Rifugio la palestra riapre. Attraversate il giardino e sfidate Erika.",
      },
      {
        text: "Con la Medaglia Arcobaleno i Pokémon fino al liv. 43 obbediscono. Poi Percorso 16, verso Fucsiapoli, dopo aver svegliato Snorlax con il Flauto Poké.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      {
        klass: "Capopalestra",
        name: "Erika",
        reward: "5440£",
        boss: "gym",
        team: [
          { name: "Tangela", level: 33 },
          { name: "Weepinbell", level: 33 },
          { name: "Vileplume", level: 34 },
        ],
      },
    ],
  },
  {
    id: "percorso-16-18",
    name: "Percorsi 16, 17 e 18",
    kind: "route",
    part: 5,
    blurb: "Snorlax, Ciclovia e discesa su Fucsiapoli.",
    steps: [
      {
        text: "Sul Percorso 16 un Snorlax blocca la Ciclovia. Suonate il Flauto Poké, sconfiggetelo e catturatelo (ha Aura). Ce n’è un altro sul Percorso 12.",
      },
      {
        text: "La Ciclovia (Percorso 17) è in discesa verso Fucsiapoli. Molti ciclisti e incontri in cielo.",
      },
    ],
    items: [],
    encounters: [
      { name: "Snorlax", place: "Percorso 16, Flauto Poké", levels: "34", special: true },
      { name: "Doduo", place: "Erba / cielo", levels: "31–36" },
      { name: "Dodrio", place: "Erba / cielo", levels: "31–36" },
      { name: "Raticate", place: "Erba", levels: "31–36" },
      { name: "Fearow", place: "Cielo", levels: "31–36" },
    ],
    trainers: [],
  },
  {
    id: "fucsiapoli",
    name: "Fucsiapoli",
    kind: "town",
    part: 5,
    blurb: "Warden, pala, palestra di Koga.",
    steps: [
      {
        text: "Il Warden ha perso i denti. Recuperateli e vi insegna Scivolacqua (Surf) al Compagno, più avanti dopo la pala d’oro.",
      },
      {
        text: "La palestra di Koga è un labirinto di muri invisibili. Seguite i passi o usate gli angoli.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [],
  },
  {
    id: "palestra-fucsiapoli",
    name: "Palestra Fucsiapoli",
    kind: "gym",
    part: 5,
    blurb: "Koga, tipo Veleno. Psico e Terra.",
    gym: {
      leader: "Koga",
      type: "Veleno",
      badge: "Medaglia Anima",
      tm: "MT52 Fangobomba",
      tip: "Muri invisibili. Psico (Kadabra) o Terra (Dugtrio, Fossa) coprono Weezing, Muk, Golbat e Venomoth. Attenzione a Velenpuntura e Riposo.",
    },
    steps: [
      {
        text: "Attraversate il labirinto invisibile. Koga usa Veleno puro: portate cura stato.",
      },
      {
        text: "Medaglia Anima in tasca, uscite a est sul Percorso 15 verso Zafferanopoli.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      {
        klass: "Capopalestra",
        name: "Koga",
        reward: "7040£",
        boss: "gym",
        team: [
          { name: "Weezing", level: 43 },
          { name: "Muk", level: 43 },
          { name: "Golbat", level: 43 },
          { name: "Venomoth", level: 44 },
        ],
      },
    ],
  },
  {
    id: "percorso-15-12",
    name: "Percorsi 15 → 12",
    kind: "route",
    part: 6,
    blurb: "Tauros, Scyther/Pinsir, MT Surf e il secondo Snorlax.",
    steps: [
      {
        text: "Nel varco del Percorso 15, se avete 50 specie nel Pokédex, un assistente di Oak vi dà il completo assistente.",
      },
      {
        text: "Con Fendente a nord: Coach Paolina (MT31 Fuocopugno) e più avanti MT47 Surf. Tauros è comune; Scyther è Let’s Go Pikachu, Pinsir Let’s Go Eevee.",
      },
      {
        text: "Percorsi 14, 13 e 12: tanti allenatori. Sul Percorso 12 il secondo Snorlax. Svegliatelo col Flauto. A nord, Zafferanopoli.",
      },
    ],
    items: [
      { name: "MT31 Fuocopugno", where: "Coach Paolina, Percorso 15" },
      { name: "MT47 Surf", where: "Percorso 15, nord (Fendente)" },
      { name: "Ultra Ball ×3", where: "Percorso 15, sud-est" },
      { name: "Completo assistente", where: "Varco, 50 specie nel Pokédex" },
      { name: "Iperpozione", where: "Percorso 14, cespuglio nord-est" },
      { name: "Pepita", where: "Percorso 14, rialzo a sud dell’erba" },
    ],
    encounters: [
      { name: "Tauros", place: "Erba", levels: "33–38" },
      { name: "Scyther", place: "Erba", levels: "33–38", version: "lgp" },
      { name: "Pinsir", place: "Erba", levels: "33–38", version: "lge" },
      { name: "Venomoth", place: "Erba", levels: "33–38" },
      { name: "Chansey", place: "Special spawn", levels: "33–38", special: true },
      { name: "Snorlax", place: "Percorso 12, Flauto Poké", levels: "34", special: true },
    ],
    trainers: [
      {
        klass: "Coach",
        name: "Paolina",
        reward: "4100£",
        team: [
          { name: "Machoke", level: 40 },
          { name: "Magmar", level: 41 },
        ],
      },
    ],
  },
  {
    id: "zafferanopoli",
    name: "Zafferanopoli",
    kind: "town",
    part: 6,
    blurb: "Silph S.p.A. occupata, Dojo Karate, palestra di Sabrina.",
    steps: [
      {
        text: "La città è in subbuglio: il Team Rocket ha occupato la Silph. La palestra di Sabrina resta chiusa finché non li cacciate.",
      },
      {
        text: "Al Dojo Karate, se vincete, scegliete Hitmonlee o Hitmonchan.",
      },
    ],
    items: [],
    encounters: [
      { name: "Hitmonlee", place: "Premio Dojo (scelta)", levels: "30", gift: true },
      { name: "Hitmonchan", place: "Premio Dojo (scelta)", levels: "30", gift: true },
    ],
    trainers: [],
  },
  {
    id: "silph-spa",
    name: "Silph S.p.A.",
    kind: "building",
    part: 6,
    blurb: "Lapras, Trace, Jessie & James, Giovanni e il Master Ball.",
    steps: [
      {
        text: "Molti piani, porte e teletrasporti. Un dipendente vi dona Lapras. Raccogliete la Chiave scheda per gli ascensori.",
      },
      {
        text: "Trace vi sfida a metà edificio. Poi Jessie e James, quindi Giovanni al piano del presidente.",
      },
      {
        text: "Sconfitto Giovanni, il presidente vi dona la Master Ball. Il Team Rocket lascia l’edificio. Fuori, Sabrina riapre la palestra.",
      },
    ],
    items: [
      { name: "Lapras", where: "Dipendente Silph, piano intermedio" },
      { name: "Master Ball", where: "Presidente, dopo Giovanni" },
    ],
    encounters: [{ name: "Lapras", place: "Regalo", levels: "34", gift: true }],
    trainers: [
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "3960£",
        version: "lgp",
        boss: "rival",
        team: [
          { name: "Pidgeotto", level: 35 },
          { name: "Gloom", level: 35 },
          { name: "Marowak", level: 35 },
          { name: "Jolteon", level: 37 },
        ],
      },
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "3960£",
        version: "lge",
        boss: "rival",
        team: [
          { name: "Pidgeotto", level: 35 },
          { name: "Gloom", level: 35 },
          { name: "Marowak", level: 35 },
          { name: "Raichu", level: 37 },
        ],
      },
      {
        klass: "Capo del Team Rocket",
        name: "Giovanni",
        reward: "7200£",
        boss: "rocket",
        team: [
          { name: "Nidorino", level: 37 },
          { name: "Kangaskhan", level: 37 },
          { name: "Rhyhorn", level: 37 },
          { name: "Nidoqueen", level: 39 },
        ],
      },
    ],
  },
  {
    id: "palestra-zafferanopoli",
    name: "Palestra Zafferanopoli",
    kind: "gym",
    part: 6,
    blurb: "Sabrina, tipo Psico. Buio, Coleottero, Spettro.",
    gym: {
      leader: "Sabrina",
      type: "Psico",
      badge: "Medaglia Palude",
      tm: "MT33 Calmamente",
      tip: "Teletrasporti tra stanze. Coleottero (Scyther) o Spettro (Haunter) fanno male. Alakazam è velocissimo: colpitelo per primi.",
    },
    steps: [
      {
        text: "Seguite i teletrasporti fino a Sabrina. Con la Medaglia Palude i Pokémon fino al liv. 50 obbediscono.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      {
        klass: "Capopalestra",
        name: "Sabrina",
        reward: "7040£",
        boss: "gym",
        team: [
          { name: "Mr. Mime", level: 43 },
          { name: "Jynx", level: 43 },
          { name: "Alakazam", level: 44 },
        ],
      },
    ],
  },
];
