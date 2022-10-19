<template>
  <form>
    <h1>Form Handling</h1>
    <div>
      <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
    </div>
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formValues.name" />
    </div>
    <div>
      <label for="name">Profile Summary</label>
      <textarea
        id="profileSummary"
        v-model="formValues.profileSummary"
      ></textarea>
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="US">United States</option>
        <option value="canada">Canada</option>
      </select>
    </div>
    <div>
      <input
        type="checkbox"
        id="remoteWork"
        v-model="formValues.remoteWork"
        true-value="yes"
        false-value="no"
      />
      <label for="remoteWork">Open to remote work?</label>
    </div>
  </form>
</template>
<script>
export default {
  name: "FromHandling",
  data() {
    return {
      formValues: {
        name: "",
        profileSummary: "",
        country: "",
        remoteWork: "no",
      },
    };
  },
  methods: {},
};
</script>