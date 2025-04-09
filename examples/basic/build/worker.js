function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect } from "react";
export function getCrossOriginWorkerSource(workerUrl) {
    return "\n          const originURL = new URL('".concat(workerUrl, "')\n          const originalImportScripts = self.importScripts\n          self.importScripts = (_url) => {\n              const url = _url.replace('blob:', '').split('/').at(-1)\n              originalImportScripts.call(self, new URL(url, originURL).toString())\n          }\n          importScripts(originURL.toString());\n    ");
}
export var CrossOriginWorker = /*#__PURE__*/ function() {
    "use strict";
    function CrossOriginWorker(url) {
        _classCallCheck(this, CrossOriginWorker);
        var workerSource = getCrossOriginWorkerSource(url.toString());
        var worker_url = URL.createObjectURL(new Blob([
            workerSource
        ], {
            type: "text/javascript"
        }));
        this._worker = new Worker(worker_url);
        URL.revokeObjectURL(worker_url);
    }
    _createClass(CrossOriginWorker, [
        {
            key: "worker",
            get: function get() {
                return this._worker;
            }
        }
    ]);
    return CrossOriginWorker;
}();
export function WorkerComponent() {
    useEffect(function() {
        var worker = new CrossOriginWorker(new URL("./lib.js", import.meta.url)).worker;
        worker.onmessage = function(event) {
            console.log("Message from worker:", event.data);
        };
        return function() {
            worker.terminate();
        };
    }, []);
    return /*#__PURE__*/ _jsx("div", {
        children: "Worker is running in background"
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3dvcmtlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENyb3NzT3JpZ2luV29ya2VyU291cmNlKHdvcmtlclVybCkge1xuICAgIHJldHVybiBgXG4gICAgICAgICAgY29uc3Qgb3JpZ2luVVJMID0gbmV3IFVSTCgnJHt3b3JrZXJVcmx9JylcbiAgICAgICAgICBjb25zdCBvcmlnaW5hbEltcG9ydFNjcmlwdHMgPSBzZWxmLmltcG9ydFNjcmlwdHNcbiAgICAgICAgICBzZWxmLmltcG9ydFNjcmlwdHMgPSAoX3VybCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB1cmwgPSBfdXJsLnJlcGxhY2UoJ2Jsb2I6JywgJycpLnNwbGl0KCcvJykuYXQoLTEpXG4gICAgICAgICAgICAgIG9yaWdpbmFsSW1wb3J0U2NyaXB0cy5jYWxsKHNlbGYsIG5ldyBVUkwodXJsLCBvcmlnaW5VUkwpLnRvU3RyaW5nKCkpXG4gICAgICAgICAgfVxuICAgICAgICAgIGltcG9ydFNjcmlwdHMob3JpZ2luVVJMLnRvU3RyaW5nKCkpO1xuICAgIGBcbn1cblxuZXhwb3J0IGNsYXNzIENyb3NzT3JpZ2luV29ya2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKHVybCkge1xuICAgICAgICBjb25zdCB3b3JrZXJTb3VyY2UgPSBnZXRDcm9zc09yaWdpbldvcmtlclNvdXJjZSh1cmwudG9TdHJpbmcoKSlcbiAgICAgICAgY29uc3Qgd29ya2VyX3VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoXG4gICAgICAgICAgICBuZXcgQmxvYihbd29ya2VyU291cmNlXSwgeyB0eXBlOiAndGV4dC9qYXZhc2NyaXB0JyB9KVxuICAgICAgICApXG4gICAgICAgIHRoaXMuX3dvcmtlciA9IG5ldyBXb3JrZXIod29ya2VyX3VybClcbiAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTCh3b3JrZXJfdXJsKVxuICAgIH1cblxuICAgIGdldCB3b3JrZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl93b3JrZXJcbiAgICB9XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFdvcmtlckNvbXBvbmVudCgpIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB3b3JrZXIgPSBuZXcgQ3Jvc3NPcmlnaW5Xb3JrZXIoXG4gICAgICAgICAgICBuZXcgVVJMKCcuL2xpYi5qcycsIGltcG9ydC5tZXRhLnVybClcbiAgICAgICAgKS53b3JrZXI7XG5cbiAgICAgICAgd29ya2VyLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ01lc3NhZ2UgZnJvbSB3b3JrZXI6JywgZXZlbnQuZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIHdvcmtlci50ZXJtaW5hdGUoKTtcbiAgICAgICAgfTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgV29ya2VyIGlzIHJ1bm5pbmcgaW4gYmFja2dyb3VuZFxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiZ2V0Q3Jvc3NPcmlnaW5Xb3JrZXJTb3VyY2UiLCJ3b3JrZXJVcmwiLCJDcm9zc09yaWdpbldvcmtlciIsInVybCIsIndvcmtlclNvdXJjZSIsInRvU3RyaW5nIiwid29ya2VyX3VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJ0eXBlIiwiX3dvcmtlciIsIldvcmtlciIsInJldm9rZU9iamVjdFVSTCIsIndvcmtlciIsIldvcmtlckNvbXBvbmVudCIsIm9ubWVzc2FnZSIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ0ZXJtaW5hdGUiLCJkaXYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0EsU0FBU0MsU0FBUyxRQUFRLFFBQVE7QUFFekMsT0FBTyxTQUFTQywyQkFBMkJDLFNBQVMsRUFBRTtJQUNsRCxPQUFPLEFBQUMsMENBQ3FDLE9BQVZBLFdBQVU7QUFRakQsQ0FBQztBQUVELE9BQU8sSUFBQSxBQUFNQyxrQ0FpQlgsQUFqQks7O2FBQU1BLGtCQUVHQyxHQUFHOzhCQUZORDtRQUdMLElBQU1FLGVBQWVKLDJCQUEyQkcsSUFBSUUsUUFBUTtRQUM1RCxJQUFNQyxhQUFhQyxJQUFJQyxlQUFlLENBQ2xDLElBQUlDLEtBQUs7WUFBQ0w7U0FBYSxFQUFFO1lBQUVNLE1BQU07UUFBa0I7UUFFdkQsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSUMsT0FBT047UUFDMUJDLElBQUlNLGVBQWUsQ0FBQ1A7O2lCQVJmSjs7WUFXTFksS0FBQUE7aUJBQUosZUFBYTtnQkFDVCxPQUFPLElBQUksQ0FBQ0gsT0FBTztZQUN2Qjs7O1dBYlNUO0lBY1o7QUFHRCxPQUFPLFNBQVNhLGtCQUFrQjtJQUM5QmhCLFVBQVUsV0FBTTtRQUNaLElBQU1lLFNBQVMsSUFBSVosa0JBQ2YsSUFBSUssSUFBSSxZQUFZLFlBQVlKLEdBQUcsR0FDckNXLE1BQU07UUFFUkEsT0FBT0UsU0FBUyxHQUFHLFNBQUNDLE9BQVU7WUFDMUJDLFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JGLE1BQU1HLElBQUk7UUFDbEQ7UUFFQSxPQUFPLFdBQU07WUFDVE4sT0FBT08sU0FBUztRQUNwQjtJQUNKLEdBQUcsRUFBRTtJQUVMLHFCQUNJLEtBQUNDO2tCQUFJOztBQUliLENBQUMifQ==