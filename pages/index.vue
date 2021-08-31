<template>
  <client-only>
    <div class="loginBg min-h-page w-full flex justify-center px-5 pt-16">
      <div class="w-full h-full px-6 py-4 bg-white rounded-xl shadow-sm">
        <strong class="text-mainTxt text-xl">登入</strong>
        <p class="text-mainTxt text-sm pt-2 pb-4">為了保障您的帳號安全，建議您最少於三個月變更一次密碼。</p>
        <p class="text-mainTxt text-sm pt-2 pb-4">密碼預設為生日，格式YYYYMMDD</p>

        <t-input placeholder="請輸入您的帳號"></t-input>
        <t-input placeholder="請輸入您的密碼"></t-input>
        <t-button-primary>登入</t-button-primary>

        <div class="w-full flex items-center justify-end mt-2">
          <a class="text-mainTxt text-sm mr-2">註冊</a>
          <a class="text-mainTxt text-sm">忘記密碼？</a>
          <span @click="asdasd">test</span>
        </div>

        <ol class="text-sm mt-2 text-gray-500 list-square ml-5 tracking-wider">
          <li class="mb-1">此註冊頁僅提供預約共享車隊叫車服務，如需預約長照相關業務，請撥打 1966 服務專線，將會有專員提供服務。</li>
          <li>若已有長照資格，需預約共享車隊服務，請在登入後選擇用戶專區進行服務開通。</li>
        </ol>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: "login",
  middleware: ['authorization'],
  methods: {
    asdasd() {
      console.log('test');
      this.$store.dispatch('test')
      this.$store.dispatch('user/test')
    }
  },
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