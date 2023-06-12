const Modals = {

    confirm: function (message, title = '请确认') {
        return new Promise((resolve, reject) => {
            this.$confirm(message, title, {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                resolve(true);
            }).catch(() => {
                reject(false);         
            });
        });
    },

    success: function (content) {
        this.$message({message: content, type: "success"});
    },

    warning: function (content) {
        this.$message({message: content, type: "warning"});
    },

    error: function (content) {
        this.$message({message: content, type: "error"});
    }

};


export default Modals