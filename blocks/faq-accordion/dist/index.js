/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/faq-accordion/src/block.json":
/*!*********************************************!*\
  !*** ./blocks/faq-accordion/src/block.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"somira/faq-accordion","version":"0.1.0","title":"FAQ Accordion","category":"widgets","icon":"editor-help","description":"A responsive FAQ accordion block with customizable icons and visibility options.","example":{},"supports":{"html":false,"anchor":true},"textdomain":"somira","editorScript":"file:../dist/index.js","editorStyle":"file:../dist/index.css","style":"file:../dist/style-index.css","viewScript":"file:./view.js","attributes":{"heading":{"type":"string","default":"Frequently Asked Questions"},"faqItems":{"type":"array","default":[{"title":"How does it work?","content":"Our original creation uses advanced DeepRelief™ technology to provide effective results.","iconUrl":"","iconId":0,"iconAlt":""},{"title":"Is it safe to use daily?","content":"Yes, it is safe to use daily. Our product has been thoroughly tested for everyday use.","iconUrl":"","iconId":0,"iconAlt":""}]},"toggleIconType":{"type":"string","default":"plusminus","enum":["plusminus","arrow"]},"hideOnDesktop":{"type":"boolean","default":false},"hideOnMobile":{"type":"boolean","default":false}}}');

/***/ }),

/***/ "./blocks/faq-accordion/src/edit.js":
/*!******************************************!*\
  !*** ./blocks/faq-accordion/src/edit.js ***!
  \******************************************/
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
    heading,
    faqItems,
    toggleIconType,
    hideOnDesktop,
    hideOnMobile
  } = attributes;
  const [openItems, setOpenItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)({});
  const [selectedFAQIndex, setSelectedFAQIndex] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `faq-accordion${hideOnDesktop ? ' hide-desktop' : ''}${hideOnMobile ? ' hide-mobile' : ''}`
  });
  const addFAQItem = () => {
    const newItems = [...faqItems, {
      title: 'New FAQ Question',
      content: 'Add your answer here...',
      iconUrl: '',
      iconId: 0,
      iconAlt: ''
    }];
    setAttributes({
      faqItems: newItems
    });
  };
  const updateFAQItem = (index, field, value) => {
    const updatedItems = [...faqItems];
    updatedItems[index][field] = value;
    setAttributes({
      faqItems: updatedItems
    });
  };
  const removeFAQItem = index => {
    const updatedItems = faqItems.filter((_, i) => i !== index);
    setAttributes({
      faqItems: updatedItems
    });

    // Adjust selected index if needed
    if (selectedFAQIndex >= updatedItems.length && updatedItems.length > 0) {
      setSelectedFAQIndex(updatedItems.length - 1);
    } else if (updatedItems.length === 0) {
      setSelectedFAQIndex(0);
    }
  };
  const toggleItem = index => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  const renderToggleIcon = isOpen => {
    if (toggleIconType === 'arrow') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "17",
        height: "11",
        viewBox: "0 0 17 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M8.39941 6.70023L2.26608 0.566894L0.399414 2.43356L8.39941 10.4336L16.3994 2.43356L14.5327 0.566894L8.39941 6.70023Z",
        fill: "#717171"
      }));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "faq-icon"
    }, isOpen ? '–' : '+');
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('FAQ Content', 'somira'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('FAQ Heading', 'somira'),
    value: heading,
    onChange: value => setAttributes({
      heading: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter FAQ heading...', 'somira')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", {
    style: {
      margin: '20px 0'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginBottom: '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    justify: "space-between",
    align: "center"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      margin: 0
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('FAQ Items', 'somira')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isPrimary: true,
    onClick: addFAQItem,
    isSmall: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Add Item', 'somira')))), faqItems.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select FAQ Item to Edit', 'somira'),
    value: selectedFAQIndex,
    options: faqItems.map((item, index) => ({
      label: `${index + 1}. ${item.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Untitled FAQ', 'somira')}`,
      value: index
    })),
    onChange: value => setSelectedFAQIndex(parseInt(value))
  }), selectedFAQIndex < faqItems.length && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '16px',
      padding: '16px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      background: '#f9f9f9'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    justify: "space-between",
    align: "center",
    style: {
      marginBottom: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    style: {
      margin: 0
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Edit FAQ Item', 'somira'), " ", selectedFAQIndex + 1), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isDestructive: true,
    isSmall: true,
    onClick: () => removeFAQItem(selectedFAQIndex)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Delete', 'somira'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('FAQ Title', 'somira'),
    value: faqItems[selectedFAQIndex]?.title || '',
    onChange: value => updateFAQItem(selectedFAQIndex, 'title', value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter question...', 'somira')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('FAQ Content', 'somira'),
    value: faqItems[selectedFAQIndex]?.content || '',
    onChange: value => updateFAQItem(selectedFAQIndex, 'content', value),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter answer...', 'somira'),
    rows: 4,
    style: {
      marginTop: '12px'
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      marginTop: '16px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Title Icon (Optional)', 'somira')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      updateFAQItem(selectedFAQIndex, 'iconUrl', media.url);
      updateFAQItem(selectedFAQIndex, 'iconId', media.id);
      updateFAQItem(selectedFAQIndex, 'iconAlt', media.alt);
    },
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '8px'
      }
    }, faqItems[selectedFAQIndex]?.iconUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: faqItems[selectedFAQIndex].iconUrl,
      alt: faqItems[selectedFAQIndex].iconAlt || '',
      style: {
        width: '24px',
        height: '24px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: open,
      isSecondary: true,
      isSmall: true
    }, faqItems[selectedFAQIndex]?.iconUrl ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Change Icon', 'somira') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Select Icon', 'somira')), faqItems[selectedFAQIndex]?.iconUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      onClick: () => {
        updateFAQItem(selectedFAQIndex, 'iconUrl', '');
        updateFAQItem(selectedFAQIndex, 'iconId', 0);
        updateFAQItem(selectedFAQIndex, 'iconAlt', '');
      },
      isDestructive: true,
      isSmall: true
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Remove', 'somira')))
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('FAQ Settings', 'somira'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Toggle Icon Type', 'somira'),
    selected: toggleIconType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Plus/Minus (+/–)', 'somira'),
      value: 'plusminus'
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Arrow', 'somira'),
      value: 'arrow'
    }],
    onChange: value => setAttributes({
      toggleIconType: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Visibility Options', 'somira'),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Desktop (≥769px)', 'somira'),
    checked: hideOnDesktop,
    onChange: value => setAttributes({
      hideOnDesktop: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Hide on Mobile (≤768px)', 'somira'),
    checked: hideOnMobile,
    onChange: value => setAttributes({
      hideOnMobile: value
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "faq-accordion-preview"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "faq-heading"
  }, heading || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Frequently Asked Questions', 'somira')), faqItems.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "faq-placeholder",
    style: {
      padding: '40px',
      textAlign: 'center',
      border: '2px dashed #ddd',
      borderRadius: '8px',
      color: '#666'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    style: {
      margin: 0,
      fontSize: '16px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No FAQ items yet. Add your first FAQ item using the Inspector Controls on the right.', 'somira'))) : faqItems.map((item, index) => {
    const isOpen = openItems[index] || false;
    const isSelected = selectedFAQIndex === index;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: `faq-item-preview ${isSelected ? 'selected' : ''}`,
      onClick: () => setSelectedFAQIndex(index),
      style: {
        border: isSelected ? '2px solid #007cba' : '1px solid #e0e0e0',
        borderRadius: '8px',
        marginBottom: '1rem',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'border-color 0.2s ease'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "faq-button-preview",
      onClick: e => {
        e.stopPropagation();
        toggleItem(index);
      },
      style: {
        width: '100%',
        padding: '16px',
        backgroundColor: '#f9f9f9',
        border: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        position: 'relative'
      }
    }, isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        position: 'absolute',
        top: '4px',
        left: '4px',
        background: '#007cba',
        color: 'white',
        fontSize: '10px',
        padding: '2px 6px',
        borderRadius: '2px',
        fontWeight: 'bold'
      }
    }, "EDITING"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    }, item.iconUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: item.iconUrl,
      alt: item.iconAlt || '',
      style: {
        width: '20px',
        height: '20px'
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "faq-title"
    }, item.title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Untitled FAQ', 'somira'))), renderToggleIcon(isOpen)), isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "faq-content-preview",
      style: {
        padding: '16px',
        backgroundColor: '#fff'
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, item.content || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('No content added yet.', 'somira'))));
  })));
}

