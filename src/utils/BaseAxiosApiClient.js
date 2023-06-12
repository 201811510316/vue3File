import empty from "./empty";
import axios from "axios";

class BaseAxiosApiClient {
    baseUrl = "";
    uri = "";
     _files = [];
    logs = [];
    timeout = 600000;
    params = {};
    data = {};
    headers = {responseEncoding: "utf-8"};
    method = "POST";

    constructor() {
        this.baseUrl = 'http://localhost:3109';
    }

    addFiles(files) {
        if (empty(files)) {
            return;
        }
        if (files instanceof FileList) {
            for (let i = 0; i < files.length; i++) {
                this._files.push(files[i]);
            }
        } else {
            this._files.push(files);
        }
    }

    transformRequest(data, headers) {
        console.debug(data);
        console.debug(headers);
    }

    transformResponse(response) {
        return response;
    }

    call() {
        const me = this;
        axios.defaults.headers['Content-Type'] = 'application/json';
        me.headers['Content-Type'] = 'application/json';

        this.addCommonArgs();
        this.appendLog("ApiClient 调用接口:" + me.uri);
        this.appendLog("ApiClient headers:" + JSON.stringify(me.headers, null, 4));
        this.appendLog("ApiClient 相关参数:" + JSON.stringify(me.data));


        axios.request({
            baseURL: me.baseUrl,
            url: me.uri,
            method: me.method,
            params: me.params,
            data: JSON.stringify(me.data),
            timeout: me.timeout,
            headers: me.headers,
            responseType: "json",
            transformRequest: me.transformRequest,
            transformResponse: me.transformResponse,
        }).then(function (response) {
            const r = me.formatResponse(response);
            me.appendLog("ApiClient 返回数据:" + JSON.stringify(r, null, 4));
            me.showLogs();
            me.callback(r);
        }).catch(function (error) {
            console.error(error);
            me.handleException(error);
            me.showLogs();
        });
    }

    toFormData() {
        const me = this;
        const bean = new FormData();
        Object.keys(this.data).forEach(function (key) {
            bean.append(key, me.data[key]);
        })
        return bean;
    }

    callback(response) {
        console.log(response);
    }

    addCommonArgs() {

    }

    addFile(f) {
        this._files.push(f);
    }

    handleGlobals() {
        return false;
    }

    handleException(error) {
        console.error(error);
    }

    formatResponse(response) {
        return response;
    }

    post(uri, data = {}) {
        this.method = "POST";
        this.uri = uri;
        this.data = data;
        return this.call();
    }

    get(uri, params = {}) {
        this.method = "GET";
        this.uri = uri;
        this.data = params;
        return this.call();
    }

    appendLog(s) {
        this.logs.push(s);
    }

    showLogs() {
        console.log(this.getLogs());
        this.logs = [];
    }

    getLogs() {
        let s = "";
        s += "------------------------------------------------ api client log begin ------------------------------------------------\n"
        s += this.logs.join("\n");
        s += "\n------------------------------------------------ api client log end   ------------------------------------------------\n"
        return s;
    }

    setHeader(name, value) {
        this.headers[name] = value;
    }


    get files() {
        return this._files;
    }

    set files(value) {
        this._files = value;
    }
}

export {BaseAxiosApiClient}