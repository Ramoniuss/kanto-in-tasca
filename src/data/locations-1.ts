import type { Location } from "./types";

export const LOCATIONS_1: Location[] = [
  {
    id: "biancavilla",
    name: "Biancavilla",
    kind: "town",
    part: 1,
    blurb: "Casa, laboratorio del Prof. Oak e il vostro primo Pokémon.",
    steps: [
      {
        text: "Il Prof. Oak presenta il mondo dei Pokémon e vi chiede sesso e nome, poi il nome del rivale. In questa guida lo chiamiamo Trace.",
      },
      {
        text: "Vi svegliate in cameretta. Trace vi raggiunge: oggi riceverete entrambi un Pokémon iniziale. Aprite il PC per le indicazioni sui comandi.",
      },
      {
        text: "Uscite di casa e proseguite a nord. Oak è in difficoltà con dei Pidgey selvatici: vi invita in laboratorio, ma un Pikachu (Let’s Go Pikachu) o un Eevee (Let’s Go Eevee) vi affronterà.",
      },
      {
        text: "Seguite le istruzioni di cattura: è un incontro guidato. La Poké Ball rimbalza e finisce in laboratorio. Oak vi invita a riprenderla: quello è il vostro Pokémon Compagno.",
      },
      {
        text: "Trace sceglie l’altro iniziale. Oak vi dona il Pokédex. All’uscita vostra madre vi consegna la Mappa Città. Proseguite a nord sul Percorso 1.",
      },
    ],
    items: [
      { name: "Baccalampon ×20", where: "Donato dal Prof. Oak (più avanti)" },
      { name: "Mappa Città", where: "Donata dalla mamma" },
      {
        name: "Pietrachiave + Megapietre starter",
        where: "Donato da Blu dopo Blaine, di ritorno in laboratorio",
      },
    ],
    encounters: [
      { name: "Pikachu", place: "Cattura guidata", levels: "5", version: "lgp", gift: true },
      { name: "Eevee", place: "Cattura guidata", levels: "5", version: "lge", gift: true },
    ],
    trainers: [],
  },
  {
    id: "percorso-1",
    name: "Percorso 1",
    kind: "route",
    part: 1,
    blurb: "Il primo tratto d’erba: imparate la cattura e fate combo.",
    steps: [
      {
        text: "Il Percorso 1 è l’ideale per esercitarvi con il nuovo sistema di cattura. Prendete confidenza con il lancio e con le combo.",
      },
      {
        text: "Al termine del percorso, una Baccalampon è nascosta in un cespuglio a nord-est. Continuate per Smeraldopoli.",
      },
      {
        text: "Dopo il primo scontro con Trace tornerete qui: un commesso del Pokémon Market vi dona una Pozione. Il Marmocchio Billy è il primo allenatore della regione.",
      },
    ],
    items: [
      { name: "Baccalampon", where: "Cespuglio a nord-est" },
      { name: "Pozione", where: "Donata dall’assistente del Pokémon Market (dopo Trace)" },
    ],
    encounters: [
      { name: "Pidgey", place: "Erba / cielo", levels: "3–4" },
      { name: "Rattata", place: "Erba", levels: "3–4" },
      { name: "Oddish", place: "Erba", levels: "3–4", version: "lgp" },
      { name: "Bellsprout", place: "Erba", levels: "3–4", version: "lge" },
      { name: "Pidgeotto", place: "Cielo", levels: "3–56" },
      { name: "Pidgeot", place: "Cielo", levels: "3–56" },
    ],
    trainers: [
      {
        klass: "Marmocchio",
        name: "Billy",
        reward: "60£, 3 Poké Ball",
        team: [{ name: "Rattata", level: 3 }],
      },
    ],
  },
  {
    id: "smeraldopoli",
    name: "Smeraldopoli",
    kind: "town",
    part: 1,
    blurb: "Pacco per Oak, bacche, primo scontro con Trace e look sportivo.",
    steps: [
      {
        text: "Due ragazzi in bianco e un Meowth bloccano il passaggio nord. Andate al Pokémon Market: il commesso vi dà un Pacco da consegnare a Oak.",
      },
      {
        text: "Tornate a Biancavilla. Il Compagno sale sulla spalla (Pikachu) o sulla testa (Eevee). Consegnate il pacco: Oak e Trace vi danno Baccalampon, utili per attirare i selvatici.",
      },
      {
        text: "Trace vi sfida nel laboratorio. Dopo la lotta, la sorella di Trace all’uscita nord di Biancavilla vi dona un completo sportivo e mostra Gioca con Pikachu/Eevee.",
      },
      {
        text: "Tornati a Smeraldopoli, Trace vi spiega il Centro Pokémon. Raccogliete la Pozione dall’alberello a nord-ovest. Poi andate a ovest sul Percorso 22.",
      },
    ],
    items: [
      { name: "Pacco", where: "Commesso del Pokémon Market" },
      { name: "Pozione", where: "Vicino al cespuglio a nord-ovest" },
      {
        name: "MT11 Fuocofatuo",
        where: "Uomo che dorme accanto al laghetto (serve Fendente)",
      },
      { name: "Baccalampon ×20", where: "Donato da Oak dopo il pacco" },
      { name: "Completo sportivo", where: "Sorella di Trace, uscita nord Biancavilla" },
    ],
    encounters: [],
    trainers: [
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "120£",
        version: "lgp",
        boss: "rival",
        team: [{ name: "Eevee", level: 6 }],
      },
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "120£",
        version: "lge",
        boss: "rival",
        team: [{ name: "Pikachu", level: 6 }],
      },
    ],
  },
  {
    id: "percorso-22",
    name: "Percorso 22",
    kind: "route",
    part: 1,
    blurb: "Nidoran, Spearow e la seconda sfida con Trace, davanti alla Lega.",
    steps: [
      {
        text: "Qui trovate Spearow e entrambi i Nidoran. Un Antidoto è nel cespuglio in alto a destra.",
      },
      {
        text: "Sul sentiero pavimentato Trace parla della Lega Pokémon: per entrarci servono le 8 medaglie di Kanto. Poi vi sfida di nuovo.",
      },
      {
        text: "Dopo la vittoria tornate a Smeraldopoli. Una ragazza con Oddish vi mostra come far uscire un Pokémon dalla Ball. Poi andate a nord sul Percorso 2.",
      },
    ],
    items: [
      { name: "Antidoto", where: "Cespuglio in alto a destra" },
      { name: "Poké Ball ×5", where: "Sud-ovest" },
      { name: "Antidoto", where: "Cespugli a nord-est" },
    ],
    encounters: [
      { name: "Rattata", place: "Erba", levels: "3–4" },
      { name: "Spearow", place: "Erba / cielo", levels: "3–4" },
      { name: "Nidoran M", place: "Erba", levels: "3–4" },
      { name: "Nidoran F", place: "Erba", levels: "3–4" },
      { name: "Fearow", place: "Cielo", levels: "3–56" },
      { name: "Poliwag", place: "Surf", levels: "3–4" },
      { name: "Magikarp", place: "Surf", levels: "3–4" },
      { name: "Poliwhirl", place: "Surf", levels: "3–4" },
    ],
    trainers: [
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "140£",
        version: "lgp",
        boss: "rival",
        team: [
          { name: "Pidgey", level: 3 },
          { name: "Eevee", level: 7 },
        ],
      },
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "140£",
        version: "lge",
        boss: "rival",
        team: [
          { name: "Pidgey", level: 3 },
          { name: "Pikachu", level: 7 },
        ],
      },
    ],
  },
  {
    id: "percorso-2",
    name: "Percorso 2",
    kind: "route",
    part: 1,
    blurb: "Ingresso al Bosco Smeraldo. Alcuni oggetti richiedono Fendente.",
    steps: [
      {
        text: "Il Percorso 2 porta al Bosco Smeraldo. Pietrafoglia e Superpozione a sud-est sono raggiungibili solo con Fendente, più avanti nella storia.",
      },
      {
        text: "Dopo Aranciopoli un assistente di Oak insegna Bagliore al Compagno, vicino all’uscita della Grotta Diglett.",
      },
    ],
    items: [
      { name: "Pietrafoglia", where: "Sud-est (serve Fendente)" },
      { name: "Superpozione", where: "Sud-est (serve Fendente)" },
      { name: "Mega Ball", where: "Dietro la Grotta Diglett" },
    ],
    encounters: [
      { name: "Pidgey", place: "Erba / cielo", levels: "3–8" },
      { name: "Rattata", place: "Erba", levels: "3–8" },
      { name: "Oddish", place: "Erba", levels: "3–8", version: "lgp" },
      { name: "Bellsprout", place: "Erba", levels: "3–8", version: "lge" },
      { name: "Caterpie", place: "Erba", levels: "3–8" },
      { name: "Weedle", place: "Erba", levels: "3–8" },
      { name: "Pidgeotto", place: "Cielo", levels: "3–56" },
      { name: "Pidgeot", place: "Cielo", levels: "3–56" },
    ],
    trainers: [],
  },
  {
    id: "bosco-smeraldo",
    name: "Bosco Smeraldo",
    kind: "cave",
    part: 1,
    blurb: "Coleotteri, Combo Cattura e il primo Profumo invito.",
    steps: [
      {
        text: "Il bosco è pieno di coleotteri, allenatori e oggetti. Con fortuna appaiono Butterfree (Pikachu) o Beedrill (Eevee). Bulbasaur è la Special Spawn.",
      },
      {
        text: "Le Special Spawn si sbloccano più facilmente con i profumi o con Combo Cattura da 10 in su: catturate la stessa specie di fila, senza far fuggire nessuno né cambiar bersaglio.",
      },
      {
        text: "Verso l’uscita nord c’è il Profumo invito: aumenta gli incontri e aiuta i rari. Uscendo a nord siete di nuovo sul Percorso 2, a un passo da Plumbeopoli.",
      },
    ],
    items: [
      { name: "Antidoto", where: "Entrata sud" },
      { name: "Antidoto", where: "Angolo sud-est" },
      { name: "Poké Ball ×5", where: "Angolo sud-est" },
      { name: "Baccalampon", where: "Angolo sud-est" },
      { name: "Profumo invito", where: "Sud-est dell’entrata nord" },
      { name: "Minifungo", where: "Nord-ovest dell’Antidoto" },
      { name: "Pozione", where: "Dietro l’albero, angolo nord-est" },
    ],
    encounters: [
      { name: "Caterpie", place: "Erba", levels: "3–6" },
      { name: "Weedle", place: "Erba", levels: "3–6" },
      { name: "Pidgey", place: "Erba", levels: "3–6" },
      { name: "Metapod", place: "Erba", levels: "3–6" },
      { name: "Kakuna", place: "Erba", levels: "3–6" },
      { name: "Oddish", place: "Erba", levels: "3–6", version: "lgp" },
      { name: "Bellsprout", place: "Erba", levels: "3–6", version: "lge" },
      { name: "Pikachu", place: "Erba", levels: "3–6" },
      { name: "Butterfree", place: "Erba", levels: "3–6", version: "lgp" },
      { name: "Beedrill", place: "Erba", levels: "3–6", version: "lge" },
      { name: "Bulbasaur", place: "Special spawn", levels: "3–6", special: true },
    ],
    trainers: [
      { klass: "Pigliamosche", name: "Duccio", reward: "36£, 3 Poké Ball", team: [{ name: "Weedle", level: 3 }] },
      { klass: "Teenager", name: "Joana", reward: "80£, 3 Poké Ball", team: [{ name: "Rattata", level: 4 }] },
      { klass: "Pigliamosche", name: "Rick", reward: "36£, 3 Poké Ball", team: [{ name: "Caterpie", level: 3 }] },
      { klass: "Teenager", name: "Rosalia", reward: "80£, 3 Poké Ball", team: [{ name: "Nidoran F", level: 4 }] },
      { klass: "Pigliamosche", name: "Silvio", reward: "36£, 3 Poké Ball", team: [{ name: "Kakuna", level: 3 }] },
      { klass: "Teenager", name: "Matilde", reward: "80£, 3 Poké Ball", team: [{ name: "Pidgey", level: 4 }] },
      { klass: "Pigliamosche", name: "Sammy", reward: "36£, 3 Poké Ball", team: [{ name: "Metapod", level: 3 }] },
    ],
  },
  {
    id: "plumbeopoli",
    name: "Plumbeopoli",
    kind: "town",
    part: 1,
    blurb: "Museo, Plumbeosalatini e la prima palestra di Kanto.",
    steps: [
      {
        text: "Trace vi accoglie, parla della palestra e vi dà 5 Pozioni.",
      },
      {
        text: "Nel Centro Pokémon un signore vende i Plumbeosalatini, snack che curano tutti i problemi di stato. Accanto al museo, una signora vi chiede di badare al suo Slowpoke: in cambio una Grande Perla.",
      },
      {
        text: "Il Museo della Scienza espone fossili e una mostra sulla luna. Con Fendente (più avanti) gli scienziati vi donano l’Ambra Antica.",
      },
      { text: "Quando siete pronti, entrate in palestra." },
    ],
    items: [
      { name: "Pozione ×5", where: "Donato da Trace" },
      { name: "Difesa X", where: "Dietro al Centro Pokémon" },
      { name: "Baccabana", where: "Cespuglio accanto alla ragazza con Butterfree" },
      { name: "Grande Perla", where: "Signora con Slowpoke, accanto al museo" },
      { name: "Mega Ball ×5", where: "Donato da Blu dopo Brock" },
      { name: "Ambra Antica", where: "Scienziati del museo (serve Fendente)" },
    ],
    encounters: [],
    trainers: [],
  },
  {
    id: "palestra-plumbeopoli",
    name: "Palestra Plumbeopoli",
    kind: "gym",
    part: 1,
    blurb: "Brock, tipo Roccia. Erba o Acqua, oppure Doppiocalcio al liv. 9.",
    gym: {
      leader: "Brock",
      type: "Roccia",
      badge: "Medaglia Sasso",
      tm: "MT01 Bottintesta",
      tip: "Servono Erba o Acqua per entrare. Pikachu/Eevee imparano Doppiocalcio al livello 9. I suoi Pokémon sono lenti e deboli a quelle mosse.",
    },
    steps: [
      {
        text: "Il custode fa entrare solo chi ha un Pokémon Erba o Acqua. Mostrateglielo e avanzate.",
      },
      {
        text: "Sconfitti Amara e Marvin, Brock vi aspetta sull’altura rocciosa.",
      },
      {
        text: "Vinto lo scontro ottenete la Medaglia Sasso e la MT01 Bottintesta. I Pokémon fino al liv. 20 vi obbediranno. Fuori, Blu (nipote di Oak) vi dà 5 Mega Ball. Prossima tappa: Percorso 3 e Monte Luna.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      { klass: "Picnic Girl", name: "Amara", reward: "140£", team: [{ name: "Geodude", level: 7 }] },
      { klass: "Campeggiatore", name: "Marvin", reward: "140£", team: [{ name: "Geodude", level: 7 }] },
      {
        klass: "Capopalestra",
        name: "Brock",
        reward: "1920£",
        boss: "gym",
        team: [
          { name: "Geodude", level: 11 },
          { name: "Onix", level: 12 },
        ],
      },
    ],
  },
  {
    id: "percorso-3",
    name: "Percorso 3",
    kind: "route",
    part: 2,
    blurb: "Primi Coach, Mankey e Charmander come Special Spawn.",
    steps: [
      {
        text: "I Coach sono allenatori più forti del solito. Pasquale, il primo, vi dà un Revitalizzante a fine lotta.",
      },
      {
        text: "Mankey è comune. Ekans è esclusivo Let’s Go Eevee, Sandshrew di Let’s Go Pikachu. Charmander è la Special Spawn.",
      },
    ],
    items: [
      { name: "Poké Ball", where: "Cespuglio a sud-est della Teenager" },
      { name: "Pozione", where: "Sud del Marmocchio" },
      { name: "Profumo invito", where: "Cespuglio accanto alla Picnic Girl" },
      { name: "Baccalampon", where: "Cespuglio accanto al Pigliamosche" },
      { name: "Revitalizzante", where: "Erba a sud del Centro Pokémon" },
    ],
    encounters: [
      { name: "Rattata", place: "Erba", levels: "3–8" },
      { name: "Spearow", place: "Erba / cielo", levels: "3–8" },
      { name: "Mankey", place: "Erba", levels: "3–8" },
      { name: "Ekans", place: "Erba", levels: "3–8", version: "lge" },
      { name: "Sandshrew", place: "Erba", levels: "3–8", version: "lgp" },
      { name: "Charmander", place: "Special spawn", levels: "3–8", special: true },
    ],
    trainers: [
      { klass: "Coach", name: "Pasquale", reward: "1100£", team: [{ name: "Bulbasaur", level: 11 }] },
      { klass: "Teenager", name: "Antonella", reward: "120£, 3 Poké Ball", team: [{ name: "Oddish", level: 6 }] },
      { klass: "Marmocchio", name: "Matteo", reward: "120£, 3 Poké Ball", team: [{ name: "Spearow", level: 6 }] },
      { klass: "Campeggiatore", name: "Dino", reward: "140£, 2 Mega Ball", team: [{ name: "Nidoran M", level: 7 }] },
      { klass: "Picnic Girl", name: "Dominique", reward: "140£, 2 Mega Ball", team: [{ name: "Nidoran F", level: 7 }] },
      { klass: "Marmocchio", name: "Ben", reward: "120£, 3 Poké Ball", team: [{ name: "Rattata", level: 6 }] },
      { klass: "Pigliamosche", name: "Greg", reward: "60£, 3 Poké Ball", team: [{ name: "Kakuna", level: 5 }] },
    ],
  },
  {
    id: "percorso-4",
    name: "Percorso 4",
    kind: "route",
    part: 2,
    blurb: "Ovest: Magikarp a 500£. Est: la discesa verso Celestopoli.",
    steps: [
      {
        text: "A ovest il percorso è tagliato dal Monte Luna. Sconfiggete il Coach Joseph per la MT57 Giornopaga. Nel Centro Pokémon un signore vende Magikarp a 500£.",
      },
      {
        text: "Dopo il monte, la parte est porta a Celestopoli. Raccogliete gli oggetti prima di scendere in città.",
      },
    ],
    items: [
      { name: "MT57 Giornopaga", where: "Donata dal Coach Joseph (ovest)" },
      { name: "Fune di Fuga", where: "Ovest del Centro Pokémon" },
      { name: "Antiparalisi", where: "Sud-ovest, uscita Monte Luna" },
      { name: "Poké Ball ×5", where: "Est, uscita Monte Luna" },
      { name: "Repellente", where: "Sud-est" },
      { name: "Mega Ball ×3", where: "Cespuglio vicino a Celestopoli" },
    ],
    encounters: [
      { name: "Magikarp", place: "Venduto nel Centro Pokémon", levels: "5", gift: true },
      { name: "Rattata", place: "Erba (est)", levels: "7–12" },
      { name: "Spearow", place: "Erba / cielo", levels: "7–12" },
      { name: "Mankey", place: "Erba", levels: "7–12", version: "lgp" },
      { name: "Ekans", place: "Erba", levels: "7–12", version: "lge" },
      { name: "Sandshrew", place: "Erba", levels: "7–12", version: "lgp" },
      { name: "Psyduck", place: "Erba (est)", levels: "7–12" },
      { name: "Charmander", place: "Special spawn", levels: "3–8", special: true },
    ],
    trainers: [
      { klass: "Coach", name: "Joseph", reward: "1300£", team: [{ name: "Meowth", level: 13 }] },
    ],
  },
  {
    id: "monte-luna",
    name: "Monte Luna",
    kind: "cave",
    part: 2,
    blurb: "Team Rocket, fossile a scelta e Jessie & James.",
    steps: [
      {
        text: "All’ingresso ritrovate i due tipi in bianco di Smeraldopoli: vogliono rubare i fossili. Il monte ha un piano terra e due sotterranei.",
      },
      {
        text: "Chansey è la Special Spawn. Se finite le Ball, un signore a nord del piano terra ve ne vende.",
      },
      {
        text: "Le prime scale portano al −2: recluta Rocket, Pietralunare nel cratere a est, Caramella Rara a nord.",
      },
      {
        text: "Il Cervellone Miguel difende i fossili. Dopo la lotta scegliete: a destra il Domofossile (Kabuto), a sinistra l’Helixfossile (Omanyte). Ne potete prendere solo uno.",
      },
      {
        text: "All’uscita Jessie, James e Meowth pretendono il fossile. Sconfitti, partono alla velocità della luce. Uscite a est sul Percorso 4.",
      },
    ],
    items: [
      { name: "Polvostella", where: "Piano terra, cratere a nord" },
      { name: "Pozione", where: "Piano terra, a sinistra dell’entrata" },
      { name: "Mega Ball ×5", where: "Piano terra, vicino al Pigliamosche" },
      { name: "Sveglia", where: "Piano terra, vicino al Cervellone" },
      { name: "Etere", where: "Piano terra, sud-est del Marmocchio" },
      { name: "Repellente", where: "Piano terra, strettoia a est del Marmocchio" },
      { name: "Perla", where: "Piano terra, nord dell’Avventuriero" },
      { name: "Grande Fungo", where: "Piano −1, rocce angolo in basso a destra" },
      { name: "Caramella Rara", where: "Piano −2, est della recluta Rocket" },
      { name: "Pepita", where: "Piano −2, zona centrale senza allenatori" },
      { name: "Revitalizzante", where: "Piano −2, nord delle scale per il −1" },
      { name: "Pozione", where: "Piano −2, nord-est della recluta Rocket" },
      { name: "Domofossile", where: "Piano −2, a destra (Kabuto) — uno solo" },
      { name: "Helixfossile", where: "Piano −2, a sinistra (Omanyte) — uno solo" },
      { name: "Pietralunare", where: "Piano −2, cratere davanti alla rampa" },
    ],
    encounters: [
      { name: "Zubat", place: "Grotta", levels: "5–10" },
      { name: "Geodude", place: "Grotta", levels: "5–10" },
      { name: "Paras", place: "Grotta", levels: "5–10" },
      { name: "Clefairy", place: "Grotta", levels: "5–10" },
      { name: "Clefable", place: "Grotta", levels: "5–10" },
      { name: "Onix", place: "Grotta", levels: "5–10" },
      { name: "Chansey", place: "Special spawn", levels: "5–10", special: true },
    ],
    trainers: [
      { klass: "Pigliamosche", name: "Miro", reward: "84£, 3 Poké Ball", team: [{ name: "Butterfree", level: 7 }] },
      { klass: "Teenager", name: "Irina", reward: "160£, 3 Poké Ball", team: [{ name: "Bellsprout", level: 8 }] },
      { klass: "Cervellone", name: "Jovan", reward: "400£, 3 Poké Ball", team: [{ name: "Grimer", level: 10 }] },
      { klass: "Marmocchio", name: "Robby", reward: "160£, 3 Poké Ball", team: [{ name: "Mankey", level: 8 }] },
      { klass: "Recluta Team Rocket", name: "", reward: "252£", team: [{ name: "Rattata", level: 9 }] },
      { klass: "Teenager", name: "Miriam", reward: "160£, 3 Poké Ball", team: [{ name: "Clefairy", level: 8 }] },
      { klass: "Marmocchio", name: "Elia", reward: "160£, 3 Poké Ball", team: [{ name: "Sandshrew", level: 8 }] },
      {
        klass: "Montanaro",
        name: "Marcos",
        reward: "400£, 3 Poké Ball",
        team: [
          { name: "Geodude", level: 10 },
          { name: "Geodude", level: 10 },
        ],
      },
      {
        klass: "Cervellone",
        name: "Miguel",
        reward: "400£",
        team: [
          { name: "Voltorb", level: 10 },
          { name: "Magnemite", level: 10 },
        ],
      },
      {
        klass: "Team Rocket",
        name: "Jessie e James",
        reward: "1152£",
        boss: "rocket",
        team: [
          { name: "Koffing", level: 12 },
          { name: "Ekans", level: 12 },
        ],
      },
    ],
  },
  {
    id: "celestopoli",
    name: "Celestopoli",
    kind: "town",
    part: 2,
    blurb: "Bicicletta, Bulbasaur, casa svaligiata e palestra di Misty.",
    steps: [
      {
        text: "Parlate con l’esperto di bici e con gli abitanti: Squama Cuore, Caramella Rara dietro casa dell’esperto delle medaglie, Piumabella tra i fiori verso il Ponte Pepita.",
      },
      {
        text: "Una ragazza vi dona Bulbasaur. Trace, in città, vi dà 3 Funi di Fuga.",
      },
      {
        text: "Dopo Bill (Percorso 25) tornate in città: uno Squirtle distrae l’Agente Jenny. Entrate nella casa svaligiata, poi sconfiggete la recluta Rocket fuori per recuperare la MT10 Fossa.",
      },
      { text: "Quando siete pronti, la palestra è a nord-est." },
    ],
    items: [
      { name: "Squama Cuore", where: "Esperto di Bici" },
      { name: "MT10 Fossa", where: "Recluta Rocket, dopo Bill" },
      { name: "Caramella Rara", where: "Retro della casa dell’esperto delle medaglie" },
      { name: "Piumabella", where: "Fiori vicino al Ponte Pepita" },
      { name: "Antiscottatura", where: "Angolo sud-ovest" },
      { name: "MT60 Megacorno", where: "Donata dal Coach in città" },
      { name: "Fune di Fuga ×3", where: "Donato da Trace" },
    ],
    encounters: [{ name: "Bulbasaur", place: "Regalo", levels: "12", gift: true }],
    trainers: [
      {
        klass: "Recluta Team Rocket",
        name: "",
        reward: "420£",
        team: [{ name: "Raticate", level: 15 }],
      },
    ],
  },
  {
    id: "palestra-celestopoli",
    name: "Palestra Celestopoli",
    kind: "gym",
    part: 2,
    blurb: "Misty, tipo Acqua. Elettro o Erba spazzano via Starmie.",
    gym: {
      leader: "Misty",
      type: "Acqua",
      badge: "Medaglia Cascata",
      tm: "MT29 Idropulsar",
      tip: "Starmie è veloce e copre Acqua/Psico. Un Elettro (il vostro Pikachu) o un Erba (Bulbasaur/Oddish) chiude in pochi turni.",
    },
    steps: [
      {
        text: "La palestra è una piscina con nuotatori. Attraversatela e sfidate Misty.",
      },
      {
        text: "Vinta la Medaglia Cascata, i Pokémon fino al liv. 30 vi obbediscono. Proseguite a nord sul Percorso 24.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      {
        klass: "Capopalestra",
        name: "Misty",
        reward: "3360£",
        boss: "gym",
        team: [
          { name: "Staryu", level: 18 },
          { name: "Starmie", level: 21 },
        ],
      },
    ],
  },
  {
    id: "percorso-24",
    name: "Percorso 24",
    kind: "route",
    part: 3,
    blurb: "Trace scosso, Ponte Pepita, Charmander e Squirtle selvatico.",
    steps: [
      {
        text: "All’ingresso Trace, ancora scosso, vi sfida. Poi racconta di un Pokémon parlante nella casa di Bill.",
      },
      {
        text: "Il Ponte Pepita è una fila di allenatori. In fondo un ragazzo vi dà una Pepita… e si rivela una recluta Rocket.",
      },
      {
        text: "Prima di andare a est, parlate con il ragazzo a nord: vi dona Charmander. Special Spawn: Squirtle.",
      },
    ],
    items: [
      { name: "Pepita", where: "Falsa recluta, fine del ponte" },
      { name: "Difesa Speciale X", where: "Dopo la recluta Rocket" },
      { name: "Baccalampon", where: "Nord del ponte" },
    ],
    encounters: [
      { name: "Charmander", place: "Regalo, nord del ponte", levels: "14", gift: true },
      { name: "Squirtle", place: "Special spawn", levels: "7–12", special: true },
      { name: "Oddish", place: "Erba", levels: "7–12" },
      { name: "Venonat", place: "Erba", levels: "7–12" },
      { name: "Meowth", place: "Erba", levels: "7–12", version: "lge" },
      { name: "Psyduck", place: "Erba", levels: "7–12" },
      { name: "Bellsprout", place: "Erba", levels: "7–12", version: "lge" },
    ],
    trainers: [
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "520£",
        version: "lgp",
        boss: "rival",
        team: [
          { name: "Pidgey", level: 12 },
          { name: "Oddish", level: 12 },
          { name: "Eevee", level: 13 },
        ],
      },
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "520£",
        version: "lge",
        boss: "rival",
        team: [
          { name: "Pidgey", level: 12 },
          { name: "Oddish", level: 12 },
          { name: "Pikachu", level: 13 },
        ],
      },
      {
        klass: "Recluta Rocket",
        name: "",
        reward: "308£",
        team: [
          { name: "Zubat", level: 11 },
          { name: "Koffing", level: 11 },
        ],
      },
    ],
  },
  {
    id: "percorso-25",
    name: "Percorso 25",
    kind: "route",
    part: 3,
    blurb: "Casa di Bill, biglietti nave, MT Tuononda e Movimento Sismico.",
    steps: [
      {
        text: "Fatevi avvistare dal Campeggiatore Tim tenendovi lontani: si sposta e sblocca la MT16 Tuononda dietro l’alberello.",
      },
      {
        text: "Sconfitta la Coach Verusca ricevete la MT15 Movimento Sismico.",
      },
      {
        text: "Nella casa dal tetto verde un Nidorino parlante è Bill, vittima di un esperimento. Aiutatelo al computer: vi dona i Biglietti nave per la Motonave Anna, al porto di Aranciopoli.",
      },
    ],
    items: [
      { name: "Superpozione", where: "Nord-ovest del Marmocchio Tobias" },
      { name: "MT16 Tuononda", where: "Dietro l’alberello (spostate Tim)" },
      { name: "Etere", where: "Sud-ovest della Teenager" },
      { name: "MT15 Movimento Sismico", where: "Donata dalla Coach Verusca" },
      { name: "Profumo invito", where: "Sud-est di Miramare" },
      { name: "Biglietti nave", where: "Donati da Bill" },
    ],
    encounters: [
      { name: "Venonat", place: "Erba", levels: "9–14" },
      { name: "Meowth", place: "Erba", levels: "9–14", version: "lge" },
      { name: "Oddish", place: "Erba", levels: "9–14", version: "lgp" },
      { name: "Psyduck", place: "Erba", levels: "9–14" },
      { name: "Squirtle", place: "Special spawn", levels: "9–14", special: true },
    ],
    trainers: [
      { klass: "Coach", name: "Verusca", reward: "1600£", team: [{ name: "Machop", level: 16 }] },
    ],
  },
  {
    id: "percorso-5-6",
    name: "Percorsi 5 e 6",
    kind: "route",
    part: 3,
    blurb: "Via Sotterranea tra Celestopoli e Aranciopoli.",
    steps: [
      {
        text: "Dal sud di Celestopoli il Percorso 5 porta alla Via Sotterranea. Dall’altra parte, il Percorso 6 sbuca ad Aranciopoli.",
      },
      {
        text: "In sotterranea ci sono oggetti e allenatori. È il collegamento più rapido tra le due città.",
      },
    ],
    items: [
      { name: "Baccabana ×3", where: "Percorso 5, ovest dell’entrata sotterranea" },
      { name: "Etere", where: "Percorso 5, sud-ovest del varco per Zafferanopoli" },
    ],
    encounters: [
      { name: "Oddish", place: "Erba", levels: "12–17", version: "lgp" },
      { name: "Bellsprout", place: "Erba", levels: "12–17", version: "lge" },
      { name: "Meowth", place: "Erba", levels: "12–17", version: "lge" },
      { name: "Psyduck", place: "Erba", levels: "12–17" },
    ],
    trainers: [],
  },
  {
    id: "aranciopoli",
    name: "Aranciopoli",
    kind: "town",
    part: 3,
    blurb: "Squirtle, Fan Club, porto e la Motonave Anna.",
    steps: [
      {
        text: "L’Agente Jenny a nord vi dona Squirtle. Nel Centro Pokémon un montanaro scambia Geodude per Geodude di Alola.",
      },
      {
        text: "Dietro la palestra: un Cinturanera (Pikachu) o una Bellezza (Eevee) vi dà Persian o Arcanine se avete catturato 5 Growlithe o 5 Meowth.",
      },
      {
        text: "Al Fan Club il presidente vi dona il completo Pikachu o Eevee. Al porto mostrate il biglietto: il marinaio vi dà il completo da marinaio.",
      },
      {
        text: "Dopo la nave, Rika sul molo vi sfida due volte: alla seconda lotta vi dona un Tappo d’argento. Poi la palestra, con Fendente sull’alberello.",
      },
    ],
    items: [
      { name: "Completo Pikachu", where: "Presidente Fan Club", version: "lgp" },
      { name: "Completo Eevee", where: "Presidente Fan Club", version: "lge" },
      { name: "Completo da marinaio", where: "Marinaio all’ingresso della nave" },
      { name: "Piumabella", where: "Il Compagno la trova tra i cespugli" },
      { name: "Revitalizzante", where: "Sud-est del furgone" },
      { name: "Tappo d’argento", where: "Dopo la lotta con Rika" },
    ],
    encounters: [
      { name: "Squirtle", place: "Regalo, Agente Jenny", levels: "16", gift: true },
      { name: "Persian", place: "Regalo (5 Growlithe catturati)", levels: "16", version: "lgp", gift: true },
      { name: "Arcanine", place: "Regalo (5 Meowth catturati)", levels: "16", version: "lge", gift: true },
      { name: "Geodude (Alola)", place: "Scambio con Geodude", levels: "16", gift: true },
    ],
    trainers: [
      {
        klass: "Allenatrice",
        name: "Rika",
        reward: "2640£",
        team: [
          { name: "Jigglypuff", level: 21 },
          { name: "Mr. Mime", level: 22 },
        ],
      },
    ],
  },
  {
    id: "motonave-anna",
    name: "Motonave Anna",
    kind: "building",
    part: 3,
    blurb: "Blu, mal di mare del capitano e la Tecnica Segreta Fendente.",
    steps: [
      {
        text: "Trace ringrazia per il biglietto. Blu vi dà uno Yantafrollino e parla del Team Rocket.",
      },
      {
        text: "La prima porta a destra è una ragazza che cura i vostri Pokémon. Visitate tutte le cabine.",
      },
      {
        text: "Trace ha già imparato Fendente dal capitano e vi sfida. Poi trovate il capitano con il mal di mare: una grattatina di schiena e insegna Fendente al Compagno.",
      },
      {
        text: "Ora potete tagliare gli alberelli. Lasciate salpare la nave e tornate al porto.",
      },
    ],
    items: [
      { name: "Cura Totale", where: "Piano −1, terza stanza da destra" },
      { name: "Elisir", where: "Piano −1, terza stanza da destra" },
      { name: "Superpozione", where: "Piano −1, quarta stanza da destra" },
      { name: "Yantafrollino", where: "Piano terra, donato da Blu" },
      { name: "Antiparalisi", where: "Piano terra, seconda stanza da sinistra" },
      { name: "Superrepellente", where: "Cucina, angolo sud-ovest" },
      { name: "Minifungo", where: "Cucina, cestino a sud" },
      { name: "Revitalizzante", where: "Primo piano, seconda stanza da sinistra" },
      { name: "Pepita", where: "Primo piano, quarta stanza da sinistra" },
      { name: "Baccananas ×3", where: "Prua, tavolo sud-ovest" },
    ],
    encounters: [],
    trainers: [
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "1260£",
        version: "lgp",
        boss: "rival",
        team: [
          { name: "Pidgeotto", level: 20 },
          { name: "Oddish", level: 20 },
          { name: "Eevee", level: 21 },
        ],
      },
      {
        klass: "Allenatore",
        name: "Trace",
        reward: "1260£",
        version: "lge",
        boss: "rival",
        team: [
          { name: "Pidgeotto", level: 20 },
          { name: "Oddish", level: 20 },
          { name: "Pikachu", level: 21 },
        ],
      },
    ],
  },
  {
    id: "palestra-aranciopoli",
    name: "Palestra Aranciopoli",
    kind: "gym",
    part: 3,
    blurb: "Lt. Surge. Due interruttori tra i bidoni spengono i fasci.",
    gym: {
      leader: "Lt. Surge",
      type: "Elettro",
      badge: "Medaglia Tuono",
      tm: "MT36 Fulmine",
      tip: "Cercate i due interruttori nei bidoni per spegnere i fasci elettromagnetici. Terra (Fossa, Diglett) annulla l’Elettro. Raichu è il vero problema.",
    },
    steps: [
      {
        text: "Tagliate l’alberello con Fendente. I fasci bloccano Surge: i due interruttori sono nascosti tra i bidoni.",
      },
      {
        text: "Con la Medaglia Tuono i Pokémon fino al liv. 36 obbediscono. Misty vi guida poi alla Grotta Diglett.",
      },
    ],
    items: [],
    encounters: [],
    trainers: [
      { klass: "Marinaio", name: "Aurelio", reward: "1320£", team: [{ name: "Magnemite", level: 22 }] },
      {
        klass: "Tecnico del suono",
        name: "Tullio",
        reward: "616£",
        team: [
          { name: "Voltorb", level: 22 },
          { name: "Voltorb", level: 22 },
        ],
      },
      { klass: "Gentiluomo", name: "Pierluigi", reward: "2640£", team: [{ name: "Pikachu", level: 22 }] },
      {
        klass: "Capopalestra",
        name: "Lt. Surge",
        reward: "4160£",
        boss: "gym",
        team: [
          { name: "Voltorb", level: 25 },
          { name: "Magnemite", level: 25 },
          { name: "Raichu", level: 26 },
        ],
      },
    ],
  },
];
