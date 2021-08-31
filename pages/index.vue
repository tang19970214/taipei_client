<template>
  <client-only>
    <div class="loginBg min-h-page w-full flex justify-center px-5 pt-16">
      <form @submit.prevent="doLogin" class="w-full h-full px-6 py-4 bg-white rounded-xl shadow-sm">
        <strong class="text-mainTxt text-xl">登入</strong>
        <p class="text-mainTxt text-sm pt-2 pb-4">為了保障您的帳號安全，建議您最少於三個月變更一次密碼。</p>
        <p class="text-mainTxt text-sm pt-2 pb-4">密碼預設為生日，格式YYYYMMDD</p>

        <t-input placeholder="請輸入您的帳號" v-model.trim="form.username"></t-input>
        <t-input placeholder="請輸入您的密碼" v-model.trim="form.password"></t-input>
        <t-button-primary type="submit">登入</t-button-primary>

        <div class="w-full flex items-center justify-end mt-2">
          <a class="text-mainTxt text-sm mr-2">註冊</a>
          <a class="text-mainTxt text-sm">忘記密碼？</a>
        </div>

        <ol class="text-sm mt-2 text-gray-500 list-square ml-5 tracking-wider">
          <li class="mb-1">此註冊頁僅提供預約共享車隊叫車服務，如需預約長照相關業務，請撥打 1966 服務專線，將會有專員提供服務。</li>
          <li>若已有長照資格，需預約共享車隊服務，請在登入後選擇用戶專區進行服務開通。</li>
        </ol>
      </form>
    </div>
  </client-only>
</template>

<script>
import { mapActions, mapState} from 'vuex'

export default {
  name: "login",
  middleware: ['authorization'],
  data() {
    return {
      form: {
        username: 'A179697467',
        password: 'Aa123456'
      }
    }
  },
  methods: {
    ...mapActions(['Login']),
    doLogin() {
      console.log('doLogin')
      console.log($api);
      console.log(this.token);
    }
  },
  computed: {
    ...mapState(['token']),
  }
};
</script>

<style scoped>
.loginBg {
  background-image: url("../static/images/loginBg.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>