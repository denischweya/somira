/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/scroll-video-sections/block.json":
/*!*************************************************!*\
  !*** ./blocks/scroll-video-sections/block.json ***!
  \*************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"somira/scroll-video-sections","version":"1.0.0","title":"Scroll Video Sections","category":"layout","icon":"format-video","description":"A two-column scroll animation block with text sections on the left and scroll-controlled MP4 videos on the right.","keywords":["scroll","video","animation","sections","gsap"],"example":{},"attributes":{"blockTitle":{"type":"string","default":"Different By Design"},"blockSubtitle":{"type":"string","default":"Experience the innovation behind our products"},"sections":{"type":"array","default":[{"id":1,"title":"Section 1","text":"This is the first section content that will be highlighted as the video plays.","videoUrl":""},{"id":2,"title":"Section 2","text":"This is the second section content with its corresponding video.","videoUrl":""},{"id":3,"title":"Section 3","text":"This is the third section content.","videoUrl":""},{"id":4,"title":"Section 4","text":"This is the fourth and final section content.","videoUrl":""}],"items":{"type":"object"}}},"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"textdomain":"somira","editorScript":"file:./dist/index.js","editorStyle":"file:./dist/index.css","style":"file:./dist/style-index.css","viewScript":"file:./src/view.js"}');

/***/ }),

/***/ "./blocks/scroll-video-sections/src/edit.js":
/*!**************************************************!*\
  !*** ./blocks/scroll-video-sections/src/edit.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    blockTitle,
    blockSubtitle,
    sections = []
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const [selectedSectionIndex, setSelectedSectionIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);

  // Debug: Log current state
  console.log('Edit component - current attributes:', {
    blockTitle,
    blockSubtitle,
    sections
  });

  // Update section function
  const updateSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)((index, field, value) => {
    console.log('Updating section:', {
      index,
      field,
      value
    });
    const newSections = [...(sections || [])];
    if (newSections[index]) {
      newSections[index] = {
        ...newSections[index],
        [field]: value
      };
      setAttributes({
        sections: newSections
      });
      console.log('Updated sections:', newSections);
    }
  }, [sections, setAttributes]);

  // Add section function
  const addSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)(() => {
    if (sections.length >= 4) return; // Max 4 sections

    const newSection = {
      id: Date.now(),
      title: `Section ${sections.length + 1}`,
      text: 'Enter your section content here...',
      videoUrl: ''
    };
    setAttributes({
      sections: [...sections, newSection]
    });
  }, [sections, setAttributes]);

  // Remove section function
  const removeSection = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useCallback)(index => {
    const newSections = sections.filter((_, i) => i !== index);
    setAttributes({
      sections: newSections
    });
    if (selectedSectionIndex === index) {
      setSelectedSectionIndex(null);
    }
  }, [sections, selectedSectionIndex, setAttributes]);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block Settings', 'somira')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block Title', 'somira'),
    value: blockTitle,
    onChange: value => setAttributes({
      blockTitle: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Main title for the scroll section', 'somira')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block Subtitle', 'somira'),
    value: blockSubtitle,
    onChange: value => setAttributes({
      blockSubtitle: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Subtitle text below the main title', 'somira')
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video Sections', 'somira'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Manage your scroll video sections (max 4):', 'somira')), sections.length === 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      fontStyle: 'italic',
      color: '#666'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No sections added yet. Click "Add Section" below to get started.', 'somira')), sections.map((section, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Card, {
    key: section.id,
    style: {
      marginBottom: '20px',
      backgroundColor: selectedSectionIndex === index ? '#f0f8ff' : '#fafafa'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardHeader, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      margin: '0'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Section', 'somira'), " ", index + 1)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CardBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Section Title', 'somira'),
    value: section.title,
    onChange: value => updateSection(index, 'title', value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter section title...', 'somira'),
    style: {
      marginBottom: '10px'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Section Text', 'somira'),
    value: section.text,
    onChange: value => updateSection(index, 'text', value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter section description...', 'somira'),
    style: {
      marginBottom: '15px'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => updateSection(index, 'videoUrl', media.url),
    allowedTypes: ['video'],
    value: section.id,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      variant: "secondary",
      style: {
        marginBottom: '10px'
      }
    }, section.videoUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change Video', 'somira') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Video', 'somira'))
  })), section.videoUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '10px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("small", {
    style: {
      color: '#666'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Video:', 'somira'), " ", section.videoUrl.split('/').pop())), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: () => removeSection(index),
    variant: "secondary",
    isDestructive: true,
    size: "small"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove Section', 'somira'))))), sections.length < 4 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: addSection,
    variant: "primary",
    style: {
      marginTop: '10px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Section', 'somira'), " (", sections.length, "/4)"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scroll-video-editor"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h1",
    className: "block-title",
    value: blockTitle,
    onChange: value => setAttributes({
      blockTitle: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block title...', 'somira'),
    allowedFormats: []
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "block-subtitle",
    value: blockSubtitle,
    onChange: value => setAttributes({
      blockSubtitle: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Block subtitle...', 'somira'),
    allowedFormats: []
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "editor-preview"
  }, sections.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Placeholder, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Scroll Video Sections', 'somira'),
    instructions: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add sections using the sidebar panel to get started.', 'somira')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: addSection,
    variant: "primary"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add First Section', 'somira'))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sections-grid"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sections-column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Sections', 'somira')), sections.map((section, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: section.id,
    className: `section-preview ${selectedSectionIndex === index ? 'active' : ''}`,
    onClick: () => setSelectedSectionIndex(index),
    style: {
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      marginBottom: '1rem',
      cursor: 'pointer',
      backgroundColor: selectedSectionIndex === index ? '#e3f2fd' : '#fff'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      margin: '0 0 0.5rem 0'
    }
  }, section.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      margin: '0',
      fontSize: '0.9rem',
      color: '#666'
    }
  }, section.text || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No content yet...', 'somira'))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "videos-column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Videos', 'somira')), sections.map((section, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: section.id,
    className: "video-preview",
    style: {
      marginBottom: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden'
    }
  }, section.videoUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    src: section.videoUrl,
    style: {
      width: '100%',
      height: 'auto',
      maxHeight: '200px'
    },
    controls: false,
    muted: true
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      padding: '2rem',
      textAlign: 'center',
      backgroundColor: '#f5f5f5',
      color: '#666'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No video selected', 'somira')))))))));
}

/***/ }),

