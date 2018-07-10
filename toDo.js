
new Vue({
  el: '#app',
  data: {
    tasks: ['Clean', 'Read', 'Cook'],
    newTask: ''
  },
  methods: {
    addTask: function(){
      if(this.newTask.length){
        this.tasks.push(this.newTask);
        this.newTask = '';
      }
    },
    deleteTask: function(index){
      this.tasks.splice(index, 1);
    }
  }
});