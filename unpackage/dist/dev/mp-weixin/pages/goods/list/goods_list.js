(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/list/goods_list"],{

/***/ 827:
/*!*****************************************************************************************************!*\
  !*** C:/Users/liubo1/Desktop/Demo/demo-server/main.js?{"page":"pages%2Fgoods%2Flist%2Fgoods_list"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
__webpack_require__(/*! @dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 27);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goods_list = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/list/goods_list.vue */ 828));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goods_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 828:
/*!********************************************************************************!*\
  !*** C:/Users/liubo1/Desktop/Demo/demo-server/pages/goods/list/goods_list.vue ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_list_vue_vue_type_template_id_0d74c716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods_list.vue?vue&type=template&id=0d74c716& */ 829);
/* harmony import */ var _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods_list.vue?vue&type=script&lang=js& */ 831);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 47);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_list_vue_vue_type_template_id_0d74c716___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_list_vue_vue_type_template_id_0d74c716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _goods_list_vue_vue_type_template_id_0d74c716___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods/list/goods_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 829:
/*!***************************************************************************************************************!*\
  !*** C:/Users/liubo1/Desktop/Demo/demo-server/pages/goods/list/goods_list.vue?vue&type=template&id=0d74c716& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0d74c716___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=template&id=0d74c716& */ 830);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0d74c716___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0d74c716___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0d74c716___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_template_id_0d74c716___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 830:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/liubo1/Desktop/Demo/demo-server/pages/goods/list/goods_list.vue?vue&type=template&id=0d74c716& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var render = function () {}
var staticRenderFns = []
var recyclableRender
var components



/***/ }),

/***/ 831:
/*!*********************************************************************************************************!*\
  !*** C:/Users/liubo1/Desktop/Demo/demo-server/pages/goods/list/goods_list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_list.vue?vue&type=script&lang=js& */ 832);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 832:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/liubo1/Desktop/Demo/demo-server/pages/goods/list/goods_list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 28));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 31));
