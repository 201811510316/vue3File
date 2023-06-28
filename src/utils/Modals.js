import { ElMessage, ElMessageBox } from 'element-plus'

const Modals = {

    confirm: function (message, title = '请确认') {
        return new Promise((resolve, reject) => {
            ElMessageBox.confirm(message, title, {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                resolve(true);
            }).catch(() => {
                resolve(false);
            });
        });
    },

    success: function (content) {
        ElMessage({message: content, type: "success"});
    },

    warning: function (content) {
        ElMessage({message: content, type: "warning"});
    },

    error: function (content) {
        ElMessage({message: content, type: "error"});
    }

};


export default Modals