/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var index;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Card = function Card(props) {\n  var social_media_networks = props.social_media_networks;\n  console.log(props);\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"user-card\"\n  }, props.image_url && /*#__PURE__*/React.createElement(\"img\", {\n    src: props.image_url,\n    alt: props.first_name\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"full-name\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"label\"\n  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Name:\")), /*#__PURE__*/React.createElement(\"span\", {\n    className: \"first-name\"\n  }, props.first_name), /*#__PURE__*/React.createElement(\"span\", {\n    className: \"last-name\"\n  }, props.last_name)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"position\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"label\"\n  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Position:\")), /*#__PURE__*/React.createElement(\"span\", null, props.position))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"modal-wrap active\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    className: \"close-modal button-danger\"\n  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Close\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"modal-content\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"full-name\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"first-name\"\n  }, props.first_name), /*#__PURE__*/React.createElement(\"span\", {\n    className: \"last-name\"\n  }, props.last_name)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"intro\"\n  }, props.short_description), /*#__PURE__*/React.createElement(\"ul\", {\n    className: \"social-media-networks\"\n  }, social_media_networks[0] && social_media_networks[0].facebook && /*#__PURE__*/React.createElement(\"li\", {\n    className: \"facebook\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: social_media_networks[0].facebook\n  }, \"Facebook\")), social_media_networks[0] && social_media_networks[0].github && /*#__PURE__*/React.createElement(\"li\", {\n    className: \"github\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: social_media_networks[0].github\n  }, \"Github\")), social_media_networks[0] && social_media_networks[0].xing && /*#__PURE__*/React.createElement(\"li\", {\n    className: \"xing\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: social_media_networks[0].xing\n  }, \"Xing\")), social_media_networks[0] && social_media_networks[0].linkedin && /*#__PURE__*/React.createElement(\"li\", {\n    className: \"linkedin\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: social_media_networks[0].linkedin\n  }, \"LinkedIn\"), \" \")))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Card.js?");

/***/ }),