var vCountup = function vCountup() {
  __webpack_require__.e(/*! require.ensure | node-modules/vue-countupjs/dist/vue-countup.min */ "common/vendor").then((function () {
    return resolve(__webpack_require__(/*! vue-countupjs */ 973));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var __name = 'usemall-goods';
var __goodsCategory = 'usemall-goods-category';
var _default = {
  components: {
    vCountup: vCountup
  },
  data: function data() {
    return {
      state: '全部',
      classOptions: [],
      stateObj: {
        待审核: 0,
        销售中: 0,
        已下架: 0,
        全部: 0
      },
      stateDatas: [],
      req: {
        page: 1,
        rows: 10,
        orderby: 'sort asc',
        name: '',
        state: ''
      },
      tblHeight: 0,
      tableDatas: [],
      tableTotal: 0,
      selectDatas: []
    };
  },
  methods: {
    loadData: function loadData() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var key;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.stateDatas = [];
                for (key in _this.stateObj) {
                  _this.stateDatas.push({
                    name: key,
                    cnt: _this.stateObj[key]
                  });
                }
                _context.next = 4;
                return _this.$db[__name].whereif(_this.req.state && _this.req.state != '全部', {
                  state: _this.req.state
                }).whereif(_this.req.name, {
                  name: new RegExp(_this.req.name)
                }).withgroup({
                  field: 'state',
                  obj: _this.stateObj
                }).totable(_this.req).then(function (res) {
                  if (res.code == 200) {
                    if (res.datas.group && res.datas.group.datas) {
                      _this.stateDatas = res.datas.group.datas;
                    }
                    res.datas.rows.forEach(function (row, idx) {
                      row.imgs = [row.img];
                      row.limited = row.limited + '';
                      row.hot = row.hot + '';
                    });
                    _this.tableDatas = res.datas.rows;
                    _this.tableTotal = res.datas.total;
                  }
                });
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    cutSta: function cutSta(item) {
      this.state = item.name;
      this.req.state = item.name;
      this.loadData();
    },
    toAdd: function toAdd() {
      var _this2 = this;
      uni.navigateTo({
        url: "/pages/goods/list/goods_list_add_edit?tab=\u6DFB\u52A0\u5546\u54C1",
        events: {
          refreshData: function refreshData() {
            _this2.loadData();
          }
        }
      });
    },
    staUp: function staUp(id) {
      var _this3 = this;
      this.$confirm('此操作将上架此商品!', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this3.$db[__name].update(id, {
          state: '销售中'
        }).then(function (res) {
          if (res.code == 200) _this3.loadData();
        });
      });
    },
    staOut: function staOut(id) {
      var _this4 = this;
      this.$confirm('此操作将下架此商品!', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this4.$db[__name].update(id, {
          state: '已下架'
        }).then(function (res) {
          if (res.code == 200) _this4.loadData();
        });
      });
    },
    toEdit: function toEdit(id) {
      var _this5 = this;
      uni.navigateTo({
        url: "/pages/goods/list/goods_list_add_edit?id=".concat(id, "&tab=\u7F16\u8F91\u5546\u54C1"),
        events: {
          refreshData: function refreshData() {
            _this5.loadData();
          }
        }
      });
    },
    toEvaluate: function toEvaluate(id) {
      uni.navigateTo({
        url: "/pages/goods/list/evaluate_add?id=".concat(id, "&tab=\u6DFB\u52A0\u8BC4\u4EF7")
      });
    },
    qrCode: function qrCode() {
      this.$message('正在开发中...');
    },
    preview: function preview() {
      this.$notify.info({
        title: '消息',
        message: '正在开发中...'
      });
    },
    remove: function remove(id) {
      var _this6 = this;
      this.$confirm('此操作将永久删除该数据！', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this6.$db[__name].remove(id).then(function (res) {
          if (res.code == 200) {
            _this6.loadData();
          }
        });
      });
    },
    selectionChange: function selectionChange(datas) {
      this.selectDatas = datas;
    },
    removes: function removes() {
      var _this7 = this;
      if (this.selectDatas.length <= 0) {
        this.$message('请勾选需要删除的数据');
        return;
      }
      var ids = this.selectDatas.map(function (x) {
        return x._id;
      });
      this.$confirm('此操作将永久删除勾选数据！', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(function () {
        _this7.$db[__name].where({
          _id: _this7.$db.$cmd.in(ids)
        }).remove().then(function (res) {
          if (res.code == 200) {
            _this7.loadData();
          }
        });
      });
    },
    sortChange: function sortChange(row) {
      var _this8 = this;
      if (row.sort == '') {
        return;
      }
      this.$db[__name].update(row._id, {
        sort: row.sort
      }).then(function (res) {
        if (res.code == 200) _this8.loadData();
      });
    },
    limitedChang: function limitedChang(row) {
      var _this9 = this;
      this.$db[__name].update(row._id, {
        limited: parseInt(row.limited)
      }).then(function (res) {
        if (res.code == 200) _this9.loadData();
      });
    },
    hotChang: function hotChang(row) {
      var _this10 = this;
      this.$db[__name].update(row._id, {
        hot: parseInt(row.hot)
      }).then(function (res) {
        if (res.code == 200) _this10.loadData();
      });
    },
    sizeChange: function sizeChange(size) {
      this.req.rows = size;
      this.loadData();
    },
    currentChange: function currentChange(current) {
      this.req.page = current;
      this.loadData();
    }
  },
  created: function created() {
    var _this11 = this;
    this.$db[__goodsCategory].totree({
      orderby: 'sort asc',
      startWith: 'pid == ""',
      loadding: false
    }).then(function (res) {
      if (res.code == 200) {
        _this11.classOptions = res.datas;
      }
    });
    this.loadData();
  },
  updated: function updated() {
    if (!this.tblHeight) {
      this.tblHeight = this.$refs.tbl.tblHeight;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

},[[827,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/goods/list/goods_list.js.map