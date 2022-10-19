<template>
  <div
    v-bind:class="[underline, text_color]"
    v-bind:style="[headerStyleObject, headerFontsStyle]"
  >
    <b><i v-text="channel"></i></b>
  </div>
  <div :style="headerFontsStyle">
    <b>{{ greet }} {{ name }}</b>
  </div>
  <div v-html="message" v-bind:id="id"></div>
  <div v-show="display_iformation">
    It is a long established fact that a reader will be distracted by the
    readable content of a page when looking at its layout. The point of using
    Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
    opposed to using 'Content here, content here', making it look like readable
    English. Many desktop publishing packages and web page editors now use Lorem
    Ipsum as their default model text, and a search for 'lorem ipsum' will
    uncover many web sites still in their infancy. Various versions have evolved
    over the years, sometimes by accident, sometimes on purpose (injected humour
    and the like).
  </div>
  <h4 v-if="number === 0">The number is zero</h4>
  <h4 v-else-if="number > 0">The number is positive</h4>
  <h4 v-else-if="number < 0">The number is negative</h4>
  <h4 v-else>Not a number</h4>
  <p v-for="(modules, index) in modules" :key="modules">
    {{ index }} {{ modules }}
  </p>
  <p v-for="fullName in fullNames" :key="fullName.firstName">
    {{ fullName.firstName }} {{ fullName.lastName }}
  </p>
  <MethodEvent />

  <FromHandling />
</template>

<script>
import MethodEvent from "./MethodEvent.vue";
import FromHandling from "./FromHandling.vue";
export default {
  name: "App",
  components: {
    MethodEvent,
    FromHandling,
  },
  data() {
    return {
      greet: "Welcome",
      name: "Aarohi",
      channel: "VueJs",
      message:
        "<br/><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      id: "message",
      underline: "underline",
      text_color: "text-color",
      headerStyleObject: {
        backgroundColor: "darkolivegreen",
        width: "25%",
        padding: "10px",
        marginBottom: "22px",
      },
      headerFontsStyle: {
        fontSize: "22px",
        marginRight: "auto",
        marginLeft: "auto",
      },
      number: 5,
      display_iformation: false,
      modules: ["Binding", "Conditional Rendering", "List Rendering"],
      fullNames: [
        { firstName: "Aarohi", lastName: "Shah" },
        { firstName: "Shruti", lastName: "Govani" },
        { firstName: "Pooja", lastName: "Parikh" },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.underline {
  text-decoration: underline;
}
.text-color {
  color: white;
}
</style>
