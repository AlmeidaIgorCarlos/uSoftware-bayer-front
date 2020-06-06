<template>
  <div>
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
    </section>
    <aside>
      <h1>Vacancy</h1>
      <form action>
        <input type="text" placeholder="title" :value="title" readonly="true"/>
        <input type="text" placeholder="description" :value="description" readonly="true"/>
        <input type="text" placeholder="created time" :value="createdAt" readonly="true" />
        <input type="text" placeholder="updated time" :value="updatedAt" readonly="true" />
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
import { saveVacancy, updateVacancy, getVacancyById } from "../services/vacancy.service";
export default {
  data() {
    return {
      vacancyId: 0,
      candidates: [],
      title: '',
      description: '',
      isAvaiable: false,
      createdAt: '',
      updatedAt: '',
      owner: ''
    };
  },
  async created() {
    this.vacancyId = this.$route.params.id;
    
    let vacancy = await getVacancyById(this.vacancyId)
    vacancy = vacancy[0]

    this.title = vacancy.title
    this.description = vacancy.description
    this.isAvaiable = vacancy.isAvaiable
    this.createdAt = vacancy.createdAt
    this.updatedAt = vacancy.updatedAt
    this.isAvaiable = vacancy.isAvaiable
    this.owner = `${vacancy.user.firstName} ${vacancy.user.lastName}`


  },
  methods: {
    goToAdministrator() {
      router.replace("/administrator/vacancies");
    }
  }
};
</script>

<style lang="scss" scoped>
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

section > h1, aside > h1 {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 1.1em;
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
  top: 80px;
  left: 20px;
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