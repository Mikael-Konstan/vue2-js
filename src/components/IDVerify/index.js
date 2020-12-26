import Vue from 'vue'
import IDVerify from '@/components/IDVerify/index.vue'

let IDVerifyConstructor = Vue.extend(IDVerify)

function cb() {}

export default function idVerifyModel(options) {
  let idverifyDom = new IDVerifyConstructor({
    el: document.createElement('div'),
  })
  document.body.appendChild(idverifyDom.$el)
  let opt = {
    tlt: '身份验证',
    field1: '请输入手机号',
    field2: '请输入验证码',
    getCode: cb,
    OKBtn: cb,
    close: cb,
    ...options,
  }
  // 传入data属性
  idverifyDom.activeFlag = true
  idverifyDom.tlt = opt.tlt
  idverifyDom.field1 = opt.field1
  idverifyDom.field2 = opt.field2
  // 传入回调方法
  idverifyDom.cb_getVerifyCode = opt.getCode
  idverifyDom.cb_verifyOK = opt.OKBtn
  idverifyDom.cb_close = opt.close
  return new Promise((resolve, reject) => {
    idverifyDom.$on('res', (res) => {
      resolve(res)
    })
    idverifyDom.$on('err', (err) => {
      reject(err)
    })
  })
}
