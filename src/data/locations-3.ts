import type { Location } from "./types";

export const LOCATIONS_3: Location[] = [
  {
    id: "centrale-elettrica",
    name: "Centrale Elettrica",
    kind: "building",
    part: 7,
    blurb: "Electabuzz, Electrode-trappola e Zapdos.",
    steps: [
      {
        text: "Con Scivolacqua sul Percorso 10 attraversate il fiume (Dratini e Dragonair). Un Pokéfanatico e poi l’edificio abbandonato.",
      },
      {
        text: "Poké Ball a terra = Electrode selvatici. La Coach Alison, sconfitta, vi dà 5 Caramelle Rare.",
      },
      {
        text: "Nell’ultima stanza: Zapdos, liv. 50, Aura su tutte le statistiche. Mosse: Fulmine, Perforbecco, Agilità, Schermoluce. Avete 5 minuti per indebolirlo e catturarlo. Terra è il tipo giusto.",
      },
    ],
    items: [
      { name: "Revitalizzante Max", where: "Nord-est dell’entrata" },
      { name: "Caramella Rara ×5", where: "Coach Alison" },
      { name: "Difesa Speciale X", where: "Sud-est della Coach" },
      { name: "Caramella Rara", where: "Stanza sud-ovest" },
      { name: "Pozione Max", where: "Area centrale" },
      { name: "MT38 Tuono", where: "Sud-est" },
      { name: "Pietratuono", where: "Stanza nord-est" },
    ],
    encounters: [
      { name: "Magnemite", place: "Camminando", levels: "37–42" },
      { name: "Magneton", place: "Camminando", levels: "37–42" },
      { name: "Voltorb", place: "Camminando", levels: "37–42" },
      { name: "Electrode", place: "Camminando / trappole", levels: "37–42" },
      { name: "Electabuzz", place: "Camminando", levels: "37–42" },
      { name: "Grimer", place: "Camminando", levels: "37–42", version: "lgp" },
      { name: "Muk", place: "Camminando", levels: "37–42", version: "lgp" },
      { name: "Koffing", place: "Camminando", levels: "37–42", version: "lge" },
      { name: "Weezing", place: "Camminando", levels: "37–42", version: "lge" },
      { name: "Chansey", place: "Special spawn", levels: "37–42", special: true },
      { name: "Zapdos", place: "Stanza finale, 5 minuti", levels: "50", special: true },
    ],
    trainers: [
      {
        klass: "Coach",
        name: "Alison",
        reward: "4500£",
        team: [
          { name: "Omastar", level: 44 },
          { name: "Kabutops", level: 44 },
          { name: "Aerodactyl", level: 45 },
        ],
      },
      {
        klass: "Leggendario",
        name: "Zapdos",
        reward: "—",
        boss: "legend",
        team: [{ name: "Zapdos", level: 50 }],
      },
    ],
  },
  {
    id: "percorso-19-20",
    name: "Percorsi 19 e 20",
    kind: "sea",
    part: 7,
    blurb: "Surf verso le Isole Spumarine. Lapras selvatico.",
    steps: [
      {
        text: "Da Fucsiapoli a sud: mare, nuotatori e Bellezze. Special Spawn: Lapras.",
      },
      {
        text: "Il Percorso 20 porta alle Isole Spumarine e poi all’Isola Cannella.",
      },
    ],
    items: [
      { name: "Cura Totale", where: "Percorso 19, spiaggia tra i due rialzi" },
      { name: "Revitalizzante", where: "Percorso 19, roccia sud-est" },
      { name: "Squama Cuore", where: "Entrata sud Isole Spumarine" },
      { name: "Ultra Ball ×3", where: "Percorso 20, vicino all’Avicoltore" },
      { name: "Repellente Max", where: "Isoletta vicino a Isola Cannella" },
    ],
    encounters: [
      { name: "Tentacool", place: "Surf", levels: "37–42" },
      { name: "Tentacruel", place: "Surf", levels: "37–42" },
      { name: "Staryu", place: "Surf", levels: "37–42" },
      { name: "Starmie", place: "Surf", levels: "37–42" },
      { name: "Gyarados", place: "Surf", levels: "37–42" },
      { name: "Lapras", place: "Special spawn", levels: "37–42", special: true },
    ],
    trainers: [],
  },
  {
    id: "isole-spumarine",
    name: "Isole Spumarine",
    kind: "cave",
    part: 7,
    blurb: "Correnti, Seel, e Articuno nel cuore della grotta.",
    steps: [
      {
        text: "Labirinto di correnti: le piastre vi spingono in una direzione. Esplorate tutti i piani per oggetti e Seel/Dewgong.",
      },
      {
        text: "Nel fondo: Articuno, liv. 50, Aura. Ghiaccio/Volante, debole a Fuoco, Roccia, Elettro, Acciaio. 5 minuti. Poi uscite verso Isola Cannella.",
      },
    ],
    items: [],
    encounters: [
      { name: "Zubat", place: "Grotta", levels: "37–42" },
      { name: "Golbat", place: "Grotta", levels: "37–42" },
      { name: "Psyduck", place: "Grotta", levels: "37–42" },
      { name: "Golduck", place: "Grotta", levels: "37–42" },
      { name: "Seel", place: "Grotta", levels: "37–42" },
      { name: "Dewgong", place: "Grotta", levels: "37–42" },
      { name: "Slowpoke", place: "Grotta", levels: "37–42" },
      { name: "Slowbro", place: "Grotta", levels: "37–42" },
      { name: "Articuno", place: "Sala interiore, 5 minuti", levels: "50", special: true },
    ],
    trainers: [
      {
        klass: "Leggendario",
        name: "Articuno",
        reward: "—",
        boss: "legend",
        team: [{ name: "Articuno", level: 50 }],
      },
    ],
  },
  {
    id: "isola-cannella",
    name: "Isola Cannella",
    kind: "town",
    part: 7,
    blurb: "Villa Pokémon, fossili da far rivivere, palestra di Blaine.",
    steps: [
      {
        text: "In laboratorio, con l’Ambra Antica o il fossile del Monte Luna, fate rivivere Aerodactyl, Omanyte o Kabuto.",
      },
      {
        text: "Villa Pokémon: oggetti e un Ditto. Poi la palestra, un quiz su domande Pokémon: le risposte sbagliate vi teletrasportano all’ingresso.",
      },
    ],
    items: [],
    encounters: [
      { name: "Omanyte", place: "Fossile Helix, laboratorio", levels: "44", gift: true },
      { name: "Kabuto", place: "Fossile Dome, laboratorio", levels: "44", gift: true },
      { name: "Aerodactyl", place: "Ambra Antica, laboratorio", levels: "44", gift: true },
    ],
    trainers: [],
  },
  {
    id: "palestra-isola-cannella",
    name: "Palestra Isola Cannella",
    kind: "gym",
    part: 7,
    blurb: "Blaine, tipo Fuoco. Quiz e Acqua/Roccia.",
    gym: {
      leader: "Blaine",
      type: "Fuoco",
      badge: "Medaglia Vulcano",
      tm: "MT46 Fuocobomba",
      tip: "Rispondete alle domande per avanzare. Acqua (Starmie, Vaporeon, Lapras) o Roccia/Terra spengono Arcanine. Attenzione a Giornodisole.",
    },
    steps: [
      {
        text: "Quiz corretto fino a Blaine. Medaglia Vulcano: i Pokémon fino al liv. 55 obbediscono. Fuori, Trace vi invita a seguirlo a Smeraldopoli.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      {
        klass: "Capopalestra",
        name: "Blaine",
        reward: "7680£",
        boss: "gym",
        team: [
          { name: "Growlithe", level: 47 },
          { name: "Ponyta", level: 47 },
          { name: "Rapidash", level: 47 },
          { name: "Arcanine", level: 48 },
        ],
      },
    ],
  },
  {
    id: "percorso-21",
    name: "Percorso 21",
    kind: "sea",
    part: 8,
    blurb: "Mare verso Biancavilla. Tangela e le evoluzioni finali Erba.",
    steps: [
      {
        text: "A nord verso casa. Coach Melanie dona la MT35 Gelopugno. Nell’erba vicino a Biancavilla: Vileplume (Pikachu), Victreebel (Eevee) e Tangela.",
      },
      {
        text: "A Biancavilla tornate da Oak. Blu vi ringrazia per la Silph e vi dà Pietrachiave, Venusaurite, Charizardite X, Charizardite Y e Blastoisite.",
      },
      {
        text: "Il Compagno parla con una ragazza: il Capopalestra di Smeraldopoli è tornato. È l’ultima medaglia.",
      },
    ],
    items: [
      { name: "Iperpozione", where: "Isola prossima a Biancavilla" },
      { name: "MT35 Gelopugno", where: "Coach Melanie" },
      { name: "Pietraidrica", where: "Isola del Pescatore" },
      { name: "PP-Su", where: "Isola prossima a Isola Cannella" },
      { name: "Pietrachiave", where: "Blu, laboratorio Oak" },
      { name: "Venusaurite", where: "Blu, laboratorio Oak" },
      { name: "Charizardite X e Y", where: "Blu, laboratorio Oak" },
      { name: "Blastoisite", where: "Blu, laboratorio Oak" },
    ],
    encounters: [
      { name: "Tangela", place: "Erba", levels: "37–42" },
      { name: "Vileplume", place: "Erba", levels: "37–42", version: "lgp" },
      { name: "Victreebel", place: "Erba", levels: "37–42", version: "lge" },
      { name: "Chansey", place: "Special spawn", levels: "37–42", special: true },
    ],
    trainers: [
      {
        klass: "Pescatore",
        name: "Ermes",
        reward: "1680£, 3 Poké Ball",
        team: Array.from({ length: 6 }, () => ({ name: "Magikarp", level: 42 })),
      },
      {
        klass: "Coach",
        name: "Melanie",
        reward: "4500£",
        team: [
          { name: "Machoke", level: 44 },
          { name: "Jynx", level: 44 },
          { name: "Kangaskhan", level: 45 },
        ],
      },
    ],
  },
  {
    id: "palestra-smeraldopoli",
    name: "Palestra Smeraldopoli",
    kind: "gym",
    part: 8,
    blurb: "Giovanni, tipo Terra. L’ottava medaglia.",
    gym: {
      leader: "Giovanni",
      type: "Terra",
      badge: "Medaglia Terra",
      tm: "MT41 Terremoto",
      tip: "Spinner blu fino alla poltrona. Tutti conoscono Terremoto; Nidoking ha Perforcorno. Acqua o Erba. Dopo la lotta Giovanni lascia palestra e Team Rocket.",
    },
    steps: [
      {
        text: "Mattonelle spinner. Affrontate gli allenatori, poi gli spinner blu fino a Giovanni, con Persian sulla poltrona.",
      },
      {
        text: "Medaglia Terra: d’ora in poi tutti i Pokémon obbediscono, a qualsiasi livello. Blu diventerà il nuovo Capopalestra.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      { klass: "Fantallenatore", name: "Endimio", reward: "4800£", team: [{ name: "Nidoking", level: 48 }] },
      {
        klass: "Capopalestra",
        name: "Giovanni",
        reward: "8000£",
        boss: "gym",
        team: [
          { name: "Dugtrio", level: 49 },
          { name: "Nidoqueen", level: 49 },
          { name: "Nidoking", level: 49 },
          { name: "Rhydon", level: 50 },
        ],
      },
    ],
  },
  {
    id: "percorso-23",
    name: "Percorso 23",
    kind: "route",
    part: 9,
    blurb: "Trace, i varchi delle medaglie, poi Via Vittoria.",
    steps: [
      {
        text: "Blu, nuovo Capopalestra, indica la Lega. Sul Percorso 22 Trace vi sfida ancora: ora ha anche Marowak.",
      },
      {
        text: "All’accesso mostrate la Medaglia Sasso. Lungo il Percorso 23 i poliziotti chiedono le altre medaglie, in ordine.",
      },
      {
        text: "In fondo: Nidoqueen, Nidoking, Exeggcute ed Exeggutor. Poi Via Vittoria.",
      },
    ],
    items: [
      { name: "Baccalampon dorata ×3", where: "Est del varco Medaglia Cascata" },
      { name: "Baccalampon dorata ×5", where: "Isola a nord del varco Medaglia Anima" },
      { name: "Baccananas dorata ×3", where: "Ovest del varco Medaglia Anima" },
      { name: "Baccananas dorata ×5", where: "Nord del varco Medaglia Vulcano" },
      { name: "Baccabana dorata ×3", where: "Nord-est del varco Medaglia Tuono" },
      { name: "Baccabana dorata ×5", where: "Sud-est del varco Medaglia Vulcano" },
    ],
    encounters: [
      { name: "Nidoqueen", place: "Erba", levels: "41–46" },
      { name: "Nidoking", place: "Erba", levels: "41–46" },
      { name: "Exeggcute", place: "Erba", levels: "41–46" },
      { name: "Exeggutor", place: "Erba", levels: "41–46" },
      { name: "Chansey", place: "Special spawn", levels: "41–46", special: true },
    ],
    trainers: [
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "8160£",
        version: "lgp",
        boss: "rival",
        team: [
          { name: "Pidgeot", level: 50 },
          { name: "Vileplume", level: 50 },
          { name: "Marowak", level: 50 },
          { name: "Jolteon", level: 51 },
        ],
      },
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "8160£",
        version: "lge",
        boss: "rival",
        team: [
          { name: "Pidgeot", level: 50 },
          { name: "Vileplume", level: 50 },
          { name: "Marowak", level: 50 },
          { name: "Raichu", level: 51 },
        ],
      },
    ],
  },
  {
    id: "via-vittoria",
    name: "Via Vittoria",
    kind: "cave",
    part: 9,
    blurb: "Tre piani, Moltres, e l’Altopiano Blu.",
    steps: [
      {
        text: "Grotta lunga e piena di allenatori forti. Coach Dimitrios vi dà 10 Caramelle Pikachu o Eevee.",
      },
      {
        text: "Al piano 1: Moltres, liv. 50, Aura. Fuoco/Volante, debole ad Acqua, Roccia, Elettro. 5 minuti.",
      },
      {
        text: "Al piano 2 il Coach Massimiliano dona la MT39 Oltraggio. Special Spawn: Chansey, Hitmonlee, Hitmonchan a seconda del piano. Uscita: Altopiano Blu.",
      },
    ],
    items: [
      { name: "Caramella Pikachu ×10", where: "Coach Dimitrios", version: "lgp" },
      { name: "Caramella Eevee ×10", where: "Coach Dimitrios", version: "lge" },
      { name: "Pietrafoglia", where: "Piano terra, nord" },
      { name: "MT56 Levitaroccia", where: "Piano terra, nord" },
      { name: "PP-Max", where: "Piano 1, sud di Moltres" },
      { name: "MT51 Bora", where: "Piano 2, nord-ovest" },
      { name: "MT39 Oltraggio", where: "Coach Massimiliano" },
    ],
    encounters: [
      { name: "Machoke", place: "Grotta", levels: "41–46" },
      { name: "Graveler", place: "Grotta", levels: "41–46" },
      { name: "Onix", place: "Grotta", levels: "41–46" },
      { name: "Rhydon", place: "Grotta", levels: "41–46" },
      { name: "Chansey", place: "Special spawn, piano terra", levels: "41–46", special: true },
      { name: "Hitmonlee", place: "Special spawn, piano 1", levels: "41–46", special: true },
      { name: "Hitmonchan", place: "Special spawn, piano 2", levels: "41–46", special: true },
      { name: "Moltres", place: "Piano 1, 5 minuti", levels: "50", special: true },
    ],
    trainers: [
      { klass: "Coach", name: "Dimitrios", reward: "4900£", team: [{ name: "Ditto", level: 49 }] },
      {
        klass: "Leggendario",
        name: "Moltres",
        reward: "—",
        boss: "legend",
        team: [{ name: "Moltres", level: 50 }],
      },
    ],
  },
  {
    id: "altopiano-blu",
    name: "Altopiano Blu",
    kind: "building",
    part: 9,
    blurb: "Super4 e Campione. L’ultima prova di Kanto.",
    steps: [
      {
        text: "Curate e salvate. I Super4 si affrontano in fila, senza Centro in mezzo. Portate cure, revives e un team coperto su Ghiaccio, Lotta, Spettro, Drago.",
      },
      {
        text: "Lorelei (Ghiaccio/Acqua): Fuoco ed Elettro. Bruno (Lotta/Roccia): Psico e Volante. Agatha (Spettro/Veleno): Psico e Terra. Lance (Drago): Ghiaccio e Drago.",
      },
      {
        text: "Il Campione è Trace, con sei Pokémon. Dopo la vittoria Oak registra il Pokédex e siete nel Hall of Fame. Post-game: Grotta Celeste e Mewtwo.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      {
        klass: "Super4",
        name: "Lorelei",
        reward: "—",
        boss: "elite",
        team: [
          { name: "Dewgong", level: 51 },
          { name: "Cloyster", level: 51 },
          { name: "Slowbro", level: 51 },
          { name: "Jynx", level: 51 },
          { name: "Lapras", level: 52 },
        ],
      },
      {
        klass: "Super4",
        name: "Bruno",
        reward: "—",
        boss: "elite",
        team: [
          { name: "Onix", level: 51 },
          { name: "Hitmonchan", level: 51 },
          { name: "Hitmonlee", level: 51 },
          { name: "Onix", level: 51 },
          { name: "Machamp", level: 52 },
        ],
      },
      {
        klass: "Super4",
        name: "Agatha",
        reward: "—",
        boss: "elite",
        team: [
          { name: "Gengar", level: 51 },
          { name: "Golbat", level: 51 },
          { name: "Haunter", level: 51 },
          { name: "Arbok", level: 51 },
          { name: "Gengar", level: 52 },
        ],
      },
      {
        klass: "Super4",
        name: "Lance",
        reward: "—",
        boss: "elite",
        team: [
          { name: "Gyarados", level: 51 },
          { name: "Dragonair", level: 51 },
          { name: "Dragonair", level: 51 },
          { name: "Aerodactyl", level: 51 },
          { name: "Dragonite", level: 52 },
        ],
      },
      {
        klass: "Campione",
        name: "Trace",
        reward: "—",
        version: "lgp",
        boss: "champion",
        team: [
          { name: "Pidgeot", level: 53 },
          { name: "Vileplume", level: 53 },
          { name: "Marowak", level: 53 },
          { name: "Rapidash", level: 53 },
          { name: "Slowbro", level: 53 },
          { name: "Jolteon", level: 54 },
        ],
      },
      {
        klass: "Campione",
        name: "Trace",
        reward: "—",
        version: "lge",
        boss: "champion",
        team: [
          { name: "Pidgeot", level: 53 },
          { name: "Vileplume", level: 53 },
          { name: "Marowak", level: 53 },
          { name: "Rapidash", level: 53 },
          { name: "Slowbro", level: 53 },
          { name: "Raichu", level: 54 },
        ],
      },
    ],
  },
  {
    id: "grotta-celeste",
    name: "Grotta Celeste",
    kind: "cave",
    part: 9,
    blurb: "Post-game. Mewtwo attende nel cuore della grotta.",
    steps: [
      {
        text: "Dopo la Lega, a nord di Celestopoli si apre la Grotta Celeste. Labirinto su più piani, Pokémon di livello alto.",
      },
      {
        text: "In fondo: Mewtwo, liv. 70, Aura. Psico puro, velocissimo. Master Ball se l’avete tenuta, oppure indebolitelo con Buio/Spettro e lanciate Ultra Ball. 5 minuti.",
      },
    ],
    items: [],
    encounters: [
      { name: "Golbat", place: "Grotta", levels: "51–56" },
      { name: "Machoke", place: "Grotta", levels: "51–56" },
      { name: "Graveler", place: "Grotta", levels: "51–56" },
      { name: "Kadabra", place: "Grotta", levels: "51–56" },
      { name: "Ditto", place: "Grotta", levels: "51–56" },
      { name: "Mewtwo", place: "Sala finale, 5 minuti", levels: "70", special: true },
    ],
    trainers: [
      {
        klass: "Leggendario",
        name: "Mewtwo",
        reward: "—",
        boss: "legend",
        team: [{ name: "Mewtwo", level: 70 }],
      },
    ],
  },
];
