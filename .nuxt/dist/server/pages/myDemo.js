exports.ids = [4];
exports.modules = {

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);



 // no xs

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const ALIGNMENT = ['start', 'end', 'center'];

function makeProps(prefix, def) {
  return breakpoints.reduce((props, val) => {
    props[prefix + Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__[/* upperFirst */ "r"])(val)] = def();
    return props;
  }, {});
}

const alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);

const alignProps = makeProps('align', () => ({
  type: String,
  default: null,
  validator: alignValidator
}));

const justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);

const justifyProps = makeProps('justify', () => ({
  type: String,
  default: null,
  validator: justifyValidator
}));

const alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);

const alignContentProps = makeProps('alignContent', () => ({
  type: String,
  default: null,
  validator: alignContentValidator
}));
const propMap = {
  align: Object.keys(alignProps),
  justify: Object.keys(justifyProps),
  alignContent: Object.keys(alignContentProps)
};
const classMap = {
  align: 'align',
  justify: 'justify',
  alignContent: 'align-content'
};

function breakpointClass(type, prop, val) {
  let className = classMap[type];

  if (val == null) {
    return undefined;
  }

  if (prop) {
    // alignSm -> Sm
    const breakpoint = prop.replace(type, '');
    className += `-${breakpoint}`;
  } // .align-items-sm-center


  className += `-${val}`;
  return className.toLowerCase();
}

const cache = new Map();
/* harmony default export */ __webpack_exports__["a"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'v-row',
  functional: true,
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    dense: Boolean,
    noGutters: Boolean,
    align: {
      type: String,
      default: null,
      validator: alignValidator
    },
    ...alignProps,
    justify: {
      type: String,
      default: null,
      validator: justifyValidator
    },
    ...justifyProps,
    alignContent: {
      type: String,
      default: null,
      validator: alignContentValidator
    },
    ...alignContentProps
  },

  render(h, {
    props,
    data,
    children
  }) {
    // Super-fast memoization based on props, 5x faster than JSON.stringify
    let cacheKey = '';

    for (const prop in props) {
      cacheKey += String(props[prop]);
    }

    let classList = cache.get(cacheKey);

    if (!classList) {
      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props

      let type;

      for (type in propMap) {
        propMap[type].forEach(prop => {
          const value = props[prop];
          const className = breakpointClass(type, prop, value);
          if (className) classList.push(className);
        });
      }

      classList.push({
        'no-gutters': props.noGutters,
        'row--dense': props.dense,
        [`align-${props.align}`]: props.align,
        [`justify-${props.justify}`]: props.justify,
        [`align-content-${props.alignContent}`]: props.alignContent
      });
      cache.set(cacheKey, classList);
    }

    return h(props.tag, Object(_util_mergeData__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(data, {
      staticClass: 'row',
      class: classList
    }), children);
  }

}));

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/myDemo.vue?vue&type=template&id=688c6189&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('v-row',[_vm._v("\n  啊啊啊啊\n  "+_vm._s(_vm.title)+"\n  "),_c('div',{on:{"click":function($event){return _vm.$store.commit('add')}}},[_vm._v("\n    你好啊 点我变大大"+_vm._s(_vm.$store.state.counter)+"\n  ")])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/myDemo.vue?vue&type=template&id=688c6189&

// CONCATENATED MODULE: ./plugins/api.js
/* harmony default export */ var api = (function ({
  $axios
}, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  }); // Set baseURL to something different

  api.setBaseURL('https://my_api.com'); // Inject to context as $api

  inject('api', api);
});
// CONCATENATED MODULE: ./api/index.js

console.log(api.api);
/* harmony default export */ var api_0 = ({
  getTest() {
    // console.log(res)
    return api.get('user.json');
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/myDemo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var myDemovue_type_script_lang_js_ = ({
  data() {
    return {
      title: ""
    };
  },

  mounted() {
    // this.$allInjectedFunction("qinjianghong");
    // this.$myInjectedFunction("test");
    // console.log(process.env.baseUrl);
    this.myFun();
  },

  async asyncData({
    app,
    $axios
  }) {
    // app.myInjectedFunction("ctx!");
    // app.$allInjectedFunction("test");
    // 请检查您是否在服务器端
    // 使用 req 和 res
    // console.log(process.server)
    // if (process.server) {
    //   return { host: req.headers.host }
    // }
    // return {}
    return {
      title: "娃哈哈"
    };
  },

  methods: {
    async myFun() {
      // const ip = await this.$axios.$get('puge/test')
      const ip = await this.$axios.$get("user.json"); // .then(res=>{
      //   console.log(res)
      //   })
      //  await API.getTest().then(res => console.log(res.data));

      console.log(ip);
      console.log('我的');
    }

  }
});
// CONCATENATED MODULE: ./pages/myDemo.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_myDemovue_type_script_lang_js_ = (myDemovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/vuetify-loader/lib/runtime/installComponents.js
var installComponents = __webpack_require__(25);
var installComponents_default = /*#__PURE__*/__webpack_require__.n(installComponents);

// EXTERNAL MODULE: ./node_modules/vuetify/lib/components/VGrid/VRow.js
var VRow = __webpack_require__(149);

// CONCATENATED MODULE: ./pages/myDemo.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_myDemovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "547d73c9"
  
)

/* harmony default export */ var myDemo = __webpack_exports__["default"] = (component.exports);

/* vuetify-loader */


installComponents_default()(component, {VRow: VRow["a" /* default */]})


/***/ })

};;
//# sourceMappingURL=myDemo.js.map