<template>
  <div>
    <header>
      <h1>vacancies</h1>
      <input type="button" value="new vacancy" />
    </header>
    <ul>
      <li>
        <p>Id</p>
        <p>Title</p>
        <p>Description</p>
        <p>Avaiable</p>
        <p>Owner</p>
        <p>Actions</p>
      </li>
      <li v-for="vacancy in vacancies" :key="vacancy.id">
        <p>{{vacancy.id}}</p>
        <p>{{vacancy.title}}</p>
        <p>{{vacancy.description}}</p>
        <p>{{vacancy.is_avaiable}}</p>
        <p>{{vacancy.user.firstName}}</p>
        <div>
          <img class="pointer" src="../assets/edit_icon.svg" @click="edit" />
          <img class="pointer" src="../assets/delete_icon.svg" @click="remove(vacancy)" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {
  getvacancies,
  getVacancies,
  deactivateVacancy
} from "./../services/vacancy.service";

export default {
  data() {
    return {
      vacancies: [],
      vacancyModalStyle: {}
    };
  },
  async mounted() {
    try {
      this.vacancies = await getVacancies();
    } catch (error) {
      alert("It was not possible to connect with the server");
      this.vacancies = [];
    }
  },
  methods: {
    edit() {
      alert("1");
    },
    async remove(vacancy) {
      const data = await deactivateVacancy(vacancy);
      alert("Vacancy deactivated successfully");
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 95%;
  height: 80vh;

  margin-top: 20px;
  margin-left: 3%;

  border-radius: 10px;

  font-family: sans-serif;
  text-transform: uppercase;
}
div > header {
  justify-content: space-between;
  display: flex;
  padding: 10px;
}
header > h1,
header > input {
  font-size: 1.1em;
}
header > input {
  border: none;
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  height: 35px;
  box-shadow: 3px 3px 10px grey;
}

ul {
  list-style: none;
  margin-right: 30px;
}

li:first-of-type {
  font-weight: bold;
}

li {
  display: flex;
  justify-content: space-evenly;
}

li p {
  display: inline-block;
  width: 100px;
}

li img {
  width: 25px;
}

li img:hover {
  cursor: pointer;
  outline: none;
}

li div {
  width: 75px;
  height: 50px;
  margin-right: 20px;
  margin-left: 0px;
}

li div > img:not(:first-of-type) {
  padding-left: 15px;
}

.etc {
  position: absolute;

  width: 98%;
  height: 98vh;

  top: -10px;

  background-color: #d9d9d9;

  border-radius: 10px;

  text-transform: uppercase;

  transition: left 1s;
}
</style>