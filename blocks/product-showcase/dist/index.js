/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/product-showcase/src/block.json":
/*!************************************************!*\
  !*** ./blocks/product-showcase/src/block.json ***!
  \************************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"somira/product-showcase","version":"1.0.0","title":"Product Showcase","category":"media","icon":"products","description":"A complete product showcase with testimonials, pricing, and checkout functionality.","keywords":["product","showcase","ecommerce","testimonials","checkout"],"example":{},"attributes":{"backgroundImage":{"type":"object","default":null},"productImage":{"type":"object","default":null},"testimonialImages":{"type":"array","default":[null,null,null]},"title":{"type":"string","default":"Somira DeepRelief™ Massager Deluxe"},"priceCurrent":{"type":"string","default":"$49.99"},"pricePrevious":{"type":"string","default":"$79.99"},"stripeUrl":{"type":"string","default":""},"customerCount":{"type":"string","default":"1000+"}},"supports":{"html":false,"align":["wide","full"],"spacing":{"margin":true,"padding":true}},"textdomain":"somira","editorScript":"file:../dist/index.js","editorStyle":"file:../dist/index.css","style":"file:../dist/style-index.css","viewScript":"file:../src/view.js"}');

/***/ }),

/***/ "./blocks/product-showcase/src/edit.js":
/*!*********************************************!*\
  !*** ./blocks/product-showcase/src/edit.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    backgroundImage,
    productImage,
    testimonialImages,
    title,
    priceCurrent,
    pricePrevious,
    stripeUrl,
    customerCount
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const [quantity, setQuantity] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const [plugType, setPlugType] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('United States');
  const plugOptions = [{
    label: 'United States',
    value: 'United States'
  }, {
    label: 'United Kingdom',
    value: 'United Kingdom'
  }, {
    label: 'Europe',
    value: 'Europe'
  }, {
    label: 'Australia',
    value: 'Australia'
  }, {
    label: 'Canada',
    value: 'Canada'
  }];
  const updateTestimonialImage = (index, image) => {
    const newImages = [...testimonialImages];
    newImages[index] = image;
    setAttributes({
      testimonialImages: newImages
    });
  };
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Images', 'somira'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => setAttributes({
              backgroundImage: media
            }),
            allowedTypes: ['image'],
            value: backgroundImage?.id,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                onClick: open,
                variant: "primary",
                children: backgroundImage ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change Background Image', 'somira') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload Background Image', 'somira')
              }), backgroundImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                style: {
                  marginTop: '10px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: backgroundImage.url,
                  style: {
                    maxWidth: '100%',
                    height: 'auto'
                  },
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: () => setAttributes({
                    backgroundImage: null
                  }),
                  variant: "secondary",
                  isDestructive: true,
                  style: {
                    marginTop: '5px'
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'somira')
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => setAttributes({
              productImage: media
            }),
            allowedTypes: ['image'],
            value: productImage?.id,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                marginTop: '20px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                onClick: open,
                variant: "primary",
                children: productImage ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change Product Image', 'somira') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload Product Image', 'somira')
              }), productImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                style: {
                  marginTop: '10px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: productImage.url,
                  style: {
                    maxWidth: '100%',
                    height: 'auto'
                  },
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: () => setAttributes({
                    productImage: null
                  }),
                  variant: "secondary",
                  isDestructive: true,
                  style: {
                    marginTop: '5px'
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'somira')
                })]
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
          style: {
            marginTop: '20px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Testimonial Images', 'somira')
        }), testimonialImages.map((image, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
            onSelect: media => updateTestimonialImage(index, media),
            allowedTypes: ['image'],
            value: image?.id,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                marginBottom: '15px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                onClick: open,
                variant: "secondary",
                children: image ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Change Testimonial ${index + 1}`, 'somira') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Upload Testimonial ${index + 1}`, 'somira')
              }), image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                style: {
                  marginTop: '5px'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                  src: image.url,
                  style: {
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  },
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
                  onClick: () => updateTestimonialImage(index, null),
                  variant: "secondary",
                  isDestructive: true,
                  style: {
                    marginLeft: '10px'
                  },
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'somira')
                })]
              })]
            })
          })
        }, index))]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Product Details', 'somira'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Customer Count', 'somira'),
          value: customerCount,
          onChange: value => setAttributes({
            customerCount: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Number to display for customer count (e.g., "1000+")', 'somira')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Current Price', 'somira'),
          value: priceCurrent,
          onChange: value => setAttributes({
            priceCurrent: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Display price for the product', 'somira')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Previous Price', 'somira'),
          value: pricePrevious,
          onChange: value => setAttributes({
            pricePrevious: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Strikethrough price to show discount', 'somira')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Stripe Checkout URL', 'somira'),
          value: stripeUrl,
          onChange: value => setAttributes({
            stripeUrl: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Full URL to your Stripe checkout page', 'somira')
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "product-showcase-editor",
      style: {
        backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '20px',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "product-showcase-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "product-showcase-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "product-image-column",
            children: productImage ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: productImage.url,
              alt: "Product",
              className: "product-image"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "product-image-placeholder",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Upload Product Image', 'somira')
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "product-details-column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "testimonials-section",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "testimonial-avatars",
                children: testimonialImages.map((image, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "testimonial-avatar",
                  children: image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: image.url,
                    alt: `Testimonial ${index + 1}`
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "avatar-placeholder"
                  })
                }, index))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "testimonials-text",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)(`Loved by ${customerCount} Customers`, 'somira')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "product-title-wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
                tagName: "h2",
                className: "product-title",
                value: title,
                onChange: value => setAttributes({
                  title: value
                }),
                placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter product title...', 'somira'),
                allowedFormats: []
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "pricing-section",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "current-price",
                children: priceCurrent
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                className: "previous-price",
                children: pricePrevious
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "product-form",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "form-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "form-field plug-type-field",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Plug Type:', 'somira')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "custom-select",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "custom-select-trigger",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
                        className: "plug-icon",
                        width: "16",
                        height: "24",
                        viewBox: "0 0 16 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                          d: "M7.33333 21.3333H8.66667V18.8667L13.3333 14.2V8H2.66667V14.2L7.33333 18.8667V21.3333ZM4.66667 24V20L0 15.3333V8C0 7.26667 0.261111 6.63889 0.783333 6.11667C1.30556 5.59444 1.93333 5.33333 2.66667 5.33333H4L2.66667 6.66667V0H5.33333V5.33333H10.6667V0H13.3333V6.66667L12 5.33333H13.3333C14.0667 5.33333 14.6944 5.59444 15.2167 6.11667C15.7389 6.63889 16 7.26667 16 8V15.3333L11.3333 20V24H4.66667Z",
                          fill: "#717171"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                        className: "selected-value",
                        children: plugType
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
                        className: "dropdown-arrow",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("mask", {
                          id: "mask0_2597_10214_editor",
                          style: {
                            maskType: 'alpha'
                          },
                          maskUnits: "userSpaceOnUse",
                          x: "0",
                          y: "0",
                          width: "32",
                          height: "32",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
                            width: "32",
                            height: "32",
                            fill: "#D9D9D9"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("g", {
                          mask: "url(#mask0_2597_10214_editor)",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                            d: "M15.6003 17.2002L21.7337 11.0669L23.6003 12.9336L15.6003 20.9336L7.60034 12.9336L9.46701 11.0669L15.6003 17.2002Z",
                            fill: "#282828"
                          })
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                      className: "custom-select-options",
                      children: plugOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
                        "data-value": option.value,
                        className: "custom-select-option",
                        onClick: () => setPlugType(option.value),
                        children: option.label
                      }, option.value))
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "form-field",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Quantity:', 'somira')
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "quantity-controls",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                      type: "button",
                      onClick: decreaseQuantity,
                      className: "quantity-btn",
                      children: "-"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "quantity-value",
                      children: quantity
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                      type: "button",
                      onClick: increaseQuantity,
                      className: "quantity-btn",
                      children: "+"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "checkout-buttons",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  className: "checkout-btn",
                  disabled: true,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Checkout', 'somira')
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
                  className: "apple-pay-btn",
                  disabled: true,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apple Pay', 'somira')
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "guarantee-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
              width: "33",
              height: "34",
              viewBox: "0 0 33 34",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
                clipPath: "url(#clip0_2600_10247)",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M27.3256 17.5657C26.9315 18.1273 26.5374 18.6698 26.1704 19.2353C26.0854 19.3661 26.043 19.5661 26.07 19.7162C26.1704 20.2701 26.3018 20.8203 26.4409 21.3665C26.5027 21.6089 26.4447 21.7512 26.2207 21.8782C25.7223 22.1706 25.2317 22.4822 24.7526 22.8053C24.6522 22.8746 24.5595 23.0092 24.5324 23.1285C24.4049 23.7401 24.3083 24.3557 24.177 24.9635C24.1577 25.0635 24.0263 25.1866 23.9259 25.2097C23.3271 25.3367 22.7167 25.429 22.1179 25.5598C21.9788 25.5906 21.8243 25.6983 21.7431 25.8175C21.4148 26.2946 21.1018 26.7793 20.8082 27.2794C20.6885 27.4833 20.5533 27.5141 20.3446 27.4641C19.7922 27.3294 19.2436 27.1948 18.6834 27.0948C18.5212 27.064 18.3048 27.1063 18.1658 27.1948C17.6094 27.5525 17.0725 27.9411 16.5007 28.3373C15.9676 27.9642 15.4344 27.5718 14.8781 27.2179C14.7236 27.1178 14.4841 27.0755 14.2986 27.1063C13.7539 27.1986 13.2131 27.3333 12.6722 27.4602C12.452 27.5102 12.3052 27.4795 12.1816 27.2602C11.9189 26.7985 11.5943 26.3715 11.3394 25.9099C11.1887 25.6367 10.9762 25.5444 10.6981 25.4982C10.1611 25.4098 9.62794 25.302 9.09095 25.2251C8.90551 25.1982 8.83597 25.1405 8.80507 24.952C8.71235 24.348 8.60032 23.744 8.46896 23.1477C8.44192 23.0208 8.34148 22.8746 8.2333 22.8015C7.75426 22.4783 7.26749 22.1629 6.76526 21.8705C6.55279 21.7474 6.4987 21.6127 6.55665 21.3858C6.69186 20.8395 6.82708 20.2894 6.92752 19.7315C6.95843 19.57 6.91593 19.3584 6.82321 19.2199C6.46393 18.6659 6.07374 18.1312 5.67969 17.5695C6.06215 17.0194 6.46007 16.477 6.82321 15.9153C6.91207 15.7768 6.95456 15.5652 6.92752 15.4036C6.82708 14.8497 6.69186 14.2996 6.55665 13.7494C6.4987 13.5225 6.55665 13.3878 6.76526 13.2647C7.26363 12.9723 7.75426 12.6607 8.2333 12.3337C8.34148 12.2606 8.44192 12.1144 8.46896 11.9875C8.59645 11.3912 8.70849 10.7872 8.8012 10.1832C8.83211 9.99088 8.90551 9.93702 9.08709 9.90625C9.65885 9.82161 10.2267 9.70235 10.7985 9.61387C11.0264 9.57925 11.1732 9.47923 11.293 9.27918C11.575 8.80215 11.8995 8.3482 12.1738 7.87117C12.3013 7.64804 12.4481 7.62111 12.6645 7.67113C13.1937 7.79423 13.7307 7.89041 14.2523 8.03659C14.5111 8.10969 14.7004 8.05968 14.9052 7.90579C15.419 7.52879 15.9482 7.17101 16.4891 6.79785C17.0454 7.18255 17.5901 7.5788 18.1542 7.94042C18.2932 8.0289 18.5057 8.07122 18.6718 8.04044C19.2282 7.94042 19.7806 7.80577 20.333 7.67113C20.5417 7.62111 20.6769 7.65189 20.7966 7.85578C21.0902 8.35205 21.4032 8.84062 21.7315 9.31765C21.8127 9.43691 21.9672 9.54463 22.1063 9.5754C22.7051 9.7062 23.3155 9.79853 23.9143 9.92548C24.0147 9.94856 24.1461 10.0717 24.1654 10.1717C24.2929 10.768 24.3856 11.3758 24.517 11.9721C24.5479 12.1106 24.656 12.2645 24.7719 12.3453C25.251 12.6723 25.7378 12.9839 26.24 13.2762C26.4409 13.3955 26.4872 13.5225 26.437 13.734C26.3057 14.2842 26.1666 14.8304 26.07 15.3883C26.0391 15.5614 26.0816 15.7845 26.1782 15.9345C26.5452 16.4847 26.9392 17.0155 27.3256 17.5657ZM15.3688 11.3758C15.2954 11.4066 15.2413 11.4335 15.1872 11.4528C13.978 11.8259 13.2633 12.6492 13.1281 13.8879C13.0469 14.6342 13.0469 15.4036 13.1281 16.15C13.2826 17.558 14.2252 18.4774 15.6392 18.6698C16.1066 18.7352 16.5857 18.6929 17.057 18.7044C17.4201 18.7159 17.6365 18.916 17.6404 19.2738C17.6481 19.8393 17.6519 20.4086 17.6404 20.9741C17.6326 21.3127 17.4201 21.5204 17.084 21.532C16.775 21.5435 16.4698 21.5358 16.1607 21.5358C15.5619 21.5358 15.4576 21.4473 15.361 20.8472C15.2606 20.2278 14.7159 19.7816 14.1441 19.8393C13.5067 19.9047 13.0624 20.4356 13.101 21.0934C13.1667 22.2744 13.9471 23.29 15.0674 23.6555C15.164 23.6863 15.2644 23.7209 15.3533 23.7517C15.4344 24.9981 15.7474 25.4752 16.4814 25.4982C17.2193 25.5213 17.5438 25.0481 17.6674 23.7517C17.7176 23.7286 17.7717 23.7017 17.8297 23.6863C19.0389 23.3131 19.7536 22.4899 19.8849 21.2473C19.966 20.501 19.9699 19.7315 19.8849 18.9852C19.7265 17.5657 18.7568 16.6308 17.339 16.4577C16.8832 16.4039 16.4157 16.4423 15.956 16.4308C15.5928 16.4231 15.3803 16.2154 15.3726 15.8614C15.3649 15.2959 15.3649 14.7266 15.3726 14.1611C15.3803 13.8225 15.5928 13.6148 15.9289 13.6032C16.238 13.5917 16.5432 13.5994 16.8522 13.5994C17.4511 13.5994 17.5554 13.6879 17.6519 14.288C17.7524 14.8997 18.301 15.3575 18.8689 15.2959C19.4909 15.2305 19.9351 14.7073 19.912 14.0764C19.8733 12.9454 19.1432 11.899 18.0692 11.5451C17.6983 11.422 17.5863 11.245 17.6404 10.9026C17.6442 10.8795 17.6404 10.8565 17.6404 10.8334C17.621 10.1486 17.1227 9.62926 16.4891 9.6408C15.8633 9.6485 15.3842 10.1486 15.3649 10.8218C15.3649 11.0026 15.3688 11.1912 15.3688 11.3758Z",
                  fill: "#282828"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
                  d: "M14.2242 4.53179C14.2242 4.92419 14.2242 5.26273 14.2242 5.66667C12.8836 4.7126 11.5856 3.78932 10.2373 2.83141C11.574 1.88504 12.872 0.957909 14.2203 0C14.2203 0.403938 14.2203 0.742476 14.2203 1.13487C14.3671 1.13487 14.4908 1.13103 14.6144 1.13487C15.7386 1.15795 16.8667 1.12718 17.987 1.21181C20.9192 1.43494 23.5887 2.41978 25.984 4.11632C29.5459 6.63996 31.8754 10.033 32.6674 14.3109C33.8612 20.7855 31.8484 26.2021 26.7721 30.43C24.5082 32.315 21.8541 33.4383 18.9374 33.8307C13.7413 34.527 9.15559 33.1306 5.28073 29.6029C2.66917 27.2292 1.05046 24.2786 0.324166 20.8432C0.0228309 19.4044 -0.0467078 17.9464 0.0228309 16.4614C1.14704 16.4614 2.26352 16.4614 3.48045 16.4614C3.48045 17.1731 3.43796 17.8771 3.48818 18.5773C3.70066 21.5664 4.85191 24.1632 6.87626 26.3675C8.93924 28.6142 11.5006 29.9837 14.5178 30.4415C21.4253 31.4879 27.7533 27.0446 29.233 20.5123C30.8015 13.5877 26.7721 6.90541 19.938 5.00113C18.582 4.62412 17.195 4.51641 15.7888 4.53564C15.2827 4.53949 14.7766 4.53179 14.2242 4.53179Z",
                  fill: "#282828"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("defs", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("clipPath", {
                  id: "clip0_2600_10247",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
                    width: "33",
                    height: "34",
                    fill: "white"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('30-Day Money Back Guarantee', 'somira')
            })]
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ "./blocks/product-showcase/src/editor.scss":
/*!*************************************************!*\
  !*** ./blocks/product-showcase/src/editor.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./blocks/product-showcase/src/index.js":
/*!**********************************************!*\
  !*** ./blocks/product-showcase/src/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/product-showcase/src/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./blocks/product-showcase/src/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./blocks/product-showcase/src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./blocks/product-showcase/src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./blocks/product-showcase/src/block.json");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  ..._block_json__WEBPACK_IMPORTED_MODULE_5__,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./blocks/product-showcase/src/save.js":
/*!*********************************************!*\
  !*** ./blocks/product-showcase/src/save.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const {
    backgroundImage,
    productImage,
    testimonialImages,
    title,
    priceCurrent,
    pricePrevious,
    stripeUrl,
    customerCount
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save();
  const plugOptions = [{
    label: 'United States',
    value: 'United States'
  }, {
    label: 'United Kingdom',
    value: 'United Kingdom'
  }, {
    label: 'Europe',
    value: 'Europe'
  }, {
    label: 'Australia',
    value: 'Australia'
  }, {
    label: 'Canada',
    value: 'Canada'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "product-showcase-wrapper",
      style: {
        backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "product-showcase-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "product-showcase-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "product-image-column",
            children: productImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: productImage.url,
              alt: "Product",
              className: "product-image"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "product-details-column",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "testimonials-section",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "testimonial-avatars",
                children: testimonialImages.map((image, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "testimonial-avatar",
                  children: image && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                    src: image.url,
                    alt: `Customer ${index + 1}`
                  })
                }, index))
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
                className: "testimonials-text",
                children: ["Loved by ", customerCount, " Customers"]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "product-title-wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
                tagName: "h2",
                className: "product-title",
                value: title
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "pricing-section",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "current-price",
                children: priceCurrent
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                className: "previous-price",
                children: pricePrevious
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("form", {
              className: "product-form",
              "data-stripe-url": stripeUrl,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "form-row",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "form-field plug-type-field",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                    htmlFor: "plug-type",
                    children: "Plug Type:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("select", {
                    name: "plugType",
                    id: "plug-type",
                    className: "plug-select-hidden",
                    style: {
                      display: 'none'
                    },
                    children: plugOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
                      value: option.value,
                      children: option.label
                    }, option.value))
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "custom-select",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                      className: "custom-select-trigger",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                        className: "plug-icon",
                        width: "16",
                        height: "24",
                        viewBox: "0 0 16 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                          d: "M7.33333 21.3333H8.66667V18.8667L13.3333 14.2V8H2.66667V14.2L7.33333 18.8667V21.3333ZM4.66667 24V20L0 15.3333V8C0 7.26667 0.261111 6.63889 0.783333 6.11667C1.30556 5.59444 1.93333 5.33333 2.66667 5.33333H4L2.66667 6.66667V0H5.33333V5.33333H10.6667V0H13.3333V6.66667L12 5.33333H13.3333C14.0667 5.33333 14.6944 5.59444 15.2167 6.11667C15.7389 6.63889 16 7.26667 16 8V15.3333L11.3333 20V24H4.66667Z",
                          fill: "#717171"
                        })
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                        className: "selected-value",
                        children: "United States"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                        className: "dropdown-arrow",
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("mask", {
                          id: "mask0_2597_10214",
                          style: {
                            maskType: 'alpha'
                          },
                          maskUnits: "userSpaceOnUse",
                          x: "0",
                          y: "0",
                          width: "32",
                          height: "32",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                            width: "32",
                            height: "32",
                            fill: "#D9D9D9"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("g", {
                          mask: "url(#mask0_2597_10214)",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                            d: "M15.6003 17.2002L21.7337 11.0669L23.6003 12.9336L15.6003 20.9336L7.60034 12.9336L9.46701 11.0669L15.6003 17.2002Z",
                            fill: "#282828"
                          })
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul", {
                      className: "custom-select-options",
                      children: plugOptions.map(option => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("li", {
                        "data-value": option.value,
                        className: "custom-select-option",
                        children: option.label
                      }, option.value))
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "form-field",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("label", {
                    htmlFor: "quantity",
                    children: "Quantity:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                    className: "quantity-controls",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                      type: "button",
                      className: "quantity-btn quantity-decrease",
                      "aria-label": "Decrease quantity",
                      children: "-"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
                      type: "number",
                      name: "quantity",
                      id: "quantity",
                      className: "quantity-input",
                      value: "1",
                      min: "1",
                      readOnly: true
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                      type: "button",
                      className: "quantity-btn quantity-increase",
                      "aria-label": "Increase quantity",
                      children: "+"
                    })]
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "checkout-buttons",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
                  type: "submit",
                  className: "checkout-btn",
                  name: "checkout_type",
                  value: "regular",
                  children: "Checkout"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                  type: "submit",
                  className: "apple-pay-btn",
                  name: "checkout_type",
                  value: "apple_pay",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    className: "apple-pay-logo",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
                      width: "16",
                      height: "20",
                      viewBox: "0 0 16 20",
                      fill: "none",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                        d: "M11.624 10.547C11.648 12.836 13.657 13.653 13.68 13.664C13.66 13.719 13.352 14.806 12.656 15.922C12.064 16.882 11.448 17.839 10.472 17.858C9.52 17.876 9.224 17.262 8.12 17.262C7.016 17.262 6.68 17.839 5.768 17.876C4.832 17.913 4.128 16.845 3.528 15.889C2.288 13.924 1.352 10.279 2.632 7.917C3.264 6.748 4.448 6.007 5.744 5.989C6.656 5.971 7.52 6.643 8.112 6.643C8.704 6.643 9.744 5.836 10.848 5.953C11.296 5.971 12.656 6.133 13.544 7.376C13.472 7.421 11.608 8.584 11.624 10.547Z",
                        fill: "currentColor"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                        d: "M9.704 4.133C10.192 3.532 10.52 2.692 10.424 1.84C9.704 1.876 8.816 2.359 8.304 2.96C7.848 3.484 7.456 4.348 7.576 5.161C8.368 5.224 9.192 4.741 9.704 4.133Z",
                        fill: "currentColor"
                      })]
                    })
                  }), "Apple Pay"]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "guarantee-section",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
              width: "33",
              height: "34",
              viewBox: "0 0 33 34",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("g", {
                clipPath: "url(#clip0_2600_10247)",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                  d: "M27.3256 17.5657C26.9315 18.1273 26.5374 18.6698 26.1704 19.2353C26.0854 19.3661 26.043 19.5661 26.07 19.7162C26.1704 20.2701 26.3018 20.8203 26.4409 21.3665C26.5027 21.6089 26.4447 21.7512 26.2207 21.8782C25.7223 22.1706 25.2317 22.4822 24.7526 22.8053C24.6522 22.8746 24.5595 23.0092 24.5324 23.1285C24.4049 23.7401 24.3083 24.3557 24.177 24.9635C24.1577 25.0635 24.0263 25.1866 23.9259 25.2097C23.3271 25.3367 22.7167 25.429 22.1179 25.5598C21.9788 25.5906 21.8243 25.6983 21.7431 25.8175C21.4148 26.2946 21.1018 26.7793 20.8082 27.2794C20.6885 27.4833 20.5533 27.5141 20.3446 27.4641C19.7922 27.3294 19.2436 27.1948 18.6834 27.0948C18.5212 27.064 18.3048 27.1063 18.1658 27.1948C17.6094 27.5525 17.0725 27.9411 16.5007 28.3373C15.9676 27.9642 15.4344 27.5718 14.8781 27.2179C14.7236 27.1178 14.4841 27.0755 14.2986 27.1063C13.7539 27.1986 13.2131 27.3333 12.6722 27.4602C12.452 27.5102 12.3052 27.4795 12.1816 27.2602C11.9189 26.7985 11.5943 26.3715 11.3394 25.9099C11.1887 25.6367 10.9762 25.5444 10.6981 25.4982C10.1611 25.4098 9.62794 25.302 9.09095 25.2251C8.90551 25.1982 8.83597 25.1405 8.80507 24.952C8.71235 24.348 8.60032 23.744 8.46896 23.1477C8.44192 23.0208 8.34148 22.8746 8.2333 22.8015C7.75426 22.4783 7.26749 22.1629 6.76526 21.8705C6.55279 21.7474 6.4987 21.6127 6.55665 21.3858C6.69186 20.8395 6.82708 20.2894 6.92752 19.7315C6.95843 19.57 6.91593 19.3584 6.82321 19.2199C6.46393 18.6659 6.07374 18.1312 5.67969 17.5695C6.06215 17.0194 6.46007 16.477 6.82321 15.9153C6.91207 15.7768 6.95456 15.5652 6.92752 15.4036C6.82708 14.8497 6.69186 14.2996 6.55665 13.7494C6.4987 13.5225 6.55665 13.3878 6.76526 13.2647C7.26363 12.9723 7.75426 12.6607 8.2333 12.3337C8.34148 12.2606 8.44192 12.1144 8.46896 11.9875C8.59645 11.3912 8.70849 10.7872 8.8012 10.1832C8.83211 9.99088 8.90551 9.93702 9.08709 9.90625C9.65885 9.82161 10.2267 9.70235 10.7985 9.61387C11.0264 9.57925 11.1732 9.47923 11.293 9.27918C11.575 8.80215 11.8995 8.3482 12.1738 7.87117C12.3013 7.64804 12.4481 7.62111 12.6645 7.67113C13.1937 7.79423 13.7307 7.89041 14.2523 8.03659C14.5111 8.10969 14.7004 8.05968 14.9052 7.90579C15.419 7.52879 15.9482 7.17101 16.4891 6.79785C17.0454 7.18255 17.5901 7.5788 18.1542 7.94042C18.2932 8.0289 18.5057 8.07122 18.6718 8.04044C19.2282 7.94042 19.7806 7.80577 20.333 7.67113C20.5417 7.62111 20.6769 7.65189 20.7966 7.85578C21.0902 8.35205 21.4032 8.84062 21.7315 9.31765C21.8127 9.43691 21.9672 9.54463 22.1063 9.5754C22.7051 9.7062 23.3155 9.79853 23.9143 9.92548C24.0147 9.94856 24.1461 10.0717 24.1654 10.1717C24.2929 10.768 24.3856 11.3758 24.517 11.9721C24.5479 12.1106 24.656 12.2645 24.7719 12.3453C25.251 12.6723 25.7378 12.9839 26.24 13.2762C26.4409 13.3955 26.4872 13.5225 26.437 13.734C26.3057 14.2842 26.1666 14.8304 26.07 15.3883C26.0391 15.5614 26.0816 15.7845 26.1782 15.9345C26.5452 16.4847 26.9392 17.0155 27.3256 17.5657ZM15.3688 11.3758C15.2954 11.4066 15.2413 11.4335 15.1872 11.4528C13.978 11.8259 13.2633 12.6492 13.1281 13.8879C13.0469 14.6342 13.0469 15.4036 13.1281 16.15C13.2826 17.558 14.2252 18.4774 15.6392 18.6698C16.1066 18.7352 16.5857 18.6929 17.057 18.7044C17.4201 18.7159 17.6365 18.916 17.6404 19.2738C17.6481 19.8393 17.6519 20.4086 17.6404 20.9741C17.6326 21.3127 17.4201 21.5204 17.084 21.532C16.775 21.5435 16.4698 21.5358 16.1607 21.5358C15.5619 21.5358 15.4576 21.4473 15.361 20.8472C15.2606 20.2278 14.7159 19.7816 14.1441 19.8393C13.5067 19.9047 13.0624 20.4356 13.101 21.0934C13.1667 22.2744 13.9471 23.29 15.0674 23.6555C15.164 23.6863 15.2644 23.7209 15.3533 23.7517C15.4344 24.9981 15.7474 25.4752 16.4814 25.4982C17.2193 25.5213 17.5438 25.0481 17.6674 23.7517C17.7176 23.7286 17.7717 23.7017 17.8297 23.6863C19.0389 23.3131 19.7536 22.4899 19.8849 21.2473C19.966 20.501 19.9699 19.7315 19.8849 18.9852C19.7265 17.5657 18.7568 16.6308 17.339 16.4577C16.8832 16.4039 16.4157 16.4423 15.956 16.4308C15.5928 16.4231 15.3803 16.2154 15.3726 15.8614C15.3649 15.2959 15.3649 14.7266 15.3726 14.1611C15.3803 13.8225 15.5928 13.6148 15.9289 13.6032C16.238 13.5917 16.5432 13.5994 16.8522 13.5994C17.4511 13.5994 17.5554 13.6879 17.6519 14.288C17.7524 14.8997 18.301 15.3575 18.8689 15.2959C19.4909 15.2305 19.9351 14.7073 19.912 14.0764C19.8733 12.9454 19.1432 11.899 18.0692 11.5451C17.6983 11.422 17.5863 11.245 17.6404 10.9026C17.6442 10.8795 17.6404 10.8565 17.6404 10.8334C17.621 10.1486 17.1227 9.62926 16.4891 9.6408C15.8633 9.6485 15.3842 10.1486 15.3649 10.8218C15.3649 11.0026 15.3688 11.1912 15.3688 11.3758Z",
                  fill: "#282828"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                  d: "M14.2242 4.53179C14.2242 4.92419 14.2242 5.26273 14.2242 5.66667C12.8836 4.7126 11.5856 3.78932 10.2373 2.83141C11.574 1.88504 12.872 0.957909 14.2203 0C14.2203 0.403938 14.2203 0.742476 14.2203 1.13487C14.3671 1.13487 14.4908 1.13103 14.6144 1.13487C15.7386 1.15795 16.8667 1.12718 17.987 1.21181C20.9192 1.43494 23.5887 2.41978 25.984 4.11632C29.5459 6.63996 31.8754 10.033 32.6674 14.3109C33.8612 20.7855 31.8484 26.2021 26.7721 30.43C24.5082 32.315 21.8541 33.4383 18.9374 33.8307C13.7413 34.527 9.15559 33.1306 5.28073 29.6029C2.66917 27.2292 1.05046 24.2786 0.324166 20.8432C0.0228309 19.4044 -0.0467078 17.9464 0.0228309 16.4614C1.14704 16.4614 2.26352 16.4614 3.48045 16.4614C3.48045 17.1731 3.43796 17.8771 3.48818 18.5773C3.70066 21.5664 4.85191 24.1632 6.87626 26.3675C8.93924 28.6142 11.5006 29.9837 14.5178 30.4415C21.4253 31.4879 27.7533 27.0446 29.233 20.5123C30.8015 13.5877 26.7721 6.90541 19.938 5.00113C18.582 4.62412 17.195 4.51641 15.7888 4.53564C15.2827 4.53949 14.7766 4.53179 14.2242 4.53179Z",
                  fill: "#282828"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("clipPath", {
                  id: "clip0_2600_10247",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
                    width: "33",
                    height: "34",
                    fill: "white"
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
              children: "30-Day Money Back Guarantee"
            })]
          })]
        })
      })
    })
  });
}

/***/ }),

/***/ "./blocks/product-showcase/src/style.scss":
/*!************************************************!*\
  !*** ./blocks/product-showcase/src/style.scss ***!
  \************************************************/
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

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./blocks/product-showcase/src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map