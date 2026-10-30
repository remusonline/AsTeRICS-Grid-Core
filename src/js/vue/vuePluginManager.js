import { directive as createDirective } from 'vue';
import { i18nService } from '../service/i18nService';

let VuePluginManager = {};
let timeoutID = null;

VuePluginManager.init = function () {
    initDirectives();
    initFilters();
};

function initDirectives() {
    const focusDirective = createDirective({
        mounted: function (el, binding) {
            if (binding.value || binding.value === undefined) {
                if (el.focus) el.focus();
                if (el.select) el.select();
            }
        },
        updated: function (el, binding) {
            if (binding.value) {
                if (el.focus) el.focus();
                if (el.select) el.select();
            }
        }
    });
    const debounceDirective = createDirective({
        mounted: function (el, binding) {
            el.oninput = function (evt) {
                clearTimeout(timeoutID);
                timeoutID = setTimeout(function () {
                    el.dispatchEvent(new Event('change'));
                }, parseInt(binding.value) || 500);
            };
        }
    });
}

function initFilters() {
    // Filters are removed in Vue 3. Use computed properties or methods instead.
    // Keep stubs for compatibility if any components still reference them.
}

export { VuePluginManager };
