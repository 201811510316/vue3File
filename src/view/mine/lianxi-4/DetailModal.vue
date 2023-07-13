<template>
    <PopViewModal ref="popViewModalRef">
        <template v-slot:default>
            <div>
                <div>
                    测试时间: {{ bean.testTime }}
                </div>
                <div>
                    工厂名称: {{ bean.factoryName }}
                </div>
                <div>
                    测试人员: {{ bean.staffName }}
                </div>
                <div>
                    Id: {{ bean.pcbaId }}
                </div>
                <div>
                    编码: {{ bean.eikCode }}
                </div>
                <div>
                    设备名称: {{ bean.deviceName }}
                </div>
                <div>
                    花费测试时间: {{ bean.elapsedTime }}
                </div>
                <div>
                    产品详情: {{bean.productDetail}}
                </div>
                <div>
                    测试状态: 
                    <span v-if="bean.testStatus ===1">成功</span>
                    <span v-else>失败</span>
                </div>
                <div>
                    测试结果:
                    <div v-for="results in resultList" :key="results.id">
                        <span>
                            {{ results.msg }}
                        </span>
                        <span>
                            <el-icon v-if="results.status === 'success'">
                                <component :is="CircleCheck" />
                            </el-icon>
                            <el-icon v-else>
                                <component :is="CircleClose" />
                            </el-icon>
                        </span>
                    </div>
                </div>
            </div>
        </template>
    </PopViewModal>
</template>

<script setup>
import {ref, provide} from 'vue'
import PopViewModal from '../../../components/mine/form/PopViewModal.vue';

const popViewModalRef = ref();
provide('title', '查看列表数据')
function show() {
    popViewModalRef.value.showForm();
}
function close(){
    popViewModalRef.value.closeForm();
}

const bean = ref();
const resultList = ref([]);
function onLoad(params){
    bean.value = params
    resultList.value = JSON.parse(params.testResult)
    console.log(resultList.value)
}

defineExpose({
    show,
    onLoad
})
</script>

<style scoped>

</style>