/***/ }),

/***/ "./blocks/faq-accordion/src/index.js":
/*!*******************************************!*\
  !*** ./blocks/faq-accordion/src/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./blocks/faq-accordion/src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/faq-accordion/src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./blocks/faq-accordion/src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./blocks/faq-accordion/src/block.json");

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





/**
 * Block icon
 */
const icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM13 17h-2v-6h2v6zm0-8h-2V7h2v2z",
  fill: "currentColor"
}));

/**
 * Register the block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_5__,
  icon,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./blocks/faq-accordion/src/save.js":
/*!******************************************!*\
  !*** ./blocks/faq-accordion/src/save.js ***!
  \******************************************/
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
    heading,
    faqItems,
    toggleIconType,
    hideOnDesktop,
    hideOnMobile
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `faq-accordion${hideOnDesktop ? ' hide-desktop' : ''}${hideOnMobile ? ' hide-mobile' : ''}`
  });
  const renderToggleIcon = type => {
    if (type === 'arrow') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        className: "faq-arrow-icon",
        width: "17",
        height: "11",
        viewBox: "0 0 17 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M8.39941 6.70023L2.26608 0.566894L0.399414 2.43356L8.39941 10.4336L16.3994 2.43356L14.5327 0.566894L8.39941 6.70023Z",
        fill: "#717171"
      }));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "faq-plus-minus-icon"
    }, "+");
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "faq-accordion"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h2",
    className: "faq-heading",
    value: heading
  }), faqItems.map((item, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index,
    className: "faq-item"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "faq-button",
    "aria-expanded": "false",
    "aria-controls": `faq-content-${index}`,
    "data-faq-button": true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "faq-title-wrapper"
  }, item.iconUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: item.iconUrl,
    alt: item.iconAlt || '',
    className: "faq-title-icon"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "faq-title"
  }, item.title)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "faq-toggle-icon",
    "data-icon-type": toggleIconType
  }, renderToggleIcon(toggleIconType))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "faq-content",
    id: `faq-content-${index}`,
    hidden: true,
    "data-faq-content": true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "faq-content-inner"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    value: item.content
  })))))));
}

/***/ }),

/***/ "./blocks/faq-accordion/src/style.scss":
/*!*********************************************!*\
  !*** ./blocks/faq-accordion/src/style.scss ***!
  \*********************************************/
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./blocks/faq-accordion/src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map