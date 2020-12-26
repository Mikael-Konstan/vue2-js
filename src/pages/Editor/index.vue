<template>
  <div class="hello">
    <p class="tile">wangeditor</p>
    <p>不支持IE8 无外部依赖 支持内网</p>
    <div class="Editor">
      <wangEditor v-if="editorContentFlag" :editorContent='editorContent' @EditorMsg='getEditor'></wangEditor>
      <div class="showMsg">
        <div class="showMsg1" ref="showMsg1">{{ editorContent }}</div>
        <div class="showMsg2" ref="showMsg2">{{ editorContent }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import wangEditor from "@/components/wangEditor.vue";
export default {
  name: "Editor",
  data() {
    return {
      editorContent: "<p><strong>初始化 / 回显值</strong> : testPageOne</p>",
      editorContentFlag: false
    };
  },
  created() {
    // this.getIntMsg()
  },
  mounted() {
    // console.log(window)
    this.getIntMsg()
    this.testGet()
  },
  components: {
    wangEditor
  },
  methods: {
    getIntMsg() {
      axios.post('http://localhost:7594/postTest',{
        test: '7594'
      }).then((res) => {
        // console.log(res)
        this.editorContent = res.data.data
        this.editorContentFlag = true
      }).catch(err => {
        console.log(err)
      })
    },
    testGet() {
      axios.get('http://localhost:7594/getTest?test=888',{
        test: '7594'
      }).then((res) => {
        console.log(res)
        // alert('ok', res)
      }).catch(err => {
        console.log(err)
        // alert('error', err)
      })
    },
    getEditor(txt) {
      document.getElementsByClassName('showMsg1')[0].innerHTML = txt
      document.getElementsByClassName('showMsg2')[0].innerText = txt
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Editor {
  width: 600px;
  height: 300px;
}
.showMsg{
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
}
.showMsg div{
  border: 1px solid #666;
  width: 400px;
  height: 150px;
}
</style>
