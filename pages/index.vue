<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div>
        <v-alert type="success" v-if="show">
          {{ res }}
        </v-alert>
      </div>
      <v-btn depressed @click="click1"> UP </v-btn>
      <v-btn depressed @click="click2" color="primary"> justTest </v-btn>
      <v-btn depressed @click="click3" color="error"> AWS专用 </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      res: "",
      show:false,
    };
  },
  methods: {
    async click1() {
      const res = await this.$axios.$get("/liveness").finally(() => {});
      this.res = res;
      this.show =true
      setTimeout(()=>{
        this.show =false
      },6000)
    },
    async click2() {
      const res = await this.$axios.$get("/justTest").finally(() => {});
      this.res = res;
      this.show =true
      setTimeout(()=>{
        this.show =false
      },6000)
    },
    async click3() {
      const res = await this.$axios.$get("/ethBlockNumber").finally(() => {});
      console.log(res)
      this.res = res;
      this.show =true
      setTimeout(()=>{
        this.show =false
      },6000)
    },
  },
};
</script>
