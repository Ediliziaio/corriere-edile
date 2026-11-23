import type { FullArticle } from "./types";

/** Articoli pubblicati dal settembre 2026 in avanti. */
export const ARTICLES_33_40: FullArticle[] = [
  {
    slug: "marcatura-ce-prodotti-costruzione-dop",
    category: "Normativa",
    title:
      "Marcatura CE dei prodotti da costruzione: cosa dice davvero la DoP e cosa rischia chi non la conserva",
    metaTitle: "Marcatura CE prodotti da costruzione: la DoP in cantiere",
    metaDescription:
      "Regolamento CPR 305/2011: cos'è la Dichiarazione di Prestazione, chi la rilascia, i sistemi AVCP, gli obblighi di impresa e distributore e le sanzioni del D.Lgs 106/2017.",
    keywords: [
      "marcatura CE prodotti da costruzione",
      "dichiarazione di prestazione DoP",
      "regolamento CPR 305/2011",
      "sistemi AVCP",
      "D.Lgs 106/2017 sanzioni",
    ],
    subtitle:
      "La marcatura CE su un prodotto da costruzione non certifica che sia buono: dichiara che le sue prestazioni sono state misurate con un metodo condiviso. Capire questa differenza è ciò che separa un capitolato solido da una contestazione in collaudo.",
    excerpt:
      "Cos'è la Dichiarazione di Prestazione, come si legge, quali sistemi di verifica esistono e quali documenti l'impresa deve conservare in cantiere per non rispondere in proprio.",
    published: "2026-09-01T14:00:00+02:00",
    updated: "2026-11-18T21:00:00+01:00",
    readingTime: 12,
    author: {
      name: "Federico Salvetti",
      role: "Redattore Prodotti & Materiali tecnici",
      bio: "Ingegnere dei materiali, scrive di serramenti, involucro edilizio e tecnologie per l'efficienza energetica. Ha lavorato in laboratori di prova e uffici tecnici, e valuta i prodotti sulla base di prestazioni dichiarate, certificazioni e comportamento reale in opera.",
    },
    image: "/images/articoli/marcatura-ce-prodotti-costruzione-dop.jpg",
    imageAlt:
      "Documentazione tecnica di prodotto da costruzione con marcatura CE e Dichiarazione di Prestazione",
    imageCaption:
      "La marcatura CE attesta come le prestazioni sono state misurate, non che il prodotto sia adatto al tuo impiego: quello lo decide il progetto.",
    summary: [
      "La marcatura CE dei prodotti da costruzione non è un marchio di qualità: attesta che le caratteristiche essenziali sono state determinate secondo una norma armonizzata e dichiarate dal fabbricante.",
      "Il documento che conta è la Dichiarazione di Prestazione (DoP), prevista dal Regolamento (UE) 305/2011: senza DoP il prodotto non può essere legittimamente immesso sul mercato per quell'uso.",
      "Il livello di controllo cambia con il sistema AVCP (1+, 1, 2+, 3, 4): solo nei sistemi più severi interviene un organismo notificato sul prodotto o sul processo di fabbrica.",
      "Adeguatezza all'uso e conformità sono cose diverse: la DoP dice quanto vale una prestazione, il progettista decide se quel valore basta per quell'opera.",
      "In Italia le violazioni sono sanzionate dal D.Lgs 106/2017 e riguardano anche distributori e importatori, non solo il fabbricante.",
    ],
    body: [
      {
        type: "p",
        text: "In cantiere la marcatura CE viene trattata come un timbro che mette al riparo: se il prodotto ce l'ha, si posa. È una semplificazione che regge finché non arriva una contestazione, perché la marcatura CE non dice che il prodotto è buono né che è adatto a quell'opera. Dice una cosa più limitata e più precisa: che le sue caratteristiche essenziali sono state misurate secondo un metodo condiviso in Europa, e che il fabbricante se ne assume la responsabilità dichiarandole.",
      },
      {
        type: "p",
        text: "La differenza sembra teorica, ma diventa concretissima quando un direttore lavori chiede la documentazione di un lotto, o quando in collaudo si scopre che il prodotto posato dichiarava prestazioni inferiori a quelle di capitolato.",
      },
      {
        type: "h2",
        text: "1. Cosa attesta la marcatura CE e cosa no",
        id: "cosa-attesta",
      },
      {
        type: "p",
        text: "Il quadro è fissato dal Regolamento (UE) 305/2011, noto come CPR (Construction Products Regulation), che dal 2013 ha sostituito la vecchia Direttiva 89/106/CEE. Il CPR non stabilisce quanto deve essere resistente un mattone: stabilisce come quella resistenza va misurata e dichiarata, lasciando ai singoli Stati e ai progettisti il compito di decidere quale valore serve.",
      },
      {
        type: "list",
        items: [
          "Attesta che le caratteristiche essenziali del prodotto sono state determinate secondo la norma armonizzata applicabile.",
          "Attesta che il fabbricante ha redatto la Dichiarazione di Prestazione e se ne assume la responsabilità.",
          "NON attesta che il prodotto sia di qualità superiore a un altro con la stessa marcatura.",
          "NON attesta che il prodotto sia adatto all'opera specifica: quella valutazione è del progettista.",
          "NON sostituisce le verifiche di posa: un prodotto conforme montato male non è un'opera conforme.",
        ],
      },
      {
        type: "quote",
        text: "Due prodotti marcati CE possono avere prestazioni molto diverse. La marcatura garantisce che siano confrontabili, non che siano equivalenti.",
      },
      {
        type: "h2",
        text: "2. La Dichiarazione di Prestazione: il documento che conta",
        id: "dop",
      },
      {
        type: "p",
        text: "La DoP è il cuore del sistema. Redigerla è condizione per apporre la marcatura CE, e il fabbricante deve renderla disponibile in copia cartacea o elettronica; la normativa europea ammette anche la messa a disposizione su sito web, a determinate condizioni. Chi acquista ha diritto di ottenerla.",
      },
      {
        type: "p",
        text: "Gli elementi che vanno letti per primi, quando arriva una DoP:",
      },
      {
        type: "list",
        items: [
          "Codice di identificazione unico del prodotto-tipo e riferimento del lotto: serve a collegare la dichiarazione al materiale realmente consegnato.",
          "Uso o usi previsti secondo la norma armonizzata: è il punto in cui si verifica se il prodotto è documentato per l'impiego che se ne vuole fare.",
          "Norma armonizzata di riferimento: deve essere coerente con la destinazione d'uso, non semplicemente «presente».",
          "Caratteristiche essenziali con le prestazioni dichiarate: i numeri che finiscono in capitolato.",
          "La dicitura NPD (Nessuna Prestazione Determinata) dove il fabbricante non dichiara nulla: se compare su una caratteristica che serve al progetto, quel prodotto non è utilizzabile per quello scopo.",
          "Sistema di valutazione e verifica applicato e, dove previsto, l'organismo notificato intervenuto.",
        ],
      },
      {
        type: "p",
        text: "L'NPD è la voce che genera più equivoci. Non è un difetto né un'irregolarità: è una scelta legittima del fabbricante di non dichiarare una prestazione, spesso perché non rilevante nel mercato di destinazione. Diventa un problema solo quando riguarda proprio la caratteristica su cui si regge il progetto.",
      },
      {
        type: "h2",
        text: "3. I sistemi AVCP: quanto controllo c'è davvero dietro",
        id: "sistemi-avcp",
      },
      {
        type: "p",
        text: "Non tutti i prodotti marcati CE hanno lo stesso livello di verifica alle spalle. Il CPR prevede cinque sistemi di valutazione e verifica della costanza della prestazione, scelti in base alla criticità del prodotto per la sicurezza. È l'informazione che dice quanto peso ha davvero quella dichiarazione.",
      },
      {
        type: "table",
        caption: "Sistemi AVCP previsti dal CPR, dal più severo al meno severo",
        head: ["Sistema", "Chi verifica", "Impiego tipico"],
        rows: [
          ["1+", "Organismo notificato: certificazione del prodotto, ispezione della fabbrica e prove a campione sul mercato", "Prodotti critici per la sicurezza strutturale o antincendio"],
          ["1", "Organismo notificato: certificazione del prodotto e sorveglianza del controllo di produzione", "Prodotti con rilevanza strutturale o di sicurezza"],
          ["2+", "Organismo notificato sul controllo di produzione in fabbrica; prove a carico del fabbricante", "Molti prodotti strutturali e da involucro"],
          ["3", "Laboratorio notificato per le prove iniziali di tipo; il resto è del fabbricante", "Prodotti con caratteristiche da determinare con prova"],
          ["4", "Interamente a carico del fabbricante", "Prodotti a basso rischio"],
        ],
      },
      {
        type: "p",
        text: "Leggere il sistema AVCP prima di accettare una fornitura evita l'errore più comune in fase di acquisto: dare per scontato che dietro ogni marcatura CE ci sia un ente terzo. Nel sistema 4 non c'è.",
      },
      {
        type: "h2",
        text: "4. Chi risponde: fabbricante, importatore, distributore, impresa",
        id: "responsabilita",
      },
      {
        type: "p",
        text: "Il CPR distribuisce obblighi lungo tutta la filiera, e questo è il punto che le imprese sottovalutano di più.",
      },
      {
        type: "list",
        items: [
          "Il fabbricante redige la DoP, appone la marcatura CE e conserva la documentazione tecnica per il periodo previsto.",
          "L'importatore che introduce nel mercato UE un prodotto extraeuropeo verifica che il fabbricante abbia adempiuto e risponde in proprio se immette prodotti privi dei requisiti.",
          "Il distributore deve accertarsi che il prodotto rechi la marcatura CE e sia accompagnato dai documenti richiesti, e non può fornire ciò che sa non conforme.",
          "Chi immette un prodotto con il proprio nome o marchio assume gli obblighi del fabbricante, anche se non lo ha materialmente prodotto.",
          "L'impresa esecutrice non è un semplice utilizzatore: deve poter dimostrare cosa ha posato, quindi raccogliere e conservare DoP e documenti di trasporto collegati ai lotti.",
        ],
      },
      {
        type: "p",
        text: "In Italia l'apparato sanzionatorio per le violazioni del CPR è stabilito dal D.Lgs 106/2017, che prevede sanzioni amministrative e, nei casi più gravi, penali, riferite anche a distributori e importatori. Non è materia che riguarda solo chi fabbrica.",
      },
      {
        type: "h2",
        text: "5. Cosa conservare in cantiere, in pratica",
        id: "cosa-conservare",
      },
      {
        type: "p",
        text: "La regola operativa è semplice: al momento del collaudo deve essere possibile ricostruire, per ogni prodotto rilevante, cosa è stato posato e con quali prestazioni dichiarate. Il fascicolo minimo:",
      },
      {
        type: "list",
        items: [
          "DoP di ciascun prodotto rilevante, riferita alla norma coerente con l'impiego.",
          "Documenti di trasporto e riferimenti di lotto che permettano di collegare la DoP al materiale effettivamente consegnato.",
          "Schede tecniche e istruzioni di posa del fabbricante, che spesso condizionano la validità delle prestazioni dichiarate.",
          "Eventuali rapporti di prova richiamati, quando il capitolato impone valori specifici.",
          "Per i prodotti non coperti da norma armonizzata, la Valutazione Tecnica Europea (ETA) se il fabbricante ha scelto quella strada.",
        ],
      },
      {
        type: "p",
        text: "Raccogliere questi documenti alla consegna costa pochi minuti. Ricostruirli due anni dopo, con un fornitore cambiato e un lotto esaurito, spesso è impossibile: ed è esattamente il momento in cui servono. Prima dell’acquisto, collega gli allegati alla [richiesta di offerta al fornitore](/articolo/richiesta-offerta-fornitori-edili-documenti/), così le risposte restano riferite allo stesso prodotto e alla stessa revisione della richiesta.",
      },
      {
        type: "h2",
        text: "6. Il quadro europeo si sta muovendo",
        id: "nuovo-cpr",
      },
      {
        type: "p",
        text: "Il Regolamento (UE) 305/2011 è stato oggetto di una revisione complessiva a livello europeo, con un nuovo regolamento sui prodotti da costruzione adottato a fine 2024 e destinato a subentrare attraverso un periodo di transizione lungo. Nel frattempo i prodotti coperti dalle norme armonizzate esistenti continuano a seguire il quadro consolidato descritto qui.",
      },
      {
        type: "p",
        text: "Per un'impresa la conseguenza pratica è una sola: le DoP raccolte oggi restano valide, ma nei prossimi anni conviene verificare periodicamente che la norma richiamata in capitolato non sia stata sostituita. Un capitolato che cita una norma ritirata è un capitolato che invecchia male.",
      },
    ],
    faqs: [
      {
        q: "La marcatura CE garantisce che un prodotto da costruzione sia di qualità?",
        a: "No. La marcatura CE attesta che le caratteristiche essenziali del prodotto sono state determinate secondo la norma armonizzata applicabile e dichiarate dal fabbricante nella Dichiarazione di Prestazione. Due prodotti marcati CE possono avere prestazioni molto diverse: la marcatura li rende confrontabili, non equivalenti. L'adeguatezza all'opera specifica è una valutazione del progettista.",
      },
      {
        q: "Cos'è la DoP e chi deve rilasciarla?",
        a: "La Dichiarazione di Prestazione è il documento previsto dal Regolamento (UE) 305/2011 con cui il fabbricante dichiara le prestazioni delle caratteristiche essenziali del prodotto e se ne assume la responsabilità. La redige il fabbricante, ed è condizione per apporre la marcatura CE. Chi acquista ha diritto di ottenerla, in forma cartacea o elettronica.",
      },
      {
        q: "Cosa significa NPD in una Dichiarazione di Prestazione?",
        a: "NPD sta per Nessuna Prestazione Determinata e indica che il fabbricante non dichiara alcun valore per quella caratteristica. Non è un'irregolarità: è una scelta legittima. Diventa un problema quando riguarda proprio la caratteristica su cui si basa il progetto, perché in quel caso il prodotto non risulta documentato per quell'impiego.",
      },
      {
        q: "Cosa sono i sistemi AVCP 1+, 1, 2+, 3 e 4?",
        a: "Sono i cinque sistemi di valutazione e verifica della costanza della prestazione previsti dal CPR, ordinati per severità. Nel sistema 1+ un organismo notificato certifica il prodotto, ispeziona la fabbrica ed esegue prove a campione; nel sistema 4 tutte le verifiche sono a carico del fabbricante, senza intervento di enti terzi. Il sistema applicato è indicato nella DoP.",
      },
      {
        q: "Quali documenti deve conservare l'impresa che posa il prodotto?",
        a: "Le Dichiarazioni di Prestazione dei prodotti rilevanti, i documenti di trasporto con i riferimenti di lotto che li collegano al materiale consegnato, le schede tecniche e le istruzioni di posa del fabbricante, e gli eventuali rapporti di prova richiamati dal capitolato. Servono a dimostrare in collaudo cosa è stato effettivamente posato.",
      },
    ],
    tags: [
      "marcatura CE",
      "CPR 305/2011",
      "Dichiarazione di Prestazione",
      "capitolato",
      "materiali da costruzione",
    ],
    related: [
      "pietra-naturale-cantiere-marcatura-ce-spessori",
      "posa-in-opera-serramenti-uni-11673",
      "migliori-materiali-isolanti-2026",
    ],
  },
  {
    slug: "pietra-naturale-cantiere-marcatura-ce-spessori",
    category: "Prodotti & Materiali",
    title:
      "Pietra naturale in cantiere: marcatura CE, spessori e posa. Cosa verificare a Marmomac 2026",
    metaTitle: "Pietra naturale: marcatura CE, spessori e posa in opera",
    metaDescription:
      "Marcatura CE, DoP, norme EN 1469 e EN 12058, spessori per pavimenti e facciate, ancoraggi e prove: la checklist tecnica per acquistare pietra naturale a Marmomac 2026.",
    keywords: [
      "marcatura CE pietra naturale",
      "EN 1469 lastre rivestimento",
      "EN 12058 pavimenti pietra",
      "spessore lastre facciata ventilata",
      "marmomac 2026",
    ],
    subtitle:
      "Dal 22 al 25 settembre Veronafiere riunisce la filiera lapidea mondiale. Per un'impresa o un ufficio tecnico la fiera non è una passerella di campionari: è l'occasione per verificare dichiarazioni di prestazione, valori di resistenza e sistemi di ancoraggio prima di metterli in capitolato.",
    excerpt:
      "Marcatura CE, DoP, norme armonizzate, spessori minimi e ancoraggi: la guida tecnica per valutare fornitori e materiali lapidei a Marmomac 2026 senza sorprese in cantiere.",
    published: "2026-09-01T07:30:00+02:00",
    updated: "2026-09-01T07:30:00+02:00",
    readingTime: 11,
    author: {
      name: "Federico Salvetti",
      role: "Redattore Prodotti & Materiali tecnici",
      bio: "Ingegnere dei materiali, scrive di serramenti, involucro edilizio e tecnologie per l'efficienza energetica. Ha lavorato in laboratori di prova e uffici tecnici, e valuta i prodotti sulla base di prestazioni dichiarate, certificazioni e comportamento reale in opera.",
    },
    image: "/images/articoli/pietra-naturale-cantiere-marcatura-ce-spessori.jpg",
    imageAlt:
      "Lastre di pietra naturale in lavorazione, con riferimento alle prove di resistenza e alla marcatura CE",
    imageCaption:
      "La pietra naturale è un prodotto da costruzione: in cantiere valgono le prestazioni dichiarate, non l'aspetto del campione.",
    summary: [
      "La pietra naturale destinata a rivestimenti, pavimenti e scale è un prodotto da costruzione soggetto a marcatura CE secondo il Regolamento UE 305/2011: il fornitore deve rilasciare la Dichiarazione di Prestazione (DoP).",
      "Le norme armonizzate di riferimento sono EN 1469 per le lastre di rivestimento murale, EN 12058 per lastre da pavimento e scale, EN 12057 per le marmette modulari ed EN 12059 per gli elementi lavorati.",
      "I valori che contano in capitolato sono resistenza a flessione (EN 12372), assorbimento d'acqua (EN 13755), massa volumica e porosità (EN 1936), resistenza al gelo (EN 12371) e scivolosità.",
      "Nessuna tabella sostituisce il calcolo: lo spessore di una lastra in facciata dipende da carico del vento, interasse degli ancoraggi e resistenza a flessione della specifica pietra, non dal tipo di materiale in generale.",
      "A Marmomac (Veronafiere, 22–25 settembre 2026) conviene chiedere DoP, rapporti di prova e schede di posa: sono i documenti che poi servono in cantiere e in collaudo.",
    ],
    body: [
      {
        type: "p",
        text: "Marmomac è la fiera in cui la pietra naturale si mostra al meglio: lastre lucidate, installazioni di design, materiali che in stand sembrano tutti eccellenti. Il problema è che in cantiere una lastra non viene giudicata per come appare sotto i faretti, ma per come si comporta sotto carico, sotto pioggia e sotto gelo. La differenza tra una fornitura che regge vent'anni e una che si distacca o si macchia dopo due inverni sta quasi sempre in documenti che nessuno guarda in fiera.",
      },
      {
        type: "p",
        text: "Questa guida non elenca gli espositori: mette in fila le verifiche tecniche che un'impresa, un direttore lavori o un ufficio acquisti dovrebbe fare prima di inserire un materiale lapideo in capitolato. Vale a Marmomac come davanti a qualsiasi fornitore.",
      },
      {
        type: "h2",
        text: "1. La pietra è un prodotto da costruzione, non un arredo",
        id: "prodotto-da-costruzione",
      },
      {
        type: "p",
        text: "Quando la pietra naturale è destinata a essere incorporata in modo permanente in un'opera — rivestimenti, pavimenti, scale, davanzali, facciate — ricade nel Regolamento (UE) 305/2011 sui prodotti da costruzione. Questo significa marcatura CE e Dichiarazione di Prestazione (DoP) rilasciata dal fabbricante, che dichiara i valori delle caratteristiche essenziali del prodotto.",
      },
      {
        type: "p",
        text: "La DoP non è un certificato di qualità né una garanzia commerciale: è una dichiarazione di responsabilità con cui il fabbricante attesta prestazioni misurate. Se un fornitore non è in grado di consegnarla, il problema non è burocratico — è che quel materiale non può essere legittimamente messo in opera in quell'applicazione.",
      },
      {
        type: "h2",
        text: "2. Quale norma si applica al pezzo che stai comprando",
        id: "norme-armonizzate",
      },
      {
        type: "p",
        text: "L'errore più comune è chiedere genericamente «la certificazione». Le norme armonizzate cambiano in base alla destinazione d'uso del pezzo, e la DoP deve citare quella giusta:",
      },
      {
        type: "table",
        caption: "Norme armonizzate per i principali prodotti in pietra naturale",
        head: ["Norma", "Prodotto", "Uso tipico in cantiere"],
        rows: [
          ["EN 1469", "Lastre per rivestimento murale", "Facciate ventilate, rivestimenti interni ed esterni"],
          ["EN 12058", "Lastre per pavimentazioni e scale", "Pavimenti interni ed esterni, pedate e alzate"],
          ["EN 12057", "Marmette modulari", "Pavimenti di formato ridotto, spessori contenuti"],
          ["EN 12059", "Elementi lavorati (dimensional stone)", "Davanzali, soglie, cornici, elementi su misura"],
          ["EN 12326", "Ardesia e pietre naturali per coperture", "Coperture discontinue e rivestimenti"],
        ],
      },
      {
        type: "p",
        text: "Verificare che la DoP citi la norma coerente con l'impiego reale è la prima cosa da fare. Una lastra dichiarata secondo EN 12058 e usata come rivestimento di facciata ventilata non è documentata per quell'uso, anche se materialmente è la stessa pietra.",
      },
      {
        type: "h2",
        text: "3. I valori che contano davvero in capitolato",
        id: "valori-tecnici",
      },
      {
        type: "p",
        text: "Dentro la DoP e nei rapporti di prova ci sono i numeri che determinano se una pietra è adatta. Questi sono quelli su cui si decide:",
      },
      {
        type: "list",
        items: [
          "Resistenza a flessione sotto carico concentrato (EN 12372): è il parametro che governa lo spessore in facciata e la distanza tra gli ancoraggi. Va sempre letto insieme al valore minimo atteso, non solo alla media.",
          "Assorbimento d'acqua a pressione atmosferica (EN 13755): valori alti indicano porosità elevata, quindi maggiore rischio di macchie, efflorescenze e degrado da gelo.",
          "Massa volumica apparente e porosità aperta (EN 1936): incidono su peso proprio della facciata, comportamento termico e durabilità.",
          "Resistenza al gelo (EN 12371): indispensabile per esterni in climi continentali e montani; da richiedere con il numero di cicli effettivamente eseguiti.",
          "Resistenza allo scivolamento: per pavimenti e scale, soprattutto esterni e ambienti pubblici, va richiesta la classificazione ottenuta con il metodo dichiarato in DoP.",
          "Resistenza all'abrasione: rilevante nei pavimenti ad alto traffico, dove la finitura superficiale si consuma prima del materiale.",
        ],
      },
      {
        type: "quote",
        text: "Il valore che conta non è la media dichiarata nella scheda commerciale, ma il valore caratteristico usato nel calcolo: è quello che regge quando il vento spinge sulla lastra più esposta della facciata.",
      },
      {
        type: "h2",
        text: "4. Spessori: perché la tabella non basta",
        id: "spessori",
      },
      {
        type: "p",
        text: "Gli spessori che circolano nella pratica sono utili come ordine di grandezza, ma non sostituiscono la verifica. Vanno letti come punto di partenza per il dimensionamento, non come prescrizione:",
      },
      {
        type: "table",
        caption:
          "Spessori indicativi di pratica corrente — da confermare sempre con calcolo e indicazioni del fornitore",
        head: ["Applicazione", "Ordine di grandezza", "Cosa determina il valore reale"],
        rows: [
          ["Marmette modulari interne", "fino a circa 12 mm", "Formato ridotto e posa aderente su massetto idoneo"],
          ["Pavimento interno", "circa 20 mm", "Traffico previsto, tipo di posa, planarità del supporto"],
          ["Pavimento esterno e alto traffico", "20–30 mm e oltre", "Carichi, gelo, tipo di sottofondo, drenaggio"],
          ["Pedate di scala", "circa 30 mm", "Luce libera, sbalzo del naso, carichi concentrati"],
          ["Rivestimento in facciata ventilata", "da definire per calcolo", "Carico del vento, interasse ancoraggi, resistenza a flessione della pietra"],
        ],
      },
      {
        type: "p",
        text: "Sulla facciata in particolare non esiste uno spessore «standard» per materiale: due graniti diversi, con resistenze a flessione diverse, richiedono spessori diversi a parità di ancoraggi e di zona di vento. Chiedere al fornitore lo spessore «che si usa di solito» è il modo più rapido per spostare un rischio strutturale su chi posa.",
      },
      {
        type: "h2",
        text: "5. Ancoraggi e sistemi di posa: dove nascono i problemi",
        id: "ancoraggi-posa",
      },
      {
        type: "p",
        text: "La posa aderente con adesivo cementizio è la soluzione più diffusa per pavimenti e rivestimenti a quota accessibile, ed è governata dalla scelta corretta della classe di adesivo e dalla preparazione del supporto. In facciata, oltre una certa altezza, la posa aderente non è più accettabile come unica soluzione: si passa ai sistemi meccanici.",
      },
      {
        type: "list",
        items: [
          "Ancoraggi a vista (grappe, staffe): economici e ispezionabili, ma incidono sull'aspetto e richiedono tolleranze precise.",
          "Ancoraggi a scomparsa in foro laterale (kerf): la lastra viene incisa sul fianco e alloggiata su profili continui o puntuali.",
          "Ancoraggi a foro cieco (undercut): distribuiscono il carico su punti interni alla lastra, richiedono foratura controllata in stabilimento.",
          "Sottostruttura in alluminio o acciaio: va verificata insieme alla lastra, perché il comportamento del sistema dipende dall'insieme, non dal singolo componente.",
        ],
      },
      {
        type: "p",
        text: "Il punto critico è che lastra, ancoraggio e sottostruttura vanno valutati come sistema. Un ancoraggio eccellente su una pietra con bassa resistenza a flessione, o con un interasse troppo largo, non risolve nulla: sposta soltanto il punto di rottura.",
      },
      {
        type: "h2",
        text: "6. Cosa chiedere allo stand, in concreto",
        id: "checklist-fiera",
      },
      {
        type: "p",
        text: "Una visita utile a Marmomac si misura dai documenti che ti porti a casa, non dai campioni. La richiesta minima da fare a ogni fornitore che entra in short list:",
      },
      {
        type: "list",
        items: [
          "Dichiarazione di Prestazione (DoP) riferita alla norma coerente con l'uso previsto.",
          "Rapporti di prova originali, con laboratorio, data e metodo, non solo la scheda commerciale riassuntiva.",
          "Valori di resistenza a flessione con indicazione del valore caratteristico, non della sola media.",
          "Scheda di posa e raccomandazioni del produttore su adesivi, ancoraggi e trattamenti superficiali ammessi.",
          "Indicazioni su manutenzione e pulizia: molti contenziosi nascono da detergenti aggressivi su pietre sensibili agli acidi.",
          "Continuità di fornitura e blocco/lotto: la variabilità cromatica tra lotti diversi è una caratteristica della pietra naturale, non un difetto, ma va gestita in fase di ordine.",
        ],
      },
      {
        type: "h2",
        text: "7. Perché la fiera resta utile a chi lavora in cantiere",
        id: "perche-andare",
      },
      {
        type: "p",
        text: "Marmomac concentra in quattro giorni ciò che altrimenti richiede mesi di visite: cave, trasformatori, produttori di sistemi di ancoraggio, utensili e macchine per la lavorazione. Per un'impresa il valore non è scoprire un materiale nuovo, ma poter mettere a confronto nello stesso pomeriggio più fornitori sugli stessi parametri e capire chi è attrezzato per documentare quello che vende.",
      },
      {
        type: "p",
        text: "L'edizione 2026 si tiene a Veronafiere dal 22 al 25 settembre. Chi ci va con una lista di verifiche in tasca torna con dati confrontabili; chi ci va senza torna con una borsa di cataloghi.",
      },
    ],
    faqs: [
      {
        q: "La pietra naturale deve avere la marcatura CE?",
        a: "Sì, quando è destinata a essere incorporata in modo permanente in un'opera — rivestimenti, pavimenti, scale, elementi di facciata — ricade nel Regolamento (UE) 305/2011 e richiede marcatura CE con Dichiarazione di Prestazione rilasciata dal fabbricante. La DoP deve citare la norma armonizzata coerente con la destinazione d'uso reale del pezzo.",
      },
      {
        q: "Qual è lo spessore minimo di una lastra in facciata ventilata?",
        a: "Non esiste uno spessore valido in generale. Va determinato per calcolo, perché dipende dal carico del vento della zona, dall'interasse degli ancoraggi e dalla resistenza a flessione della specifica pietra misurata secondo EN 12372. Due materiali dello stesso tipo commerciale possono richiedere spessori diversi.",
      },
      {
        q: "Che differenza c'è tra EN 1469 e EN 12058?",
        a: "EN 1469 riguarda le lastre di pietra naturale per rivestimento murale, quindi facciate e rivestimenti verticali. EN 12058 riguarda le lastre per pavimentazioni e scale. È la destinazione d'uso a determinare quale norma deve comparire nella Dichiarazione di Prestazione: usare un prodotto dichiarato per una norma in un'applicazione diversa lascia l'impiego privo di copertura documentale.",
      },
      {
        q: "Quali documenti conviene chiedere a un fornitore in fiera?",
        a: "Dichiarazione di Prestazione riferita alla norma corretta, rapporti di prova originali con laboratorio e metodo, valore caratteristico di resistenza a flessione, scheda di posa con adesivi e ancoraggi ammessi, indicazioni di manutenzione e informazioni su lotto e continuità di fornitura.",
      },
      {
        q: "Quando si tiene Marmomac 2026?",
        a: "Marmomac 2026 si svolge a Veronafiere dal 22 al 25 settembre 2026. È la fiera internazionale dedicata alla pietra naturale, alle tecnologie di lavorazione e alle applicazioni in edilizia, architettura e design.",
      },
    ],
    tags: [
      "pietra naturale",
      "marcatura CE",
      "facciata ventilata",
      "capitolato",
      "Marmomac",
    ],
    related: [
      "marmomac-2026-verona-pietra-naturale",
      "posa-in-opera-serramenti-uni-11673",
      "migliori-materiali-isolanti-2026",
    ],
  },
  {
  "slug": "appalti-privati-intercettare-commesse",
  "title": "Appalti privati: trovare e valutare le commesse edili",
  "published": "2026-09-14T14:00:00+02:00",
  "image": "/images/articoli/appalti-privati-intercettare-commesse.jpg",
  "category": "Mercato",
  "metaTitle": "Appalti privati: trovare e valutare le commesse edili",
  "metaDescription": "Come valutare una commessa privata prima del preventivo: domande, sopralluogo, referenze e scheda CSV per decidere quando preparare un’offerta.",
  "keywords": [
    "appalti privati edilizia",
    "valutare commesse edili"
  ],
  "subtitle": "Come valutare una commessa privata prima del preventivo: domande, sopralluogo, referenze e scheda CSV per decidere quando preparare un’offerta.",
  "excerpt": "Come valutare una commessa privata prima del preventivo: domande, sopralluogo, referenze e scheda CSV per decidere quando preparare un’offerta.",
  "updated": "2026-11-23T20:45:52+01:00",
  "readingTime": 12,
  "author": {
    "name": "Redazione Corriere Edile",
    "role": "Redazione",
    "bio": "La redazione di Corriere Edile segue mercato, forniture e organizzazione del lavoro nelle costruzioni."
  },
  "imageAlt": "Preparazione delle informazioni per una commessa edile",
  "imageCaption": "",
  "summary": [
    "Un'impresa può ricevere molte richieste e acquisire poche commesse sostenibili. Il problema spesso nasce prima del prezzo: manca una descrizione condivisa del lavoro, non è chiaro chi decide oppure la data richiesta non è compatibile con le squadre disponibili. Cercare appalti privati significa quindi riconoscere opportunità concrete, presentare esperienze pertinenti e capire quando conviene investire tempo in un'offerta. Questa guida propone un metodo di organizzazione commerciale, con un caso inventato e una scheda utilizzabile in azienda.",
    "Esempi originali con ipotesi esplicite e un modello CSV disponibile senza registrazione."
  ],
  "body": [
    {
      "type": "p",
      "text": "Un'impresa può ricevere molte richieste e acquisire poche commesse sostenibili. Il problema spesso nasce prima del prezzo: manca una descrizione condivisa del lavoro, non è chiaro chi decide oppure la data richiesta non è compatibile con le squadre disponibili. Cercare appalti privati significa quindi riconoscere opportunità concrete, presentare esperienze pertinenti e capire quando conviene investire tempo in un'offerta. Questa guida propone un metodo di organizzazione commerciale, con un caso inventato e una scheda utilizzabile in azienda."
    },
    {
      "type": "p",
      "text": "Il metodo riguarda il rapporto operativo tra impresa e potenziale committente. Per stabilire quali regole si applicano a un affidamento particolare, soprattutto in presenza di soggetti, finanziamenti o obblighi pubblici, occorre una verifica specifica. La parola «privato» nella richiesta non basta a risolvere ogni questione contrattuale. Qui il punto di partenza è più semplice: raccogliere le informazioni necessarie prima di promettere prezzo, tempi e disponibilità."
    },
    {
      "type": "h2",
      "text": "Prima domanda: quale lavoro sappiamo eseguire bene?",
      "id": "prima-domanda-quale-lavoro-sappiamo-eseguire-bene"
    },
    {
      "type": "p",
      "text": "Un elenco di aziende della provincia non è ancora un mercato da affrontare. Parti dalle lavorazioni per cui hai persone, attrezzature e referenze documentabili. Un'impresa organizzata per ristrutturare appartamenti abitati potrebbe non essere pronta per lavorare in uno stabilimento durante una fermata produttiva. Cambiano accessi, coordinamento, continuità delle attività e conseguenze di un ritardo. Scrivi queste differenze prima di cercare nuovi contatti."
    },
    {
      "type": "p",
      "text": "Prepara una pagina interna con tre esempi di intervento adatto e tre situazioni che richiedono una valutazione ulteriore. Per ogni esempio indica area servita, dimensione gestibile, lavorazioni incluse, eventuali partner e settimane nelle quali puoi avviare il cantiere. Non serve pubblicare una fascia di fatturato o inventare specializzazioni. Serve permettere a chi risponde al telefono di capire quando coinvolgere subito il responsabile tecnico."
    },
    {
      "type": "p",
      "text": "La disponibilità deve avere una data. «Possiamo farlo» è diverso da «possiamo iniziare dopo il rilascio del progetto esecutivo, con una squadra dedicata nella finestra concordata». Quando l'interlocutore conosce il tuo perimetro, può chiederti un confronto pertinente. Quando trova soltanto «edilizia a 360 gradi», deve ricostruire da solo cosa sai fare e con quali limiti."
    },
    {
      "type": "h2",
      "text": "Dove trovare opportunità senza scambiare un segnale per una commessa",
      "id": "dove-trovare-opportunita-senza-scambiare-un-segnale-per-una-commessa"
    },
    {
      "type": "p",
      "text": "Le occasioni possono arrivare da clienti esistenti, studi tecnici, amministratori, fornitori e imprese con lavorazioni complementari. Anche una notizia pubblicata dalla proprietà può segnalare un progetto da approfondire. Tuttavia l'annuncio di una nuova sede non dimostra che esistano già budget approvato, capitolato e affidamento aperto. Registra il fatto osservato separatamente dalla tua ipotesi commerciale."
    },
    {
      "type": "p",
      "text": "Un registro utile contiene fonte, data, intervento ipotizzato, informazione mancante e prossimo passo. Per esempio: «Comunicato della società: trasferimento previsto; da verificare se i lavori siano già affidati». È una nota migliore di «nuovo cantiere certo». Evita di attribuire intenzioni a chi non le ha espresse e ti impedisce di riempire le previsioni di vendita con opportunità mai confermate."
    },
    {
      "type": "p",
      "text": "Privilegia canali nei quali il contatto e la richiesta siano pertinenti: presentazioni concordate, incontri di settore, moduli dedicati ai fornitori o comunicazioni sollecitate dal committente. Prima di usare dati personali e campagne commerciali, fai verificare modalità e presupposti applicabili. Una banca dati più grande non compensa un messaggio fuori contesto. La qualità del contatto si vede dalla possibilità di discutere un bisogno reale, non dal numero di indirizzi raccolti."
    },
    {
      "type": "h2",
      "text": "Le otto informazioni da raccogliere al primo confronto",
      "id": "le-otto-informazioni-da-raccogliere-al-primo-confronto"
    },
    {
      "type": "p",
      "text": "La prima conversazione deve ridurre l'incertezza. Chiedi dove si trova l'immobile e come viene utilizzato, quale risultato si vuole ottenere, quali elaborati sono disponibili e chi segue il progetto. Chiarisci inoltre la data desiderata, l'eventuale limite economico dichiarato, il processo di selezione e la persona che approverà l'offerta. Se una risposta manca, scrivi «da acquisire»: lasciare un campo vuoto è meglio che trasformare una supposizione in un dato."
    },
    {
      "type": "p",
      "text": "Non tutti gli interlocutori devono conoscere subito ogni dettaglio. Un amministratore può dover raccogliere una decisione dei proprietari; uno studio può essere ancora alla fattibilità; il responsabile di un'attività può conoscere bene il problema ma non le lavorazioni necessarie. In questi casi proponi il passaggio successivo adatto: raccolta documenti, sopralluogo o confronto con il progettista. Inviare immediatamente un prezzo può anticipare una decisione ancora priva di oggetto."
    },
    {
      "type": "p",
      "text": "Annota anche ciò che il committente considera irrinunciabile. «Finire entro agosto» può significare riaprire un negozio, liberare un appartamento o coordinarsi con un trasloco. La motivazione permette di valutare alternative praticabili. Se non puoi garantire la finestra richiesta, dichiaralo presto: una data irrealistica non diventa sostenibile perché compare in un preventivo ben impaginato."
    },
    {
      "type": "h2",
      "text": "Una matrice semplice per decidere se preparare l'offerta",
      "id": "una-matrice-semplice-per-decidere-se-preparare-l-offerta"
    },
    {
      "type": "p",
      "text": "Valuta cinque aspetti: coerenza con le tue competenze, chiarezza del lavoro, accesso alle informazioni, compatibilità delle risorse e processo di decisione. Per ciascuno usa tre stati: verificato, incompleto, incompatibile. Questa classificazione è una proposta organizzativa della redazione, non un modello statistico che prevede la probabilità di aggiudicazione. Serve a rendere esplicito il motivo della scelta."
    },
    {
      "type": "table",
      "head": [
        "Aspetto",
        "Domanda operativa",
        "Prova da conservare"
      ],
      "rows": [
        [
          "Competenze",
          "Abbiamo eseguito lavorazioni comparabili?",
          "Scheda di una referenza pertinente"
        ],
        [
          "Perimetro",
          "Possiamo descrivere inclusioni ed esclusioni?",
          "Elaborati e verbale del confronto"
        ],
        [
          "Informazioni",
          "Possiamo visitare e porre domande?",
          "Appuntamento e referente tecnico"
        ],
        [
          "Risorse",
          "Squadre e forniture sono compatibili con la finestra?",
          "Verifica interna delle disponibilità"
        ],
        [
          "Decisione",
          "Chi approva e con quali passaggi?",
          "Processo confermato dall'interlocutore"
        ]
      ]
    },
    {
      "type": "p",
      "text": "Un'informazione incompleta richiede una domanda; un'incompatibilità richiede una scelta. Non sommare punteggi per nascondere un problema decisivo. Quattro aspetti positivi non compensano una scadenza impossibile o una lavorazione che non puoi assumere. Puoi proporre un lotto diverso, una collaborazione definita oppure rinunciare. La rinuncia motivata libera capacità per richieste che hanno maggiori possibilità di diventare lavori eseguibili."
    },
    {
      "type": "h2",
      "text": "Caso illustrativo: rinnovare un ufficio durante l'attività",
      "id": "caso-illustrativo-rinnovare-un-ufficio-durante-l-attivita"
    },
    {
      "type": "p",
      "text": "Immaginiamo una piccola impresa invitata a presentare un'offerta per un ufficio di 180 metri quadrati. La richiesta iniziale comprende nuove divisioni, finiture e adeguamenti impiantistici, con locali parzialmente occupati. Sono dati inventati per spiegare il metodo: non rappresentano un cantiere seguito dalla redazione e non definiscono prezzi medi. Prima del computo emergono tre questioni: aree disponibili, fasi di lavoro e responsabilità degli elaborati impiantistici."
    },
    {
      "type": "p",
      "text": "L'impresa propone un sopralluogo con il referente dell'ufficio e il progettista. Durante l'incontro si scopre che una sala deve restare accessibile e che il percorso per movimentare i materiali attraversa uno spazio comune. Questi elementi entrano nel verbale. La data di avvio resta condizionata alla conferma delle fasi e all'acquisizione delle informazioni mancanti. Non viene presentata come già garantita."
    },
    {
      "type": "p",
      "text": "Il responsabile commerciale stima, soltanto per pianificare il lavoro interno, otto ore di analisi tecnica a 45 euro l'ora e quattro ore di preparazione commerciale a 35 euro l'ora. Il costo interno ipotizzato è 360 più 140, quindi 500 euro. Se il confronto richiedesse altre dieci ore tecniche, arriverebbe a 950 euro. Sono costi organizzativi dell'esempio, non tariffe consigliate: mostrano perché conviene chiarire l'opportunità prima di impegnare altre risorse."
    },
    {
      "type": "p",
      "text": "La decisione finale non dipende dal costo già sostenuto. Se il committente conferma informazioni e passaggi, l'impresa completa l'offerta; se chiede una consegna incompatibile con l'operatività dell'ufficio, riformula le fasi o si ferma. Continuare solo perché sono già state spese alcune ore aggiunge costo a un'opportunità che potrebbe restare impraticabile."
    },
    {
      "type": "h2",
      "text": "Il sopralluogo deve produrre un documento utilizzabile",
      "id": "il-sopralluogo-deve-produrre-un-documento-utilizzabile"
    },
    {
      "type": "p",
      "text": "Un sopralluogo efficace lascia una traccia leggibile: data, presenti, aree visitate, documenti ricevuti, vincoli osservati e questioni aperte. Collega ogni fotografia a un ambiente e chiedi le autorizzazioni necessarie prima di utilizzarla altrove. Una cartella con cinquanta immagini prive di riferimenti aiuta poco chi dovrà preparare l'offerta senza essere stato sul posto."
    },
    {
      "type": "p",
      "text": "Se un componente non è visibile o un impianto non è stato verificato, riportalo chiaramente. La nota «passaggio da verificare dopo accesso al vano» è più utile di una soluzione descritta come certa. Stabilisci chi risponderà, entro quale data e attraverso quale elaborato. Il verbale non sostituisce un progetto né una valutazione professionale, ma impedisce che una domanda dimenticata diventi una promessa implicita."
    },
    {
      "type": "p",
      "text": "Per organizzare versioni e risposte puoi usare la guida al [registro dei chiarimenti di progetto](/articolo/registro-chiarimenti-progetto-edile/). Il collegamento serve soprattutto quando più persone inviano informazioni in momenti diversi. La richiesta iniziale, la risposta e il suo effetto sull'offerta devono restare riconoscibili, anche dopo una telefonata o un cambiamento di interlocutore."
    },
    {
      "type": "h2",
      "text": "Come presentare le referenze che contano per quel committente",
      "id": "come-presentare-le-referenze-che-contano-per-quel-committente"
    },
    {
      "type": "p",
      "text": "Se il lavoro riguarda un'attività aperta al pubblico, mostra come hai organizzato un intervento analogo soltanto se puoi documentarlo. Descrivi contesto, perimetro eseguito, vincoli e risultato effettivamente verificabile. Se non hai una referenza identica, spiega quali competenze sono trasferibili e quali aspetti richiedono una collaborazione. Non attribuirti l'intero intervento quando hai svolto un singolo lotto."
    },
    {
      "type": "p",
      "text": "Una buona presentazione può essere composta da tre schede brevi invece che da un catalogo indistinto. Per ogni scheda indica il tuo ruolo, le lavorazioni e gli elementi che il potenziale cliente può confrontare con il proprio caso. Fotografie e nomi dei clienti richiedono il corretto titolo d'uso. La guida al [portfolio di un'impresa edile](/articolo/portfolio-lavori-impresa-edile-2027/) approfondisce come raccogliere queste informazioni senza trasformare ogni lavoro in una dichiarazione generica di eccellenza."
    },
    {
      "type": "h2",
      "text": "L'offerta deve rendere visibili le condizioni della promessa",
      "id": "l-offerta-deve-rendere-visibili-le-condizioni-della-promessa"
    },
    {
      "type": "p",
      "text": "Descrivi oggetto, documenti considerati, lavorazioni incluse, esclusioni, eventuali alternative e validità della proposta. Specifica le condizioni dalle quali dipendono tempi e disponibilità: conferma delle misure, approvazione dei materiali, accesso ai locali, elaborati necessari. Se un elemento resta da definire, indica come verrà gestito invece di nasconderlo in una formula generica."
    },
    {
      "type": "p",
      "text": "Presenta le alternative separatamente. Un'offerta base e una variante di finitura devono poter essere confrontate senza ricostruire quali voci cambiano. Anche le quantità richiedono un riferimento: stima preliminare, computo ricevuto o rilievo eseguito. Prima di formulare condizioni contrattuali, garanzie o clausole economiche, confrontati con i professionisti che seguono l'impresa. Un modello commerciale non risolve da solo la disciplina del singolo contratto."
    },
    {
      "type": "p",
      "text": "Quando servono quotazioni dei fornitori, invia una richiesta coerente con il perimetro discusso. La guida ai [documenti per una richiesta di offerta](/articolo/richiesta-offerta-fornitori-edili-documenti/) contiene modelli dedicati. Chiedere ai fornitori tre prodotti differenti e scegliere quello con il totale più basso può generare una proposta apparentemente competitiva ma priva delle prestazioni o degli accessori attesi."
    },
    {
      "type": "h2",
      "text": "Seguire una trattativa senza inviare solleciti indistinti",
      "id": "seguire-una-trattativa-senza-inviare-solleciti-indistinti"
    },
    {
      "type": "p",
      "text": "Dopo l'invio concorda un momento per raccogliere domande. Il seguito utile riguarda un contenuto: «Avete verificato la sequenza delle fasi?» oppure «Possiamo chiarire la differenza fra le due finiture?». Se nessuno risponde, annota l'esito senza aggiornare automaticamente la previsione di incasso. Un'offerta trasmessa non è una commessa acquisita e una risposta positiva non equivale a un ordine completo."
    },
    {
      "type": "p",
      "text": "Tieni separate le fasi: richiesta ricevuta, informazioni raccolte, offerta inviata, chiarimenti, decisione e affidamento. Per passare alla fase successiva usa un evento osservabile. Questa regola rende leggibile il lavoro anche quando cambia chi gestisce il contatto. La persona che subentra deve trovare l'ultima versione dell'offerta e il prossimo impegno concordato, non una sequenza di messaggi da interpretare."
    },
    {
      "type": "h2",
      "text": "Misurare il processo con numeri che aiutano a decidere",
      "id": "misurare-il-processo-con-numeri-che-aiutano-a-decidere"
    },
    {
      "type": "p",
      "text": "Conta quante richieste diventano offerte complete, quante vengono sospese per documenti mancanti e quante vengono escluse per incompatibilità. Registra inoltre il tempo impiegato a prepararle e le motivazioni comunicate dopo la decisione. Questi dati aiutano a migliorare la selezione. Non dedurre automaticamente che un'offerta persa abbia un prezzo sbagliato: potrebbe essere cambiato il progetto o potrebbe non esserci stata una decisione."
    },
    {
      "type": "p",
      "text": "Una revisione mensile può partire da cinque casi, riletti con chi ha preparato gli elaborati e chi organizza i cantieri. Cerca passaggi correggibili: una domanda posta troppo tardi, una referenza non pertinente, una data promessa prima della verifica interna. Cambia una cosa alla volta e osserva il risultato nelle richieste successive. Il valore del metodo sta nella qualità delle decisioni e nella possibilità di spiegare perché un'opportunità è stata accettata, rinviata o scartata."
    },
    {
      "type": "h2",
      "text": "Scarica la scheda di qualificazione e usala nella prossima richiesta",
      "id": "scarica-la-scheda-di-qualificazione-e-usala-nella-prossima-richiesta"
    },
    {
      "type": "p",
      "text": "Il [modello CSV per qualificare una commessa privata](/modelli/qualificazione-commessa-privata.csv) raccoglie oggetto, fonte, interlocutori, vincoli, documenti e passaggio successivo. È una scheda originale di Corriere Edile, senza registrazione, macro o dati personali precompilati. Aprila con un foglio di calcolo e duplicala per ogni opportunità. I campi non compilati devono restare riconoscibili come informazioni ancora da acquisire."
    },
    {
      "type": "p",
      "text": "Prima di chiudere la prima valutazione controlla tre cose: puoi descrivere il lavoro con parole condivise dal committente, sai quale informazione manca e hai un prossimo passo realistico. Se una risposta è negativa, risolvi quel punto prima di promettere un'offerta definitiva. In questo modo la ricerca di nuovi appalti diventa una sequenza di verifiche concrete, collegata alla capacità effettiva dell'impresa di eseguire bene ciò che propone."
    },
    {
      "type": "h2",
      "text": "Quando un'opportunità va sospesa invece di essere inseguita",
      "id": "quando-un-opportunita-va-sospesa-invece-di-essere-inseguita"
    },
    {
      "type": "p",
      "text": "La sospensione è utile quando il bisogno esiste ma manca un passaggio indispensabile. Per esempio, il committente deve ancora scegliere fra due progetti oppure attendere un chiarimento su un locale. Registra la condizione di riapertura: «riprendere dopo la conferma della distribuzione», con referente e appuntamento concordato. Evita di lasciare l'offerta nel gruppo delle decisioni imminenti se nessuno può ancora approvarla."
    },
    {
      "type": "p",
      "text": "Quando il confronto riparte, rileggi i presupposti. Quantità, date e disponibilità potrebbero essere cambiati durante l'attesa. Prima di confermare la vecchia proposta, controlla che descriva ancora il lavoro richiesto. Anche i documenti dei fornitori possono avere una validità differente. Questo passaggio evita di trasformare una cortesia commerciale in una conferma riferita a condizioni ormai superate."
    },
    {
      "type": "p",
      "text": "Se l'opportunità viene chiusa, conserva una motivazione concreta e proporzionata alle informazioni ricevute. «Progetto rinviato dal cliente» è diverso da «offerta persa per prezzo». Se il motivo non è noto, scrivi che non è stato comunicato. Dati incompleti ma onesti permettono analisi migliori di conclusioni inventate per riempire un report. Alla revisione successiva potrai decidere quali contatti abbiano un motivo reale per essere ricontattati."
    }
  ],
  "faqs": [
    {
      "q": "Per partecipare a un appalto privato basta inviare un preventivo?",
      "a": "Dipende dal processo scelto dal committente. Prima chiedi quali documenti, sopralluoghi e passaggi siano richiesti. Un'offerta inviata senza conoscere perimetro e modalità di selezione può risultare incompleta o impossibile da confrontare con le altre."
    },
    {
      "q": "Conviene preparare tutte le offerte che arrivano?",
      "a": "Conviene prima verificare competenze, informazioni e disponibilità. Se manca un dato decisivo, chiedilo; se il lavoro è incompatibile con le risorse, proponi un perimetro diverso o rinuncia. Il numero di preventivi prodotti, da solo, non misura la qualità commerciale."
    },
    {
      "q": "Quanto anticipo serve per trovare una commessa?",
      "a": "Non esiste un intervallo valido per ogni intervento. Progetto, decisioni del committente, forniture e autorizzazioni hanno tempi diversi. Registra le date effettivamente comunicate e aggiorna il prossimo passo quando emerge un'informazione nuova."
    }
  ],
  "tags": [
    "Imprese",
    "Organizzazione",
    "Forniture"
  ],
  "related": [
    "portfolio-lavori-impresa-edile-2027",
    "registro-chiarimenti-progetto-edile",
    "richiesta-offerta-fornitori-edili-documenti"
  ]
},
  {
    slug: "varianti-corso-opera-riserve",
    category: "Normativa",
    title: "Varianti in corso d’opera e riserve: come si documentano perché reggano in giudizio",
    metaTitle: "Varianti in corso d’opera: come documentarle bene",
    metaDescription: "Ordini di servizio, riserve e maggiori oneri: come si documentano le varianti in corso d’opera perché l’impresa venga pagata anche in giudizio.",
    keywords: [
      "varianti in corso d’opera appalto privato",
      "contenzioso appalto privato"
    ],
    subtitle: "Ordini di servizio, riserve e maggiori oneri: come si documentano le varianti in corso d’opera perché l’impresa venga pagata anche in giudizio.",
    excerpt: "Ordini di servizio, riserve e maggiori oneri: come si documentano le varianti in corso d’opera perché l’impresa venga pagata anche in giudizio.",
    published: "2026-09-15T10:00:00+02:00",
    updated: "2026-11-18T21:00:00+01:00",
    readingTime: 6,
    author: {
      name: "Avv. Armando Rossi",
      role: "Avvocato massimo esperto in Edilizia Legale",
      bio: "Avvocato massimo esperto in [Edilizia Legale](https://www.edilizialegale.it), si occupa di diritto dell’edilizia e degli appalti privati. Assiste imprese di costruzioni, artigiani e committenti in materia di contratti d’appalto, recupero crediti, difetti costruttivi e contenzioso di cantiere. Scrive su [edilizialegale.it](https://www.edilizialegale.it)."
    },
    image: "/images/articoli/varianti-corso-opera-riserve.jpg",
    imageAlt: "Varianti in corso d’opera e riserve: come si documentano perché reggano in giudizio",
    imageCaption: "",
    summary: [],
    body: [
      {
        type: "p",
        text: "Una variante in corso d’opera è una modifica del progetto decisa dopo la firma del contratto. Succede in quasi tutti i cantieri. Il problema non è la variante: è che quasi nessuno la mette per iscritto mentre accade. Al saldo, la discussione sulle varianti in corso d’opera nell’appalto privato finisce su un terreno dove vince chi ha le carte, non chi ha ragione."
      },
      {
        type: "h2",
        text: "Varianti in corso d’opera nell’appalto privato: cosa dicono gli articoli 1659, 1660 e 1661",
        id: "varianti-in-corso-dopera-nellappalto-privato-cosa-dicono-gli"
      },
      {
        type: "p",
        text: "Testi integrali su [Normattiva](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:regio.decreto:1942-03-16;262)."
      },
      {
        type: "p",
        text: "**Articolo 1659** — l’appaltatore non può apportare variazioni alle modalità convenute dell’opera se il committente non le ha autorizzate, e l’autorizzazione «si deve provare per iscritto». Il terzo comma è quello che le imprese dimenticano: anche se autorizzate, nell’appalto «a corpo» variazioni e aggiunte non danno diritto a compenso, salvo diversa pattuizione."
      },
      {
        type: "p",
        text: "**Articolo 1660** — se per eseguire l’opera a regola d’arte è necessario variare il progetto e le parti non si accordano, è il giudice a determinare le variazioni e il prezzo. Se l’importo supera il sesto del prezzo complessivo convenuto l’appaltatore può recedere, con un’equa indennità; se le variazioni sono di notevole entità recede il committente, con un equo indennizzo."
      },
      {
        type: "p",
        text: "**Articolo 1661** — il committente può imporre variazioni purché non superino il sesto del prezzo complessivo convenuto, e l’appaltatore ha diritto al compenso per i maggiori lavori anche a prezzo determinato globalmente. Il secondo comma gli toglie questo potere se le variazioni, pur sotto il sesto, importano notevoli modificazioni della natura dell’opera o dei quantitativi nelle singole categorie di lavori."
      },
      {
        type: "p",
        text: "Due precisazioni. Il sesto dell’articolo 1661 limita il potere del committente, non il compenso dell’impresa: oltre quella soglia l’appaltatore non è tenuto a eseguire. E il rincaro dei materiali non è una variante: l’articolo 1664 ammette la revisione del prezzo solo se, per circostanze imprevedibili, il costo di materiali o manodopera varia oltre il decimo del prezzo convenuto — e solo per l’eccedenza."
      },
      {
        type: "h2",
        text: "Variante richiesta dal committente e variante necessaria: due regimi diversi",
        id: "variante-richiesta-dal-committente-e-variante-necessaria-due"
      },
      {
        type: "p",
        text: "La differenza che decide la causa non è tecnica: è chi ha voluto la modifica."
      },
      {
        type: "p",
        text: "Se la ordina il committente (articolo 1661), l’impresa esegue un ordine, e l’orientamento prevalente della Cassazione ammette la prova di quell’ordine con ogni mezzo, presunzioni comprese: la casistica è nella [guida ANCE sulle varianti negli appalti privati](https://ance.it/wp-content/uploads/allegati/Guida_alla_gestione_varianti_appalti_privati_RASSEGNA_GIURISPUDENZA.pdf). Se la propone l’impresa (articolo 1659), serve l’autorizzazione del committente, da provare per iscritto: testimonianze e ricostruzioni a posteriori reggono molto meno."
      },
      {
        type: "p",
        text: "La variante necessaria dell’articolo 1660 è un terzo caso: non l’ha voluta nessuno, la impone l’opera — un solaio che si rivela non portante, una fondazione da riprendere. Anche qui vale solo ciò che l’impresa ha documentato mentre il fatto accadeva."
      },
      {
        type: "h2",
        text: "La catena documentale: cosa serve davvero nel contenzioso appalto privato",
        id: "la-catena-documentale-cosa-serve-davvero-nel-contenzioso-app"
      },
      {
        type: "p",
        text: "Ogni modifica deve lasciare una traccia scritta, datata, controfirmata. Per ritrovare il punto interessato, annota il codice e la revisione delle [tavole di progetto](/articolo/tavole-progetto-revisioni-quote-sopralluogo/). Tieni inoltre distinguibili domande aperte e risposte nel [registro dei chiarimenti](/articolo/registro-chiarimenti-progetto-edile/)."
      },
      {
        type: "table",
        head: [
          "Documento",
          "Chi lo firma",
          "Quando",
          "A cosa serve in giudizio"
        ],
        rows: [
          [
            "Ordine di servizio",
            "Direzione lavori e impresa",
            "Prima di eseguire",
            "Attribuisce la variante al committente"
          ],
          [
            "Autorizzazione scritta",
            "Committente",
            "Prima di eseguire, se la propone l’impresa",
            "È la prova richiesta dall’articolo 1659"
          ],
          [
            "Perizia di variante e nuovi prezzi",
            "Progettista o direzione lavori, accettata dal committente",
            "Appena la modifica è definita",
            "Chiude in anticipo la lite sul quanto"
          ],
          [
            "Verbale di sospensione",
            "Direzione lavori e impresa",
            "Il giorno del fermo",
            "Data, causa, durata: base dei maggiori oneri"
          ],
          [
            "Contabilità dei lavori (libretto misure, SAL)",
            "Direzione lavori e impresa",
            "A ogni avanzamento",
            "Misura l’eseguito; firmarla senza annotazioni indebolisce la pretesa"
          ],
          [
            "Contestazione via PEC",
            "Impresa",
            "Entro pochi giorni dal fatto",
            "Data certa della pretesa: è la «riserva» del privato"
          ]
        ]
      },
      {
        type: "p",
        text: "Due documenti pesano più degli altri. L’ordine di servizio — la disposizione scritta con cui la direzione lavori impartisce all’impresa un’istruzione esecutiva — sposta la paternità della modifica: se firmato e datato, la variante non è iniziativa dell’impresa ma ordine della committenza, con un regime di prova più favorevole. Il verbale di sospensione — l’atto che registra data, causa e durata del fermo — aggancia i maggiori oneri a un fatto verificabile, non a una stima fatta mesi dopo. Su come questi atti si concatenano nel contenzioso appalto privato, e su come si tengono insieme riserve e varianti in corso d’opera lungo tutto il cantiere, è utile [la guida sulle varianti in corso d’opera di Edilizia Legale](https://www.edilizialegale.it/guide/varianti-in-corso-opera)."
      },
      {
        type: "h2",
        text: "Le riserve nell’appalto privato: quando e come si iscrivono",
        id: "le-riserve-nellappalto-privato-quando-e-come-si-iscrivono"
      },
      {
        type: "p",
        text: "Chi cerca in rete «varianti in corso d’opera appalto privato» trova quasi sempre pagine su riserve, registro di contabilità e decadenze. Sono regole vere, ma di un altro mondo."
      },
      {
        type: "p",
        text: "La riserva, in senso tecnico, è un istituto degli appalti **pubblici**. L’articolo 115 del [Codice dei contratti pubblici](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-03-31;36) (d.lgs. 36/2023) e l’articolo 7 del suo Allegato II.14 impongono di iscrivere le pretese economiche sul primo atto contabile idoneo e nel registro di contabilità, a pena di decadenza; quelle non confermate nel conto finale si intendono rinunciate."
      },
      {
        type: "p",
        text: "Nell’appalto privato quel meccanismo non esiste: nessun registro imposto dalla legge, nessun termine di decadenza, nessuna direzione lavori con poteri certificativi pubblicistici. Chi aspetta il registro per «iscrivere riserva» attende un documento che nessuno produrrà."
      },
      {
        type: "p",
        text: "Tacere, però, non è indifferente. La funzione che la riserva svolge nel pubblico — fissare data e contenuto della pretesa mentre i fatti accadono — nel privato si ottiene altrimenti: annotazione sul SAL prima di firmarlo, PEC al committente, verbale controfirmato. Sono contestazioni contrattuali, non riserve in senso tecnico, ma il valore probatorio è quello. Chi firma avanzamenti per mesi senza una riga e solleva la questione solo al saldo si presenta con un comportamento difficile da spiegare."
      },
      {
        type: "p",
        text: "Un’eccezione: se il contratto richiama un capitolato che riproduce le regole della contabilità dei lavori pubblici, quelle regole vincolano le parti come clausole contrattuali, decadenze comprese."
      },
      {
        type: "h2",
        text: "Gli errori che fanno perdere il diritto al compenso per i maggiori oneri",
        id: "gli-errori-che-fanno-perdere-il-diritto-al-compenso-per-i-ma"
      },
      {
        type: "list",
        items: [
          "**Eseguire su ordine verbale e fatturare alla fine.** L’onere di provare il titolo del maggior compenso grava sull’impresa.",
          "**Firmare SAL e contabilità senza annotazioni.** La firma liscia vale come accettazione dell’eseguito.",
          "**Documentare solo verso il direttore dei lavori.** È il professionista di fiducia della committenza, ma non per questo ha il potere di impegnarla: la contestazione va indirizzata anche al committente.",
          "**Confondere maggiori lavori e maggiori oneri.** I primi si provano con perizia di variante e nuovi prezzi; i secondi — fermi, interferenze, tempi allungati — con verbali di sospensione e cronoprogramma.",
          "**Dimenticare il prezzo nell’appalto a corpo.** L’autorizzazione non è un accordo sul compenso: servono entrambi."
        ]
      },
      {
        type: "p",
        text: "Va detto il rovescio: se le carte non ci sono e l’importo è modesto, una transazione vale più di una causa. Il contenzioso appalto privato si vince con i documenti prodotti in cantiere."
      },
      {
        type: "h2",
        text: "Checklist di cantiere: cosa produrre ogni volta che il progetto cambia",
        id: "checklist-di-cantiere-cosa-produrre-ogni-volta-che-il-proget"
      },
      {
        type: "list",
        items: [
          "**Ordine di servizio scritto** prima di eseguire la modifica.",
          "**Verificare chi ha voluto la variante**: da questo dipende il regime di prova.",
          "**Quantificare subito** con perizia di variante, e far sottoscrivere il prezzo oltre alla variante: nell’appalto a corpo è decisivo.",
          "**Verbalizzare ogni sospensione** il giorno stesso, con data, causa e firme.",
          "**Annotare sul SAL** ciò che non si accetta, prima di firmarlo, e mandarne PEC al committente entro pochi giorni.",
          "**Archiviare per fatto**: ogni variante in una cartella con tutti i suoi atti."
        ]
      },
      {
        type: "p",
        text: "Una variante documentata mentre accade è un credito; la stessa variante ricostruita a fine lavori è una pretesa da dimostrare. La differenza si gioca in cantiere, con un foglio firmato."
      },
      {
        type: "p",
        text: "Il contenuto di questo articolo ha carattere informativo generale, non costituisce parere legale e non sostituisce l’esame del caso concreto."
      }
    ],
    faqs: [
      {
        q: "Una variante concordata a voce con il committente è esigibile?",
        a: "In termini generali, dipende da chi l’ha voluta. Se l’ha ordinata il committente, l’orientamento prevalente ammette la prova dell’ordine con ogni mezzo, presunzioni comprese. Se l’ha proposta l’impresa, l’articolo 1659 vuole che l’autorizzazione sia provata per iscritto: il solo accordo verbale è molto più fragile."
      },
      {
        q: "Quanto pesa la contabilità dei lavori in un contenzioso appalto privato?",
        a: "Molto, anche se nel privato non è imposta dalla legge. In generale, libretto delle misure e stati di avanzamento firmati da entrambe le parti fissano quantità e tempi mentre i lavori procedono: sono la base su cui un consulente tecnico ricostruirà l’eseguito. Una firma priva di annotazioni pesa contro chi l’ha apposta."
      },
      {
        q: "Posso rifiutare una variante che supera il sesto del prezzo?",
        a: "In linea generale sì. L’articolo 1661 consente al committente di imporre variazioni solo entro il sesto del prezzo complessivo convenuto: oltre quella soglia l’appaltatore non è tenuto a eseguirle. Se decide comunque di farlo, conviene formalizzare l’accordo sui nuovi prezzi prima di iniziare."
      }
    ],
    tags: [
      "varianti in corso d’opera appalto privato",
      "contenzioso appalto privato",
      "appalto privato",
      "riserve"
    ],
    related: [
      "cila-scia-permessi-2026-guida-pratiche",
      "salva-casa-sanatoria-irregolarita-edilizie",
      "posa-in-opera-serramenti-uni-11673"
    ]
  },
];
