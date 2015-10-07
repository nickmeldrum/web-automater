var webAutomater = webAutomater || {};

webAutomater.objectExtend = function objectExtend(obj) {
    for (var i in obj) if (obj.hasOwnProperty(i)) this[i] = obj[i]; return this;
};

webAutomater.getElement = function getElement(args) {
    var ops = {
        from: window.document,
        tag: "body",
        attr: null,
        val: undefined
    };
    webAutomater.objectExtend.call(ops, args);
    
    var els = [].slice.call(ops.from.getElementsByTagName(ops.tag));

    if (ops.attr) els = els.filter(function(el) {return (el.getAttribute(ops.attr) == null) ? false : el.getAttribute(ops.attr) == ops.val;});

    return els;
};

// when on classes page, select a date:
webAutomater.getElement({tag:"li", attr:"data-date", val:"2015.10.09"})[0].click();

// find a class:
var className = "freestyle-spin";
var classDate = "09-10-2015";
var classStartTime = "12:30";

function findClassEl(className, classDate, classStartTime) {
    return webAutomater.getElement({tag:"tr", attr:"data-type", val:className}).filter(function(el) {
        return webAutomater.getElement({tag:"span", attr:"data-starttime", val:classDate.replace(/-/g, "") + classStartTime.replace(/:/g, "")}).length > 0;
    });
}

