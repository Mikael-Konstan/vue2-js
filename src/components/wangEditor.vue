<template>
  <div>
    <div ref="editor" style="text-align:left"></div>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  name: "wangEditor",
  props: ['editorContent'],
  data() {
    return {
      editor: ''
    };
  },
  mounted() {
    this.editor = new E(this.$refs.editor);
    this.editor.customConfig.onchange = html => {
      this.$emit('EditorMsg', html) // 传送文本内容
    };
    // 配置服务器端上传地址
    this.editor.customConfig.uploadImgServer = 'http://localhost:3000/uploadPic'

    //

    // 菜单配置
    this.editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      // "list", // 列表
      "justify", // 对齐方式
      // "quote", // 引用
      // "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      // "video", // 插入视频
      // "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.editor.create();
    if(this.editorContent) {
      this.editor.txt.html(this.editorContent) // 回显/初始化
    }
  }
};
</script>

<style scoped>
</style>
