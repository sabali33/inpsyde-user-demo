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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Card = props => {\n  const {\n    social_media_networks\n  } = props;\n  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"div\", {\n    className: `user-card`\n  }, props.image_url && /*#__PURE__*/React.createElement(\"img\", {\n    src: props.image_url,\n    alt: props.first_name\n  }), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"full-name\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"label\"\n  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Name:\")), /*#__PURE__*/React.createElement(\"span\", {\n    className: \"first-name\"\n  }, props.first_name), /*#__PURE__*/React.createElement(\"span\", {\n    className: \"last-name\"\n  }, props.last_name)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"position\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"label\"\n  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Position:\")), /*#__PURE__*/React.createElement(\"span\", null, props.position))), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"modal-wrap active\"\n  }, /*#__PURE__*/React.createElement(\"button\", {\n    className: \"close-modal button-danger\"\n  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(\"Close\")), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"modal-content\"\n  }, /*#__PURE__*/React.createElement(\"div\", {\n    className: \"full-name\"\n  }, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"first-name\"\n  }, props.first_name), /*#__PURE__*/React.createElement(\"span\", {\n    className: \"last-name\"\n  }, props.last_name)), /*#__PURE__*/React.createElement(\"div\", {\n    className: \"intro\"\n  }, props.short_description), /*#__PURE__*/React.createElement(\"ul\", {\n    className: \"social-media-networks\"\n  }, social_media_networks[0] && social_media_networks[0].facebook && /*#__PURE__*/React.createElement(\"li\", {\n    className: \"facebook\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: social_media_networks[0].facebook\n  }, \"Facebook\")), social_media_networks[0] && social_media_networks[0].github && /*#__PURE__*/React.createElement(\"li\", {\n    className: \"github\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: social_media_networks[0].github\n  }, \"Github\")), social_media_networks[0] && social_media_networks[0].xing && /*#__PURE__*/React.createElement(\"li\", {\n    className: \"xing\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: social_media_networks[0].xing\n  }, \"Xing\")), social_media_networks[0] && social_media_networks[0].linkedin && /*#__PURE__*/React.createElement(\"li\", {\n    className: \"linkedin\"\n  }, /*#__PURE__*/React.createElement(\"a\", {\n    href: social_media_networks[0].linkedin\n  }, \"LinkedIn\"), \" \")))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://%5Bname%5D/./src/components/Card.js?");

/***/ }),

