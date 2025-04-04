<template>
    <el-drawer v-model="state" direction="ltr" :handleClose="handleClose" :show-close='false' :with-header="false"
        :close-on-press-escape='false' :before-close='handleClose' close-on-click-modal style="padding: 0px;">
        <div class="info full">
            <div class='info-person'>
                <h2>Privacy</h2>
                <div class="avatar"></div>
                <div class="location"></div>
                <div class="social"></div>
            </div>
            <div class='info-list'>
                <div class="info-list-item"></div>
            </div>

        </div>
    </el-drawer>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue'
const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})
const emit = defineEmits(['closed'])
const state = ref(true)

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
}

.info {
    background: black;

    &-person {}
}
</style>
