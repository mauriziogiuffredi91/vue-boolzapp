//console.log('Vue', Vue);

/*
Milestone 1
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, 
visualizzare nome e immagine di ogni contatto

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, 
visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato


Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando 
“enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, 
l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati 
solo i contatti il cui nome contiene le lettere inserite 
(es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

*/

//dayjs.plugin
dayjs.extend(dayjs_plugin_customParseFormat);

//remember of this


const app = new Vue({
    el: '#app',
    data: {
        listContact: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        indexMess: 0,

        messageRisp: '',

        searchName: '',

        

        


    },
    methods:{
        messPos(index){
            //console.log(index);
            this.indexMess = index;


            //console.log(this.indexMess);
        },

        
        
        
        

        //Tutto questo andrà chiuso in una funzione a tempo
        newArgument(){
            //console.log('enter');

            //console.log(this.listContact[0].messages);
            
            
            if(this.messageRisp !== ''){

                this.listContact[this.indexMess].messages.push({
    
                    date: dayjs().format('HH:mm:s'),
                    message: this.messageRisp,
                    status: 'sent',
    
                });
                
                this.messageRisp = '';
                //per il focus
                this.$refs.itemInput.focus();


            }


            //creare la risposta automatica
            setTimeout(() =>{
                //console.log('stop');
                //funziona
                this.listContact[this.indexMess].messages.push({
    
                    date: dayjs().format('HH:mm:s'),
                    message: 'Ok, va bene',
                    status: 'received',
    
                });

            },3000)

            
            
        },

        // resultName(){
        //     if(this.listContact.includes(this.searchName) ){
        //         console.log(this.listContact.name);
        //     }

        //     console.log(this.searchName);
        // }



        

        

        
        

        



    }


});

    