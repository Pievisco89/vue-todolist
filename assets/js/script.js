/* Rifare l’esercizio della to do list come fatto assieme in classe:
- stampare in pagina un item per ogni elemento contenuto in un array - fatto
- ogni elemento ha due stati (checked o non checked) - fatto
- al click dell’elemento avviene il toggle dello status - fatto
- al click sulla croce si elimina l’elemento - fatto
- clickando sul bottone si aggiunge il contenuto dell’input text solo se è più lungo di 2 caratteri - fatto
- se è più corto appare un alert che scompare dopo 2 secondi - fatto
BONUS: rendere possibile l’eliminazione dell’item solo se prima è stato checkato */

const app = new Vue({

  el: '#app',
  data:{
    strLista: '',
    alertMessage: false,
    removeElement: true,
    todos:[
      {
        todo: 'Seguire lezione Boolean',
        checked: false
      },
      {
        todo: 'Studiare Vue',
        checked: false
      },
      {
        todo: 'Fare esercizio vue-todolist',
        checked: true
      },
      {
        todo: 'Sistemare carousel',
        checked: false
      }
    ],

  },
  methods:{
    removeTodo(index){
      //per eliminare l'elemento della lista (splice elimina a partire dall'index, dopo la virgola vengono indicati quanti elementi eliminare)
      this.todos.splice(index, 1);
    },
    addNewTodo(){
      //pushare dentro all'array todos il nuovo oggetto tramite input
      if(this.strLista.length >= 3){
        this.todos.push({todo: this.strLista, checked: false});
        //ripulisco campo di input ogni volta che pusho qualcosa
        this.strLista = ''; 
      } else {
        //attivo il messaggio alertMessage
        this.alertMessage = true;
        //dopo 2 secondi alertMessage sparisce
        setTimeout(() => {
          this.alertMessage = false;
        }, 2000);
         //ripulisco campo di input
        this.strLista = ''; 
      }
      
    }

  }

});
