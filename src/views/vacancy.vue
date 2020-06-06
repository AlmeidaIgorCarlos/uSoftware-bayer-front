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
      <svg
        style="enable-background:new 0 0 512 512;"
        version="1.1"
        viewBox="0 0 512 512"
        xml:space="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        class="pointer"
        @click="save"
      >
        <polygon points="352,115.4 331.3,96 160,256 331.3,416 352,396.7 201.5,256 " />
      </svg>
      <h1>new vacancy</h1>
      <form action>
        <input type="text" placeholder="title" v-model="dataTitle" />
        <input type="text" placeholder="description" v-model="dataDescription" />
        <input type="text" placeholder="created time" v-model="dataCreatedTime" readonly="true" />
        <input type="text" placeholder="updated time" v-model="dataUpdatedTime" readonly="true" />
        <input type="text" placeholder="owner" v-model="dataOwner" readonly="true" />
        <div>
          <input type="checkbox" name="isAvaiable" v-model="dataIsAvaiable" />
          <label for="isAvaiable">is avaiable</label>
        </div>
      </form>
    </section>
    <aside>
    </aside>
  </div>
</template>

<script>
import router from "../router/index";
import { saveVacancy, updateVacancy } from "../services/vacancy.service";

export default {
  props: {
    id: Number,
    title: String,
    description: String,
    createdTime: String,
    updatedTime: String,
    owner: String,
    isAvaiable: Boolean
  },
  methods: {
    goToAdministrator() {
      router.replace("/administrator/vacancies");
    },
    validateForm(){
      if(this.dataTitle === "" || this.dataDescription === ""){
        alert('Title and/or description must be complete')
        return
      }
    },
    async save() {
      this.validateForm()
      if (this.createNew) {
        await saveVacancy({
          title: this.dataTitle,
          description: this.dataDescription
        });
      } else {
        await updateVacancy({
          id: this.id,
          title: this.dataTitle,
          description: this.dataDescription,
          isAvaiable: this.dataIsAvaiable
        });
      }
      alert("Vacancy saved successfully");
      router.push('/administrator')
    }
  },
  data() {
    return {
      createNew: false,
      dataTitle: "",
      dataDescription: "",
      dataCreatedTime: "",
      dataUpdatedTime: "",
      dataOwner: "",
      dataIsAvaiable: false
    };
  },
  beforeMount() {
    const queryParams = this.$route.query;
    if (!queryParams.edit) {
      this.createNew = true;

      this.dataCreatedTime = new Date().toISOString();
      this.dataUpdatedTime = this.dataCreatedTime;
      this.dataIsAvaiable = true;
      this.dataOwner = this.owner;

    } else {
      this.new = false;

      this.dataUpdatedTime = new Date().toISOString();
      this.dataTitle = this.title;
      this.dataDescription = this.description;
      this.dataCreatedTime = this.createdTime;
      this.dataOwner = this.owner;
      this.dataIsAvaiable = this.isAvaiable;
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

section > svg:not(:first-of-type) {
  bottom: 10px;
  right: 10px;
  transform: rotate(180deg);
}

section > h1 {
  position: absolute;
  top: 20px;
  right: 40px;
  font-size: 1.1em;
}

section > form {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 40%;
  top: 150px;
  left: 120px;
}

section > form > input {
  border: none;
  border-bottom: 1px solid black;
}

section > form > input:not(:first-of-type) {
  margin-top: 50px;
}

section > form > div {
  margin-top: 50px;
}

section > form > div > label {
  position: relative;
  top: 2px;
  left: 10px;
}

section > form > input[type="text"] {
  padding-left: 10px;
  outline: none;
}

aside {
  flex-grow: 2;
  background-color: #d9d9d9;
}
</style>