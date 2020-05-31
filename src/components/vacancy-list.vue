<template>
  <div>
    <ul>
      <li v-for="vacancy in vacancies" :key="vacancy.id">
        <Card
          :title="vacancy.title"
          :content="vacancy.description"
          :deleteAction="true"
          :editAction="true"
          :isAvaiable="vacancy.is_avaiable"
        />
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
import Card from "../components/card";
export default {
  components: {
    Card
  },
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
}

ul {
  list-style: none;
}

li {
  display: inline-block;
  position: relative;
  border-radius: 10px;
  max-width: 400px;
  max-height: 200px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: #d9d9d9;
  box-shadow: 5px 5px 10px grey;
}
</style>