<template>
  <div class="hello">
    <h1 class="tile">pageTwo</h1>
    <form class="upload_chooseFile"
          method="post"
          name="form"
          enctype="multipart/form-data"
          id="formUpLoad">
      <input class="form-control"
             type="file"
             name="file"
             id="upfile"
             ref="upPicture"
             accept=".wps,.et,.dps,.zip,.pdf,.rar,application/vnd.ms-excel,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,aplication/zip,application/vnd.ms-works" />
      <div><a id="file_preview"
           target="_blank"></a></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'pageTwo',
  data () {
    return {
      formData: ''
    }
  },
  mounted () {
  },
  methods: {
    uploadPic () {
      this.formData = new FormData();
      this.formData.append('picture', this.$refs.upPicture)
      // this.$axios
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
