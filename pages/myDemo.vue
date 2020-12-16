<template>
  <v-row>
    啊啊啊啊
    {{ title }}
    <div @click="$store.commit('add')">
      你好啊 点我变大大{{ $store.state.counter }}
    </div>
  </v-row>
</template>
<script>
import API from "@/api";
export default {
  data() {
    return {
      title: "",
    };
  },
  mounted() {
    // this.$allInjectedFunction("qinjianghong");
    // this.$myInjectedFunction("test");
    // console.log(process.env.baseUrl);
    this.myFun();
  },
  async asyncData({ app, $axios }) {
    // app.myInjectedFunction("ctx!");
    // app.$allInjectedFunction("test");

    // 请检查您是否在服务器端
    // 使用 req 和 res
    // console.log(process.server)
    // if (process.server) {
    //   return { host: req.headers.host }
    // }

    // return {}
    return { title: "娃哈哈" };
  },
  methods: {
  async  myFun() {
      // const ip = await this.$axios.$get('puge/test')
    const ip = await this.$axios.$get("user.json")
    // .then(res=>{
    //   console.log(res)
    //   })
      //  await API.getTest().then(res => console.log(res.data));
      console.log(ip)
      console.log('我的')

    },
  },
};
</script>