/***/ "./src/container/AddUser.js":
/*!**********************************!*\
  !*** ./src/container/AddUser.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ \"@wordpress/api-fetch\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst custom_completer = {\n  name: \"inpsyde-user/autocompleters\",\n  triggerPrefix: \"\",\n  // The option data\n  options: [],\n  getOptionLabel: option => /*#__PURE__*/React.createElement(\"span\", null, /*#__PURE__*/React.createElement(\"span\", {\n    className: \"icon\"\n  }, option.visual), option.title.rendered),\n  // Declares that options should be matched by their title\n  getOptionKeywords: option => [option.title.rendered],\n  // Declares that the Grapes option is disabled\n  isOptionDisabled: option => option.name === \"Grapes\",\n  // Declares completions should be inserted as abbreviations\n  getOptionCompletion: option => {\n    return {\n      action: \"replace\",\n      value: { ...option._inpsyde_user_meta,\n        image_url: option._featured_image\n      }\n    };\n  },\n  allowNode: true,\n  isDebounced: true\n};\n\nconst AddUser = props => {\n  const [users, set_users] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(custom_completer.options);\n  const [enteredText, setEnteredText] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(\"\");\n  const block_props = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();\n  custom_completer.options = users;\n  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default()({\n      path: `/wp/v2/inpsyde-user?search=${enteredText}`\n    }).then(users => {\n      set_users(users);\n    }).catch(err => {\n      console.log(err);\n    });\n  }, [enteredText]);\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"search-inpsyde-user-box\"\n  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, _extends({}, block_props, {\n    tagName: \"div\",\n    contentEditable: true,\n    suppressContentEditableWarning: true,\n    \"aria-autocomplete\": \"list\",\n    onChange: nextContent => {\n      setEnteredText(nextContent);\n    },\n    value: enteredText,\n    autocompleters: [custom_completer],\n    placeholder: \"Search to select a user\",\n    onReplace: opt => {\n      const user_meta = opt[0];\n      setEnteredText(user_meta); //console.log(user_meta);\n\n      props.onSelectUser({\n        first_name: user_meta.first_name,\n        last_name: user_meta.last_name,\n        position: user_meta.position,\n        short_description: user_meta.intro,\n        social_media_networks: [user_meta.social_media_networks],\n        image_url: user_meta.image_url\n      });\n    }\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUser);\n\n//# sourceURL=webpack://%5Bname%5D/./src/container/AddUser.js?");

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Edit)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ \"@wordpress/components\");\n/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Card */ \"./src/components/Card.js\");\n/* harmony import */ var _container_AddUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./container/AddUser */ \"./src/container/AddUser.js\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ \"./src/editor.scss\");\n/**\n * Retrieves the translation of text.\n *\n * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/\n */\n\n\n\n\n/**\n * React hook that is used to mark the block wrapper element.\n * It provides all the necessary props like the class name.\n *\n * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps\n */\n\n\n/**\n * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.\n * Those files can contain any CSS code that gets applied to the editor.\n *\n * @see https://www.npmjs.com/package/@wordpress/scripts#using-css\n */\n\n\n/**\n * The edit function describes the structure of your block in the context of the\n * editor. This represents what the editor will render when the block is used.\n *\n * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit\n *\n * @return {WPElement} Element to render.\n */\n\nfunction Edit(props) {\n  const {\n    isSelected,\n    attributes,\n    setAttributes\n  } = props;\n  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();\n  const {\n    social_media_networks\n  } = attributes; // if (!isSelected && Object.values(attributes).length > 0) {\n  // \treturn <Card {...attributes} />;\n  // }\n\n  const handleInputChange = (field, value) => {\n    if (field.startsWith(\"social_media_networks\")) {\n      const fieldArr = field.split(\".\");\n      setAttributes({ ...attributes,\n        [fieldArr[1]]: value\n      });\n    } else {\n      setAttributes({\n        [field]: value\n      });\n    }\n  };\n\n  const setUserAttributes = attributes => {\n    console.log(attributes);\n    setAttributes(attributes);\n  };\n\n  if (isSelected && Object.values(attributes).length < 1) {\n    return /*#__PURE__*/React.createElement(_container_AddUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onSelectUser: setUserAttributes\n    });\n  }\n\n  return (\n    /*#__PURE__*/\n    // <div {...blockProps}>\n    // \t<AddUser onSelectUser={setUserAttributes} />\n    // \t<TextControl\n    // \t\tlabel={__(\"First Name\")}\n    // \t\tvalue={attributes.first_name}\n    // \t\tonChange={handleInputChange.bind(this, \"first_name\")}\n    // \t/>\n    // \t<TextControl\n    // \t\tlabel={__(\"Last Name\")}\n    // \t\tvalue={attributes.last_name}\n    // \t\tonChange={handleInputChange.bind(this, \"last_name\")}\n    // \t/>\n    // \t<TextControl\n    // \t\tlabel={__(\"Position\")}\n    // \t\tvalue={attributes.position}\n    // \t\tonChange={handleInputChange.bind(this, \"position\")}\n    // \t/>\n    // \t<TextControl\n    // \t\tlabel={__(\"Image\")}\n    // \t\tvalue={attributes.image_url}\n    // \t\tonChange={handleInputChange.bind(this, \"image_url\")}\n    // \t/>\n    // \t<RichText\n    // \t\t{...blockProps}\n    // \t\tvalue={attributes.short_description}\n    // \t\tonChange={handleInputChange.bind(this, \"short_description\")}\n    // \t\ttagName=\"div\"\n    // \t\tcontentEditable\n    // \t\tsuppressContentEditableWarning\n    // \t\tplaceholder={__(\"Enter a short description\")}\n    // \t/>\n    // \t<TextControl\n    // \t\tlabel={__(\"Facebook\")}\n    // \t\tvalue={social_media_networks[0].facebook}\n    // \t\tonChange={handleInputChange.bind(\n    // \t\t\tthis,\n    // \t\t\t\"social_media_networks.facebook\"\n    // \t\t)}\n    // \t/>\n    // \t<TextControl\n    // \t\tlabel={__(\"Github\")}\n    // \t\tvalue={social_media_networks[0].github}\n    // \t\tonChange={handleInputChange.bind(this, \"social_media_networks.github\")}\n    // \t/>\n    // \t<TextControl\n    // \t\tlabel={__(\"Xing\")}\n    // \t\tvalue={social_media_networks[0].xing}\n    // \t\tonChange={handleInputChange.bind(this, \"social_media_networks.xing\")}\n    // \t/>\n    // \t<TextControl\n    // \t\tlabel={__(\"Linkedin\")}\n    // \t\tvalue={social_media_networks[0].linkedin}\n    // \t\tonChange={handleInputChange.bind(\n    // \t\t\tthis,\n    // \t\t\t\"social_media_networks.linkedin\"\n    // \t\t)}\n    // \t/>\n    // </div>\n    React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(_container_AddUser__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      onSelectUser: setUserAttributes\n    }), /*#__PURE__*/React.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], attributes))\n  );\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/edit.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ \"@wordpress/blocks\");\n/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ \"./src/edit.js\");\n/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ \"./src/save.js\");\n/**\n * Registers a new block provided a unique name and an object defining its behavior.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n\n\n/**\n * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.\n * All files containing `style` keyword are bundled together. The code used\n * gets applied both to the front of your site and to the editor.\n *\n * @see https://www.npmjs.com/package/@wordpress/scripts#using-css\n */\n\n\n/**\n * Internal dependencies\n */\n\n\n\n/**\n * Every block starts by registering a new block type definition.\n *\n * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/\n */\n\n(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(\"eliasu/inpsyde-user\", {\n  /**\n   * This is the display title for your block, which can be translated with `i18n` functions.\n   * The block inserter will show this name.\n   */\n  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(\"User Overview\", \"inpsyde-user\"),\n\n  /**\n   * This is a short description for your block, can be translated with `i18n` functions.\n   * It will be shown in the Block Tab in the Settings Sidebar.\n   */\n  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)(\"A block to display user details\", \"inpsyde-user\"),\n\n  /**\n   * Blocks are grouped into categories to help users browse and discover them.\n   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.\n   */\n  category: \"common\",\n\n  /**\n   * An icon property should be specified to make it easier to identify a block.\n   * These can be any of WordPress’ Dashicons, or a custom svg element.\n   */\n  icon: \"smiley\",\n\n  /**\n   *\n   **/\n  attributes: {\n    first_name: {\n      type: \"string\",\n      source: \"text\",\n      selector: \".first-name\",\n      default: \"\"\n    },\n    last_name: {\n      type: \"string\",\n      source: \"text\",\n      selector: \".last-name\",\n      default: \"\"\n    },\n    image_url: {\n      type: \"string\",\n      source: \"attribute\",\n      selector: \".user-card > img\",\n      attribute: \"src\",\n      default: \"\"\n    },\n    short_description: {\n      type: \"string\",\n      source: \"text\",\n      multiline: \"p\",\n      selector: \".intro\",\n      default: \"\"\n    },\n    position: {\n      type: \"string\",\n      source: \"text\",\n      selector: \".position > span:last-child\",\n      default: \"\"\n    },\n    social_media_networks: {\n      type: \"array\",\n      source: \"query\",\n      selector: \"ul.social-media-networks\",\n      query: {\n        facebook: {\n          type: \"string\",\n          source: \"attribute\",\n          selector: \"li.facebook > a\",\n          attribute: \"href\"\n        },\n        github: {\n          type: \"string\",\n          source: \"attribute\",\n          selector: \"li.github > a\",\n          attribute: \"href\"\n        },\n        xing: {\n          type: \"string\",\n          source: \"attribute\",\n          selector: \"li.xing > a\",\n          attribute: \"href\"\n        },\n        linkedin: {\n          type: \"string\",\n          source: \"attribute\",\n          selector: \"li.linkedin > a\",\n          attribute: \"href\"\n        }\n      },\n      default: [{\n        facebook: \"\",\n        linkedin: \"\",\n        github: \"\",\n        xing: \"\"\n      }]\n    }\n  },\n\n  /**\n   * @see ./edit.js\n   */\n  edit: _edit__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n\n  /**\n   * @see ./save.js\n   */\n  save: _save__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n});\n\n//# sourceURL=webpack://%5Bname%5D/./src/index.js?");

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ save)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ \"@wordpress/block-editor\");\n/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Card */ \"./src/components/Card.js\");\n/**\n * Retrieves the translation of text.\n *\n * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/\n */\n\n/**\n * React hook that is used to mark the block wrapper element.\n * It provides all the necessary props like the class name.\n *\n * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps\n */\n\n\n\n\n/**\n * The save function defines the way in which the different attributes should\n * be combined into the final markup, which is then serialized by the block\n * editor into `post_content`.\n *\n * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save\n *\n * @return {WPElement} Element to render.\n */\n\nfunction save({\n  attributes\n}) {\n  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();\n  return /*#__PURE__*/React.createElement(\"div\", blockProps, /*#__PURE__*/React.createElement(_components_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], attributes));\n}\n\n//# sourceURL=webpack://%5Bname%5D/./src/save.js?");

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