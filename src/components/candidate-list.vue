<template>
  <section>
    <article class="header">
      <div>
        <p>id</p>
      </div>
      <div>
        <p>first name</p>
      </div>
      <div>
        <p>last name</p>
      </div>
      <div>
        <p>email</p>
      </div>
      <div>
        <p>curriculum</p>
      </div>
      <div>
        <p>actions</p>
      </div>
    </article>
    <article
      v-for="applyer in vacancy.applyers"
      :key="applyer.id"
      :class="{hired: applyer.isHired}"
    >
      <div>
        <p>{{applyer.user.id}}</p>
      </div>
      <div>
        <p>{{applyer.user.firstName}}</p>
      </div>
      <div>
        <p>{{applyer.user.lastName}}</p>
      </div>
      <div>
        <p>{{applyer.user.email}}</p>
      </div>
      <div>
        <svg
          height="16px"
          version="1.1"
          viewBox="0 0 24 16"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="image hover"
          @click="getCurriculum"
        >
          <title />
          <desc />
          <defs />
          <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
            <g fill="#000000" id="Core" transform="translate(-504.000000, -88.000000)">
              <g id="cloud-download" transform="translate(504.000000, 88.000000)">
                <path
                  d="M19.4,6 C18.7,2.6 15.7,0 12,0 C9.1,0 6.6,1.6 5.4,4 C2.3,4.4 0,6.9 0,10 C0,13.3 2.7,16 6,16 L19,16 C21.8,16 24,13.8 24,11 C24,8.4 21.9,6.2 19.4,6 L19.4,6 Z M17,9 L12,14 L7,9 L10,9 L10,5 L14,5 L14,9 L17,9 L17,9 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="actions">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="hireApplyer(applyer)"
          class="hover"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 13V10H20V13H23V14H20V17H19V14H16V13H19ZM20 19.9811V28L14 22L8 28V6.99109C8 5.34177 9.34187 4 10.9972 4H17.0028C18.6584 4 20 5.33916 20 6.99109V7.01894C19.835 7.00639 19.6682 7 19.5 7C15.9101 7 13 9.91015 13 13.5C13 17.0899 15.9101 20 19.5 20C19.6682 20 19.835 19.9936 20 19.9811ZM19.5 19C22.5376 19 25 16.5376 25 13.5C25 10.4624 22.5376 8 19.5 8C16.4624 8 14 10.4624 14 13.5C14 16.5376 16.4624 19 19.5 19Z"
            fill="#030303"
          />
        </svg>
        <svg
          width="20"
          height="24"
          viewBox="0 0 20 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          @click="fireApplyer(applyer)"
          class="hover"
        >
          <path
            d="M2.00002 21.3333C2.00002 22.8067 3.19335 24 4.66669 24H15.3334C16.8067 24 18 22.8067 18 21.3333V5.33333H2.00002V21.3333ZM19.3334 1.33333H14.6667L13.3334 0H6.66669L5.33335 1.33333H0.666687V4H19.3334V1.33333Z"
            fill="black"
          />
        </svg>
      </div>
    </article>
  </section>
</template>

<script>
import { getCurriculum } from "../services/user.service";
import { hireApplyer, fireApplyer } from "../services/applyer.service";
export default {
  props: {
    vacancy: Object,
  },
  data: () => ({
    getCurriculum,
    hireApplyer,
    fireApplyer
  }),
};
</script>

<style lang="scss" scoped>
.header {
  font-weight: bold;
}

section {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-width: 90%;
  max-height: 500px;
}

section > article {
  max-width: 99%;
  display: grid;
  grid-template-columns:
    minmax(auto, 10%) minmax(auto, 20%) minmax(auto, 20%) minmax(auto, 20%)
    minmax(auto, 20%) minmax(auto, 20%);
  border-bottom: 1px solid black;
}

section > article:not(:first-of-type) {
  margin-top: 30px;
}

section > article > div {
  position: relative;
}

section > article > div > p {
  text-align: center;
}

.hover:hover {
  cursor: pointer;
}

.image {
  position: relative;
  left: 30%;
  top: 20%;
}

.hired {
  opacity: 0.6;
}

.actions{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.actions > svg:not(:first-of-type){
    margin-top: 3px;
}
</style>