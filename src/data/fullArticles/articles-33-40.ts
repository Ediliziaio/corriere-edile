import type { FullArticle } from "./types";

/** Articoli pubblicati dal settembre 2026 in avanti. */
export const ARTICLES_33_40: FullArticle[] = [
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
];
