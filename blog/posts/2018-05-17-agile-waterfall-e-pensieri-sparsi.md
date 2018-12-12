---
layout: post
title: Agile, Waterfall e pensieri sparsi
---

In questo primo post introdurrò il concetto di Metodologia Agile, tema piuttosto inflazionato di questi tempi, me ne rendo conto, ma cercherò di arricchire le solite informazioni che potete trovare diffusamente in rete con valutazioni personali ed esempi pratici, spero così di poter dare un taglio meno didascalico alle argomentazioni.

## Un pò di storia

![placeholder](http://stefanodipiazza.altervista.org/blog/posts/img/implementing-agile-project-management.fw.png "Metodologia Agile")

Agile è un termine molto utilizzato nel settore ICT ed indica un particolare approccio allo sviluppo del software che si è andato consolidando in tempi relativamente recenti.
Agile non è una tecnica o un framework o un processo, Agile è un insieme di valori, principi e pratiche che aiutano parte di un Team di progetto a prendere decisioni riguardo allo sviluppo del prodotto ed al perfezionamento del processo di sviluppo stesso.
L'idea di Agile nasce da un gruppo di esperti e guru del settore che nel 2001 ha pubblicato un Manifesto innovativo in cui si dichiara con decisione che la vera *mission* è quella di soddisfare il cliente, prescindendo dal mero adempimento contrattuale.

Il gruppo in questione si è autodefinito [Agile Alliance](https://www.agilealliance.org) e, per saperne di più, potete seguire il link appena esposto.

## Definizione di Agile - Scrum framework

Sull'*Agile Extention to the Babok Guide*, fonte che io ritengo più che attendibile, si legge:

> "Agile is best described as a mindset because the values and subsequent principles explain ideas and attitudes with which people approach a situation, but do not prescribe exactly what they do in those situations....There are a number of branded frameworks that fagile. These frameworks are collections of speciall under the broad banner of
fic practices and ideas that have been proven useful in a specific context.....These frameworks include Scrum, Kanban, Extreme Programming, Adaptive Software Development, Lean Software Development, SAFe, LeSS, DAD, and many others.".

Tra i Framework menzionati mi soffermerò su quello Scrum per dare un'idea di come sia l'approccio Agile ad un progetto,
sarò essenziale nella descrizione perché non ho intenzione di replicare all'infinito informazioni già abbondantemente presenti sul web, quindi, se desiderate approfondire l'argomento in questo senso, affidatevi ad un qualsiasi motore di ricerca.

Riassumo per aree tematiche:

## Attività

Considerando come attività il generico rilascio di un prodotto, passo ad elencare gli step da affrontare secondo Scrum:

* Il progetto che si gestisce si frammenta in tante piccole parti che devono avere un senso unitario
* Ai frammenti o, insieme di frammenti, si associano delle feature da implementare
* Ogni feature viene assorbita da un ciclo di realizzazione classico, quindi: pianificazione, sviluppo, test, revisione e rilascio
* I rilasci incrementali così definiti vengono chiamati Sprint ed ognuno si svolge nell'arco di qualche settimana
* Conclusi tutti gli Sprint il prodotto si considera terminato

![placeholder](http://stefanodipiazza.altervista.org/blog/posts/img/scrum-activities.fw.png "Attivita scrum")

## Figure (nello Scrum Team)

In senso stretto i ruoli che compongono il Team Scrum sono i seguenti:

* PO (Product Owner)  
* SM (Scrum Master)
* DT (Development Team)

![placeholder](http://stefanodipiazza.altervista.org/blog/posts/img/scrum-figures.fw.png "Figure scrum")

## Artefatti

I principali documenti che presiedono le attività sono:

* PB (Product Backlog)
* SB (Sprint Backlog)
* BD (Burndown Chart)

![placeholder](http://stefanodipiazza.altervista.org/blog/posts/img/artifact.fw.png "Artefatti scrum")

## Cerimonie

I meeting che caratterizzano lo Scrum sono:

* SP (Sprint Planning)
* DS (Daily Scrum)
* SR (Sprint Review)

![placeholder](http://stefanodipiazza.altervista.org/blog/posts/img/cerimonies.fw.png "Cerimonie scrum")

## Sintesi di processo

Mettiamo tutto assieme.

Il Product Owner (PO) produce il Product Backlog (PB), cioè un elenco di attività e di feature da implementare, ordinato per priorità.
Durante lo Sprint Planning (SP), il Product Backlog, in forma di diverse User Story, viene scomposto in task stimati dal Development Team (DT) assieme allo Scrum Master (SM). Infine, dopo la valutazione, i task vengono ricondotti a Sprint, unità di base dello sviluppo di durata fissa, generalmente da una a quattro settimane.
Come output finale e cumulativo avremo uno Sprint Backlog (SB).
Ogni Sprint verrà lavorato dal Development Team secondo priorità assegnate preventivamente, durante il periodo di lavorazione, verranno tenuti dei Daily Scrum (DS) per monitorare il *working progress* e rimuovere eventuali ostacoli.
Al termine dello Sprint si ottiene un potenziale *deliverable* che verrà illustrato al Product Owner durante lo Sprint Review.

Questo Workflow va ripetuto per ogni Sprint.

### Agile e Waterfall

Come è facile capire, il metodo Agile si distingue da quello a cascata (Waterfall) per la sua continua iterazione mirata allo sviluppo incrementale e alla soddisfazione del cliente, che vede crescere costantemente sotto i suoi occhi il prodotto finale.

I metodi a cascata assumono che tutte le idee e le componenti da implementare debbano essere identificate e codificate prima dell’inizio del ciclo di rilascio, di conseguenza, spesso accade che le idee più brillanti vengano alla luce nel bel mezzo del processo di implementazione o comunque che gli obiettivi possano mutare in corso d'opera, con una potenziale compromissione di tutto il lavoro fatto fino a quel momento.

### Considerazioni

Il Manifesto Agile è stato scritto da Sviluppatori per Sviluppatori e, a mio avviso, si può ravvisare in esso un tono di velata
polemica nei confronti della metodologia a cascata.
Con tutta probabilità i Team di Sviluppo schedulati su progetti di tipo Waterfall si sono trovati spesso e volentieri ad interpretare documentazione troppo astrusa ed astratta (magari non scritta proprio secondo le best practice riconosciute) e sulla base della quale si sarebbe dovuto sviluppare, in un orizzonte temporale relativamente breve, qualcosa di molto complesso.

Anche per esperienza personale vi posso garantire che, quando, per certi progetti, vestivo i panni dello sviluppatore, spesso ci si sentiva come l'ultima catena di un telefono senza fili maldestro e si navigava a vista per la maggior parte del tempo; in quelle circostanze ho spesso pensato che se solo mi fosse stata data l'occasione di parlare con il Business avrei dipanato i dubbi in un attimo. C'è sicuramente del vero in questo ragionamento, ma c'è anche una presunzione un po' ottusa. Mi spiego meglio: allora, non avevo nel mio bagaglio tutti gli strumenti da Business Analyst che ho oggi, e quindi mi rendo conto, col senno di poi, che è una affermazione un po' troppo sempliciotta.

Il Manifesto Agile è stato scritto da tecnici che avevano a cuore l'utente finale, ma gli stessi tecnici non sempre sono in grado di parlare la lingua del Business, per questo esiste la figura del BA che può fare (se formato correttamente) da interprete in modo brillante.

Il BA deve poter parlare al proprio Team di Sviluppo non allo stesso modo in cui parla al Product Owner o agli Utenti di Business, ma il cocetto sottostante è sempre lo stesso, soltanto il linguaggio cambia.

Concludendo, credo che il Manifesto Agile abbia contributo a sollevare una questione importante e cioè quella di mettere di nuovo al centro del processo il cliente ed il perfezionamento del procedimento di sviluppo, piuttosto che documentare in modo autistico un progetto facendo vetrini su vetrini; non fraintendetemi, ci sono progetti che devono essere affrontati NECSSARIAMENTE con il metodo a cascata: una diga devi pensarla nei minimi particolari prima di costruirla, così un ammartaggio, ma nel mio settore (ICT) a volte ci si ostina a 'scrivere' troppo, perdendo troppo tempo, per poi giungere ad un unico rilascio cumulativo, non più in linea con i mutamenti avvenuti nel frattempo.

Un approccio Agile in certe circostanze è una soluzione vincente, ma, in questi casi, il BA deve avere anche grandi competenze tecniche oltre che di Business, questa caratteristica fa la differenza nella composizione di un Team Agile e di certo regala del valore aggiunto e maggiore sinergia sistemica.