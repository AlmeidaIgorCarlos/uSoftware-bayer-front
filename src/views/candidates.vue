<template>
  <div id="candidates">
    <section>
      <svg
        @click="goToAdministrator"
        style="enable-background:new 0 0 512 512;"
        version="1.1"
        viewBox="0 0 512 512"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="pointer"
      >
        <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
      </svg>
      <h1>Candidates</h1>
      <article>
        <CandidateList :vacancy="vacancy" v-if="vacancy"/>
      </article>
    </section>
    <aside>
      <h1>Vacancy</h1>
      <form action>
        <span>title</span>
        <input type="text" placeholder="title" :value="title" readonly="true" />
        <span>description</span>
        <input type="text" placeholder="description" :value="description" readonly="true" />
        <span>created at</span>
        <input type="text" placeholder="created time" :value="createdAt" readonly="true" />
        <span>updated at</span>
        <input type="text" placeholder="updated time" :value="updatedAt" readonly="true" />
        <span>owner</span>
        <input type="text" placeholder="owner" :value="owner" readonly="true" />
        <div>
          <input type="checkbox" name="isAvaiable" checked="isAvaiable" readonly="true" />
          <label for="isAvaiable">is avaiable</label>
        </div>
      </form>
    </aside>
  </div>
</template>

<script>
import router from "../router/index";
import {
  saveVacancy,
  updateVacancy,
  getVacancyById,
} from "../services/vacancy.service";
import CandidateList from "../components/candidate-list";
export default {
  data() {
    return {
      vacancy: undefined,
      candidates: [],
      title: "",
      description: "",
      isAvaiable: false,
      createdAt: "",
      updatedAt: "",
      owner: "",
    };
  },
  async created() {
    const vacancyId = this.$route.params.id;

    const vacancies = await getVacancyById(vacancyId);
    this.vacancy = vacancies[0];

    this.title = this.vacancy.title;
    this.description = this.vacancy.description;
    this.isAvaiable = this.vacancy.isAvaiable;
    this.createdAt = this.vacancy.createdAt;
    this.updatedAt = this.vacancy.updatedAt;
    this.isAvaiable = this.vacancy.isAvaiable;
    this.owner = `${this.vacancy.user.firstName} ${this.vacancy.user.lastName}`;
  },
  methods: {
    goToAdministrator() {
      router.replace("/administrator/vacancies");
    },
  },
  components:{
    CandidateList
  }
};
</script>

<style lang="scss" scoped>
#candidates {
  background-color: white;
}

div {
  display: flex;
}

section {
  flex-grow: 9;
  position: relative;
  height: 100vh;
}

section > svg {
  position: absolute;
  width: 50px;
}

section > svg:first-of-type {
  top: 10px;
  left: 10px;
}

section > h1,
aside > h1 {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 1.1em;
}

section > article {
  padding-top: 60px;
  padding-left: 60px;
}

aside {
  flex-grow: 2;
  background-color: #d9d9d9;
}

aside > form {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  top: 120px;
  left: 20px;
}
aside > form > span:first-of-type {
  position: relative;
  left: 10px;
  bottom: 10px;
  opacity: 0.4;
}

aside > form > span:not(:first-of-type) {
  position: relative;
  left: 10px;
  top: 40px;
  opacity: 0.4;
}

aside > form > input {
  border: none;
  border-bottom: 1px solid black;
  background-color: #d9d9d9;
}

aside > form > input:not(:first-of-type) {
  margin-top: 50px;
}

aside > form > div {
  margin-top: 50px;
}

aside > form > div > label {
  position: relative;
  top: 2px;
  left: 10px;
}

aside > form > input[type="text"] {
  padding-left: 10px;
  outline: none;
}
</style>