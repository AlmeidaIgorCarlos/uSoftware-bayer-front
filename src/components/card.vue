<template>
  <div>
      <header>
        <p>{{title}}</p>
        <div>
          <svg
            v-if="editAction"
            enable-background="new 0 0 24 24"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 24 24"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="pointer"
            @click="edit"
          >
            <path
              d="M21.635,6.366c-0.467-0.772-1.043-1.528-1.748-2.229c-0.713-0.708-1.482-1.288-2.269-1.754L19,1C19,1,21,1,22,2S23,5,23,5  L21.635,6.366z M10,18H6v-4l0.48-0.48c0.813,0.385,1.621,0.926,2.348,1.652c0.728,0.729,1.268,1.535,1.652,2.348L10,18z M20.48,7.52  l-8.846,8.845c-0.467-0.771-1.043-1.529-1.748-2.229c-0.712-0.709-1.482-1.288-2.269-1.754L16.48,3.52  c0.813,0.383,1.621,0.924,2.348,1.651C19.557,5.899,20.097,6.707,20.48,7.52z M4,4v16h16v-7l3-3.038V21c0,1.105-0.896,2-2,2H3  c-1.104,0-2-0.895-2-2V3c0-1.104,0.896-2,2-2h11.01l-3.001,3H4z"
            />
          </svg>
          <svg
            v-if="deleteAction"
            enable-background="new 0 0 24 24"
            id="Layer_1"
            version="1.0"
            viewBox="0 0 24 24"
            xml:space="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            class="pointer"
            @click="remove(id)"
          >
            <g>
              <path
                d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M16.9,15.5l-1.4,1.4L12,13.4l-3.5,3.5   l-1.4-1.4l3.5-3.5L7.1,8.5l1.4-1.4l3.5,3.5l3.5-3.5l1.4,1.4L13.4,12L16.9,15.5z"
              />
            </g>
          </svg>
        </div>
      </header>
      <section>
        <p>{{content}}</p>
      </section>
      <footer v-if="isAvaiable">
        <svg
          baseProfile="tiny"
          id="Layer_1"
          version="1.2"
          viewBox="0 0 24 24"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <g>
              <path
                d="M16,19H8c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3h5c0.553,0,1,0.448,1,1s-0.447,1-1,1H8C7.448,7,7,7.449,7,8v8    c0,0.551,0.448,1,1,1h8c0.552,0,1-0.449,1-1v-3c0-0.552,0.447-1,1-1s1,0.448,1,1v3C19,17.654,17.654,19,16,19z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M13.166,14.833c-0.35,0-0.689-0.139-0.941-0.391l-2.668-2.667c-0.52-0.521-0.52-1.365,0-1.885    c0.521-0.521,1.365-0.521,1.887,0l1.416,1.417l3.475-5.455c0.357-0.644,1.17-0.877,1.814-0.519    c0.643,0.358,0.875,1.17,0.518,1.813l-4.334,7c-0.203,0.366-0.566,0.615-0.98,0.673C13.289,14.829,13.229,14.833,13.166,14.833z"
              />
            </g>
          </g>
        </svg>
      </footer>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String,
    deleteAction: Boolean,
    editAction: Boolean,
    isAvaiable: Boolean
  },
  methods: {
    edit(item) {
      console.log("edit");
    },
    remove() {
      this.$emit('deleteAction', {id: this.id})
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  display: inherit;
  position: inherit;
  border-radius: inherit;
  max-width: inherit;
  max-height: inherit;
  min-width: (max-width - 5px);
  min-height: inherit;
}

div > header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-height: 40px;
}

div > header > div {
  position: relative;
  top: 10px;
  bottom: 5px;
  left: 25px;
  width: 75px;
  height: 50px;
}

div > header > p {
  position: relative;
  top: 5px;
  left: 10px;
  font-weight: bold;
  font-size: 1.1em;
}

div > header > div > svg {
  width: 25px;
}

div > header > div > svg:not(:first-of-type) {
  padding-left: 5px;
}

div > section > p {
  text-align: justify;
  position: relative;
  left: 10px;
  max-width: 380px;
  max-height: 115px;
  overflow: hidden;
}

div > footer {
  display: flex;
}

div > footer > svg {
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: 5px;
  right: -10px;
}
</style>