/***/ "./src/container/AddUser.js":
/*!**********************************!*\
  !*** ./src/container/AddUser.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ \"@wordpress/api-fetch\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar custom_completer = {\n  name: \"inpsyde-user/autocompleters\",\n  triggerPrefix: \"\",\n  // The option data\n  options: [],\n  getOptionLabel: function getOptionLabel(option) {\n    return /*#__PURE__*/React.createElement(\"span\", null, /*#__PURE__*/React.createElement(\"span\", {\n      className: \"icon\"\n    }, option.visual), option.title.rendered);\n  },\n  // Declares that options should be matched by their title\n  getOptionKeywords: function getOptionKeywords(option) {\n    return [option.title.rendered];\n  },\n  // Declares that the Grapes option is disabled\n  isOptionDisabled: function isOptionDisabled(option) {\n    return option.name === \"Grapes\";\n  },\n  // Declares completions should be inserted as abbreviations\n  getOptionCompletion: function getOptionCompletion(option) {\n    return {\n      action: \"replace\",\n      value: _objectSpread(_objectSpread({}, option._inpsyde_user_meta), {}, {\n        image_url: option._featured_image\n      })\n    };\n  },\n  allowNode: true,\n  isDebounced: true\n};\n\nvar AddUser = function AddUser(props) {\n  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(custom_completer.options),\n      _useState2 = _slicedToArray(_useState, 2),\n      users = _useState2[0],\n      set_users = _useState2[1];\n\n  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\"),\n      _useState4 = _slicedToArray(_useState3, 2),\n      enteredText = _useState4[0],\n      setEnteredText = _useState4[1];\n\n  var block_props = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();\n  custom_completer.options = users;\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({\n      path: \"/wp/v2/inpsyde-user?search=\".concat(enteredText)\n    }).then(function (users) {\n      set_users(users);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  }, [enteredText]);\n  return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, _extends({}, block_props, {\n    tagName: \"div\",\n    contentEditable: true,\n    suppressContentEditableWarning: true,\n    \"aria-autocomplete\": \"list\",\n    onChange: function onChange(nextContent) {\n      setEnteredText(nextContent);\n    },\n    value: enteredText,\n    autocompleters: [custom_completer],\n    placeholder: \"Search to select a user\",\n    onReplace: function onReplace(opt) {\n      var user_meta = opt[0];\n      setEnteredText(user_meta);\n      console.log(user_meta);\n      props.onSelectUser({\n        first_name: user_meta.first_name,\n        last_name: user_meta.last_name,\n        position: user_meta.position,\n        short_description: user_meta.intro,\n        social_media_networks: [user_meta.social_media_networks],\n        image_url: user_meta.image_url\n      });\n    }\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUser);\n\n//# sourceURL=webpack://%5Bname%5D/./src/container/AddUser.js?");

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Edit)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Card.js */ \"./src/components/Card.js\");\n/* harmony import */ var _container_AddUser_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/AddUser.js */ \"./src/container/AddUser.js\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ \"./src/editor.scss\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/**\n * Retrieves the translation of text.\n *\n * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/\n */\n\n\n\n\n/**\n * React hook that is used to mark the block wrapper element.\n * It provides all the necessary props like the class name.\n *\n * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps\n */\n\n\n/**\n * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.\n * Those files can contain any CSS code that gets applied to the editor.\n *\n * @see https://www.npmjs.com/package/@wordpress/scripts#using-css\n */\n\n\n/**\n * The edit function describes the structure of your block in the context of the\n * editor. This represents what the editor will render when the block is used.\n *\n * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit\n *\n * @return {WPElement} Element to render.\n */\n\nfunction Edit(props) {\n  var isSelected = props.isSelected,\n      attributes = props.attributes,\n      setAttributes = props.setAttributes;\n  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();\n  var social_media_networks = attributes.social_media_networks;\n\n  if (!isSelected && Object.values(attributes).length > 0) {\n    return /*#__PURE__*/React.createElement(_components_Card_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], attributes);\n  }\n\n  var handleInputChange = function handleInputChange(field, value) {\n    if (field.startsWith(\"social_media_networks\")) {\n      var fieldArr = field.split(\".\");\n      setAttributes(_objectSpread(_objectSpread({}, attributes), {}, _defineProperty({}, fieldArr[1], value)));\n    } else {\n      setAttributes(_defineProperty({}, field, value));\n    }\n  };\n\n  var setUserAttributes = function setUserAttributes(attributes) {\n    console.log(attributes);\n    setAttributes(attributes);\n  };\n\n  if (isSelected && Object.values(attributes).length < 1) {\n    return /*#__PURE__*/React.createElement(_container_AddUser_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onSelectUser: setUserAttributes\n    });\n  }\n\n  return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(_container_AddUser_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    onSelectUser: setUserAttributes\n  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {\n    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"First Name\"),\n    value: attributes.first_name,\n    onChange: handleInputChange.bind(this, \"first_name\")\n  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {\n    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Last Name\"),\n    value: attributes.last_name,\n    onChange: handleInputChange.bind(this, \"last_name\")\n  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {\n    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Position\"),\n    value: attributes.position,\n    onChange: handleInputChange.bind(this, \"position\")\n  }), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, _extends({}, blockProps, {\n    value: attributes.short_description,\n    onChange: handleInputChange.bind(this, \"short_description\"),\n    tagName: \"div\",\n    contentEditable: true,\n    suppressContentEditableWarning: true,\n    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Enter a short description\")\n  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {\n    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Facebook\"),\n    value: social_media_networks[0].facebook,\n    onChange: handleInputChange.bind(this, \"social_media_networks.facebook\")\n  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {\n    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Github\"),\n    value: social_media_networks[0].github,\n    onChange: handleInputChange.bind(this, \"social_media_networks.github\")\n  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {\n    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Xing\"),\n    value: social_media_networks[0].xing,\n    onChange: handleInputChange.bind(this, \"social_media_networks.xing\")\n  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {\n    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Linkedin\"),\n    value: social_media_networks[0].linkedin,\n    onChange: handleInputChange.bind(this, \"social_media_networks.linkedin\")\n  }));\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/edit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./src/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ \"./src/save.js\");\n/**\n * Registers a new block provided a unique name and an object defining its behavior.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n\n\n/**\n * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.\n * All files containing `style` keyword are bundled together. The code used\n * gets applied both to the front of your site and to the editor.\n *\n * @see https://www.npmjs.com/package/@wordpress/scripts#using-css\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Every block starts by registering a new block type definition.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(\"eliasu/inpsyde-user\", {\n  /**\n   * This is the display title for your block, which can be translated with `i18n` functions.\n   * The block inserter will show this name.\n   */\n  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(\"User Overview\", \"inpsyde-user\"),\n\n  /**\n   * This is a short description for your block, can be translated with `i18n` functions.\n   * It will be shown in the Block Tab in the Settings Sidebar.\n   */\n  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(\"A block to display user details\", \"inpsyde-user\"),\n\n  /**\n   * Blocks are grouped into categories to help users browse and discover them.\n   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.\n   */\n  category: \"common\",\n\n  /**\n   * An icon property should be specified to make it easier to identify a block.\n   * These can be any of WordPress’ Dashicons, or a custom svg element.\n   */\n  icon: \"smiley\",\n\n  /**\n   *\n   **/\n  attributes: {\n    first_name: {\n      type: \"string\",\n      source: \"text\",\n      selector: \".first-name\",\n      \"default\": \"\"\n    },\n    last_name: {\n      type: \"string\",\n      source: \"text\",\n      selector: \".last-name\",\n      \"default\": \"\"\n    },\n    image_url: {\n      type: \"string\",\n      source: \"attribute\",\n      selector: \".user-card img\",\n      attribute: \"src\",\n      \"default\": \"\"\n    },\n    short_description: {\n      type: \"string\",\n      source: \"text\",\n      multiline: \"p\",\n      selector: \".intro\",\n      \"default\": \"\"\n    },\n    position: {\n      type: \"string\",\n      source: \"text\",\n      selector: \".position > span:last-child\",\n      \"default\": \"\"\n    },\n    social_media_networks: {\n      type: \"array\",\n      source: \"query\",\n      selector: \"ul.social-media-networks\",\n      query: {\n        facebook: {\n          type: \"string\",\n          source: \"attribute\",\n          selector: \"li.facebook > a\",\n          attribute: \"href\"\n        },\n        github: {\n          type: \"string\",\n          source: \"attribute\",\n          selector: \"li.github > a\",\n          attribute: \"href\"\n        },\n        xing: {\n          type: \"string\",\n          source: \"attribute\",\n          selector: \"li.xing > a\",\n          attribute: \"href\"\n        },\n        linkedin: {\n          type: \"string\",\n          source: \"attribute\",\n          selector: \"li.linkedin > a\",\n          attribute: \"href\"\n        }\n      },\n      \"default\": [{\n        facebook: \"\",\n        linkedin: \"\",\n        github: \"\",\n        xing: \"\"\n      }]\n    }\n  },\n\n  /**\n   * @see ./edit.js\n   */\n  edit: _edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n\n  /**\n   * @see ./save.js\n   */\n  save: _save__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/index.js?");

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Card.js */ \"./src/components/Card.js\");\n/**\n * Retrieves the translation of text.\n *\n * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/\n */\n\n/**\n * React hook that is used to mark the block wrapper element.\n * It provides all the necessary props like the class name.\n *\n * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps\n */\n\n\n\n\n/**\n * The save function defines the way in which the different attributes should\n * be combined into the final markup, which is then serialized by the block\n * editor into `post_content`.\n *\n * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save\n *\n * @return {WPElement} Element to render.\n */\n\nfunction save(_ref) {\n  var attributes = _ref.attributes;\n  var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();\n  return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(_components_Card_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], attributes));\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/save.js?");

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/Applications/workspace/trials/inpsyde/inpsyde-user/build/editor.css\");\n\n//# sourceURL=webpack://%5Bname%5D/./src/editor.scss?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"/Applications/workspace/trials/inpsyde/inpsyde-user/build/style.css\");\n\n//# sourceURL=webpack://%5Bname%5D/./src/style.scss?");

/***/ }),

/***/ "@wordpress/api-fetch":
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["apiFetch"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	index = __webpack_exports__;
/******/ 	
/******/ })()
;