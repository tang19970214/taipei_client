<template>
  <div class="w-full min-h-page">
    <!-- phone -->
    <div class="block md:hidden w-full h-full">
      <div class="py-2 px-4">
        <t-datepicker userFormat="Y-m-d" dateFormat="Y-m-d" :disabled-dates="disAfterDate" placeholder="請選擇日期" range />
      </div>

      <!-- tabs -->
      <div class="w-full bg-white flex items-center">
        <div class="px-4 py-3 border-b-2 box-border text-sm" :class="{'border-line text-line': item.id == defaultTab, 'border-white': item.id !== defaultTab}" v-for="item in tabsList" :key="item.id" @click="defaultTab = item.id">{{item.title}}</div>
      </div>

      <!-- list -->
      <div class="w-full min-h-list">
        <div class="w-full py-2 px-3 flex flex-col justify-center border-b border-gray-300" v-for="item in list" :key="item.id">
          <div class="w-full flex items-center justify-between">
            <span class="px-2 py-1 border-2 rounded text-xs">{{item.type}}</span>
            <p class="text-xs">{{item.datetime}}</p>
          </div>
          <div class="w-full mt-1">
            <p class="text-sm">{{item.title}}</p>
          </div>
        </div>
      </div>

      <div class="w-full min-h-list py-8 box-border bg-gray-300 flex items-center justify-center">
        <img src="../static/images/noData.svg" alt="暫無數據">
      </div>

    </div>

    <!-- web -->
    <div class="hidden md:block w-full h-full"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultTab: 1,
      tabsList: [
        { id: 1, title: "系統公告" },
        { id: 2, title: "長照" },
        { id: 3, title: "共享車隊" },
        { id: 4, title: "巴士" },
      ],
      list: [
        {
          id: 1,
          title:
            "武漢肺炎》明年Q1疫苗可望施打！莊人祥透露優先施打順序順序順序順序順序順序順序順序順序順序順序順...",
          type: "共享車隊",
          datetime: "2020-12-31",
        },
        {
          id: 2,
          title:
            "武漢肺炎》明年Q1疫苗可望施打！莊人祥透露優先施打順序順序順序順序順序順序順序順序順序順序順序順...",
          type: "長照",
          datetime: "2020-12-31",
        },
        {
          id: 3,
          title:
            "武漢肺炎》明年Q1疫苗可望施打！莊人祥透露優先施打順序順序順序順序順序順序順序順序順序順序順序順...",
          type: "巴士",
          datetime: "2020-12-31",
        },
        {
          id: 4,
          title:
            "武漢肺炎》明年Q1疫苗可望施打！莊人祥透露優先施打順序順序順序順序順序順序順序順序順序順序順序順...",
          type: "巴士",
          datetime: "2020-12-31",
        },
        {
          id: 5,
          title:
            "武漢肺炎》明年Q1疫苗可望施打！莊人祥透露優先施打順序順序順序順序順序順序順序順序順序順序順序順...",
          type: "巴士",
          datetime: "2020-12-31",
        },
      ],

      disAfterDate: [
        function (date) {
          console.log(date);
          return date > new Date();
        },
      ],
    };
  },
};
</script>

<style scoped>
.min-h-list {
  min-height: calc(100vh - 208px);
}
</style>