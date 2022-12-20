import $ from '../core';

$.prototype.setAttr = function(attributeName, value) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].setAttribute(attributeName, value)) {
            continue;
        }
        return this[i].setAttribute(attributeName, value);
    }

    return this;
}

$.prototype.getAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            continue;
        }
        return this[i].getAttribute(attributeName);
    }

    return this;
}

$.prototype.removeAttr = function(attributeName) {
    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            continue;
        }
        return this[i].removeAttribute(attributeName);
    }

    return this;
}