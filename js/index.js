




const { createApp } = Vue

  const app = createApp({
    data() {
      return {
        title: 'Vue Todo',
        todoItems: [
            {
                id:1,
                name:'studiare Js',
                compleated: true,
            },
            {
                id:2,
                name:'studiare React',
                compleated: false,
            },
        ]
      }
      
    },
    method: {
        done(){
            let classes = ['']
            if(this.task.compleated === true){
                classes.push('task-compleated')
            }
            return classes;
        }

    },
  }).mount('#app');

  