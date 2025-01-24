# Author Details

* Name: Gabriele Speciale
* Date: 23-01-2025
* Concat: gabriele.speciale@edu.itspiemonte.it




# Approach to solution

## ANNOTAZIONI!
- quando vengono effettuate API (**POST, DELETE**) dei corsi, **BISOGNA REFRESHARE LA PAGINA** per vedere il cambiamento effettivo che sia stato aggiunto un corso, e che uno già esistente sia stato eliminato (però funziona :D)!
- per aprire la modale di prenotazione corso, **CLICCARE 2 VOLTE LA PRIMA VOLTA CHE SI APRE** UNA DELLE 2 PAGINE "home" o "nostri-corsi" (problema legato alle modali di bootstrap)


---


## Routes e Pages
- **home**: pagina con hero e mostrati i primi 4 corsi del'api corsi/

- **nostri-corsi**: pagina contenente tutt i corsi con la possibilità di aprire una modale di prenotazione per ogni corso incrementando il numero di prenotazioni, ma anche la possibilità di decrementare il numero di prenotazioni (con controlli di non superamento massimo n.prenotazioni e = 0) 

- **chi-siamo**: pagina statica con elementi descrittivi

- **amministrazione**: pagina che riceve gli ultimi 4 report presenti nell api reports/ dall'ultimo ricevuto al meno recente .revert().slice(), possibilità anche di creare corsi nuovi tramite modale con tutti i campi neccessati del model "Corso.model.ts" da aggiungere all api corsi/, possibilità di cancellare anche i corsi gia esistenti modificando l api corsi/ e rimuovendo by ID il corso selezionato 

- **not-found**: pagina che viene renderizzata in caso si inserisse una rotta != da quelle citate prima!


---

## Service
unico service che contiene le API da invocare all'interno dei components.ts per modificare il backend/json.db, tramite le operazioni effetuate nelle pagine e nei componenti:

### Corsi/
- **GET**: carichiamo i corsi per poi renderizzarli singolarmente nei componenti delle card corso
- **PATCH**: ++prenotazioniAttuali / --prenotazioniAttuali
- **POST**: creazione di un nuovo corso 
- **DELETE**: cancellazione di un corso

### Reports/
- **GET**: carichiamo i reports per poi renderizzarli singolarmente in un componente dentro la pagina amministrazione
- **POST**: creazione di un nuovo report 


---


## Components

### NavbarComponent
componente che contiene la navbar inserita all'interno di app.component, **permette tramite RouterLink** di navigare di pagina in pagina

### CorsoComponent
componente che viene creato quando vengono **iterati i corsi all'interno delle pagine "home" "nostri-corsi"** come singolo corso, che contiene i metodi per ogni singolo corso PATCH per l'incremento o il decremento dei prenotazioniAttuali

### CorsoAmministrazioneComponent
componente che viene creato quando vengono **iterati i corsi all'interno della pagina "amministazione"** come singolo corso, che contiene i metodi per ogni singolo corso DELETE per la cancellazione del corso selezionato

### ModalePrenotazioneComponent
componente modale che è **collegato al bottone tramite comunicazione tra figli e genitori di "CorsoComponent"** che permette di prenotare inserendo dei campi di input del prenotando, oltre a modificare prenotazioniAttuali andrà a mandare alla pagina amministrazione il report di una nuova prenotazione

### ModaleCreazioneComponent
componente **modale che è collegato al bottone dentro la pagina "amministrazione"** che permette di creare un nuovo corso inserendo dei campi di input di questo corso

## ReportPrenotazioniComponent
componente **renderizzato all'interno della pagina amministrazione che prende tramite GET i reports** per poi andarli ad iterare direttamente mostrando gli ultimi 4 reports in ordine di + recente al + vecchio







# Description

## Progetto d'esame: Sistema di Prenotazione Palestra "AngFitness"

## Descrizione del Progetto
Sviluppare un'applicazione web in Angular per la gestione delle prenotazioni di una palestra. L'applicazione deve permettere agli utenti di visualizzare e prenotare gli allenamenti o i corsi preferiti.

## Requisiti Funzionali

### 1. Multipagina
- Creare le seguenti pagine (Home, Chi Siamo, I nostri Corsi, Amministrazione)

### 2. Gestione Corsi
- Visualizzare l'elenco dei corsi disponibili (lista o card)
- Mostrare dettagli per ogni corso: nome, descrizione, istruttore, durata, capacità massima 
Nota: è a discrezione dello studente come mostrare i dettagli del corso, nella stessa pagina in un apposito container, in un dialog, ecc. 

### 3. Sistema di Prenotazione
- Permettere agli utenti di prenotare una sessione
- Implementare controlli sulla capacità massima, al raggiungimento del numero massimo di iscritti non è più prenotabile
- Mostrare conferma della prenotazione

### 4. Area Amministrativa
- Aggiungere/eliminare corsi
- Visualizzare report sulle prenotazioni 

## Requisiti Tecnici

### Struttura dell'Applicazione
1. Utilizzare Angular 17+
2. Implementare il routing
3. Implementare almeno 1 service per la gestione dei corsi 
4. Implementare e gestire il form di aggiunta corsi in uno dei modi visti a lezione (template driven, reactive forms)
5. Utilizzare json-server 


### UI/UX
1. Possibilità di utilizzare Bootstrap
2. Fornire feedback visuale per le azioni dell'utente
3. Implementare form reattivi con validazione
4. La pagina Home dovrà contenere una sezione nella quale vengono mostrati 4 corsi, il resto è a discrezione dello studente
5. La pagina Chi Siamo è a discrezione dello studente


### API e Backend
1. Simulare un backend utilizzando json-server
2. Implementare chiamate HTTP utilizzando HttpClient
3. Gestire gli errori in modo appropriato

## Criteri di Valutazione

1. **Architettura e Organizzazione del Codice (30%)**
   - Struttura dei componenti
   - Gestione dello stato

2. **Funzionalità (30%)**
   - Completezza delle features richieste
   - Correttezza dell'implementazione

3. **UI/UX (20%)**
   - Usabilità
   - Feedback all'utente

4. **Qualità del Codice (20%)**
   - Best practices Angular
   - Pulizia e leggibilità
   - Commenti e documentazione

## Consegna

Il progetto deve essere consegnato:
1. Repository Git 
2. Breve relazione sulle scelte implementative

