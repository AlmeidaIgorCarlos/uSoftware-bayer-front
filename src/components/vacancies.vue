<template>
  <div>
    <header>
      <h1>vacancies</h1>
      <input type="button" value="new vacancy" />
    </header>
    <ul>
        <li v-for="vacancy in vacancies" :key="vacancy.id">
            {{vacancy.title}}
        </li>
    </ul>
  </div>
</template>

<script>
import {getvacancies, getVacancies} from './../services/vacancy.service'

    export default {
        data(){
            return{

            }
        },
        async mounted(){
            const vacancies = await getVacancies()
            console.log(vacancies)
        }
    }
</script>

<style lang="scss" scoped>
div {
  width: 98%;
  height: 80vh;

  margin-top: 10px;
  margin-left: 1%;

  background-color: #d9d9d9;

  border-radius: 10px;

  font-family: sans-serif;
  text-transform: uppercase;
}
header {
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
  height: 35px
}
</style>