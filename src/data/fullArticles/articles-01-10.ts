import type { FullArticle } from "./types";

export const ARTICLES_01_10: FullArticle[] = [
  {
    slug: "bonus-edilizi-2026-guida-completa",
    category: "Bonus & Fisco",
    title: "Bonus edilizi 2026: la guida completa per imprese, artigiani e professionisti",
    metaTitle: "Bonus edilizi 2026: guida completa a detrazioni e aliquote",
    metaDescription: "Bonus edilizi 2026: aliquote 50% e 36%, massimali, Conto termico 3.0 e adempimenti. La guida per imprese, artigiani e professionisti.",
    keywords: ["bonus edilizi 2026", "detrazioni ristrutturazioni 2026", "ecobonus 2026", "conto termico 3.0", "bonus casa 2026"],
    subtitle: "Aliquote, massimali, adempimenti e scadenze: tutto quello che serve sapere per pianificare i cantieri del 2026 senza errori",
    excerpt: "Il 2026 conferma il bonus ristrutturazioni al 50% per la prima casa e al 36% per le altre unità, con l'ecobonus allineato e il Conto termico 3.0 a sostegno dell'efficientamento. Ecco la mappa completa.",
    published: "2026-07-02T08:30:00+02:00",
    updated: "2026-07-02T08:30:00+02:00",
    readingTime: 12,
    author: {
      name: "Marco Bertelli",
      role: "Caporedattore Normativa & Fisco",
      bio: "Giornalista edile con oltre quindici anni di esperienza, segue fisco agevolato e normativa tecnica per le principali testate di settore. Ha curato guide operative su Superbonus, contabilizzazione e appalti pubblici."
    },
    image: "/images/articoli/bonus-edilizi-2026-guida-completa.jpg",
    imageAlt: "Impresa edile al lavoro su un cantiere di ristrutturazione con detrazioni fiscali 2026",
    imageCaption: "I bonus edilizi 2026 premiano chi pianifica: aliquote e massimali vanno verificati prima dell'apertura del cantiere.",
    summary: [
      "Bonus ristrutturazioni 2026: detrazione del 50% per l'abitazione principale e del 36% per le altre unità immobiliari, con massimale di 96.000 euro per unità e recupero in 10 rate annuali.",
      "Ecobonus allineato: 50% e 36% per interventi su involucro, infissi, schermature solari, caldaie a condensazione e pompe di calore, con massimali specifici per tipologia.",
      "Bonus mobili ed elettrodomestici confermato al 50% fino a 5.000 euro di spesa, ma solo se agganciato a un intervento di ristrutturazione avviato entro i termini previsti.",
      "Conto termico 3.0: incentivi diretti non fiscali fino al 65% per pompe di calore, generatori a biomassa e interventi sull'involucro degli edifici, con corsie dedicate alla Pubblica Amministrazione.",
      "Cessione del credito e sconto in fattura restano escluse per i nuovi interventi ordinari: si torna alla detrazione diretta in dichiarazione dei redditi."
    ],
    body: [
      { type: "p", text: "Il panorama delle agevolazioni edilizie per il 2026 si è definitivamente consolidato dopo gli anni turbolenti del Superbonus. La Legge di Bilancio ha confermato l'impianto disegnato nel 2025, con una distinzione netta tra abitazione principale e altre unità immobiliari, e ha puntato con decisione sugli incentivi diretti gestiti dal [GSE](https://www.gse.it), a partire dal Conto termico 3.0. Per imprese edili, artigiani e professionisti si tratta di un cambio di paradigma: non più corsa al credito fiscale, ma pianificazione, documentazione e competenza tecnica." },
      { type: "h2", id: "quadro-generale", text: "Il quadro dei bonus edilizi 2026" },
      { type: "p", text: "La struttura portante resta il bonus ristrutturazioni disciplinato dall'articolo 16-bis del TUIR, affiancato dall'ecobonus (articolo 14 del D.L. 63/2013) per gli interventi di riqualificazione energetica. A questi si aggiungono il bonus mobili ed elettrodomestici, il bonus barriere architettoniche al 75% e, sul fronte degli incentivi diretti, il Conto termico 3.0 entrato in vigore con il decreto interministeriale attuativo. Le stime di [ENEA](https://www.enea.it) e delle associazioni di categoria indicano per il 2026 un bacino potenziale di oltre 15 miliardi di euro di lavori agevolati, con una domanda concentrata su efficientamento energetico degli edifici esistenti e manutenzione straordinaria del patrimonio residenziale." },
      { type: "p", text: "La novità di fondo è culturale: esaurita la spinta del 110%, la domanda torna a essere sostenibile e selettiva. I committenti chiedono preventivi dettagliati, cronoprogrammi credibili e garanzie sulla correttezza fiscale. Per l'impresa che sa lavorare in questo quadro, il 2026 offre margini più sani rispetto agli anni della febbre incentivante." },
      { type: "h2", id: "aliquote-2026", text: "Quali sono le aliquote e i massimali del 2026?" },
      { type: "p", text: "La distinzione chiave del 2026 riguarda la destinazione dell'immobile. Per gli interventi sull'abitazione principale del contribuente la detrazione sale al 50% della spesa sostenuta, mentre per tutte le altre unità (seconde case, immobili locati, pertinenze autonome) scende al 36%. Il massimale di spesa resta fissato a 96.000 euro per unità immobiliare, con recupero in dieci quote annuali di pari importo. L'ecobonus segue la stessa logica: 50% per l'abitazione principale e 36% per le altre unità, applicato però a massimali specifici che variano per tipologia di intervento, dai 60.000 euro per la coibentazione dell'involucro ai 30.000 euro per la sostituzione degli impianti di climatizzazione invernale." },
      { type: "table", caption: "Le principali agevolazioni edilizie 2026 a confronto", head: ["Agevolazione", "Aliquota prima casa", "Aliquota altre unità", "Massimale", "Recupero"], rows: [
        ["Bonus ristrutturazioni", "50%", "36%", "96.000 €", "10 rate annuali"],
        ["Ecobonus involucro", "50%", "36%", "60.000 €", "10 rate annuali"],
        ["Ecobonus impianti", "50%", "36%", "30.000 €", "10 rate annuali"],
        ["Bonus mobili", "50%", "50%", "5.000 €", "10 rate annuali"],
        ["Barriere architettoniche", "75%", "75%", "Variabile per intervento", "5 rate annuali"],
        ["Conto termico 3.0", "Fino al 65%", "Fino al 65%", "Per tipologia GSE", "Incentivo diretto"]
      ] },
      { type: "p", text: "Attenzione alla definizione di abitazione principale: ai fini delle aliquote maggiorate conta la residenza anagrafica e l'effettiva dimora abituale al momento dell'avvio dei lavori. Gli uffici dell'[Agenzia delle Entrate](https://www.agenziaentrate.gov.it) hanno chiarito che l'asseverazione del professionista e la documentazione catastale devono essere coerenti, pena la decadenza dal beneficio maggiorato." },
      { type: "h2", id: "conto-termico", text: "Come funziona il Conto termico 3.0" },
      { type: "p", text: "Il Conto termico 3.0 rappresenta la vera novità operativa del 2026. Gestito dal GSE, prevede incentivi diretti non fiscali per la produzione di energia termica da fonti rinnovabili e per l'efficientamento degli edifici: pompe di calore elettriche e a gas, generatori a biomassa, sistemi ibridi, solare termico e interventi sull'involucro edilizio. Le percentuali di copertura arrivano fino al 65% della spesa ammissibile, con maggiorazioni per gli edifici della Pubblica Amministrazione e per gli interventi nelle zone climatiche più rigide. I tempi di erogazione previsti sono di due mensilità dalla liquidazione per gli importi fino a 15.000 euro, con rateizzazione per gli incentivi più consistenti." },
      { type: "quote", text: "Il Conto termico 3.0 sposta il baricentro dagli sconti fiscali agli incentivi diretti: per le imprese significa preventivi più certi e meno contenzioso, ma serve padroneggiare le schede tecniche del GSE fin dalla progettazione.", author: "ing. Roberto Valsecchi, consulente energetico e docente di certificazione energetica degli edifici" },
      { type: "h2", id: "imprese-come-prepararsi", text: "Cosa devono fare imprese e artigiani" },
      { type: "p", text: "Lavorare con i bonus del 2026 richiede un metodo che parte prima del preventivo. L'impresa deve verificare la tipologia di immobile e la titolarità del committente, inquadrare correttamente l'intervento (manutenzione ordinaria, straordinaria, ristrutturazione) e predisporre la documentazione che il professionista fiscale utilizzerà per la pratica. Gli errori più frequenti riguardano il cumulo errato di agevolazioni diverse sullo stesso intervento e la mancata tracciabilità dei pagamenti, che deve avvenire esclusivamente con bonifico parlante." },
      { type: "list", items: [
        "Verificare in sede di sopralluogo la destinazione dell'immobile e la qualifica del committente (abitazione principale o altra unità).",
        "Redigere preventivi che separino chiaramente manodopera, materiali e prestazioni professionali, con riferimento alle voci agevolabili.",
        "Impostare i pagamenti esclusivamente tramite bonifico bancario o postale con causale agevolazione, codice fiscale e partita IVA.",
        "Coordinarsi con il termotecnico per asseverazioni ENEA e schede descrittive quando l'intervento rientra nell'ecobonus.",
        "Conservare per almeno dieci anni fatture, ricevute di pagamento, documentazione fotografica ante e post operam.",
        "Informare il committente sui limiti di capienza fiscale: una detrazione non utilizzabile per incapienza non è recuperabile."
      ] },
      { type: "h2", id: "documenti-adempimenti", text: "Documenti, asseverazioni e adempimenti" },
      { type: "p", text: "Sul fronte documentale restano centrali la comunicazione ENEA per gli interventi di riqualificazione energetica, da trasmettere entro 90 giorni dalla fine lavori, e l'asseverazione del tecnico abilitato sul rispetto dei requisiti minimi. Per il bonus ristrutturazioni ordinario non serve asseverazione, ma è indispensabile la titolarità edilizia (CILA, SCIA o permesso a seconda dei casi) e la congruità tra intervento dichiarato e lavori eseguiti. L'Agenzia delle Entrate ha rafforzato i controlli incrociati con i dati catastali e con i sistemi di fatturazione elettronica: la regolarità formale non è più una burocrazia accessoria, ma la condizione stessa del beneficio." },
      { type: "h3", text: "Il ruolo del direttore dei lavori e del termotecnico" },
      { type: "p", text: "Nei cantieri agevolati il coordinamento tra impresa, direttore dei lavori e termotecnico fa la differenza tra una pratica liscia e un accertamento. Il consiglio operativo è istituire fin dall'avvio un fascicolo condiviso con pratica edilizia, contratto, preventivi, fatture e documentazione fotografica georeferenziata, aggiornato a ogni stato avanzamento lavori." },
      { type: "h2", id: "conclusioni", text: "Conclusioni: la pianificazione fa la differenza" },
      { type: "p", text: "Il 2026 premia le imprese organizzate. Le aliquote differenziate tra prima casa e altre unità impongono una diagnosi preliminare accurata, il Conto termico 3.0 apre opportunità nuove ma richiede competenza sulle procedure GSE, e il ritorno alla detrazione diretta riduce i rischi finanziari ma aumenta quelli documentali. Chi saprà presentarsi al cliente con un quadro chiaro di costi, tempi e adempimenti avrà un vantaggio competitivo reale in un mercato della riqualificazione che, secondo le previsioni di [ANCE](https://www.ance.it) e [CRESME](https://www.cresme.it), resterà il motore principale del settore almeno fino al 2028." }
    ],
    faqs: [
      { q: "Qual è la differenza tra bonus ristrutturazioni ed ecobonus nel 2026?", a: "Il bonus ristrutturazioni copre gli interventi edilizi in senso ampio con massimale di 96.000 euro, mentre l'ecobonus riguarda solo gli interventi di riqualificazione energetica con massimali specifici per tipologia. Entrambi prevedono aliquota del 50% per l'abitazione principale e del 36% per le altre unità." },
      { q: "È ancora possibile la cessione del credito o lo sconto in fattura?", a: "No, per i nuovi interventi ordinari avviati nel 2026 cessione del credito e sconto in fattura non sono ammessi: il recupero avviene esclusivamente tramite detrazione in dichiarazione dei redditi in dieci rate annuali." },
      { q: "Il bonus mobili spetta anche senza ristrutturazione?", a: "No. Il bonus mobili ed elettrodomestici al 50% fino a 5.000 euro è subordinato alla realizzazione di un intervento di recupero del patrimonio edilizio avviato entro i termini previsti dalla norma. Gli acquisti devono essere successivi alla data di inizio lavori." },
      { q: "Il bonus barriere architettoniche al 75% è confermato?", a: "Sì, la detrazione del 75% per l'abbattimento delle barriere architettoniche resta in vigore, con recupero in cinque rate annuali e massimali differenziati per tipologia di intervento. Resta possibile, nei limiti previsti, la cessione del credito per questa specifica agevolazione." }
    ],
    tags: ["bonus edilizi", "detrazioni fiscali", "ecobonus", "conto termico", "ristrutturazioni"],
    related: ["fotovoltaico-edilizia-2026-incentivi", "cappotto-termico-2026-costi-materiali", "superbonus-ultimi-cantieri-chiusura"]
  },
  {
    slug: "migliori-fornitori-serramenti-2026",
    category: "Prodotti & Materiali",
    title: "I migliori fornitori di serramenti nel 2026: guida alla scelta per serramentisti e imprese",
    metaTitle: "Migliori fornitori serramenti 2026: guida alla scelta",
    metaDescription: "Come scegliere i migliori fornitori di serramenti nel 2026: materiali, certificazioni, prestazioni, prezzi e reti di posa. La guida per serramentisti.",
    keywords: ["migliori fornitori serramenti 2026", "serramenti pvc alluminio legno", "certificazione serramenti", "posa in opera qualificata", "finestre prezzi 2026"],
    subtitle: "Materiali, prestazioni, certificazioni e reti di distribuzione: i criteri concreti per scegliere il partner giusto in un mercato che premia la qualità della posa",
    excerpt: "PVC, alluminio a taglio termico o legno-alluminio? Nel 2026 la scelta del fornitore di serramenti passa da certificazioni, prestazioni dell'involucro e qualità della rete di posa: ecco la mappa per orientarsi.",
    published: "2026-07-04T09:00:00+02:00",
    updated: "2026-07-05T09:00:00+02:00",
    readingTime: 11,
    author: {
      name: "Luca Marchetti",
      role: "Redattore Prodotti & Materiali tecnici",
      bio: "Ingegnere dei materiali, scrive di serramenti, involucro edilizio e tecnologie per l'efficienza energetica. Ha lavorato in laboratori di prova e uffici tecnici di produttori di sistemi per l'involucro."
    },
    image: "/images/articoli/migliori-fornitori-serramenti-2026.jpg",
    imageAlt: "Showroom di serramenti moderni in PVC, alluminio e legno con campionature profili",
    imageCaption: "La scelta del fornitore di serramenti nel 2026 si gioca su prestazioni certificate, assistenza tecnica e qualità della rete di posatori.",
    summary: [
      "Nel 2026 i serramenti performanti hanno trasmittanza Uw tra 0,8 e 1,3 W/mqK: sotto 1,1 W/mqK si parla di fascia alta per la riqualificazione energetica.",
      "Prezzi indicativi fornitura: 450-800 €/mq per il PVC, 700-1.200 €/mq per l'alluminio a taglio termico, 900-1.500 €/mq per il legno-alluminio.",
      "I criteri decisivi: marcatura CE, certificazione di prodotto, rete di posatori qualificati [UNI](https://www.uni.com) 11673-2, assistenza post-vendita e tempi di consegna sotto le 6 settimane.",
      "Le direttive Case Green e l'ecobonus 2026 spingono la domanda verso serramenti ad alta efficienza con vetri tripli e profili isolati.",
      "I grandi marchi internazionali ([Schüco](https://www.schueco.com/it), [Internorm](https://www.internorm.com/it-it/), [Finstral](https://www.finstral.com/it), [Oknoplast](https://www.oknoplast.it), [Veka](https://www.veka.it)) convivono con produttori italiani forti su personalizzazione e servizio."
    ],
    body: [
      { type: "p", text: "Il mercato italiano dei serramenti vale oggi oltre 5 miliardi di euro e nel 2026 cresce a doppia cifra nel segmento della sostituzione ad alta efficienza, trainato dall'ecobonus e dalle prescrizioni della direttiva Case Green. Per serramentisti e imprese che acquistano telai per conto dei committenti, la scelta del fornitore è diventata una decisione strategica: non basta più il prezzo al metro quadro, contano prestazioni certificate, stabilità delle consegne, supporto tecnico in cantiere e qualità della rete di posa. Questa guida mette a confronto materiali, marchi e criteri di selezione." },
      { type: "h2", id: "materiali-confronto", text: "Quali materiali scegliere nel 2026?" },
      { type: "p", text: "Il PVC resta il materiale più diffuso in Italia per la sostituzione in residenziale, con una quota di mercato superiore al 45%: i profili multicamera rinforzati in acciaio raggiungono Uw fino a 0,9 W/mqK con vetro triplo, a costi contenuti e manutenzione quasi nulla. L'alluminio a taglio termico domina nel non residenziale e nelle grandi aperture, con profili sempre più snelli e barrette isolanti ad alte prestazioni; i costi sono superiori del 40-60% rispetto al PVC. Il legno-alluminio presidia la fascia alta, dove estetica, durabilità e prestazioni termoacustiche giustificano prezzi che partono da 900 euro al metro quadro. Cresce infine il segmento dei serramenti in materiali compositi e riciclati, spinto dai criteri ambientali minimi negli appalti." },
      { type: "table", caption: "Confronto tra materiali per serramenti: prestazioni e prezzi 2026", head: ["Materiale", "Uw tipico (W/mqK)", "Prezzo fornitura (€/mq)", "Durata attesa", "Manutenzione"], rows: [
        ["PVC multicamera", "0,9 - 1,2", "450 - 800", "30 - 40 anni", "Molto bassa"],
        ["Alluminio taglio termico", "1,0 - 1,4", "700 - 1.200", "40 - 50 anni", "Bassa"],
        ["Legno-alluminio", "0,8 - 1,1", "900 - 1.500", "40+ anni", "Media"],
        ["Legno lamellare", "0,9 - 1,2", "700 - 1.100", "30 - 40 anni", "Alta"],
        ["Compositi/riciclati", "1,0 - 1,3", "600 - 1.000", "30+ anni", "Bassa"]
      ] },
      { type: "h2", id: "certificazioni", text: "Certificazioni e prestazioni: cosa verificare" },
      { type: "p", text: "La marcatura CE secondo la norma UNI EN 14351-1 è il requisito di base, ma nel 2026 non basta. Il professionista deve verificare la trasmittanza termica Uw calcolata secondo UNI EN ISO 10077-1, la tenuta all'aria (classe 4 come riferimento per la riqualificazione), la permeabilità all'acqua (classi E750-E1200 per facciate esposte) e la resistenza al carico del vento. Per gli appalti pubblici contano inoltre i CAM edilizia, che premiano contenuto di riciclato e certificazioni ambientali di prodotto come le EPD. Un fornitore serio mette a disposizione i rapporti di prova completi e le dichiarazioni di prestazione (DoP) aggiornate." },
      { type: "quote", text: "Oggi il differenziale competitivo di un serramentista non è il prezzo del telaio, ma la capacità di garantire la prestazione in opera: nodo di posa, tenuta all'aria e durabilità. Chi sceglie il fornitore solo sul listino perde margini e commesse.", author: "ing. Paolo Trentin, consulente per la certificazione dei serramenti e membro di commissioni tecniche UNI" },
      { type: "h2", id: "rete-posa", text: "Quanto conta la rete di posa e l'assistenza?" },
      { type: "p", text: "La posa in opera qualificata secondo la UNI 11673-2 è diventata lo standard di riferimento per gli interventi incentivati: la progettazione del giunto di posa, la qualificazione del posatore (EQF 3 o 4) e la verifica finale con termografia o Blower Door Test fanno ormai parte del pacchetto atteso dal committente evoluto. I migliori fornitori del 2026 investono su reti di posatori formati e certificati, corsi tecnici per i rivenditori, configuratori digitali e assistenza in cantiere. I tempi di consegna medi si sono stabilizzati tra le 4 e le 6 settimane per il PVC e tra le 6 e le 9 per legno-alluminio e sistemi speciali: chi promette meno spesso scarica il rischio sul cantiere." },
      { type: "list", items: [
        "Verificare che il fornitore disponga di DoP e rapporti di prova completi per ogni tipologia di serramento acquistata.",
        "Chiedere l'elenco dei posatori qualificati UNI 11673-2 attivi nella propria zona e i protocolli di posa consigliati.",
        "Valutare i servizi digitali: configuratore preventivi, tracciabilità ordine, gestione ricambi e assistenza post-vendita.",
        "Confrontare le garanzie: 10 anni su profili e guarnizioni sono lo standard della fascia alta, 5 il minimo accettabile.",
        "Verificare la disponibilità di certificazioni ambientali (EPD, CAM) indispensabili per gli appalti pubblici.",
        "Testare il supporto tecnico con un caso reale: rilievo misure, studio del nodo di posa, verifica termografica."
      ] },
      { type: "h2", id: "marchi-2026", text: "I principali marchi sul mercato italiano" },
      { type: "p", text: "Il panorama 2026 vede i grandi player internazionali presidiare le fasce alte: Schüco e Ponzio per i sistemi in alluminio, Internorm e Finstral per l'alta efficienza in PVC e misto, Veka e Oknoplast per il PVC di grande distribuzione. Accanto a loro, produttori italiani come Serramento, Navello e numerosi marchi regionali competono su personalizzazione, flessibilità di produzione e servizio di prossimità. La scelta migliore dipende dal posizionamento dell'impresa: chi lavora su grandi commesse trova nei sistemi internazionali cataloghi completi e supporto progettuale; chi vive di sostituzione residenziale spesso ottiene condizioni e assistenza migliori da produttori nazionali con rete capillare." },
      { type: "h2", id: "conclusioni", text: "Conclusioni: il fornitore come partner di cantiere" },
      { type: "p", text: "Nel 2026 il serramento non è più un componente a listino ma un nodo critico dell'involucro: dalla sua prestazione in opera dipendono ecobonus, certificazione energetica e comfort dell'edificio. La raccomandazione finale è costruire rapporti stabili con uno o due fornitori per fascia di mercato, investire nella qualificazione della posa e usare le certificazioni come argomento commerciale verso il committente. Il margine, oggi, è nella competenza, non nello sconto." }
    ],
    faqs: [
      { q: "Meglio serramenti in PVC o alluminio nel 2026?", a: "Dipende dal contesto: il PVC offre il miglior rapporto tra prestazioni termiche e prezzo per la sostituzione residenziale, mentre l'alluminio a taglio termico è preferibile per grandi aperture, facciate e non residenziale. A parità di vetro, le trasmittanze sono oggi molto vicine." },
      { q: "Quanto costa una finestra in PVC di buona qualità?", a: "Per una finestra standard a due ante (120x140 cm) con profilo multicamera e vetro triplo, il prezzo di fornitura nel 2026 si colloca tra 500 e 850 euro, esclusa posa. La posa qualificata UNI 11673-2 aggiunge in media 80-150 euro per serramento." },
      { q: "La certificazione di posa UNI 11673-2 è obbligatoria?", a: "Non è obbligatoria per legge, ma è richiesta in molti capitolati e negli appalti pubblici, ed è fortemente consigliata per gli interventi con ecobonus, perché garantisce il rispetto delle prestazioni dichiarate in fase di asseverazione [ENEA](https://www.enea.it)." },
      { q: "Quali garanzie deve offrire un buon fornitore di serramenti?", a: "Lo standard della fascia alta prevede 10 anni su profili, guarnizioni e difetti di produzione, 5 anni su ferramenta e vetri. Il fornitore deve inoltre garantire la disponibilità dei ricambi per almeno 10 anni e un servizio di assistenza tecnica attivo." }
    ],
    tags: ["serramenti", "infissi", "fornitori edili", "posa in opera", "efficienza energetica"],
    related: ["posa-in-opera-serramenti-uni-11673", "cappotto-termico-2026-costi-materiali", "efficienza-energetica-condomini-2026"]
  },
  {
    slug: "direttiva-case-green-2026-cosa-cambia",
    category: "Normativa",
    title: "Direttiva Case Green: cosa cambia dal 2026 per edifici, imprese e proprietari",
    metaTitle: "Direttiva Case Green 2026: cosa cambia per gli edifici",
    metaDescription: "Direttiva Case Green: recepimento 2026, edifici a emissioni zero, riqualificazione del patrimonio e obbligo solare. Cosa cambia per imprese e proprietari.",
    keywords: ["direttiva case green 2026", "direttiva UE 2024/1275", "edifici a emissioni zero", "riqualificazione energetica edifici", "recepimento EPBD Italia"],
    subtitle: "Dal recepimento nazionale alla traiettoria di riqualificazione del patrimonio: le scadenze, gli obblighi e le opportunità per la filiera delle costruzioni",
    excerpt: "Il recepimento della direttiva Case Green nel 2026 introduce edifici a emissioni zero, una traiettoria vincolante di riqualificazione del patrimonio residenziale e l'obbligo solare progressivo. Ecco cosa cambia davvero.",
    published: "2026-07-06T08:00:00+02:00",
    updated: "2026-07-06T08:00:00+02:00",
    readingTime: 12,
    author: {
      name: "Marco Bertelli",
      role: "Caporedattore Normativa & Fisco",
      bio: "Giornalista edile con oltre quindici anni di esperienza, segue fisco agevolato e normativa tecnica per le principali testate di settore. Ha curato guide operative su Superbonus, contabilizzazione e appalti pubblici."
    },
    image: "/images/articoli/direttiva-case-green-2026-cosa-cambia.jpg",
    imageAlt: "Edificio residenziale riqualificato energeticamente con pannelli solari secondo la direttiva Case Green",
    imageCaption: "La direttiva Case Green fissa la rotta: edifici a emissioni zero per le nuove costruzioni e riqualificazione progressiva dell'esistente.",
    summary: [
      "La direttiva Case Green (UE 2024/1275) va recepita dagli Stati membri entro maggio 2026: l'Italia adeguerà il D.Lgs 192/2005 con nuovi requisiti per edifici nuovi ed esistenti.",
      "Dal 2030 tutti gli edifici di nuova costruzione dovranno essere a emissioni zero (NZEB), con anticipo al 2028 per gli edifici pubblici.",
      "Traiettoria nazionale vincolante: riduzione del consumo energetico del parco residenziale del 16% entro il 2030 e del 20-22% entro il 2035, partendo dal 16% degli edifici con prestazioni peggiori.",
      "Obbligo progressivo di installazione solare su edifici nuovi e su quelli sottoposti a ristrutturazioni rilevanti, con scadenze scaglionate al 2030.",
      "Stop graduale agli incentivi per le caldaie a combustibile fossile e revisione del sistema di certificazione energetica APE."
    ],
    body: [
      { type: "p", text: "La direttiva europea 2024/1275, nota come direttiva Case Green o EPBD recast, è la norma che ridisegnerà il mercato italiano delle costruzioni per i prossimi vent'anni. Il termine per il recepimento da parte degli Stati membri è fissato a maggio 2026: l'Italia interverrà sul decreto legislativo 192/2005 e sui decreti requisiti minimi, con effetti diretti su progettazione, cantieri di riqualificazione e certificazione energetica. Per imprese edili, progettisti e proprietari è il momento di capire cosa cambia concretamente, al di là delle semplificazioni." },
      { type: "h2", id: "cosa-prevede", text: "Cosa prevede la direttiva Case Green" },
      { type: "p", text: "Il cuore della direttiva è la decarbonizzazione del parco immobiliare europeo entro il 2050. I pilastri operativi sono tre: l'obbligo di edifici a emissioni zero per le nuove costruzioni, una traiettoria nazionale vincolante di riqualificazione del patrimonio esistente e un piano di abbandono progressivo degli impianti a combustibili fossili. A differenza del Superbonus, che era una leva fiscale, la Case Green è una norma di prodotto e di processo: stabilisce requisiti minimi di prestazione energetica che gli Stati devono tradurre in regole edilizie cogenti. Il parco edilizio italiano, tra i più vecchi d'Europa con oltre il 60% degli edifici in classi energetiche E, F e G secondo i dati [ENEA](https://www.enea.it), è direttamente interessato." },
      { type: "h2", id: "scadenze-2026", text: "Quali sono le scadenze dal 2026 in poi?" },
      { type: "p", text: "Il calendario è scaglionato ma stringente. Dopo il recepimento del maggio 2026, i nuovi requisiti si applicheranno gradualmente: edifici pubblici nuovi a emissioni zero dal 2028, tutti gli edifici nuovi dal 2030. Per l'esistente, ogni Stato deve ridurre il consumo energetico medio del parco residenziale del 16% entro il 2030 e del 20-22% entro il 2035, intervenendo prioritariamente sul 43% degli edifici non residenziali e sul 16% di quelli residenziali con le prestazioni peggiori. Per il non residenziale valgono soglie progressive di ristrutturazione legate alle classi energetiche." },
      { type: "table", caption: "Le principali scadenze della direttiva Case Green", head: ["Scadenza", "Obbligo", "Soggetti interessati"], rows: [
        ["Maggio 2026", "Recepimento nazionale della direttiva", "Stati membri"],
        ["2028", "Nuovi edifici pubblici a emissioni zero", "Pubblica amministrazione"],
        ["2030", "Tutti i nuovi edifici a emissioni zero; obbligo solare su nuovi edifici", "Costruttori, progettisti"],
        ["2030", "Riduzione consumi residenziali -16%", "Patrimonio esistente"],
        ["2033-2035", "Riduzione consumi residenziali -20/22%; obbligo solare esteso", "Patrimonio esistente"],
        ["2040", "Stop progressivo caldaie a combustibile fossile", "Impiantisti, proprietari"]
      ] },
      { type: "quote", text: "La Case Green non è un nuovo bonus ma un regolamento di prodotto edilizio: chi costruisce o ristruttura dovrà dimostrare la prestazione, non solo dichiararla. Le imprese che si attrezzano ora su diagnosi e involucro avranno vent'anni di lavoro garantito.", author: "ing. Francesca Roldi, esperta di politiche energetiche europee e consulente di associazioni di categoria" },
      { type: "h2", id: "edifici-esistenti", text: "Cosa cambia per gli edifici esistenti" },
      { type: "p", text: "Per il patrimonio esistente la direttiva non impone singoli obblighi di ristrutturazione per legge a ogni proprietario, ma vincola lo Stato a raggiungere gli obiettivi aggregati: gli strumenti saranno una combinazione di requisiti minimi al momento della ristrutturazione, incentivi fiscali mirati e, in alcuni Paesi, obblighi al cambio di destinazione o alla vendita. In Italia lo scenario più probabile, secondo le audizioni parlamentari del 2025-2026, è il rafforzamento dell'ecobonus e del Conto termico per le classi peggiori, con requisiti minimi vincolanti quando si eseguono ristrutturazioni rilevanti. Le cosiddette esenzioni restano previste per edifici storici tutelati, luoghi di culto, seconde case usate meno di quattro mesi l'anno e piccoli edifici indipendenti sotto i 50 mq." },
      { type: "h2", id: "obbligo-solare", text: "Come funziona l'obbligo solare progressivo" },
      { type: "p", text: "Un capitolo operativo rilevante riguarda l'obbligo di installazione di sistemi solari termici e fotovoltaici: dal 2027 sui nuovi edifici pubblici e non residenziali, dal 2029 sui nuovi residenziali, dal 2030 sugli edifici esistenti sottoposti a ristrutturazioni rilevanti o radicali, dove tecnicamente ed economicamente fattibile. Per le imprese significa integrare stabilmente nelle offerte progettazione solare, accumuli e pompe di calore: il cantiere di riqualificazione tipo del 2028-2030 sarà un cantiere integrato involucro-impianti-fonti rinnovabili." },
      { type: "list", items: [
        "Nuovi edifici: progettazione NZEB obbligatoria dal 2030, con copertura dei consumi da fonti rinnovabili in loco o vicine.",
        "Ristrutturazioni rilevanti: adeguamento ai requisiti minimi e, dove fattibile, installazione solare.",
        "Certificazione energetica: revisione delle classi APE con scala armonizzata europea e introduzione dell'indicatore di emissioni.",
        "Passaporto di ristrutturazione: documento che pianifica gli interventi graduali dell'edificio nel tempo.",
        "Sistemi di automazione e controllo obbligatori per gli edifici non residenziali oltre i 290 kW di potenza impiantistica."
      ] },
      { type: "h2", id: "impatto-imprese", text: "Qual è l'impatto per imprese e professionisti?" },
      { type: "p", text: "Le stime elaborate da [ANCE](https://www.ance.it) e [CRESME](https://www.cresme.it) indicano un potenziale di 40-60 miliardi di euro di lavori di riqualificazione nel decennio 2026-2035, concentrati su involucro, serramenti, impianti e rinnovabili. Le competenze richieste cambiano: serviranno diagnosi energetiche accurate, conoscenza dei sistemi ibridi, capacità di gestire pratiche [GSE](https://www.gse.it) e certificazioni. I progettisti dovranno aggiornarsi sui nuovi metodi di calcolo, mentre le imprese dovranno strutturarsi per cantieri multidisciplinari. Il rischio, segnalato dalle associazioni, è la carenza di manodopera qualificata: il settore cerca ancora decine di migliaia di posatori, termoidraulici e tecnici dell'involucro." },
      { type: "h2", id: "conclusioni", text: "Conclusioni: prepararsi al recepimento" },
      { type: "p", text: "Il 2026 è l'anno del recepimento, ma gli effetti concreti si dispiegheranno tra il 2027 e il 2030. Il consiglio per imprese e professionisti è triplice: monitorare i decreti attuativi italiani attesi tra fine 2026 e inizio 2027, investire in formazione su diagnosi e riqualificazione integrata, e costruire reti di competenze (termotecnici, certificatori, installatori FER) capaci di offrire al cliente un servizio completo. La Case Green non è un vincolo da subire: è il piano industriale del settore per i prossimi vent'anni." }
    ],
    faqs: [
      { q: "La direttiva Case Green obbliga a ristrutturare casa?", a: "No, non esiste un obbligo individuale automatico per i proprietari. La direttiva vincola gli Stati a obiettivi aggregati di riduzione dei consumi, che saranno raggiunti con incentivi, requisiti minimi nelle ristrutturazioni rilevanti e strumenti nazionali. Alcune categorie, come edifici storici e seconde case poco usate, sono esentate." },
      { q: "Dal 2026 saranno vietate le caldaie a gas?", a: "No. La direttiva prevede lo stop progressivo agli incentivi per le caldaie a combustibile fossile e l'uscita graduale dal mercato entro il 2040, ma non vieta l'uso delle caldaie esistenti. Le nuove installazioni restano possibili, salvo scelte nazionali più restrittive." },
      { q: "Cosa significa edificio a emissioni zero (NZEB)?", a: "È un edificio con fabbisogno energetico molto basso, coperto interamente da fonti rinnovabili prodotte in loco o nelle vicinanze, senza emissioni di carbonio da combustibili fossili in sito. Dal 2030 sarà lo standard obbligatorio per tutte le nuove costruzioni." },
      { q: "Quando saranno noti i decreti attuativi italiani?", a: "Il recepimento è previsto entro maggio 2026, ma i decreti attuativi di dettaglio (requisiti minimi, metodi di calcolo, revisione APE) arriveranno tra fine 2026 e il 2027. Le imprese dovrebbero seguire i lavori del MIT e del MASE per anticipare gli adeguamenti." }
    ],
    tags: ["direttiva case green", "efficienza energetica", "normativa edilizia", "riqualificazione", "nzeb"],
    related: ["bonus-edilizi-2026-guida-completa", "efficienza-energetica-condomini-2026", "fotovoltaico-edilizia-2026-incentivi"]
  },
  {
    slug: "mercato-costruzioni-2026-previsioni",
    category: "Mercato",
    title: "Mercato delle costruzioni 2026: previsioni, numeri e scenari per le imprese edili",
    metaTitle: "Mercato costruzioni 2026: previsioni e scenari ANCE",
    metaDescription: "Mercato delle costruzioni 2026: previsioni ANCE e CRESME, andamento di residenziale, infrastrutture e riqualificazione. Numeri e scenari per le imprese.",
    keywords: ["mercato costruzioni 2026", "previsioni edilizia 2026", "ANCE CRESME 2026", "investimenti costruzioni", "edilizia residenziale 2026"],
    subtitle: "Gli investimenti tengono grazie a infrastrutture e PNRR, il residenziale si riassetta dopo il Superbonus: l'analisi completa dei dati e degli scenari per il biennio 2026-2027",
    excerpt: "Il 2026 si chiude con investimenti in costruzioni intorno a 210 miliardi di euro: infrastrutture e non residenziale spingono, il residenziale si riorganizza. Tutti i numeri e gli scenari per pianificare il 2027.",
    published: "2026-07-08T07:45:00+02:00",
    updated: "2026-07-09T07:45:00+02:00",
    readingTime: 11,
    author: {
      name: "Giulia Ferraro",
      role: "Redattrice Mercato & Imprese",
      bio: "Si occupa di analisi di mercato, congiuntura delle costruzioni e dinamiche delle imprese edili. Collabora con centri studi e associazioni di categoria per l'interpretazione dei dati di settore."
    },
    image: "/images/articoli/mercato-costruzioni-2026-previsioni.jpg",
    imageAlt: "Panorama di cantieri edili e gru in una città italiana, andamento mercato costruzioni 2026",
    imageCaption: "Infrastrutture e riqualificazione energetica sorreggono il ciclo delle costruzioni nel 2026, mentre il residenziale si riassetta.",
    summary: [
      "Gli investimenti in costruzioni nel 2026 si attestano intorno a 210 miliardi di euro, con una crescita reale stimata tra l'1% e il 2% secondo le previsioni [ANCE](https://www.ance.it)-[CRESME](https://www.cresme.it).",
      "Le opere pubbliche e le infrastrutture crescono a doppia cifra, trainate da PNRR e dal ciclo dei grandi appalti ferroviari, autostradali e idrici.",
      "Il residenziale in nuova costruzione segna un calo fisiologico dopo il picco incentivato, mentre la riqualificazione energetica resta il segmento più solido.",
      "La carenza di manodopera resta il vincolo principale: il settore segnala un fabbisogno di 150.000-250.000 addetti tra operai specializzati e tecnici.",
      "Scenario 2027: stabilità o lieve crescita, con rischi legati a costo del credito, tempi di spesa PNRR e prezzi dei materiali."
    ],
    body: [
      { type: "p", text: "Il mercato italiano delle costruzioni arriva alla metà del 2026 con un profilo più equilibrato rispetto agli anni del boom incentivato. Dopo il picco del 2023, alimentato dal Superbonus, e la normalizzazione del biennio successivo, gli investimenti si attestano secondo le stime ANCE-CRESME intorno a 210 miliardi di euro, con una variazione reale attesa tra l'1% e il 2%. Il dato aggregato nasconde però dinamiche molto diverse tra segmenti: capirle è essenziale per le imprese che devono decidere dove puntare nel biennio 2026-2027." },
      { type: "h2", id: "quadro-congiunturale", text: "Il quadro congiunturale: cosa dicono i numeri" },
      { type: "p", text: "Il primo semestre 2026 conferma la tenuta del ciclo: la produzione nelle costruzioni rilevata da ISTAT cresce su base annua, l'occupazione di settore supera stabilmente quota 1,8 milioni di addetti e i permessi di costruire mostrano un recupero selettivo nelle aree metropolitane del Nord e del Centro. Il contesto macroeconomico aiuta parzialmente: l'inflazione è tornata sotto il 2%, i tassi BCE si sono normalizzati su livelli che rendono nuovamente sostenibili i mutui, e il costo dei materiali, pur restando su livelli strutturalmente più alti del pre-2020, non registra più gli shock del biennio 2021-2022." },
      { type: "table", caption: "Previsioni investimenti in costruzioni 2026 per segmento (stime ANCE-CRESME, variazioni reali)", head: ["Segmento", "Peso sul totale", "Variazione 2026", "Driver principali"], rows: [
        ["Nuove costruzioni residenziali", "circa 20%", "-3% / -5%", "Fine spinta incentivi, costo credito"],
        ["Ristrutturazioni residenziali", "circa 35%", "+1% / +3%", "Bonus casa, ecobonus, riqualificazione"],
        ["Non residenziale privato", "circa 20%", "+2% / +4%", "Logistica, terziario, industria"],
        ["Opere pubbliche e infrastrutture", "circa 25%", "+6% / +9%", "PNRR, ferrovie, acquedotti, ponti"],
        ["Totale investimenti", "100%", "+1% / +2%", "Mix segmenti"]
      ] },
      { type: "h2", id: "residenziale", text: "Come sta andando il residenziale?" },
      { type: "p", text: "Il residenziale vive una fase di riassetto. La nuova costruzione, che aveva beneficiato indirettamente della liquidità immessa dagli incentivi, segna un calo fisiologico: i prezzi elevati nelle grandi città e il costo dei mutui, pur in miglioramento, frenano la domanda delle famiglie. Diversa la dinamica della riqualificazione: la combinazione di bonus casa al 50%, ecobonus e prospettiva della direttiva Case Green sostiene un portafoglio ordini che per molte imprese di ristrutturazione copre già 12-18 mesi. Il segmento si sta professionalizzando: i committenti chiedono contratti chiavi in mano, diagnosi energetiche e garanzie sulla prestazione finale." },
      { type: "h2", id: "opere-pubbliche", text: "Perché le opere pubbliche trainano il ciclo" },
      { type: "p", text: "Il vero motore del 2026 sono le opere pubbliche. La spesa PNRR entra nella fase di piena esecuzione, con scadenza finale al 2026-2027 per la rendicontazione: stazioni appaltanti e grandi concessionari accelerano su ferrovie, metropolitane, acquedotti, dighe e messa in sicurezza idrogeologica. Il nuovo codice dei contratti pubblici (D.Lgs 36/2023), dopo un avvio complesso, comincia a dispiegare gli effetti semplificatori. Per le imprese di medie dimensioni le opportunità sono nel subappalto qualificato e nei lavori complementari ai grandi progetti, dove la domanda di competenze specialistiche supera l'offerta." },
      { type: "quote", text: "Il 2026 è l'anno della verità per il sistema delle imprese: chi ha investito in organizzazione, sicurezza e competenze digitali trova lavoro e margini; chi è rimasto al modello del prezzo più basso fatica anche in un mercato che cresce.", author: "ing. Alessandro Ghetti, direttore di un osservatorio congiunturale sulle costruzioni" },
      { type: "h2", id: "vincoli-criticita", text: "Quali sono i vincoli e le criticità?" },
      { type: "p", text: "Tre vincoli strutturali limitano il potenziale di crescita. Il primo è la manodopera: le stime di associazioni e centri studi indicano un fabbisogno tra 150.000 e 250.000 addetti, con punte critiche per carpentieri, ferraioli, posatori e tecnici di cantiere. Il secondo è il costo del credito per le imprese più piccole, che incide sulla capacità di anticipare i cantieri pubblici. Il terzo è la capacità amministrativa delle stazioni appaltanti, ancora insufficiente in molte regioni del Mezzogiorno, dove i tempi tra affidamento e avvio lavori restano il doppio della media europea." },
      { type: "list", items: [
        "Manodopera: formazione professionale e ingressi regolari dall'estero sono le due leve urgenti indicate dalle imprese.",
        "Credito: l'accesso agli anticipi di cantiere e ai sistemi di garanzia resta selettivo per le microimprese.",
        "Burocrazia: digitalizzazione delle pratiche edilizie e fascicolo unico procedono a velocità diverse tra regioni.",
        "Materiali: prezzi stabilizzati ma su livelli alti, con volatilità residua su acciaio, rame e prodotti energetici.",
        "Domanda: il residenziale privato resta sensibile all'andamento dei mutui e alla fiducia delle famiglie."
      ] },
      { type: "h2", id: "scenario-2027", text: "Cosa aspettarsi per il 2027?" },
      { type: "p", text: "Gli scenari per il 2027 disegnano una sostanziale continuità: crescita attesa tra lo 0,5% e il 2%, con le infrastrutture ancora in espansione fino all'esaurimento del ciclo PNRR e il residenziale in recupero graduale se i tassi continueranno a scendere. Il rischio principale è il vuoto post-2027 sulle opere pubbliche, che richiederà una nuova programmazione pluriennale. Le imprese più solide stanno già diversificando: manutenzione programmata, gestione del patrimonio, riqualificazione energetica di lungo periodo e servizi integrati sono i segmenti dove la domanda appare strutturale e non congiunturale." },
      { type: "h2", id: "conclusioni", text: "Conclusioni: crescita sì, ma selettiva" },
      { type: "p", text: "Il mercato delle costruzioni del 2026 non è più il mercato dell'euforia incentivante, ma quello della selezione. Crescono le imprese con struttura, competenze e reputazione; si ritirano quelle improvvisate nate sulla scia del Superbonus. Per chi legge i dati con attenzione, il messaggio è chiaro: il lavoro c'è e ci sarà, ma si vince sulla capacità di eseguire bene, in sicurezza, con margini sani. La pianificazione del portafoglio commesse per il 2027 parte da qui." }
    ],
    faqs: [
      { q: "Il mercato delle costruzioni cresce nel 2026?", a: "Sì, le previsioni ANCE-CRESME indicano una crescita reale degli investimenti tra l'1% e il 2%, con un valore complessivo intorno a 210 miliardi di euro. La crescita è però trainata dalle opere pubbliche, mentre il residenziale in nuova costruzione è in calo." },
      { q: "Quanti addetti mancano al settore delle costruzioni?", a: "Le stime delle associazioni di categoria e dei centri studi indicano un fabbisogno compreso tra 150.000 e 250.000 addetti, con carenze critiche per carpentieri, ferraioli, posatori, gruisti e tecnici di cantiere." },
      { q: "Conviene puntare sulle ristrutturazioni o sulle nuove costruzioni?", a: "Nel biennio 2026-2027 la riqualificazione residenziale ed energetica offre prospettive più solide, sostenuta da bonus fiscali e dalla direttiva Case Green. La nuova costruzione residenziale dovrebbe riprendersi gradualmente con la discesa dei tassi." },
      { q: "Cosa succederà alle opere pubbliche dopo il PNRR?", a: "Il ciclo PNRR si esaurirà tra il 2026 e il 2027. Il rischio di un vuoto di domanda è reale e dipenderà dalla nuova programmazione pluriennale nazionale ed europea. Le imprese stanno diversificando verso manutenzione, gestione del patrimonio e servizi integrati." }
    ],
    tags: ["mercato costruzioni", "previsioni edilizia", "ance", "pnrr", "investimenti"],
    related: ["prezzi-materiali-costruzione-2026", "migliori-imprese-costruzioni-italia-2026", "rigenerazione-urbana-2026-progetti"]
  },
  {
    slug: "prezzi-materiali-costruzione-2026",
    category: "Mercato",
    title: "Prezzi dei materiali da costruzione nel 2026: andamento di cemento, acciaio, laterizi e legno",
    metaTitle: "Prezzi materiali da costruzione 2026: l'andamento",
    metaDescription: "Prezzi dei materiali da costruzione nel 2026: cemento, acciaio, laterizi, legno e isolanti. Andamento, previsioni e strategie di acquisto per le imprese.",
    keywords: ["prezzi materiali da costruzione 2026", "prezzo cemento 2026", "prezzo acciaio edilizia", "costo materiali edili", "andamento prezzi costruzioni"],
    subtitle: "Dopo gli shock del 2021-2022 i listini si sono stabilizzati su livelli più alti: ecco l'andamento reale dei principali materiali e le strategie per difendere i margini di cantiere",
    excerpt: "Cemento in crescita del 3-4%, acciaio stabile, legno in calo fisiologico: la fotografia dei prezzi dei materiali da costruzione nel 2026 e le strategie di acquisto per le imprese.",
    published: "2026-07-10T08:15:00+02:00",
    updated: "2026-07-10T08:15:00+02:00",
    readingTime: 10,
    author: {
      name: "Giulia Ferraro",
      role: "Redattrice Mercato & Imprese",
      bio: "Si occupa di analisi di mercato, congiuntura delle costruzioni e dinamiche delle imprese edili. Collabora con centri studi e associazioni di categoria per l'interpretazione dei dati di settore."
    },
    image: "/images/articoli/prezzi-materiali-costruzione-2026.jpg",
    imageAlt: "Deposito di materiali da costruzione con cemento, acciaio e laterizi in un cantiere edile",
    imageCaption: "I prezzi dei materiali nel 2026 sono stabilizzati ma restano su livelli strutturalmente superiori al periodo pre-pandemia.",
    summary: [
      "Nel 2026 i prezzi dei materiali da costruzione crescono in media del 2-3% annuo, dopo gli shock del 2021-2022 che avevano portato aumenti cumulati superiori al 30%.",
      "Cemento e calcestruzzo: +3-4% annuo, con prezzi del cemento sfuso tra 120 e 150 €/t, spinti da costi energetici e cottura del clinker.",
      "Acciaio da cemento armato: quotazioni stabili tra 620 e 720 €/t, con volatilità legata ai mercati internazionali e al costo dei rottami.",
      "Laterizi, legno e isolanti: laterizi +2-3%, legno da costruzione in calo del 5-8% rispetto ai picchi, isolanti stabili con pressioni su EPS e lana minerale.",
      "Le imprese difendono i margini con acquisti programmati, clausole di revisione prezzi nei contratti e qualificazione dei fornitori."
    ],
    body: [
      { type: "p", text: "Il 2026 segna il terzo anno di normalizzazione dei prezzi dei materiali da costruzione dopo la tempesta del 2021-2022, quando gli indici [ISTAT](https://www.istat.it) avevano registrato aumenti annui superiori al 20% per alcune famiglie di prodotti. La stabilizzazione è però relativa: i listini si sono fermati su livelli strutturalmente più alti del 25-35% rispetto al 2019 e continuano a crescere a ritmi del 2-3% annuo. Per le imprese edili la partita si è spostata dall'emergenza alla gestione: chi sa comprare bene, oggi, protegge i margini più di chi sa solo vendere." },
      { type: "h2", id: "cemento-calcestruzzo", text: "Come stanno andando cemento e calcestruzzo?" },
      { type: "p", text: "Il cemento resta il materiale con la dinamica più tesa. La produzione del clinker è energivora e i costi di cottura, pur scesi dai picchi del 2022, restano elevati; a questo si aggiunge il costo crescente dei permessi di emissione ETS, che pesa in modo strutturale sui cementifici europei. I prezzi del cemento sfuso si collocano nel 2026 tra 120 e 150 euro a tonnellata a seconda di tipologia e zona, con aumenti annui del 3-4%. Il calcestruzzo preconfezionato segue di riflesso, con listini tra 130 e 170 euro al metro cubo per le classi più comuni, esclusi pompaggi e trasporti lunghi. Le associazioni dei produttori segnalano anche una progressiva riconfigurazione dell'offerta verso cementi a minor contenuto di clinker, spinta dalla sostenibilità e dai CAM." },
      { type: "table", caption: "Prezzi indicativi dei principali materiali da costruzione, 2026 (fonti: elaborazioni su listini e indici ISTAT)", head: ["Materiale", "Prezzo indicativo 2026", "Variazione annua", "Driver principali"], rows: [
        ["Cemento sfuso", "120 - 150 €/t", "+3% / +4%", "Energia, ETS, clinker"],
        ["Calcestruzzo preconfezionato", "130 - 170 €/mc", "+3%", "Cemento, trasporti"],
        ["Acciaio da c.a. (barre)", "620 - 720 €/t", "0% / +2%", "Rottami, mercati internazionali"],
        ["Laterizi (blocchi)", "0,40 - 0,70 €/pz", "+2% / +3%", "Gas, logistica"],
        ["Legno strutturale (X-lam)", "450 - 650 €/mc", "-5% / -8%", "Offerta, domanda in calo"],
        ["Isolanti (EPS, lana)", "25 - 45 €/mq (sp. 10 cm)", "0% / +3%", "Petrolio, energia"]
      ] },
      { type: "h2", id: "acciaio-metalli", text: "Acciaio e metalli: stabilità o nuova volatilità?" },
      { type: "p", text: "L'acciaio da cemento armato vive una fase di relativa calma: le quotazioni delle barre e delle reti elettrosaldate oscillano tra 620 e 720 euro a tonnellata, con variazioni contenute su base annua. La volatilità non è però sparita: il prezzo dipende dai rottami ferrosi, dai costi energetici dei forni elettrici e dalle dinamiche dei mercati internazionali, dove le politiche commerciali e i dazi possono cambiare gli equilibri in poche settimane. Diverso il discorso per i metalli non ferrosi: il rame, cruciale per impianti elettrici e pompe di calore, resta su livelli storicamente elevati per la domanda mondiale di elettrificazione, con prezzi del cavo che incidono sensibilmente sui costi impiantistici." },
      { type: "h2", id: "legno-laterizi", text: "Legno, laterizi e isolanti: i segnali dal mercato" },
      { type: "p", text: "Il legno da costruzione è la famiglia che ha corretto di più: dopo i raddoppi del 2021, i prezzi di segati, pannelli e strutture in X-lam sono scesi del 5-8% rispetto ai massimi, anche per il rallentamento della domanda residenziale. Resta un mercato sensibile all'offerta europea e ai trasporti. I laterizi crescono invece in modo ordinato, +2-3% annuo, trascinati da gas e logistica; il consolidamento dei produttori italiani ha ridotto la concorrenza di prezzo. Sull'isolamento la domanda legata a ecobonus e cappotti termici mantiene tesi i listini di EPS e lana minerale, con punte stagionali nei mesi di piena attività cantieristica." },
      { type: "quote", text: "La gestione degli approvvigionamenti è diventata una funzione strategica: le imprese che hanno introdotto acquisti programmati, scorte tampone sui materiali critici e clausole di revisione nei contratti hanno difeso i margini anche negli anni più difficili.", author: "geom. Daniele Ferri, responsabile acquisti di un gruppo costruttore del Nord Italia" },
      { type: "h2", id: "strategie-acquisto", text: "Quali strategie di acquisto adottare?" },
      { type: "p", text: "L'esperienza del triennio 2023-2026 ha insegnato al settore alcune pratiche ormai consolidate. La prima è la programmazione: bloccare i prezzi sui volumi annuali con i fornitori storici costa qualche punto in più ma elimina il rischio di rinegoziazione a cantiere aperto. La seconda è la contrattualistica: le clausole di revisione prezzi, obbligatorie negli appalti pubblici oltre determinate soglie, vanno replicate nei contratti privati, indicizzandole agli indici ISTAT dei materiali. La terza è la diversificazione: qualificare almeno due fornitori per ogni famiglia critica evita ricatti logistici nei picchi di domanda." },
      { type: "list", items: [
        "Monitorare mensilmente gli indici ISTAT dei prezzi alla produzione e i listini delle [Camere di Commercio](https://www.camcom.it) per i materiali critici del proprio portafoglio lavori.",
        "Inserire nei contratti privati clausole di revisione indicizzate, simmetriche e trasparenti per il committente.",
        "Negoziare accordi quadro annuali su cemento, acciaio e isolanti con consegne programmate.",
        "Valutare scorte tampone solo per materiali non deperibili e a rotazione certa, per non immobilizzare capitale.",
        "Qualificare fornitori alternativi su ciascuna famiglia critica e testarli su commesse piccole.",
        "Integrare nel computo metrico un fondo rischi prezzi del 2-4% sui lavori con durata superiore ai 12 mesi."
      ] },
      { type: "h2", id: "previsioni-2027", text: "Cosa aspettarsi per il 2027?" },
      { type: "p", text: "Gli scenari per il 2027 indicano una prosecuzione della crescita moderata: le pressioni strutturali (decarbonizzazione dei cementifici, costi ETS, domanda mondiale di rame e acciai speciali) impediscono un ritorno ai livelli pre-2020, ma non si profilano shock paragonabili a quelli del 2022. Le variabili da monitorare sono tre: il prezzo dell'energia, le politiche commerciali internazionali sui metalli e l'andamento della domanda europea di costruzioni, che influenza la capacità dei produttori di trasferire i costi a valle." },
      { type: "h2", id: "conclusioni", text: "Conclusioni: il prezzo si gestisce, non si subisce" },
      { type: "p", text: "Nel 2026 il prezzo dei materiali non è più un'emergenza ma una variabile gestionale. Le imprese che hanno professionalizzato la funzione acquisti, che usano la revisione prezzi come strumento contrattuale standard e che pianificano gli approvvigionamenti sul lungo periodo trasformano un rischio in vantaggio competitivo. In un mercato dove i margini si giocano su pochi punti percentuali, comprare bene vale quanto costruire bene." }
    ],
    faqs: [
      { q: "I prezzi dei materiali da costruzione scenderanno nel 2026?", a: "No, gli scenari indicano una crescita moderata del 2-3% annuo. I prezzi si sono stabilizzati dopo gli shock del 2021-2022, ma restano strutturalmente più alti del 25-35% rispetto al 2019 per effetto di energia, costi ambientali e logistica." },
      { q: "Quanto costa il calcestruzzo al metro cubo nel 2026?", a: "Per le classi più comuni (C25/30) il prezzo si colloca indicativamente tra 130 e 170 euro al metro cubo, esclusi pompaggio, additivi speciali e trasporti oltre la distanza standard. Le quotazioni variano sensibilmente per zona e volume." },
      { q: "Come funziona la revisione prezzi nei contratti privati?", a: "Non è obbligatoria ma è consigliabile: le parti possono inserire una clausola che aggiorna i corrispettivi in base alla variazione degli indici ISTAT dei materiali oltre una soglia concordata, tipicamente il 5%. La formula deve essere trasparente e simmetrica." },
      { q: "Quali materiali sono più a rischio di aumenti nel 2026-2027?", a: "Cemento e calcestruzzo per i costi energetici e i permessi di emissione, rame e cavi elettrici per la domanda mondiale di elettrificazione, e isolanti nei periodi di picco della domanda legata agli incentivi per la riqualificazione energetica." }
    ],
    tags: ["prezzi materiali", "mercato costruzioni", "cemento", "acciaio", "approvvigionamenti"],
    related: ["mercato-costruzioni-2026-previsioni", "case-prefabbricate-legno-2026", "ristrutturare-casa-2026-costi-guida"]
  },
  {
    slug: "sicurezza-cantieri-2026-nuove-regole",
    category: "Cantieri",
    title: "Sicurezza in cantiere 2026: le nuove regole che ogni impresa deve conoscere",
    metaTitle: "Sicurezza in cantiere 2026: le nuove regole",
    metaDescription: "Sicurezza in cantiere 2026: ponteggi, patente a crediti, formazione e controlli. Le nuove regole del Testo Unico che ogni impresa edile deve conoscere.",
    keywords: ["sicurezza in cantiere 2026", "nuove regole sicurezza edilizia", "patente a crediti edilizia", "ponteggi normativa 2026", "D.Lgs 81/08 aggiornamenti"],
    subtitle: "Dalla patente a crediti per le imprese alle nuove prescrizioni sui ponteggi, fino ai controlli rafforzati: la mappa operativa degli adempimenti per il 2026",
    excerpt: "Patente a crediti per imprese e lavoratori autonomi, regole più stringenti sui ponteggi e controlli digitalizzati: la sicurezza in cantiere cambia passo nel 2026. Ecco cosa fare, concretamente.",
    published: "2026-07-12T09:30:00+02:00",
    updated: "2026-07-13T09:30:00+02:00",
    readingTime: 11,
    author: {
      name: "Sara Colombo",
      role: "Redattrice Cantieri & Progetti",
      bio: "Architetto, segue cantieri, sicurezza e processi digitali di progettazione. Ha esperienza in direzione lavori e coordinamento della sicurezza in fase di esecuzione."
    },
    image: "/images/articoli/sicurezza-cantieri-2026-nuove-regole.jpg",
    imageAlt: "Operai edili con dispositivi di protezione individuale su un ponteggio in cantiere",
    imageCaption: "La sicurezza in cantiere nel 2026 si gioca su patente a crediti, ponteggi conformi e formazione verificabile.",
    summary: [
      "La patente a crediti per imprese e lavoratori autonomi è pienamente operativa nel 2026: 30 crediti iniziali, decurtazioni per violazioni e sospensione sotto i 15 crediti.",
      "Nuove prescrizioni sui ponteggi: obbligo di montanti e traversi prefabbricati per l'ancoraggio, verifiche rafforzate su autorizzazione ministeriale e PiMUS.",
      "Controlli ispettivi rafforzati e digitalizzati: fascicolo di cantiere telematico, notifica preliminare [INAIL](https://www.inail.it) e incroci automatici con le banche dati.",
      "Gli infortuni in edilizia restano il 20% circa del totale nazionale: cadute dall'alto e investimenti sono le cause dominanti.",
      "Formazione obbligatoria aggiornata: preposti, DPI di terza categoria, lavori in quota e primo soccorso sono le voci più sanzionate."
    ],
    body: [
      { type: "p", text: "La sicurezza nei cantieri edili torna al centro dell'agenda normativa nel 2026, spinta da dati infortunistici che non lasciano margini di tolleranza: il settore costruzioni continua a registrare circa il 20% degli infortuni mortali sul lavoro in Italia, con le cadute dall'alto che rappresentano la prima causa. Il legislatore ha risposto con un pacchetto di misure che cambia concretamente il modo di lavorare delle imprese: patente a crediti, regole più stringenti sui ponteggi, controlli digitalizzati e sanzioni aggravate. Questa è la mappa operativa degli adempimenti." },
      { type: "h2", id: "patente-crediti", text: "Come funziona la patente a crediti per le imprese" },
      { type: "p", text: "La patente a crediti, introdotta dal decreto lavoro e pienamente operativa nel 2026, è il cambiamento più rilevante. Ogni impresa e lavoratore autonomo del settore costruzioni parte con una dotazione di 30 crediti, certificata tramite piattaforma telematica. Le violazioni accertate in materia di sicurezza comportano decurtazioni differenziate per gravità: dalle violazioni formali, che costano pochi punti, fino all'impiego di lavoratori in nero o al mancato rispetto di un'ordinanza di sospensione, che possono azzerare il punteggio. Scendere sotto i 15 crediti comporta l'impossibilità di operare nei cantieri fino al ripristino, che avviene solo tramite corsi di formazione specifici e verifiche. Per le stazioni appaltanti e i committenti, la verifica dei crediti è diventata un passaggio obbligato dell'affidamento." },
      { type: "table", caption: "Patente a crediti: principali decurtazioni previste", head: ["Violazione", "Crediti decurtati", "Conseguenze"], rows: [
        ["Mancato uso DPI da parte dei lavoratori", "2 - 5", "Segnalazione e sanzione"],
        ["Carenze documentali (POS, PiMUS, DUVRI)", "3 - 8", "Diffida e termine per adeguarsi"],
        ["Ponteggio non conforme al PiMUS", "5 - 10", "Sospensione lavori in quota"],
        ["Violazione ordinanza di sospensione", "10 - 20", "Sospensione attività"],
        ["Lavoro irregolare accertato", "fino a 30", "Esclusione dai cantieri"]
      ] },
      { type: "h2", id: "ponteggi-nuove-regole", text: "Quali sono le nuove regole sui ponteggi?" },
      { type: "p", text: "Il capitolo ponteggi è stato riscritto dopo anni di segnalazioni da parte degli organismi di vigilanza. Le prescrizioni più rilevanti riguardano l'obbligo di sistemi di ancoraggio con montanti e traversi prefabbricati nelle fasi di montaggio, l'integrazione del PiMUS con le verifiche del preposto documentate per iscritto, e l'attenzione rafforzata sulle autorizzazioni ministeriali per i sistemi non conformi agli schemi tipo. I ponteggi metallici fissi restano il sistema dominante, ma crescono i sistemi multidirezionali per le geometrie complesse. La regola pratica per l'impresa è semplice: nessun lavoro in quota senza ponteggio conforme, PiMUS aggiornato alla configurazione reale e personale formato per montaggio, uso e smontaggio." },
      { type: "quote", text: "La patente a crediti ha cambiato la conversazione in cantiere: oggi il committente e il coordinatore verificano i crediti come verificano la regolarità contributiva. La sicurezza è diventata un requisito di accesso al mercato, non solo un adempimento.", author: "ing. Laura Pezzana, coordinatrice della sicurezza e docente in corsi CSP/CSE" },
      { type: "h2", id: "controlli-sanzioni", text: "Controlli e sanzioni: cosa aspettarsi" },
      { type: "p", text: "L'attività ispettiva nel 2026 è più capillare e più digitale. Gli ispettorati territoriali del [Ministero del Lavoro](https://www.lavoro.gov.it) incrociano in automatico notifiche preliminari INAIL, DURC, fascicoli di cantiere e dati delle piattaforme telematiche, selezionando i cantieri da ispezionare su base di rischio. Le sospensioni dell'attività per violazioni gravi sono diventate lo strumento ordinario, non l'extrema ratio: in molti distretti un cantiere su cinque tra quelli ispezionati riceve almeno una prescrizione. Le sanzioni per le violazioni più comuni, dalla mancata formazione dei preposti all'assenza dei DPI di terza categoria per i lavori in quota, partono da diverse migliaia di euro e possono arrivare alla sospensione dell'impresa." },
      { type: "h2", id: "formazione-adempimenti", text: "Formazione e adempimenti: la checklist 2026" },
      { type: "p", text: "La formazione resta la voce più sanzionata, spesso per carenze documentali più che sostanziali. Il quadro completo degli adempimenti per un'impresa edile nel 2026 comprende la formazione generale e specifica dei lavoratori, la nomina e formazione dei preposti con aggiornamento biennale, l'addestramento pratico all'uso dei DPI di terza categoria, i corsi per il montaggio ponteggi, il primo soccorso e la gestione delle emergenze. La documentazione deve essere immediatamente esibibile in cantiere: il fascicolo telematico aiuta, ma non sostituisce la disponibilità fisica dei documenti chiave." },
      { type: "list", items: [
        "Verificare i crediti della patente aziendale prima di ogni nuovo cantiere e documentare la verifica.",
        "Aggiornare POS, DUVRI e PiMUS per ogni cantiere, con firme e date coerenti con l'effettivo avvio lavori.",
        "Registrare addestramento e consegna dei DPI, in particolare imbracature e sistemi anticaduta.",
        "Formare e nominare per iscritto i preposti, verificando l'aggiornamento biennale.",
        "Documentare le verifiche del ponteggio a ogni variante di configurazione e dopo eventi meteorici eccezionali.",
        "Tenere in cantiere il registro infortuni, le schede di sicurezza dei prodotti chimici e le procedure di emergenza."
      ] },
      { type: "h2", id: "conclusioni", text: "Conclusioni: la sicurezza come investimento" },
      { type: "p", text: "Il messaggio del 2026 è inequivocabile: la sicurezza non è più negoziabile e non è più solo un costo. Le imprese con sistemi di gestione solidi ottengono crediti pieni, accesso preferenziale agli appalti, premi INAIL ridotti e commesse dai committenti più strutturati. Quelle che improvvisano vengono espulse dal mercato a colpi di sospensioni e decurtazioni. Per un settore che cerca centinaia di migliaia di lavoratori, costruire cantieri sicuri è anche la condizione per renderli attrattivi." }
    ],
    faqs: [
      { q: "Cos'è la patente a crediti per le imprese edili?", a: "È un meccanismo di certificazione della sicurezza che assegna a imprese e lavoratori autonomi delle costruzioni 30 crediti iniziali. Le violazioni accertate comportano decurtazioni, e sotto i 15 crediti l'impresa non può operare nei cantieri fino al ripristino tramite formazione." },
      { q: "Chi può montare un ponteggio nel 2026?", a: "Solo lavoratori formati ai sensi dell'Accordo Stato-Regioni, sotto la supervisione di un preposto incaricato. Il montaggio deve seguire il PiMUS e lo schema di autorizzazione ministeriale del sistema usato, con verifiche documentate a ogni variante." },
      { q: "Quali sono le violazioni più sanzionate nei cantieri?", a: "Le carenze formative, il mancato uso dei DPI, i ponteggi non conformi al PiMUS e le lacune documentali su POS e DUVRI. Le violazioni sui lavori in quota comportano quasi sempre la sospensione immediata delle attività interessate." },
      { q: "Come si recuperano i crediti persi della patente?", a: "Tramite corsi di formazione specifici presso soggetti accreditati, proporzionali alla gravità delle violazioni. Il ripristino completo richiede anche la verifica dell'effettivo adeguamento delle condizioni di sicurezza da parte degli organismi competenti." }
    ],
    tags: ["sicurezza cantieri", "patente a crediti", "ponteggi", "d.lgs 81/08", "formazione"],
    related: ["intelligenza-artificiale-cantieri-2026", "mercato-costruzioni-2026-previsioni", "bim-obbligatorio-2026-appalti"]
  },
  {
    slug: "cappotto-termico-2026-costi-materiali",
    category: "Prodotti & Materiali",
    title: "Cappotto termico 2026: costi, materiali migliori e detrazioni disponibili",
    metaTitle: "Cappotto termico 2026: costi, materiali e detrazioni",
    metaDescription: "Cappotto termico 2026: costi al mq, confronto tra EPS, lana di roccia e materiali naturali, spessori e detrazioni ecobonus. La guida completa.",
    keywords: ["cappotto termico 2026", "costo cappotto termico al mq", "migliori materiali isolanti", "ecobonus cappotto", "isolamento a cappotto prezzi"],
    subtitle: "Prezzi reali al metro quadro, confronto tra i materiali isolanti, spessori corretti e detrazioni 2026: tutto quello che serve per progettare e vendere un cappotto termico",
    excerpt: "Il cappotto termico nel 2026 costa tra 90 e 160 euro al mq posato: ecco il confronto tra EPS, lana di roccia e materiali naturali, gli spessori corretti e le detrazioni disponibili.",
    published: "2026-07-14T08:00:00+02:00",
    updated: "2026-07-14T08:00:00+02:00",
    readingTime: 10,
    author: {
      name: "Luca Marchetti",
      role: "Redattore Prodotti & Materiali tecnici",
      bio: "Ingegnere dei materiali, scrive di serramenti, involucro edilizio e tecnologie per l'efficienza energetica. Ha lavorato in laboratori di prova e uffici tecnici di produttori di sistemi per l'involucro."
    },
    image: "/images/articoli/cappotto-termico-2026-costi-materiali.jpg",
    imageAlt: "Posa di pannelli isolanti per cappotto termico esterno su facciata di edificio residenziale",
    imageCaption: "Il cappotto termico resta l'intervento di riqualificazione più efficace: nel 2026 costa tra 90 e 160 euro al mq posato.",
    summary: [
      "Il costo di un cappotto termico nel 2026 varia tra 90 e 160 euro al mq fornito e posato, in funzione di materiale, spessore e complessità della facciata.",
      "L'EPS resta il materiale più usato (circa il 70% dei cappotti italiani); lana di roccia e materiali naturali crescono nei contesti con vincoli di reazione al fuoco e sostenibilità.",
      "Spessori consigliati: 12-16 cm per raggiungere trasmittanze U inferiori a 0,28 W/mqK e accedere alle classi energetiche alte.",
      "Detrazioni 2026: ecobonus al 50% per l'abitazione principale e al 36% per le altre unità, con massimale di 60.000 euro, più Conto termico 3.0 per i casi ammissibili.",
      "I nodi critici sono ponti termici, davanzali, soglie e attacchi: la qualità della posa vale più del materiale scelto."
    ],
    body: [
      { type: "p", text: "Il cappotto termico esterno resta, nel 2026, l'intervento di riqualificazione energetica con il miglior rapporto tra efficacia e costo: ben eseguito, riduce i consumi per climatizzazione del 25-40% e trasforma il comfort dell'edificio. Dopo gli anni del Superbonus, che hanno portato il sistema a quote di mercato mai viste, la domanda si è stabilizzata su livelli alti grazie all'ecobonus e alla prospettiva della direttiva Case Green. Per imprese e progettisti è tornato il tempo delle scelte tecniche ragionate: materiali, spessori, dettagli di posa e costi reali." },
      { type: "h2", id: "costi-2026", text: "Quanto costa un cappotto termico nel 2026?" },
      { type: "p", text: "Il prezzo chiavi in mano di un cappotto termico, comprensivo di ponteggio quando necessario, fornitura, posa, rasatura e finitura, si colloca nel 2026 tra 90 e 160 euro al metro quadro. La forchetta dipende da quattro variabili: il materiale isolante, lo spessore, la complessità della facciata (cornicioni, balconi, fregi) e l'altezza dell'edificio, che incide su ponteggi e sicurezza. Per una villetta unifamiliare con 150-200 mq di facciata il preventivo tipo varia tra 18.000 e 30.000 euro; per un condominio in linea di quattro-sei piani i costi scendono a 80-120 euro al mq grazie alle economie di scala, ma crescono le complessità decisionali e di cantiere." },
      { type: "table", caption: "Confronto tra materiali per cappotto termico: prestazioni e costi 2026", head: ["Materiale", "Conducibilità λ (W/mK)", "Costo sistema (€/mq)", "Punti di forza", "Limiti"], rows: [
        ["EPS grafite", "0,031 - 0,032", "90 - 120", "Economico, leggero, diffuso", "Reazione al fuoco, sostenibilità"],
        ["Lana di roccia", "0,034 - 0,038", "120 - 160", "A1 fuoco, acustica, vapore aperto", "Peso, costo, posa più lenta"],
        ["Fibra di legno", "0,038 - 0,042", "130 - 180", "Sfasamento estivo, naturale", "Costo, spessori maggiori"],
        ["Sughero", "0,038 - 0,040", "140 - 190", "Naturale, durevole, traspirante", "Prezzo, disponibilità"],
        ["Calcio silicato (interno)", "0,045 - 0,060", "70 - 110", "Per vincoli esterni, antimuffa", "Solo posa interna, meno efficace"]
      ] },
      { type: "h2", id: "materiali-migliori", text: "Quali sono i materiali migliori?" },
      { type: "p", text: "Non esiste un materiale migliore in assoluto: esiste il materiale giusto per il contesto. L'EPS con grafite domina il mercato con una quota intorno al 70% perché offre la migliore prestazione termica per euro speso e una filiera di posa matura. La lana di roccia è la scelta obbligata dove contano reazione al fuoco (facciate alte, vie di fuga) e isolamento acustico, ed è preferita negli edifici in muratura antica per la maggiore permeabilità al vapore. Fibra di legno e sughero crescono nei progetti a valenza ambientale e nei climi caldi, dove lo sfasamento termico estivo fa la differenza sul comfort. I sistemi a cappotto interno in calcio silicato restano la soluzione di riserva per i centri storici con vincoli di facciata." },
      { type: "h2", id: "spessori-trasmittanza", text: "Quale spessore scegliere?" },
      { type: "p", text: "La risposta tecnica passa dalla trasmittanza obiettivo. Per raggiungere valori di parete U inferiori a 0,28 W/mqK, coerenti con le classi energetiche alte e con i requisiti delle zone climatiche italiane più fredde, servono spessori tra 12 e 16 cm di EPS grafite o 14-18 cm di materiali con conducibilità superiore. La tentazione di risparmiare sullo spessore è quasi sempre un errore: il costo marginale del materiale aggiuntivo è modesto rispetto a ponteggio, manodopera e rasatura, che restano fissi. Passare da 10 a 14 cm costa in media 8-12 euro al mq in più e migliora la prestazione di un terzo." },
      { type: "quote", text: "Il cappotto perfetto non esiste: esiste il cappotto ben progettato. I problemi che vediamo in perizia, muffe ai nodi e distacchi, nascono quasi sempre da dettagli sbagliati su davanzali, soglie e attacchi, non dal materiale isolante.", author: "ing. Stefano Guarienti, termotecnico e perito specializzato in patologie dell'involucro edilizio" },
      { type: "h2", id: "detrazioni-2026", text: "Quali detrazioni sono disponibili nel 2026?" },
      { type: "p", text: "Il cappotto termico rientra nell'ecobonus con detrazione del 50% per l'abitazione principale e del 36% per le altre unità immobiliari, con massimale di 60.000 euro per unità e recupero in dieci rate annuali. L'intervento deve garantire il rispetto dei valori limite di trasmittanza previsti dal decreto requisiti minimi e richiede asseverazione del tecnico e trasmissione [ENEA](https://www.enea.it) entro 90 giorni dalla fine lavori. Per gli edifici non residenziali e i casi ammissibili, il Conto termico 3.0 offre incentivi diretti fino al 65% della spesa. In presenza di interventi trainanti più ampi, il cappotto può essere combinato con la sostituzione dei serramenti e degli impianti per massimizzare il salto di classe energetica." },
      { type: "list", items: [
        "Verificare la fattibilità tecnica: vincoli paesaggistici, sporgenze, distanze dai confini e condizioni del supporto.",
        "Progettare i dettagli prima del preventivo: davanzali con taglio termico, prolungamento soglie, risvolti su architravi.",
        "Scegliere sistemi con certificazione ETAG 004/ETA e kit completo di accessori originali del produttore.",
        "Richiedere al posatore la documentazione fotografica delle fasi critiche per il fascicolo di cantiere.",
        "Coordinare cappotto e sostituzione serramenti: la posa in opera va riprogettata sul nuovo filo facciata.",
        "Prevedere la verifica finale con termografia per documentare l'assenza di ponti termici residui."
      ] },
      { type: "h2", id: "conclusioni", text: "Conclusioni: qualità di posa e progetto prima di tutto" },
      { type: "p", text: "Nel 2026 il cappotto termico è un prodotto maturo, dove il prezzo si spiega e la qualità si dimostra. Le imprese che vincono le commesse migliori sono quelle che presentano al committente un progetto dei dettagli, un computo trasparente e una garanzia sulla prestazione finale misurabile. Con l'ecobonus stabile e la direttiva Case Green che renderà l'involucro efficiente uno standard, il cappotto resterà il pane quotidiano della riqualificazione italiana almeno per tutto il prossimo decennio." }
    ],
    faqs: [
      { q: "Quanto costa un cappotto termico per una villetta di 150 mq di facciata?", a: "Nel 2026 il costo indicativo è tra 18.000 e 24.000 euro chiavi in mano per un sistema in EPS grafite da 12-14 cm, ponteggio incluso. Con lana di roccia o materiali naturali il preventivo sale del 20-40%." },
      { q: "Meglio EPS o lana di roccia per il cappotto?", a: "L'EPS grafite offre il miglior rapporto prestazione-prezzo ed è adatto alla maggior parte degli edifici. La lana di roccia è preferibile per reazione al fuoco, isolamento acustico e murature antiche che devono smaltire umidità verso l'esterno." },
      { q: "Il cappotto termico rientra nell'ecobonus 2026?", a: "Sì: detrazione del 50% per l'abitazione principale e del 36% per le altre unità, con massimale di 60.000 euro e recupero in dieci anni. Servono asseverazione del tecnico e trasmissione telematica ENEA entro 90 giorni dalla fine lavori." },
      { q: "Si può fare il cappotto su un edificio vincolato?", a: "Sull'esterno dipende dal parere della Soprintendenza; spesso in centro storico non è ammesso. L'alternativa è il cappotto interno con materiali sottili come il calcio silicato, meno performante ma compatibile con i vincoli e comunque detraibile." }
    ],
    tags: ["cappotto termico", "isolamento", "ecobonus", "riqualificazione energetica", "involucro edilizio"],
    related: ["bonus-edilizi-2026-guida-completa", "migliori-fornitori-serramenti-2026", "efficienza-energetica-condomini-2026"]
  },
  {
    slug: "fotovoltaico-edilizia-2026-incentivi",
    category: "Bonus & Fisco",
    title: "Fotovoltaico in edilizia 2026: incentivi, obblighi e opportunità per le imprese",
    metaTitle: "Fotovoltaico edilizia 2026: incentivi e obblighi",
    metaDescription: "Fotovoltaico in edilizia 2026: detrazioni, Conto termico, obbligo solare Case Green e comunità energetiche. Incentivi e opportunità per le imprese.",
    keywords: ["fotovoltaico 2026 incentivi", "obbligo fotovoltaico nuovi edifici", "detrazione fotovoltaico 2026", "comunità energetiche", "direttiva case green solare"],
    subtitle: "Detrazioni, obbligo solare progressivo, comunità energetiche e prezzi degli impianti: perché il fotovoltaico è diventato una voce stabile dell'offerta delle imprese edili",
    excerpt: "Tra detrazione al 50%, obbligo solare progressivo della direttiva Case Green e comunità energetiche, il fotovoltaico nel 2026 è un'opportunità concreta per le imprese edili. Costi, incentivi e scenari.",
    published: "2026-07-16T08:45:00+02:00",
    updated: "2026-07-16T08:45:00+02:00",
    readingTime: 10,
    author: {
      name: "Marco Bertelli",
      role: "Caporedattore Normativa & Fisco",
      bio: "Giornalista edile con oltre quindici anni di esperienza, segue fisco agevolato e normativa tecnica per le principali testate di settore. Ha curato guide operative su Superbonus, contabilizzazione e appalti pubblici."
    },
    image: "/images/articoli/fotovoltaico-edilizia-2026-incentivi.jpg",
    imageAlt: "Installazione di pannelli fotovoltaici sul tetto di un edificio residenziale in ristrutturazione",
    imageCaption: "Il fotovoltaico integrato nella ristrutturazione edilizia è nel 2026 un mercato in crescita, tra incentivi e nuovi obblighi europei.",
    summary: [
      "Detrazione fotovoltaico 2026: 50% per l'abitazione principale e 36% per le altre unità quando l'impianto è installato in occasione di interventi di recupero edilizio.",
      "L'obbligo solare della direttiva Case Green parte nel 2027-2030: nuovi edifici pubblici, poi non residenziali, poi residenziali, infine ristrutturazioni rilevanti.",
      "Costi impianti 2026: 4.500-7.000 euro per un 3 kW residenziale, 900-1.200 €/kW per impianti oltre i 20 kW; accumuli a 400-600 €/kWh installato.",
      "Le comunità energetiche rinnovabili (CER) e lo scambio sul posto rendono conveniente l'autoconsumo collettivo in condomini e comparti.",
      "Per le imprese edili il fotovoltaico è ormai una voce stabile del capitolato di ristrutturazione: serve integrazione con coperture, ponteggi e pratiche [GSE](https://www.gse.it)."
    ],
    body: [
      { type: "p", text: "Il fotovoltaico in edilizia ha cambiato natura: non è più un impianto accessorio venduto dagli installatori specializzati, ma una componente strutturale dei progetti di costruzione e ristrutturazione. Nel 2026 tre fattori spingono questa integrazione: gli incentivi fiscali rimodulati, l'obbligo solare progressivo introdotto dalla direttiva Case Green e la maturità economica della tecnologia, con prezzi dei moduli sui minimi storici. Per le imprese edili si apre un mercato stabile, a condizione di saper gestire progettazione, pratiche e integrazione con il cantiere." },
      { type: "h2", id: "incentivi-2026", text: "Quali incentivi per il fotovoltaico nel 2026?" },
      { type: "p", text: "Il canale principale è la detrazione fiscale: gli impianti fotovoltaici installati in occasione di interventi di manutenzione straordinaria o ristrutturazione accedono al bonus casa con aliquota del 50% per l'abitazione principale e del 36% per le altre unità, con recupero in dieci rate annuali. Il massimale segue quello dell'intervento edilizio di riferimento. Accanto alla detrazione restano attivi il ritiro dedicato del GSE per l'energia immessa in rete, lo scambio sul posto per i piccoli impianti e, soprattutto, la tariffa incentivante per le comunità energetiche rinnovabili, che premia l'energia condivisa con un contributo che può superare i 100 euro a MWh per vent'anni nelle configurazioni più favorevoli. Per le imprese e i condomìni il Conto termico 3.0 copre invece il solare termico e le pompe di calore, spesso abbinate al fotovoltaico." },
      { type: "table", caption: "Costi indicativi degli impianti fotovoltaici nel 2026", head: ["Taglia impianto", "Costo chiavi in mano", "Costo unitario", "Produzione annua stimata"], rows: [
        ["3 kW residenziale", "4.500 - 7.000 €", "1.500 - 2.300 €/kW", "3.300 - 4.200 kWh"],
        ["6 kW residenziale", "7.500 - 11.000 €", "1.250 - 1.800 €/kW", "6.600 - 8.400 kWh"],
        ["20 kW condominiale", "18.000 - 24.000 €", "900 - 1.200 €/kW", "22.000 - 28.000 kWh"],
        ["100 kW terziario", "80.000 - 110.000 €", "800 - 1.100 €/kW", "110.000 - 140.000 kWh"],
        ["Accumulo 10 kWh", "4.500 - 7.000 €", "450 - 700 €/kWh", "dipende dal profilo"]
      ] },
      { type: "h2", id: "obbligo-solare", text: "Come funziona l'obbligo solare progressivo" },
      { type: "p", text: "La direttiva Case Green introduce l'obbligo graduale di installazione di sistemi solari: dal 2027 per i nuovi edifici pubblici, entro il 2028-2029 per i nuovi edifici non residenziali e residenziali, entro il 2030 per gli edifici esistenti sottoposti a ristrutturazioni rilevanti, dove tecnicamente ed economicamente fattibile. Il recepimento italiano definirà potenze minime e criteri di fattibilità, ma la direzione è chiara: chi costruisce o ristruttura nel prossimo quinquennio dovrà considerare il solare come parte del progetto, non come un'opzione. Questo cambia il ruolo dell'impresa edile, che diventa interlocutore unico di un intervento integrato copertura-impianto-pratiche." },
      { type: "quote", text: "Il fotovoltaico nel cantiere edile non è più un extra da vendere a fine lavori: è una voce di capitolato. Le imprese che hanno formato squadre miste, lattonieri ed elettricisti, gestiscono tutto in un unico passaggio e il cliente paga una sola volta ponteggio e coordinamento.", author: "ing. Chiara Donati, progettista impianti e consulente per comunità energetiche" },
      { type: "h2", id: "cer-condomini", text: "Comunità energetiche e condomini: il nuovo mercato" },
      { type: "p", text: "Le comunità energetiche rinnovabili sono la novità commerciale più interessante del biennio. Un condominio che installa un impianto comune e condivide l'energia con le unità aderenti accede alla tariffa incentivante ventennale sulla quota autoconsumata collettivamente, migliorando i tempi di ritorno dell'investimento a 5-8 anni. Per l'impresa edile la CER è un progetto completo: ristrutturazione della copertura, impianto, quadri elettrici, pratiche GSE e GME, costituzione dell'ente giuridico. Il mercato potenziale è enorme: in Italia ci sono oltre un milione di condomìni e i tetti disponibili al solare superano i 500 milioni di metri quadri secondo le stime dei centri studi del settore." },
      { type: "list", items: [
        "Verificare in sopralluogo la statica della copertura, l'esposizione, gli ombreggiamenti e lo stato del manto prima di quotare l'impianto.",
        "Proporre l'integrazione con la ristrutturazione del tetto: un unico ponteggio per manto e fotovoltaico abbatte i costi del 15-25%.",
        "Gestire la pratica unica GSE per connessione e incentivi, con iter semplificati per impianti fino a 200 kW.",
        "Valutare l'accumulo solo con un'analisi dei consumi: senza carichi serali il rientro si allunga oltre la vita utile delle batterie.",
        "Offrire la costituzione della CER come servizio completo nei condomìni, con simulazioni di riparto dei benefici.",
        "Prevedere manutenzione e monitoraggio: i contratti di O&M ricorrenti stabilizzano il fatturato post-vendita."
      ] },
      { type: "h2", id: "integrazione-cantiere", text: "Come si integra il fotovoltaico nel cantiere di ristrutturazione?" },
      { type: "p", text: "L'integrazione in cantiere è il punto dove l'impresa edile può fare la differenza economica. Il fotovoltaico installato durante la ristrutturazione della copertura condivide ponteggio, coordinate di cantiere e titoli abilitativi, riducendo i costi complessivi del 15-25% rispetto a un intervento separato. Le scelte tecniche da coordinare riguardano il manto di copertura, che deve essere progettato per accogliere le strutture di ancoraggio senza compromettere tenuta e garanzia, il quadro elettrico, da predimensionare per l'accumulo futuro, e le canalizzazioni, da prevedere prima delle chiusure delle finiture. Nelle ristrutturazioni con vincoli paesaggistici, i moduli integrati architettonicamente e le tegole fotovoltaiche rappresentano la soluzione ammissibile, con un sovrapprezzo del 30-50% compensato dall'accesso a cantieri altrimenti preclusi." },
      { type: "h2", id: "conclusioni", text: "Conclusioni: un mercato stabile per chi si attrezza" },
      { type: "p", text: "Il fotovoltaico del 2026 non vive più di picchi incentivanti ma di domanda strutturale: obblighi europei, prezzi bassi della tecnologia e convenienza economica dell'autoconsumo. Per le imprese edili l'opportunità è diventare general contractor dell'intervento integrato, dalla copertura alle pratiche GSE. Chi resta fuori da questa filiera cederà una fetta crescente del valore dei propri cantieri agli specialisti dell'impiantistica." }
    ],
    faqs: [
      { q: "Il fotovoltaico gode ancora di detrazioni nel 2026?", a: "Sì: quando l'impianto è installato nell'ambito di interventi di recupero edilizio si applica la detrazione del 50% per l'abitazione principale e del 36% per le altre unità, con recupero in dieci rate annuali. Restano attivi anche ritiro dedicato e incentivi per le comunità energetiche." },
      { q: "Quando diventa obbligatorio il fotovoltaico sui nuovi edifici?", a: "La direttiva Case Green prevede l'obbligo progressivo: dal 2027 per i nuovi edifici pubblici, poi per i nuovi edifici non residenziali e residenziali, e dal 2030 per le ristrutturazioni rilevanti dell'esistente, dove tecnicamente fattibile. Il recepimento italiano definirà i dettagli." },
      { q: "Quanto costa un impianto da 6 kW con accumulo nel 2026?", a: "Indicativamente tra 12.000 e 18.000 euro chiavi in mano, a seconda della qualità dei componenti e della complessità dell'installazione. Con la detrazione del 50% il costo netto si dimezza in dieci anni, e l'autoconsumo abbatte la bolletta del 60-80%." },
      { q: "Conviene costituire una comunità energetica in condominio?", a: "Nella maggior parte dei casi sì: l'incentivo ventennale sull'energia condivisa, sommato al risparmio in bolletta, porta i tempi di rientro a 5-8 anni. Servono però consumi diurni significativi e una gestione amministrativa dell'ente, spesso affidata a soggetti terzi." }
    ],
    tags: ["fotovoltaico", "incentivi", "comunità energetiche", "case green", "rinnovabili"],
    related: ["bonus-edilizi-2026-guida-completa", "direttiva-case-green-2026-cosa-cambia", "pompe-calore-2026-migliori-modelli"]
  },
  {
    slug: "bim-obbligatorio-2026-appalti",
    category: "Normativa",
    title: "BIM obbligatorio 2026: cosa devono fare imprese e professionisti negli appalti",
    metaTitle: "BIM obbligatorio 2026: regole per gli appalti",
    metaDescription: "BIM obbligatorio 2026 negli appalti pubblici: soglie, scadenze, figure professionali e costi di adeguamento. Cosa devono fare imprese e progettisti.",
    keywords: ["BIM obbligatorio 2026", "BIM appalti pubblici", "decreto BIM MIT", "UNI 11337", "capitolato informativo"],
    subtitle: "Le soglie di obbligo dal 2026, i documenti richiesti in gara, le figure professionali e i costi reali di adeguamento: la guida operativa per non restare fuori dagli appalti",
    excerpt: "Dal 2026 l'obbligo BIM negli appalti pubblici si allarga a nuove soglie: ecco cosa serve davvero, tra capitolato informativo, CDE, figure professionali e investimenti in software e formazione.",
    published: "2026-07-18T09:15:00+02:00",
    updated: "2026-07-19T09:15:00+02:00",
    readingTime: 11,
    author: {
      name: "Sara Colombo",
      role: "Redattrice Cantieri & Progetti",
      bio: "Architetto, segue cantieri, sicurezza e processi digitali di progettazione. Ha esperienza in direzione lavori e coordinamento della sicurezza in fase di esecuzione."
    },
    image: "/images/articoli/bim-obbligatorio-2026-appalti.jpg",
    imageAlt: "Modello BIM tridimensionale di un edificio pubblico su schermo in un cantiere digitalizzato",
    imageCaption: "Il BIM obbligatorio negli appalti pubblici avanza per soglie: nel 2026 servono capitolato informativo, CDE e figure certificate.",
    summary: [
      "Il nuovo codice appalti (D.Lgs 36/2023) e il decreto BIM del MIT rendono obbligatori i metodi di modellazione informativa per soglie progressivamente più basse, estese nel 2026 agli interventi sull'esistente sopra il milione di euro.",
      "I documenti chiave in gara: capitolato informativo, piano di gestione informativa, offerta di gestione informativa e ambiente di condivisione dati (CDE).",
      "Le figure richieste: BIM manager, BIM coordinator e BIM specialist, con certificazione delle competenze secondo [UNI](https://www.uni.com) 11337-7 e UNI/PdR 78 sempre più richiesta.",
      "Costi di adeguamento per una PMI: 15.000-40.000 euro tra software, hardware, formazione e accompagnamento nei primi due anni.",
      "Chi non si adegua resta fuori dalle gare sopra soglia, ma il BIM sta entrando anche nei privati: sanità, logistica e residenziale di pregio lo richiedono già."
    ],
    body: [
      { type: "p", text: "Il BIM obbligatorio negli appalti pubblici italiani ha completato nel 2026 un percorso iniziato con il DM 560/2017 e rilanciato dal nuovo codice dei contratti pubblici, il D.Lgs 36/2023, che all'articolo 43 stabilisce l'uso obbligatorio di metodi e strumenti di modellazione informativa per la progettazione e la realizzazione delle opere. Le soglie scendono progressivamente e coinvolgono ormai anche interventi di dimensioni medio-piccole. Per imprese e professionisti la domanda non è più se adeguarsi, ma come farlo senza disperdere risorse." },
      { type: "h2", id: "soglie-2026", text: "Quali sono le soglie di obbligo nel 2026?" },
      { type: "p", text: "Il calendario stabilito dal decreto attuativo del MIT prevede un'applicazione progressiva per tipologia e importo. Nel 2026 l'obbligo copre le opere di nuova costruzione sopra i 2 milioni di euro e gli interventi sull'edilizia esistente sopra il milione, oltre a tutte le opere di particolare complessità indipendentemente dall'importo. Le stazioni appaltanti possono estendere volontariamente il requisito a importi inferiori, e molte lo fanno per lavori su edifici scolastici, sanitari e infrastrutture locali. La tendenza è irreversibile: dal 2028-2030 l'obbligo dovrebbe coprire la generalità dei lavori pubblici sopra le soglie comunitarie e una quota crescente di quelli sottosoglia." },
      { type: "table", caption: "BIM obbligatorio: il calendario di applicazione per soglie (schema sintetico)", head: ["Anno", "Opere nuove", "Interventi sull'esistente", "Note"], rows: [
        ["2023-2024", "> 15 milioni €", "Opere complesse", "Fase iniziale"],
        ["2025", "> 5 milioni €", "> 2 milioni €", "Estensione"],
        ["2026", "> 2 milioni €", "> 1 milione €", "Soglia attuale"],
        ["2027-2028", "> 1 milione €", "> 500.000 €", "Previsto"],
        ["dal 2030", "Generalizzato", "Generalizzato", "Obiettivo UE"]
      ] },
      { type: "h2", id: "documenti-gara", text: "Quali documenti servono in gara?" },
      { type: "p", text: "Partecipare a una gara BIM richiede di padroneggiare quattro strumenti. Il capitolato informativo, redatto dalla stazione appaltante, definisce requisiti del modello, livelli di dettaglio (LOG, LOI), formati di scambio (IFC obbligatorio per l'interoperabilità) e regole di denominazione. Il piano di gestione informativa (pGI) è il documento con cui il progettista o l'impresa risponde al capitolato, descrivendo processi, ruoli e standard. L'offerta di gestione informativa (oGI) completa il quadro in fase di esecuzione. Tutto il flusso documentale transita sull'ambiente di condivisione dati (CDE), la piattaforma collaborativa che registra versioni, stati e validazioni dei modelli. Chi non ha mai lavorato con questi strumenti deve prevedere un accompagnamento specialistico per le prime gare." },
      { type: "quote", text: "Il BIM non si compra con una licenza software: si costruisce con un metodo. Le gare perse dalle imprese non lo sono quasi mai per il modello, ma per un piano di gestione informativa debole o per figure senza competenze dimostrabili.", author: "ing. Davide Lattuada, BIM manager e formatore certificato UNI 11337-7" },
      { type: "h2", id: "figure-professionali", text: "Quali figure professionali servono?" },
      { type: "p", text: "Il sistema delle figure è definito dalla norma UNI 11337-7: il BIM manager governa il processo informativo complessivo, il BIM coordinator coordina la produzione dei modelli disciplinari, il BIM specialist modella nelle singole discipline. Per le gare sopra soglia la presenza di queste figure con competenze certificate (UNI 11337-7 e UNI/PdR 78, tramite organismi accreditati come [ICMQ](https://www.icmq.it) o Bureau Veritas) è quasi sempre un requisito di partecipazione o un criterio di punteggio rilevante. Le imprese medio-piccole scelgono sempre più spesso l'outsourcing: studi specializzati forniscono il BIM manager a prestazione, mentre il personale interno viene formato sui ruoli operativi." },
      { type: "h2", id: "costi-adeguamento", text: "Quanto costa adeguarsi?" },
      { type: "p", text: "I numeri reali per una PMI edile o uno studio di progettazione che parte da zero: licenze software di authoring e collaboration tra 4.000 e 10.000 euro l'anno, hardware adeguato 3.000-6.000 euro per postazione, formazione certificata 2.000-5.000 euro per figura, accompagnamento nelle prime gare 8.000-15.000 euro. Il totale del primo biennio si colloca realisticamente tra 15.000 e 40.000 euro, con il costo ricorrente che scende poi alle licenze e agli aggiornamenti. Il ritorno arriva dall'accesso a gare altrimenti precluse e, per chi usa il BIM anche in esecuzione, dalla riduzione di varianti e contenziosi in cantiere, stimata dagli osservatori di settore tra il 5 e il 10% del valore lavori." },
      { type: "list", items: [
        "Mappare le gare di interesse dei prossimi 24 mesi e verificare quali richiedono requisiti BIM e a quali soglie.",
        "Scegliere il modello organizzativo: figure interne, outsourcing del BIM management o formula mista.",
        "Investire prima sul metodo (capitolato informativo, pGI, CDE) e poi sul software: la sequenza inversa è l'errore più comune.",
        "Certificare le competenze delle figure chiave secondo UNI 11337-7 tramite organismi accreditati.",
        "Costruire un portfolio di modelli di riferimento da allegare alle offerte tecniche.",
        "Usare il BIM anche per le offerte economiche: computi dal modello riducono errori e tempi di predisposizione."
      ] },
      { type: "h2", id: "mercato-privato", text: "Il BIM oltre gli appalti pubblici" },
      { type: "p", text: "L'effetto traino del pubblico è evidente anche nel privato: committenti sanitari, logistici, della grande distribuzione e del residenziale di pregio richiedono modelli informativi per la gestione del ciclo di vita degli immobili. Il BIM to operations, con modelli as-built che alimentano la manutenzione programmata, è la frontiera su cui si stanno posizionando le imprese più strutturate. Per chi costruisce, consegnare un modello federato aggiornato sta diventando un argomento commerciale quanto la garanzia decennale." },
      { type: "h2", id: "conclusioni", text: "Conclusioni: adeguarsi con metodo, non per moda" },
      { type: "p", text: "Il BIM obbligatorio del 2026 non è un adempimento burocratico da subire ma una riorganizzazione del modo di progettare e costruire. Le imprese che lo affrontano con un piano realistico, figure certificate e un portafoglio gare mirato recuperano l'investimento in due-tre commesse. Quelle che aspettano l'ultimo momento rischiano di trovarsi escluse proprio quando il mercato pubblico offre i volumi più interessanti del decennio." }
    ],
    faqs: [
      { q: "Da quando il BIM è obbligatorio negli appalti pubblici?", a: "L'obbligo è graduale dal 2019, ma il nuovo codice appalti (D.Lgs 36/2023) lo ha rilanciato: nel 2026 copre le nuove costruzioni sopra i 2 milioni di euro e gli interventi sull'esistente sopra il milione, oltre alle opere complesse. Le soglie scenderanno ulteriormente entro il 2030." },
      { q: "Quali figure BIM servono per partecipare alle gare?", a: "Le figure definite dalla UNI 11337-7: BIM manager, BIM coordinator e BIM specialist. Nelle gare sopra soglia sono quasi sempre richieste competenze certificate da organismi accreditati. Le PMI possono ricorrere all'outsourcing del BIM management." },
      { q: "Quanto costa dotarsi del BIM per una piccola impresa?", a: "Realisticamente tra 15.000 e 40.000 euro nei primi due anni, tra software, hardware, formazione certificata e accompagnamento nelle prime gare. Il costo ricorrente scende poi a licenze e aggiornamenti, in genere sotto i 10.000 euro annui." },
      { q: "Il formato IFC è obbligatorio nelle gare BIM?", a: "Sì, il codice appalti richiede l'interoperabilità: i modelli devono essere scambiabili in formato aperto IFC, indipendentemente dal software di authoring utilizzato. I capitolati informativi specificano versioni, schemi e regole di esportazione." }
    ],
    tags: ["bim", "appalti pubblici", "digitalizzazione", "codice appalti", "progettazione"],
    related: ["sicurezza-cantieri-2026-nuove-regole", "intelligenza-artificiale-cantieri-2026", "mercato-costruzioni-2026-previsioni"]
  },
  {
    slug: "pompe-calore-2026-migliori-modelli",
    category: "Prodotti & Materiali",
    title: "Pompe di calore 2026: i migliori modelli per la riqualificazione degli edifici",
    metaTitle: "Pompe di calore 2026: i migliori modelli e prezzi",
    metaDescription: "Pompe di calore 2026: migliori modelli aria-acqua, prezzi installati, SCOP, refrigeranti R290 e incentivi Conto termico 3.0 ed ecobonus. La guida completa.",
    keywords: ["pompe di calore 2026", "migliori pompe di calore aria acqua", "prezzo pompa di calore installata", "conto termico pompe di calore", "pompa di calore R290"],
    subtitle: "Aria-acqua con refrigerante naturale, SCOP oltre 4,5 e integrazione con fotovoltaico: la selezione dei modelli e le regole di dimensionamento per la riqualificazione del 2026",
    excerpt: "Le pompe di calore nel 2026 puntano su refrigeranti naturali e SCOP oltre 4,5: ecco i migliori modelli aria-acqua, i prezzi installati, gli incentivi e le regole di dimensionamento.",
    published: "2026-07-21T08:30:00+02:00",
    updated: "2026-07-21T08:30:00+02:00",
    readingTime: 10,
    author: {
      name: "Luca Marchetti",
      role: "Redattore Prodotti & Materiali tecnici",
      bio: "Ingegnere dei materiali, scrive di serramenti, involucro edilizio e tecnologie per l'efficienza energetica. Ha lavorato in laboratori di prova e uffici tecnici di produttori di sistemi per l'involucro."
    },
    image: "/images/articoli/pompe-calore-2026-migliori-modelli.jpg",
    imageAlt: "Unità esterna di pompa di calore aria-acqua installata in un edificio riqualificato",
    imageCaption: "Le pompe di calore aria-acqua con refrigerante R290 sono la scelta dominante nella riqualificazione del 2026.",
    summary: [
      "Nel 2026 le pompe di calore aria-acqua con refrigerante naturale R290 (propano) dominano la riqualificazione: SCOP tra 4,5 e 5,2 e temperature di mandata fino a 70-75 °C.",
      "Prezzi installati: 8.000-15.000 euro per taglie residenziali da 5 a 12 kW, unità interna, accumulo e installazione inclusi.",
      "Incentivi: Conto termico 3.0 con copertura fino al 65% per i casi ammissibili, oppure ecobonus al 50%/36% per la sostituzione del generatore.",
      "Il dimensionamento corretto richiede il calcolo del carico termico reale dell'edificio: il sovradimensionamento è l'errore più costoso.",
      "L'integrazione con fotovoltaico e accumulo porta l'autoconsumo oltre il 60% e i tempi di rientro sotto i 7 anni."
    ],
    body: [
      { type: "p", text: "La pompa di calore è diventata il generatore di riferimento della riqualificazione energetica italiana: nel 2026 le installazioni crescono a doppia cifra per il quarto anno consecutivo, spinte dalla direttiva Case Green, dal Conto termico 3.0 e dall'elettrificazione dei consumi. Il mercato ha completato una transizione tecnica importante: i modelli a refrigerante naturale R290 hanno superato quelli a gas fluorurati nelle nuove gamme dei principali costruttori, con prestazioni stagionali che rendono la tecnologia competitiva anche sui radiatori tradizionali. Questa guida seleziona le caratteristiche che contano, i modelli di riferimento e le regole per non sbagliare dimensionamento." },
      { type: "h2", id: "modelli-2026", text: "Quali sono i migliori modelli del 2026?" },
      { type: "p", text: "La fascia alta del mercato è presidiata dai costruttori giapponesi ed europei con gamme complete in R290: [Daikin](https://www.daikin.it), [Mitsubishi Electric](https://www.mitsubishielectric.it) e [Panasonic](https://www.panasonic.it) sul fronte giapponese, [Viessmann](https://www.viessmann.it), [Vaillant](https://www.vaillant.it) e Bosch su quello europeo, con marchi italiani forti nei sistemi ibridi. I modelli di riferimento per la riqualificazione residenziale offrono SCOP tra 4,5 e 5,2 a 35 °C di mandata, mantengono prestazioni accettabili fino a -15 °C esterni e raggiungono mandate di 70-75 °C, soglia che consente il funzionamento su radiatori esistenti senza integrazioni nella maggior parte delle mezze stagioni. Le unità monoblocco vincono nella sostituzione per la semplicità idraulica, le split dove servono distanze maggiori tra unità esterna e interna." },
      { type: "table", caption: "Pompe di calore aria-acqua 2026: fasce di prezzo installato per taglia", head: ["Taglia termica", "Applicazione tipica", "Prezzo installato", "Consumo annuo stimato"], rows: [
        ["5 - 6 kW", "Appartamento riqualificato", "8.000 - 11.000 €", "1.800 - 2.600 kWh"],
        ["8 kW", "Villetta con cappotto", "10.000 - 13.000 €", "2.800 - 3.800 kWh"],
        ["10 - 12 kW", "Villetta non coibentata", "12.000 - 15.000 €", "3.500 - 5.000 kWh"],
        ["16 kW cascata", "Piccolo condominio", "18.000 - 26.000 €", "5.500 - 8.000 kWh"],
        ["Sistema ibrido 8 kW", "Radiatori, clima rigido", "11.000 - 15.000 €", "PdC + 10-20% gas"]
      ] },
      { type: "h2", id: "refrigerante-r290", text: "Perché il refrigerante R290 sta vincendo" },
      { type: "p", text: "Il regolamento europeo sui gas fluorurati ha accelerato la transizione: i refrigeranti sintetici ad alto GWP come l'R410A sono in dismissione e anche l'R32 ha un orizzonte limitato. Il propano R290, con GWP pari a 3, garantisce efficienze superiori e mandate più alte, al prezzo di precauzioni costruttive per l'infiammabilità, ormai standard nei modelli certificati. Per l'installatore cambia poco: servono attrezzature adeguate e attenzione alle cariche, ma le case forniscono formazione dedicata. Per il cliente il vantaggio è una macchina a prova di futuro normativo e con prestazioni stagionali migliori del 5-10% rispetto alla generazione precedente." },
      { type: "quote", text: "Il salto di qualità del 2026 non è nel rendimento di picco, che era già alto, ma nella gestione elettronica: i nuovi modelli modulano sul reale carico dell'edificio e dialogano con fotovoltaico e accumulo. Una pompa di calore ben regolata consuma il 20% in meno della stessa macchina regolata male.", author: "ing. Federico Ausilio, termotecnico e progettista di sistemi ibridi per la riqualificazione" },
      { type: "h2", id: "dimensionamento", text: "Come si dimensiona correttamente?" },
      { type: "p", text: "L'errore più frequente e costoso è il sovradimensionamento: una macchina troppo grande lavora in on-off, degrada il compressore e perde il 15-25% di efficienza stagionale. Il dimensionamento corretto parte dal calcolo del carico termico di progetto secondo [UNI](https://www.uni.com)/TS 11300, possibilmente verificato sui consumi storici di gas dell'edificio. Come regola pratica, un edificio riqualificato con cappotto e serramenti nuovi richiede 25-40 W/mq, uno esistente non coibentato 50-80 W/mq. La temperatura di mandata è il secondo parametro decisivo: con radiante a pavimento si progetta a 30-35 °C, con radiatori sovradimensionati si lavora a 45-55 °C, e solo nei casi peggiori si sale oltre i 60 °C, dove conviene valutare il sistema ibrido." },
      { type: "list", items: [
        "Richiedere sempre il calcolo del carico termico prima di accettare una taglia proposta a catalogo.",
        "Verificare lo SCOP dichiarato alla temperatura di mandata reale dell'impianto, non solo a 35 °C.",
        "Prevedere un accumulo inerziale adeguato per evitare pendolazioni, soprattutto con radiante.",
        "Controllare la rumorosità dell'unità esterna: sotto i 45 dB(A) a un metro è lo standard per il residenziale denso.",
        "Verificare la disponibilità di assistenza tecnica locale e di ricambi per almeno 10 anni.",
        "Integrare la regolazione con fotovoltaico: le schede smart grid ready sono ormai standard e abilitano l'autoconsumo."
      ] },
      { type: "h2", id: "incentivi", text: "Quali incentivi nel 2026?" },
      { type: "p", text: "Due canali, non cumulabili sulla stessa spesa. Il Conto termico 3.0 eroga incentivi diretti con copertura fino al 65% della spesa ammissibile per la sostituzione di generatori a combustibile fossile con pompe di calore, con tempi di liquidazione rapidi sotto i 15.000 euro. L'alternativa è l'ecobonus: detrazione del 50% per l'abitazione principale e del 36% per le altre unità, con massimale di 30.000 euro per gli impianti di climatizzazione e recupero in dieci anni. La scelta dipende dal profilo fiscale del cliente e dalla tipologia di edificio: in generale il Conto termico conviene per importi medi e committenti con bassa capienza fiscale, l'ecobonus per interventi integrati in una ristrutturazione più ampia." },
      { type: "h2", id: "conclusioni", text: "Conclusioni: la macchina giusta nell'edificio giusto" },
      { type: "p", text: "Le pompe di calore del 2026 sono mature, efficienti e incentivate, ma non sono una scorciatoia: funzionano al meglio in edifici con involucro curato e impianti a bassa temperatura, e richiedono dimensionamento e regolazione professionali. Per imprese e installatori la formula vincente è la proposta integrata, involucro più generatore più rinnovabili, che la direttiva Case Green renderà lo standard del prossimo decennio. Chi vende solo la macchina venderà sempre meno; chi vende la prestazione energetica completa costruisce il proprio mercato." }
    ],
    faqs: [
      { q: "Quanto costa installare una pompa di calore nel 2026?", a: "Per un'abitazione residenziale il costo installato varia tra 8.000 e 15.000 euro per taglie da 5 a 12 kW, comprensivi di unità interna, accumulo, installazione e avviamento. Con il Conto termico 3.0 o l'ecobonus il costo netto scende del 36-65%." },
      { q: "Una pompa di calore funziona con i radiatori esistenti?", a: "Sì, nella maggior parte dei casi, a condizione di lavorare a mandate di 45-55 °C e di verificare il dimensionamento dei corpi scaldanti. I modelli R290 raggiungono 70-75 °C di mandata. Nei climi rigidi o in edifici dispersivi conviene valutare il sistema ibrido con caldaia di supporto." },
      { q: "Meglio Conto termico o ecobonus per la pompa di calore?", a: "Il Conto termico 3.0 eroga un incentivo diretto fino al 65% in tempi rapidi e conviene per importi medi o bassa capienza fiscale. L'ecobonus detrae il 50%/36% in dieci anni e conviene negli interventi integrati. I due incentivi non sono cumulabili sulla stessa spesa." },
      { q: "Il refrigerante R290 è sicuro in ambito residenziale?", a: "Sì: i modelli certificati adottano cariche contenute, circuiti sigillati e sensori di sicurezza conformi alle norme IEC. L'installazione richiede attrezzature e formazione specifiche, ma per l'utente finale la sicurezza è equivalente a quella dei refrigeranti tradizionali." }
    ],
    tags: ["pompe di calore", "riscaldamento", "conto termico", "efficienza energetica", "r290"],
    related: ["fotovoltaico-edilizia-2026-incentivi", "cappotto-termico-2026-costi-materiali", "bonus-edilizi-2026-guida-completa"]
  },
];
