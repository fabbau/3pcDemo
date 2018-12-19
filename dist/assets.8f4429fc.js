// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"C:/Users/prinz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"C:/Users/prinz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"C:/Users/prinz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"assets/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"C:/Users/prinz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"assets/main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _main = _interopRequireDefault(require("./main.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Main JS File, collects other modules like CSS */
var _default = function _default() {};

exports.default = _default;
},{"./main.scss":"assets/main.scss"}],"assets/categories.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* Provides some sample data */
var categories = [{
  "id": "1",
  "title": "Karrriereweg",
  "content": "Der Weg zur Proffesur ist nicht nur steil, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur dolores inventore iure enim rerum maiores architecto molestias veritatis autem ut temporibus quaerat magni nemo officiis sint accusantium possimus suscipit, voluptatum maxime necessitatibus. Eos quidem, earum sint nihil quas quod sequi in architecto exercitationem voluptates atque nemo quaerat, officiis voluptatum cum, saepe doloremque iste suscipit repellendus, facilis inventore. Ab cum rerum laboriosam blanditiis delectus, omnis repellat, fugiat velit vero quidem dignissimos minus quas magni vel nostrum veniam, nulla consequuntur. Velit, explicabo. Nostrum vero, dolorum, incidunt assumenda obcaecati nam voluptas minima voluptatem suscipit, ut tempora quasi ducimus, atque aliue earum nam eos illum iure magni tenetur ipsa! Iste, veritatis! Porro dolores, consequuntur ratione illo consequatur harum accusantium."
}, {
  "id": "2",
  "title": "Promotion",
  "content": "Promotion, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur dolores inventore iure enim rerum maiores architecto molestias veritatis autem ut temporibus quaerat magni nemo officiis sint accusantium possimus suscipit, voluptatum maxime necessitatibus. Eos quidem, earum sint nih! Beatae corporis ullam distinctio inventore incidunt nostrum, animi doloribus dolorem, quas maxime deserunt veritatis accusantium. Unde optio officiis quam excepturi ipsam adipisci exercitationem accusantium doloribus? Explicabo veniam, commodi laboriosam distinctio ea rerum enim dolor molestiae consequatur eius quas, magni ratione dolorum ducimus cupiditate neque, reprehenderit natus veritatis! Quasi neque ut, saepe quos vero dolorum, voluptas architecto. Aperiam dolorum vero facilis explicabo. Repudiandae labore numquam quidem, unde iusto? Dolorum impedit harum accusamus accusantium, asperiores. Quisquam officia aliquid repellat sit, praesentium error itaque earum nam eos illum iure magni tenetur ipsa! Iste, veritatis! Porro dolores, consequuntur ratione illo consequatur harum accusantium."
}, {
  "id": "3",
  "title": "Habilitation",
  "content": "Habilitation, Habilitation dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur dolores inventore iure enim rerum maiores architecto molestias veritatis autem ut temporibus quaerat magni nemo officiis sint accusantium possimus suscipit, voluptatum maxime necessitatibus. Eos quidem, earum sint nihil quas quod sequi in architllat, fugiat velit vero quidem dignissimos minus quas magni vel nostrum veniam, nulla consequuntur. Velit, explicabo. Nostrum vero, dolorum, incidunt assumenda obcaecati nam voluptas minima voluptatem suscipit."
}, {
  "id": "4",
  "title": "Juniorprofessor",
  "content": "Juniorprofessor, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur doloreitatis! Quasi neque ut, saepe quos vero dolorum, voluptas architecto. Aperiam dolorum vero facilis explicabo. Repudiandae labore numquam quidem, unde iusto? Dolorum impedit harum accusamus accusantium, asperiores. Quisquam officia aliquid repellat sit, praesentium error itaque earum nam eos illum iure magni tenetur ipsa! Iste, veritatis! Porro dolores, consequuntur ratione illo consequatur harum accusantium."
}, {
  "id": "5",
  "title": "Berufungs-verfahren",
  "content": "Berufserfahrung, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur dolores inventore iure enim rerum maiores architecto molestias veritatis autem ut temporibus quaerat magni nemo officiis sint accusantium possimus suscipit, voluptatum maxime necessitatibus. Eos quidem, earum sint nihil quas quod sequi in architecto exercitationem voluptates atque nemo quaerat, officiis voluptatum cum, saepe doloremque iste suscipit repellendus, facilis inventore. Ab cum rerum laboriosam blanditiis delectus, distinctio inventore incidunt nostrum, animi doloribus dolorem, quas maxime deserunt veritatis accusantium. Unde optio officiis quam excepturi ipsam adipisci exercitationem accusantium doloribus? Explicabo veniam, commodi laboriosam distinctio ea rerum enim dolor molestiae consequatur eius quas, magni ratione dolorum ducimus cupiditate neque, reprehenderit natus veritatis! Quasi neque ut, saepe quos vero dolorum, voluptas architecto. Aperiam dolorum vero facilis explicabo. Repudiandae labore numquam quidem, unde iusto? Dolorum impedit harum accusamus accusantium, asperiores. Quisquam officia aliquid repellat sit, praesentium error itaque earum nam eos illum iure magni tenetur ipsa! Iste, veritatis! Porro dolores, consequuntur ratione illo consequatur harum accusantium."
}, {
  "id": "6",
  "title": "Arbeitsplatz",
  "content": "Arbeitsplatz, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur dolores inventore iure enim rerum maiores architecto molestias veritatis autem ut temporibus quaerat magni nemo officiis sint accusantium possimus suscipit, voluptatum maxime necessitatibus. Eos quidem, earum sint nihil quas quod sequi in architecto exercitatdem dignissimos minus quas magni vel nostrum veniam, nulla consequuntur. Velit, explicabo. Nostrum vero, dolorum, incidunt assumenda obcaecati nam voluptas minima voluptatem suscipit, ut tempora quasi ducimus, atque alias a praesentium ipsum voluptate quae cupiditate vel saepe sint iusto eaque culpa! Deleniti, voluptate blanditiis labore, dolorum laboriosam asperiores. Consequatur ."
}, {
  "id": "7",
  "title": "Familie, Partnerschaft, Alltag",
  "content": "Familie, Partnerschaft, Alltag, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur dolores inventore iure enis delectus, omnis repellat, fugiat velit vero quidem dignissimos minus quas magni vel nostrum veniam, nulla consequuntur. Velit, explicabo. Nostrum vero, dolorum, incidunt assumenda obcaecati nam voluptas minima vol."
}, {
  "id": "8",
  "title": "Mobilität",
  "content": "Mobilität, Mobilität, -> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur dolores inventore iure enim rerum maiores archi, fuisquam officia aliquid repellat sit, praesentium error itaque earum nam eos illum iure magni tenetur ipsa! Iste, veritatis! Porro dolores, consequuntur ratione illo consequatur harum accusantium."
}, {
  "id": "9",
  "title": "Blick aus dem Ausland",
  "content": "Blick aus dem Ausland, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur dolores inventore iure enim rerum maiores architecto molestias veritatis autem ut temporibus quaerel nostrum veniam, nulla consequuntur. Velit, explicabo. Nostrum vero, dolorum, incidunt assumenda obcaecati nam voluptas mi."
}, {
  "id": "10",
  "title": "Allgemein",
  "content": "Allgemein, AllgemeinLorem ipsum dolor sit amet, consectetur adipisicing elit. Optio quisquam totam quas pariatur. Illum quibusdam laudantium sapiente quidem atque consequuntur dolores inventore iure enim rerum maiores architecto molestias veritatis autem ut temporibus quaerat magni nemo officiis sint accusantium possimus suscipit, voluptatum maxime necessitatibus. Eos quidem, earum sint nihil quas quod sequi in architecto uam officia aliquid repellat sit, praesentium error itaque earum nam eos illum iure magni tenetur ipsa! Iste, veritatis! Porro dolores, consequuntur ratione illo consequatur harum accusantium."
}];
var _default = categories;
exports.default = _default;
},{}],"assets/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _categories = _interopRequireDefault(require("./categories.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    var _this = this;

    _classCallCheck(this, Modal);

    this.openModalButton = $('.open-modal');
    this.modal = $('.modal');
    this.closeModalBtn = $('.modal__close');
    this.categorieDetailButtons = new Array();

    _categories.default.forEach(function (categorie, i) {
      _this.categorieDetailButtons[i] = $('#categorie-item-' + i);
    });

    this.setCategories(_categories.default);
    this.events();
  }
  /**
  * @desc sets the categorie titles in the categories list
  * @param array categorie - categories to be set
  */


  _createClass(Modal, [{
    key: "setCategories",
    value: function setCategories(categorie) {
      categorie.forEach(function (categorie, i) {
        $('#categorie-item-' + i).html(categorie.title);
      });
    }
    /**
    * @desc keeps a reference to the possible actions
    */

  }, {
    key: "events",
    value: function events() {
      var _this2 = this;

      // Click open modal button
      this.openModalButton.click(this.openModal.bind(this)); // Click X close modal button

      this.closeModalBtn.click(this.closeModal.bind(this)); // Click ESC key button

      $(document).keyup(this.keyPressHandler.bind(this)); // Click categorie detail button and fire setCategorieDetail()

      _categories.default.forEach(function (categorie, i) {
        _this2.categorieDetailButtons[i].on("click mouseover", function () {
          $('.modal__categories-list-item').removeClass('active');
          $(this).addClass('active');
          $('.modal__categories-detail h2').fadeOut('fast', function () {
            $('.modal__categories-detail h2').text(categorie.title).fadeIn('fast');
          });
          $('.modal__categories-detail p').fadeOut('fast', function () {
            $('.modal__categories-detail p').text(categorie.content).fadeIn('fast');
          });
          return this.setCategorieDetail(i);
        });
      });
    }
    /**
    * @desc sets the categorie title & content in the categories detail section
    * @param int i - index of the categories to be set
    */

  }, {
    key: "setCategorieDetail",
    value: function setCategorieDetail(i) {
      console.log('setCatD: ' + i);
      $('.modal__categories-detail h2').text(_categories.default[i].title);
      $('.modal__categories-detail p').text(_categories.default[i].content);
    }
    /**
    * @desc listens if the ESC key was pressed
    * @param Object e - keeps a reference of the pressed key
    */

  }, {
    key: "keyPressHandler",
    value: function keyPressHandler(e) {
      if (e.keyCode === 27) {
        this.closeModal();
      }
    }
    /**
    * @desc opens the modal
    * @return bool 
    */

  }, {
    key: "openModal",
    value: function openModal() {
      this.modal.addClass('modal--is-visible');
      return false;
    }
    /**
    * @desc close the modal
    */

  }, {
    key: "closeModal",
    value: function closeModal() {
      this.modal.removeClass('modal--is-visible');
    }
  }]);

  return Modal;
}();

var _default = Modal;
exports.default = _default;
},{"./categories.js":"assets/categories.js"}],"assets/index.js":[function(require,module,exports) {
"use strict";

var _main = _interopRequireDefault(require("./main"));

var _modal = _interopRequireDefault(require("./modal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Entry point */
(0, _main.default)();
var modal = new _modal.default();
},{"./main":"assets/main.js","./modal":"assets/modal.js"}],"C:/Users/prinz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55809" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/prinz/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","assets/index.js"], null)
//# sourceMappingURL=/assets.8f4429fc.map