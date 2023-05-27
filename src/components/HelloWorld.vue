<template>
  <div class="hello">
    <h2>请求2的返回{{testdata}}</h2>
    <el-button @click="getInfo">请求</el-button>
    <el-button @click="getInfo2">请求2</el-button>
    <el-button @click="saveData">添加数据</el-button>
  </div>
</template>

<script setup>
import {getInfoTest,getInfoTest2,addInfoTest} from '@/api/user'
import { ref } from 'vue'
const testdata = ref('')
const getInfo = () => {

  getInfoTest({name:'kevin_test_3'}).then(res=>{
    let data = res
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  })
}
const getInfo2 = () =>{
  getInfoTest2('123456').then(res => {
    console.log('====================================');
    console.log('123',res);
    testdata.value = res
    console.log('====================================');
  })
}

const saveData = async () => {
  let params = {
    name: 'saveData',
    time: '2023-02-02'
  }
  let {code,data} = addInfoTest(params)
  console.log('saveData',code,data);
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