/***/ "./blocks/scroll-video-sections/src/editor.scss":
/*!******************************************************!*\
  !*** ./blocks/scroll-video-sections/src/editor.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./blocks/scroll-video-sections/src/index.js":
/*!***************************************************!*\
  !*** ./blocks/scroll-video-sections/src/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./blocks/scroll-video-sections/src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./blocks/scroll-video-sections/src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../block.json */ "./blocks/scroll-video-sections/block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./blocks/scroll-video-sections/src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./blocks/scroll-video-sections/src/editor.scss");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




/**
 * Styles
 */



/**
 * Register the Scroll Video Sections block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./blocks/scroll-video-sections/src/save.js":
/*!**************************************************!*\
  !*** ./blocks/scroll-video-sections/src/save.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    blockTitle,
    blockSubtitle,
    sections
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();

  // Debug: Log sections data (remove in production)
  if (typeof console !== 'undefined') {
    console.log('Scroll Video Sections save data:', {
      blockTitle,
      blockSubtitle,
      sections
    });
  }

  // Filter out sections without videos for frontend, but be more permissive
  const validSections = (sections || []).filter(section => section && (section.videoUrl || section.title || section.text));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scroll-video-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scroll-video-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h1",
    className: "scroll-video-title",
    value: blockTitle
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "scroll-video-subtitle",
    value: blockSubtitle
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scroll-video-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "text-sections-column"
  }, validSections.map((section, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: section.id || index,
    className: "text-section",
    "data-section-index": index
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "section-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
    className: "section-title"
  }, section.title), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "section-text"
  }, section.text))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "video-sections-column"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "sticky-video-container"
  }, validSections.map((section, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: section.id || index,
    className: "video-section",
    "data-video-index": index,
    style: {
      display: index === 0 ? 'block' : 'none'
    }
  }, section.videoUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    className: "scroll-video",
    src: section.videoUrl,
    muted: true,
    playsInline: true,
    preload: "metadata",
    "data-section": index
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "video-placeholder"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "No video selected for section ", index + 1))))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scroll-spacer",
    style: {
      height: `${validSections.length * 100}vh`
    }
  })));
}

/***/ }),

/***/ "./blocks/scroll-video-sections/src/style.scss":
/*!*****************************************************!*\
  !*** ./blocks/scroll-video-sections/src/style.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksomira_theme"] = globalThis["webpackChunksomira_theme"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./blocks/scroll-video-sections/src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map