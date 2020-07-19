<template>
  <div>
    <h1>Vacancies</h1>
    <ul>
      <li v-for="vacancy in vacancies" :key="vacancy.id">
        <Card
          :id="vacancy.id"
          :title="vacancy.title"
          :content="vacancy.description"
          :deleteAction="true"
          :editAction="true"
          :dependencyAction="true"
          :isAvaiable="vacancy.isAvaiable"
          @deleteAction="deleteVacancy"
          @editAction="editVacancy"
          @dependencyAction="dependencyAction"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import {
  getvacancies,
  getVacancies,
  deleteVacancy
} from "./../services/vacancy.service";
import Card from "../components/card";
import router from "../router/index";

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
    dependencyAction(vacancy) {
      router.push({
        path: "/candidates/"+vacancy.id,
      });
    },
    editVacancy(vacancy) {
      let selectedVacancy = this.vacancies.filter(v => v.id === vacancy.id);
      selectedVacancy = selectedVacancy[0];
      router.push({
        name: "vacancy",
        query: { edit: true },
        params: {
          id: selectedVacancy.id,
          title: selectedVacancy.title,
          description: selectedVacancy.description,
          createdTime: selectedVacancy.createdAt,
          owner: `${selectedVacancy.user.firstName} ${selectedVacancy.user.lastName}`,
          isAvaiable: selectedVacancy.isAvaiable
        }
      });
    },
    async deleteVacancy(vacancy) {
      const data = await deleteVacancy(vacancy);
      this.vacancies = this.vacancies.filter(v => v.id !== vacancy.id);
      alert("Vacancy deleted successfully");
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
  min-width: 400px;
  min-height: 190px;
  margin-left: 20px;
  margin-top: 20px;
  background-color: #d9d9d9;
  box-shadow: 5px 5px 10px grey;
}

h1{
  display: inline-block;
  margin-top: 50px;
  position: relative;
  left: 60px;
  text-transform: uppercase;
  font-size: 1.5em;
}
</style>