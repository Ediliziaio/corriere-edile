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
    updated: "2026-09-01T14:00:00+02:00",
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
        text: "Raccogliere questi documenti alla consegna costa pochi minuti. Ricostruirli due anni dopo, con un fornitore cambiato e un lotto esaurito, spesso è impossibile: ed è esattamente il momento in cui servono.",
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
    slug: "appalti-privati-intercettare-commesse",
    category: "Mercato",
    title: "Appalti privati e grandi commesse: come intercettare il capitolato prima della concorrenza",
    metaTitle: "Appalti privati: intercettare le commesse prima",
    metaDescription: "Gare private, capitolati e grandi commesse: i segnali che anticipano un appalto e come le imprese li intercettano prima dei concorrenti.",
    keywords: [
      "acquisire commesse appalti privati",
      "generazione vendite B2B"
    ],
    subtitle: "Gare private, capitolati e grandi commesse: i segnali che anticipano un appalto e come le imprese li intercettano prima dei concorrenti.",
    excerpt: "Gare private, capitolati e grandi commesse: i segnali che anticipano un appalto e come le imprese li intercettano prima dei concorrenti.",
    published: "2026-09-14T14:00:00+02:00",
    updated: "2026-09-14T14:00:00+02:00",
    readingTime: 6,
    author: {
      name: "Redazione Corriere Edile",
      role: "Redazione",
      bio: "La redazione di Corriere Edile segue normativa, mercato e organizzazione del lavoro per imprese edili, impiantisti e professionisti."
    },
    image: "/images/articoli/appalti-privati-intercettare-commesse.jpg",
    imageAlt: "Appalti privati e grandi commesse: come intercettare il capitolato prima della concorrenza",
    imageCaption: "",
    summary: [],
    body: [
      {
        type: "p",
        text: "Un appalto privato è un contratto di lavori affidato da un committente privato senza obbligo di gara pubblica. Non c’è un bando, non c’è una pubblicazione, non c’è un termine che tutti possono leggere. L’invito parte verso una lista chiusa di imprese, definita mesi prima da chi redige il capitolato. Per questo acquisire commesse negli appalti privati non è un problema di prezzo, ma di tempismo e di accesso. Quando la richiesta d’offerta arriva in azienda, la partita è già impostata da qualcun altro."
      },
      {
        type: "h2",
        text: "Come nasce davvero una commessa privata: le cinque fasi prima del bando",
        id: "come-nasce-davvero-una-commessa-privata-le-cinque-fasi-prima"
      },
      {
        type: "p",
        text: "Le gare private in edilizia e impiantistica seguono un percorso ricorrente."
      },
      {
        type: "p",
        text: "**Fase 1 — Decisione di investimento.** La proprietà approva la spesa: nuovo stabilimento, ampliamento di un polo logistico, revamping di una linea. Il budget esiste, il progetto no."
      },
      {
        type: "p",
        text: "**Fase 2 — Fattibilità e incarico esterno.** Entra uno studio di progettazione o un general contractor: superfici, layout, tempi, vincoli urbanistici."
      },
      {
        type: "p",
        text: "**Fase 3 — Redazione del capitolato e vendor list.** È la fase decisiva: chi scrive le specifiche stabilisce di fatto quali fornitori possono soddisfarle. In parallelo si costruisce la lista degli invitati."
      },
      {
        type: "p",
        text: "**Fase 4 — Richiesta d’offerta.** Va a un numero chiuso di imprese, spesso da tre a sei."
      },
      {
        type: "p",
        text: "**Fase 5 — Negoziazione e affidamento.** Varianti, tempi, garanzie, penali."
      },
      {
        type: "p",
        text: "La differenza con il pubblico è netta. Il [Codice dei contratti pubblici](https://www.normattiva.it/uri-res/N2Ls?urn:nir:stato:decreto.legislativo:2023-03-31;36) (d.lgs. 36/2023) limita all’articolo 13 il proprio ambito ai contratti affidati da stazioni appaltanti ed enti concedenti: un committente privato che costruisce con capitale proprio non pubblica nulla, non motiva l’esclusione di un concorrente e non risponde alla vigilanza di [ANAC](https://www.anticorruzione.it/contratti-pubblici). Nessun accesso agli atti, nessun ricorso: la trasparenza che nel pubblico è obbligo, nel privato è cortesia."
      },
      {
        type: "p",
        text: "Il mercato spinge nella stessa direzione: l’[Osservatorio congiunturale ANCE](https://ance.it/2026/01/osservatorio-congiunturale-sullindustria-delle-costruzioni-2026/) di gennaio 2026 indica per il 2025 una flessione degli investimenti in costruzioni dell’1,1%, con il non residenziale privato sostanzialmente fermo (+0,5%) e la crescita concentrata sulle opere pubbliche. Le commesse private rilevanti sono poche e su ciascuna si concentrano più concorrenti."
      },
      {
        type: "h2",
        text: "I sei segnali che anticipano un appalto di 12-18 mesi",
        id: "i-sei-segnali-che-anticipano-un-appalto-di-12-18-mesi"
      },
      {
        type: "p",
        text: "Un trigger event è un fatto aziendale osservabile che segnala un fabbisogno futuro. Non è un’intenzione dichiarata, è un evento già avvenuto che rende probabile un investimento. Un’azienda che acquista un capannone non ha ancora emesso un capitolato, ma lo emetterà."
      },
      {
        type: "table",
        head: [
          "Segnale",
          "Dove si legge",
          "Anticipo sul capitolato"
        ],
        rows: [
          [
            "Nuovo stabilimento o acquisto immobile",
            "Visure camerali, permessi di costruire, delibere urbanistiche",
            "12-18 mesi"
          ],
          [
            "Aumento dell’organico",
            "Annunci di lavoro ripetuti sullo stesso sito",
            "9-15 mesi"
          ],
          [
            "Scadenza normativa (antincendio, sismica, emissioni)",
            "Testi di legge con termine noto e proroghe",
            "12-24 mesi"
          ],
          [
            "Sostituzione impianti a fine vita",
            "Anno di installazione, ammortamenti in chiusura",
            "6-12 mesi"
          ],
          [
            "Apertura di nuove sedi o filiali",
            "Variazioni al registro imprese, comunicati aziendali",
            "6-12 mesi"
          ],
          [
            "Fondi o finanziamenti ottenuti",
            "Graduatorie regionali e bandi",
            "9-18 mesi"
          ]
        ]
      },
      {
        type: "p",
        text: "Intercettare capitolati significa lavorare su questa tabella, non sulle richieste d’offerta in arrivo. È il terreno in cui le tecniche di generazione vendite B2B si applicano all’edilizia industriale: si parte da un profilo di cliente ideale (ICP) costruito su parametri verificabili — codice ATECO, fatturato, addetti, area geografica, impianti in uso — e si monitorano gli eventi societari di quel perimetro. È la logica su cui lavora, per esempio, [il sistema IPA messo a punto da Clientium](https://clientium.it/sistema-ipa/), articolato in tre fasi: Identificazione, la costruzione della lista di aziende in target e dei decisori interni; Personalizzazione, messaggi scritti sul singolo destinatario a partire dal trigger event rilevato; Acquisizione, sequenze di contatto su più canali con pre-qualifica prima dell’incontro. Il prospecting B2B, cioè l’attività di ricerca e primo contatto sui potenziali committenti, si appoggia anche agli intent data: tracce digitali, come le visite a pagine tecniche o i download di schede prodotto, che segnalano un interesse attivo prima che diventi richiesta formale. Secondo i dati diffusi dall’agenzia, le campagne costruite su un segmento verticale registrano tassi di risposta del 5-6%, contro l’1,1% delle campagne generiche."
      },
      {
        type: "p",
        text: "[Arnold Koci](https://www.arnoldkoci.com), founder di [Clientium](https://www.clientium.it) e autore de La macchina degli appuntamenti, lo riassume così: «Il capitolato è la fine della storia, non l’inizio. Quando esce, chi lo ha scritto ha già due o tre nomi in testa. Il momento giusto per farsi conoscere è sei mesi prima, quando in azienda hanno appena deciso di spendere e non hanno ancora deciso con chi»."
      },
      {
        type: "h2",
        text: "Chi decide davvero: la mappa dei tre o quattro ruoli coinvolti",
        id: "chi-decide-davvero-la-mappa-dei-tre-o-quattro-ruoli-coinvolt"
      },
      {
        type: "p",
        text: "In un acquisto complesso non decide una persona sola. I decision maker ricorrenti sono quattro, con pesi diversi lungo le cinque fasi."
      },
      {
        type: "list",
        items: [
          "**Proprietà o direzione generale.** Decide se e quanto investire; pesa nelle fasi 1 e 5. Ragiona su ritorno e continuità produttiva.",
          "**Direzione tecnica o facility.** Scrive i requisiti e segnala i vincoli di esercizio; pesa nelle fasi 2 e 3. È il ruolo più sottovalutato.",
          "**Ufficio acquisti.** Gestisce la vendor list, i criteri di qualifica formali — fatturato minimo, certificazioni, referenze su lavori analoghi — e la trattativa. Pesa nelle fasi 3 e 4.",
          "**Direzione lavori o progettista esterno.** Spesso propone materialmente i nomi da invitare: non è dipendente del committente, ma orienta la short list."
        ]
      },
      {
        type: "p",
        text: "«Se parli solo con l’ufficio acquisti stai lavorando al buio», osserva Koci. «Non sai cosa ha in testa la proprietà e non sai cosa ha già scritto il progettista. Per ogni azienda vanno mappati tre o quattro nomi, e vanno sentiti tutti»."
      },
      {
        type: "h2",
        text: "Dalla segnalazione al tavolo: generazione vendite B2B per entrare prima che il capitolato sia chiuso",
        id: "dalla-segnalazione-al-tavolo-generazione-vendite-b2b-per-ent"
      },
      {
        type: "p",
        text: "Individuato il segnale, l’obiettivo non è vendere: è essere consultati mentre si scrivono le specifiche. Funziona il contatto che porta una competenza utile in quella fase: un’analisi dei tempi di posa, un confronto tra soluzioni impiantistiche, una referenza su un intervento analogo."
      },
      {
        type: "p",
        text: "L’outreach multicanale — email, LinkedIn, telefono, visita — serve perché i quattro ruoli si raggiungono su canali diversi: la direzione tecnica risponde a un contenuto tecnico, l’ufficio acquisti a una referenza. Ogni contatto va registrato in una pipeline di vendita che tracci la fase della commessa, non solo lo stato della trattativa. I general contractor, poi, tengono elenchi permanenti di fornitori qualificati: entrarci fuori gara è più efficace che presentarsi a gara aperta."
      },
      {
        type: "h2",
        text: "Gli errori di tempismo che escludono l’impresa dalla short list",
        id: "gli-errori-di-tempismo-che-escludono-limpresa-dalla-short-li"
      },
      {
        type: "p",
        text: "Il primo errore è presidiare solo le richieste d’offerta ricevute: significa competere sul prezzo dentro una lista già formata. Il secondo è il contatto unico, una mail all’ufficio acquisti senza copertura degli altri ruoli. Il terzo è arrivare a specifiche già chiuse, tarate su un altro fornitore. Il quarto è non aggiornare le referenze: chi non documenta lavori analoghi recenti viene scartato sui criteri di qualifica prima della valutazione tecnica. Il quinto è trattare il general contractor come cliente occasionale anziché come canale stabile."
      },
      {
        type: "h2",
        text: "Checklist operativa: cosa presidiare ogni trimestre per acquisire commesse negli appalti privati",
        id: "checklist-operativa-cosa-presidiare-ogni-trimestre-per-acqui"
      },
      {
        type: "p",
        text: "Bastano poche ore a trimestre: aggiornare l’elenco delle aziende in target per ATECO e area; verificare permessi di costruire e varianti urbanistiche dei comuni del bacino; controllare gli annunci di lavoro ripetuti sui siti produttivi; censire le scadenze normative con termine entro 24 mesi; rivedere la mappa dei decisori delle prime venti aziende; aggiornare il dossier delle referenze per comparto."
      },
      {
        type: "p",
        text: "Acquisire commesse negli appalti privati resta un lavoro di accesso, non di sconto. Chi legge i segnali con dodici mesi di anticipo arriva al tavolo quando le specifiche sono ancora scrivibili. Chi aspetta il capitolato arriva quando restano solo il prezzo e i tempi."
      }
    ],
    faqs: [
      {
        q: "Che cos’è un trigger event commerciale?",
        a: "È un fatto aziendale già avvenuto e verificabile che rende probabile un acquisto successivo: un nuovo insediamento, un aumento dell’organico, una scadenza normativa, un finanziamento ottenuto. Non è una previsione. Serve a stabilire quando contattare un’azienda, prima che il fabbisogno diventi richiesta d’offerta."
      },
      {
        q: "La generazione vendite B2B funziona anche per le imprese di costruzioni?",
        a: "Sì, a patto di adattarne i tempi. Nel B2B industriale il ciclo dura mesi e i decisori sono più d’uno. Le tecniche restano quelle: profilazione del cliente ideale, monitoraggio dei segnali, contatto personalizzato su più canali, qualifica prima dell’incontro. Cambia l’orizzonte, non il metodo."
      },
      {
        q: "Negli appalti privati si applica il Codice dei contratti pubblici?",
        a: "No. Il Codice disciplina gli affidamenti di stazioni appaltanti ed enti concedenti. Un committente privato che investe capitale proprio sceglie liberamente chi invitare, non pubblica esiti e non risponde al giudice amministrativo. Le regole sono quelle scritte nella lettera d’invito."
      }
    ],
    tags: [
      "acquisire commesse appalti privati",
      "generazione vendite B2B",
      "appalti privati",
      "capitolato"
    ],
    related: [
      "mercato-costruzioni-2026-previsioni",
      "migliori-imprese-costruzioni-italia-2026",
      "bim-obbligatorio-2026-appalti"
    ]
  },
];
