"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tailwindcss_1 = __importDefault(require("tailwindcss"));
var Plugin_1 = __importDefault(require("varie-bundler/lib/plugins/Plugin"));
var TailwindCssPlugin = (function (_super) {
    __extends(TailwindCssPlugin, _super);
    function TailwindCssPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TailwindCssPlugin.prototype.register = function () {
        this.bundler.webpackChain.module
            .rule("sass")
            .oneOf("normal")
            .use("postcss-loader")
            .tap(function (options) {
            options.plugins.unshift(tailwindcss_1.default);
            return options;
        });
        this.bundler.webpackChain.module
            .rule("sass")
            .oneOf("vue")
            .use("postcss-loader")
            .tap(function (options) {
            options.plugins.unshift(tailwindcss_1.default);
            return options;
        });
    };
    return TailwindCssPlugin;
}(Plugin_1.default));
exports.default = TailwindCssPlugin;
//# sourceMappingURL=index.js.map