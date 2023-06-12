import {BaseAxiosApiClient} from "./BaseAxiosApiClient";
import {ACCESS_TOKEN, CURRENT_USER, REFRESH_ACCESS_TOKEN} from '@/store/mutation-types';
import {storage} from '@/utils/storage';
import empty from "./empty";
import Modals from "./Modals";

class ApiClient extends BaseAxiosApiClient {
    returnDataOnSuccess = true;
    autoAlertErrorMsg = true;
    successCallback = null;
    failedCallback = null;

    callback(response) {
        if (response.code === 200) {
            if (this.successCallback != null) {
                if (this.returnDataOnSuccess) {
                    // @ts-ignore
                    this.successCallback(response.result);
                } else {
                    // @ts-ignore
                    this.successCallback(response);
                }
            }
        } else if (this.autoAlertErrorMsg) {
            if (!empty(response.message)) {
                Modals.error(response.message);
            }
            if (!empty(this.failedCallback)) {
                // @ts-ignore
                this.failedCallback(response);
            }
        }
        console.log(response);
    }


    transformRequest(data, headers) {
        // console.log(headers);
        const token = storage.get(ACCESS_TOKEN);
        if (!empty(token)) {
            headers["Authorization"] = token;
        }
        headers["X-App-Name"] = "expo.company";
        return data;
    }

    formatResponse(response) {
        response = super.transformResponse(response);
        if (typeof (response) === "string") {
            response = JSON.parse(response);
        }
        if (typeof (response.data) === "string") {
            response.data = JSON.parse(response.data);
        }
        response = response.data;
        response.success = response.code === 200;

        return response;
    }


    handleException(error) {
        const me = this;
        if (error.response?.status === 401) {
            const refreshToken = storage.get(REFRESH_ACCESS_TOKEN);
            if (!empty(refreshToken)) {
                // 临时通过 refresh—token 刷新token
                storage.set(ACCESS_TOKEN, refreshToken, 60 * 1000);
                const client = new ApiClient();
                client.post("/company/person/refresh_token");
                client.autoAlertErrorMsg = false;
                client.setSuccessCallback(function (result) {
                    const ex = 7 * 24 * 60 * 60 * 1000;
                    storage.set(ACCESS_TOKEN, result.token, ex);
                    storage.set(REFRESH_ACCESS_TOKEN, result.refreshToken, ex);
                    me.call();
                });
                client.setFailedCallback(function () {
                    // 清除登录信息并跳转到登录页面
                    storage.remove(CURRENT_USER);
                    storage.remove(ACCESS_TOKEN);
                    storage.remove(REFRESH_ACCESS_TOKEN);
                    Modals.error("登录超时，请重新登录");
                });
            } else {
                console.warn(REFRESH_ACCESS_TOKEN + " is empty, jump to login page");
            }
            return;
        } else {
            console.error(error);
        }
    }

    addCommonArgs() {

    }

    setSuccessCallback(f) {
        if (!empty(f)) {
            this.successCallback = f;
        }
    }

    setFailedCallback(f) {
        if (!empty(f)) {
            this.failedCallback = f;
        }
    }
}

export {ApiClient}