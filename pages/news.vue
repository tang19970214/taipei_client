<template>
  <div class="w-full min-h-page">
    <!-- phone -->
    <div class="block md:hidden w-full h-full">
      <div class="py-2 px-4">
        <t-datepicker userFormat="Y-m-d" dateFormat="Y-m-d" :disabled-dates="disAfterDate" placeholder="請選擇日期" range />
      </div>

      <!-- tabs -->
      <Tabs :tabsList="tabsList" :defaultTab="defaultTab" @changeTab="changeTab" />

      <!-- list -->
      <div class="w-full min-h-list" v-if="list.length > 0">
        <div class="w-full py-2 px-3 flex flex-col justify-center border-b border-gray-300" v-for="item in list" :key="item.id">
          <div class="w-full flex items-center justify-between">
            <span class="px-2 py-1 border-2 rounded text-xs" :class="getTypeStyle(item.newsCategoryName)">{{item.newsCategoryName}}</span>
            <p class="text-xs">{{item.releaseDate}}</p>
          </div>
          <div class="w-full mt-1">
            <p class="text-sm">{{item.title}}</p>
          </div>
        </div>
      </div>

      <div class="w-full min-h-list py-8 box-border bg-gray-300 flex items-center justify-center" v-else>
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
        { id: 1, title: "最新消息", typeId: "" },
        { id: 2, title: "系統公告", typeId: "6741433311767863297" },
        { id: 3, title: "長照", typeId: "6741433439035629569" },
        { id: 4, title: "共享車隊", typeId: "123" },
      ],

      listQuery: {
        page: 1,
        limit: 20,
        IsClient: true,
        NewsCategoryId: "",
        ReleaseDate: "",
      },
      list: [],

      disAfterDate: [
        function (date) {
          console.log(date);
          return date > new Date();
        },
      ],
    };
  },
  computed: {
    getTypeStyle() {
      return (typeName) => {
        let typeBg = "";
        switch (typeName) {
          case "系統公告":
            typeBg = "bg-tagsInfo text-info border-info";
            break;
          case "長照":
            typeBg = "bg-tagsWarning text-warning border-warning";
            break;
          //   case "共享車隊":
          //     typeBg = "bg-tagsSuccess text-success border-success";
          //     break;
        }
        return typeBg;
      };
    },
  },
  methods: {
    // 獲取最新消息
    getList() {
      this.$api.loadNews(this.listQuery).then((res) => {
        this.list = res.data.data.map((item) => {
          item.releaseDate = this.$days(item.releaseDate, "YYYY-MM-DD");
          return item;
        });
      });
    },

    // 切換tab
    changeTab(item) {
      this.defaultTab = item.id;
      this.listQuery.NewsCategoryId = item.typeId;
      this.getList();
    },
  },
  mounted() {
    this.getList();
  },
};
</script>

<style scoped>
.min-h-list {
  min-height: calc(100vh - 208px);
}
</style>