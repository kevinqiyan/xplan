<template>
    <el-drawer v-model="state" direction="ltr" :handleClose="handleClose" :show-close='false' :with-header="false"
        :before-close='handleClose' close-on-press-escape close-on-click-modal style="padding: 0px;">
        <div class="info full flex justify-center">
            <div class='info-person'>
                <el-image class="info-person-avatar" :src="require('@/assets/IMG_0921.jpg')" />

                <div class="location">
                    <div v-for="item in locationList" :key='item.id'>{{ item }}</div>
                </div>
                <div class="social"></div>
            </div>
            <div class='info-list'>
                <div class="info-list-item"></div>
            </div>

        </div>
    </el-drawer>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch, reactive } from 'vue'
const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits(['closed'])
const state = ref(true)
// 链接地址
const locationList = reactive([])

const handleClose = () => {
    emit('closed', false)
}

watch(() => props.isOpen, (newValue) => {
    state.value = newValue
})

</script>
<style lang="scss" scoped>
.el-drawer {
    padding: 0px;

    &__body {
        padding: 0px !important;
    }

    .info {
        &-person {
            &-avatar {
                width: 100px;
                height: 100px;
                border-radius: 100px;
                transition: transform 0.5s ease;

                &:hover {
                    cursor: pointer;
                    transform: rotate(720deg) scale(1.3);
                }
            }
        }

    }

}
</style>
