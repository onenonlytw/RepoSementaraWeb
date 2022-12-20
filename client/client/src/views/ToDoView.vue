<template>
  <body class="bg-gradient-to-b from-primary-200 to-primary-100/50 min-h-screen">
      <nav class="flex items-center justify-between container pt-10">
        <div class="flex gap-2">
            <h1 class="text-white font-bold text-2xl">My <span class="text-secondary">ToDo</span> List</h1>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 11.25V4.375L23.125 11.25M7.5 2.5C6.1125 2.5 5 3.6125 5 5V25C5 25.663 5.26339 26.2989 5.73223 26.7678C6.20107 27.2366 6.83696 27.5 7.5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V10L17.5 2.5H7.5Z" fill="white"/>
                </svg>
        </div>
        <div class="flex items-center gap-10">
            <a class="text-white font-medium" href="http://localhost:8080/">Home</a>
            <a class="text-white font-medium" href="http://localhost:8080/">About Us</a>
            <a class="text-white font-medium" href="http://localhost:8080/">Contact</a>
        </div>
      </nav>
      <div class="ToDo">
          <div class="p-10 mt-10 my-48">
            <h2 class="text-5xl font-bold text-white text-center">My ToDo List</h2>
            <div class="main">
              <form class="form">
                <input class="input" v-model="title" type="text" name="name" placeholder="Enter ToDo" />
                <br />
                <input class="input" v-model="description" type="text" name="description"  placeholder="Enter Description" />
                <br />
                <button class="submit-button" @click="addTodo">Add ToDo</button>
              </form>
              <div class="todo-container">
                <ul>
                  <li v-for="(todo, i) in todos" :key="todo._id">
                    <div class="todo">
                    <span class="todo-name text-white">{{ todo.title }}</span>
                    <span class="todo-description text-white">{{ todo.description }}</span>
                  </div>
                    <button class="delete-btn" @click="removeTodo(todo, i)">Delete ToDo</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    <FooterView />
  </body> 
</template>

<script>
import FooterView from "@/components/FooterView.vue";
import axios from "axios";
export default {
    name: "App",
    data() {
        return {
            todos: [],
            description: "",
            title: "",
        };
    },
    async mounted() {
        const response = await axios.get("api/todoList");
        this.todos = response.data;
    },
    methods: {
        async addTodo(e) {
            e.preventDefault();
            const response = await axios.post("api/todoList", {
                title: this.title,
                description: this.description
            });
            this.todos.push(response.data);
            this.title = "";
            this.description = "";
        },
        async removeTodo(item, i) {
            await axios.delete("api/todoList/" + item._id);
            this.todos.splice(i, 1);
        },
    },
    components: { FooterView }
};
</script>

<style scoped>
.main {
  margin: auto;
  margin-top: 3rem;
  max-width: 400px;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
}

.submit-button {
  width: 400px;
  padding: 10px;
  background-color: #FF693A;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}

.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-container ul {
  width: 100%;
  list-style: none;
  padding: 0;
}

.todo-container ul li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.todo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  max-width: 250px;
}

.todo-name {
  font-size: 18px;
  font-weight: bold;
}

.todo-description {
  max-width: 70%;
  font-size: 14px;
}

.delete-btn {
  background-color: #f44336;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}
</style>
