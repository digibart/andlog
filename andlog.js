// follow @HenrikJoreteg and @andyet if you like this ;)
(function () {
    var inNode = typeof window === 'undefined',
        out = {},
        ls = true,
        andlogKey = null;

    try {
    	ls = !inNode && window.localStorage;
    	andlogKey = ls.andlogKey;
    }
    catch(e) {
    	ls = false;
    }

    if (inNode) {
        module.exports = console;
        return;
    }

    if (ls && ls[andlogKey] && window.console) {
        out = window.console;
    } else {
        var methods = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),
            l = methods.length,
            fn = function () {};

        while (l--) {
            out[methods[l]] = fn;
        }
    }
    if (typeof exports !== 'undefined') {
        module.exports = out;
    } else {
        window.console = out;
    }
})();
