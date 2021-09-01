<template>
  <div class="w-full pt-2 pb-12">
    <div class="w-full bg-reserve px-6 py-5 flex items-center justify-between">
      <strong class="text-2xl">王小明</strong>

      <button class="bg-white py-1 px-4 rounded-sm shadow-btn">
        可用補助餘額查詢
      </button>
    </div>

    <!-- 訂車基本資料 -->
    <div class="w-full bg-white px-2 pt-5">
      <div class="w-full flex">
        <div class="w-full">
          <div class="w-full flex-col p-2">
            <label>乘車日期</label>
            <t-datepicker userFormat="Y-m-d" dateFormat="Y-m-d" :disabled-dates="disBeforeDate" placeholder="請選擇乘車日期" />
          </div>
        </div>

        <div class="w-full">
          <div class="w-full flex-col p-2">
            <label>乘車時間</label>
            <t-datepicker user-format="H:i" date-format="H:i" timepicker :datepicker="false" placeholder="請選擇乘車時間" />
          </div>
        </div>
      </div>

      <div class="w-full flex-col p-2">
        <label>訂車人身份</label>
        <t-select :options="['本人']" placeholder="請選擇訂車人身份" />
      </div>
    </div>

    <!-- 車行選擇 -->
    <div class="w-full p-4 box-border bg-white">
      <div class="w-full border-b-2 border-gray-300 pb-1">
        <strong class="text-lg">車行選擇</strong>
      </div>

      <div class="w-full flex items-center justify-between mt-2">
        <div class="flex items-center text-sm">
          <p>優先搭乘車行排序</p>
          <p class="text-red">（請依序點擊完成排序）</p>
        </div>

        <button class="px-1 border border-line text-line rounded text-sm">重新排序</button>
      </div>

      <div class="w-full py-2 box-border">
        <div class="relative w-full py-2 px-6 box-border border border-gray-900 rounded-sm mb-2 text-sm flex items-center" :class="{'bg-gray-700 text-white': checkSort(item.id) !== -1}" v-for="item in carShopList" :key="item.id" @click="chooseCarShop(item.id)">
          <span class="absolute -left-2 w-6 h-6 flex items-center justify-center bg-warning" v-if="checkSort(item.id) !== -1">
            <p class="text-white text-sm">{{checkSort(item.id) + 1}}</p>
          </span>
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>

    <!-- 行程 -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      disBeforeDate: [
        function (date) {
          return date <= new Date();
        },
      ],

      carShopList: [
        {
          id: 1,
          title: "新北市私立匯安老人長期照顧中心(養護型)照顧中心(養護型)",
        },
        { id: 2, title: "交通單位" },
        { id: 3, title: "社團法人臺灣計程車學院協會" },
        { id: 4, title: "社團法人臺灣計程車學院協會" },
        {
          id: 5,
          title: "新北市私立匯安老人長期照顧中心(養護型)照顧中心(養護型)",
        },
      ],
    };
  },
  methods: {
    chooseCarShop(id) {
      console.log(this.carShopList, id);
      //   const getIndex = this.carShopList.filter((i) => !!i.sort);
      //   const getItem = this.carShopList.filter((i) => i.id == id);
      //   getItem[0]?.sort = !!getIndex ? getIndex[getIndex.length - 1].sort + 1 : 1;

      !this.carShopList.includes(id)
        ? this.carShopList.push(id)
        : (this.carShopList = this.carShopList.filter((i) => i !== id));
      //   console.log(this.carShopList);
    },
    checkSort(id) {
      //   console.log(id, this.carShopList.indexOf(id));
      return this.carShopList.indexOf(id);
    },
  },
};
</script>