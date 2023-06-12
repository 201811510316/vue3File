function empty(object, debug = false) {
    const type = typeof (object);
    if (debug) {
        console.warn("type=" + type);
    }
    if (type === "undefined") {
        return true;
    }
    if (object == null) {
        return true;
    }
    if (type === "string") {
        return object === "";
    }
    // @ts-ignore
    if (type === "array") {
        return object.length === 0;
    }
    if (type === "function") {
        return false;
    }
    if (type === "object") {
        if (object.hasOwnProperty.call("height")) { // 这个地方特别判断直接用 [] 定义的数组
            if (object.height === 0) {
                return true;
            }
        }
        try {
            const json = JSON.stringify(object);
            if (json === "[]") {
                return true;
            }
        } catch (e) {
            // console.error(e);
        }
        try {
            let key;
            for (key in object) {
                return false;
            }
        } catch (e) {
            console.error(e);
        }
        return true;
    }
    try {
        if (object.hasOwnProperty.call("length")) {
            return object.length <= 0;
        }
    } catch (e) {
        // console.warn(e);
    }

    return false;
}

export default empty