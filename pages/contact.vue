<template>
  <div class="w-full min-h-page">
    <!-- phone md:hidden-->
    <div class="block  w-full h-full">
      <div class="py-2 px-4">
        <h4 class="text-center font-bold text-base">聯繫客服</h4>
      </div>
      <div class="py-2 px-4">
        <t-input placeholder="請輸車行名稱" v-model.trim="searchParams"></t-input>
      </div>

      <!-- tabs -->
      <Tabs :tabsList="tabsList" :defaultTab="defaultTab" @changeTab="changeTab" />

      <!-- list -->
      <div class="w-full min-h-list bg-grayBGDefault p-4 md:grid md:grid-cols-2 md:gap-2" v-if="list.length > 0">
        <div class="w-full py-4 px-3 flex flex-col justify-center mb-4 md:m-0 bg-white rounded-lg" v-for="item in list" :key="item.id">
          <h4 class=" text-lg font-black">{{item.companyName}}</h4>
          <div class="w-full flex items-center justify-center my-3">
            <p class="w-full text-sm" v-if="!!item.cusPhone"><a :href="'tel:'+item.cusPhone"><PhoneToSvg /><span class=" align-text-top ml-1">{{item.cusPhone}}</span></a></p>
            <p class="w-full text-sm" v-if="!!item.servicePhone"><a :href="'tel:'+item.servicePhone"><PhoneToSvg /><span class=" align-text-top ml-1">{{item.servicePhone}}</span></a></p>
          </div>
          <div class=" text-sm font-black text-orange">{{item.mark}}</div>
          <div class="w-full mt-1 border-dashed border-t border-gray text-sm">
            <div class="my-4">
              <p class="text-line font-black">{{item.serviceTimeText}}</p>
              <p>{{item.serviceTimeContent}}{{item.serviceTimeHHMM}}</p>
            </div>
            <div class="my-4">
              <p class="text-line font-black">{{item.cusTimeText}}</p>
              <p>{{item.cusTimeContent}}{{item.custTimeHHMM}}</p>
            </div>
            <!-- <p class="text-sm">{{item}}</p> -->
          </div>
        </div>
        <div class="text-center text-line my-4 mb-10 w-full md:col-span-2">沒有更多車行</div>
      </div>

      <div class="w-full min-h-list py-8 box-border bg-gray-300 flex items-center justify-center" v-else>
        <img src="../static/images/noData.svg" alt="暫無數據" />
      </div>
    </div>

    <!-- web -->
    <div class="hidden md:block w-full h-full"></div>
  </div>
</template>

<script>
import PhoneToSvg from '../components/svg/PhoneToSvg.vue';

export default {
  name: 'contact',
  components: {
    PhoneToSvg
  },
  data() {
    return {
      searchParams: '',
      defaultTab: 1,
      tabsList: [
        { id: 1, title: "長照", typeId: "" },
      ],

      listQuery: {
        page: 1,
        limit: 20,
        IsClient: true,
        NewsCategoryId: "",
        ReleaseDate: "",
      },
      list: [
        {
          id: '1',
          companyName: '世豪小客車租賃股份有限公司',
          cusPhone:'0800-010908',
          servicePhone: '02-87927758',
          mark: '國定假日提前預約，皆可服務，依車行調度情況。',
          serviceTimeText: '車趟服務時間',
          serviceTimeContent: '(週一至週日)',
          serviceTimeHHMM:'06:00~20:30',
          cusTimeText: '客服服務時間',
          cusTimeContent: '(週一至週六) ',
          custTimeHHMM:'06:00-20:30'
        },
        {
          id: '2',
          companyName: '福倫交通股份有限公司 ',
          cusPhone:'0800-616978',
          servicePhone: '02-4128789',
          mark: '國定假日提前預約，皆可服務，依車行調度情況。',
          serviceTimeText: '車趟服務時間',
          serviceTimeContent: '(週一至週日)',
          serviceTimeHHMM:'06:00~20:30',
          cusTimeText: '客服服務時間',
          cusTimeContent: '(週一至週六) ',
          custTimeHHMM:'06:00-20:30'
        },
        {
          id: '3',
          companyName: '生通股份有限公司',
          cusPhone:'',
          servicePhone: '02-25997667',
          mark: '國定假日提前預約，皆可服務，依車行調度情況。',
          serviceTimeText: '車趟服務時間',
          serviceTimeContent: '(週一至週日)',
          serviceTimeHHMM:'06:00~20:30',
          cusTimeText: '客服服務時間',
          cusTimeContent: '(週一至週六) ',
          custTimeHHMM:'06:00-20:30'
        },
        {
          id: '4',
          companyName: '小驢駒小客車租賃有限公司',
          cusPhone:'',
          servicePhone: '02-2721-5998',
          mark: '國定假日提前預約，皆可服務，依車行調度情況。',
          serviceTimeText: '車趟服務時間',
          serviceTimeContent: '(週一至週日)',
          serviceTimeHHMM:'06:00~20:30',
          cusTimeText: '客服服務時間',
          cusTimeContent: '(週一至週六) ',
          custTimeHHMM:'06:00-20:30'
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
  computed: {
  },
  methods: {
    // 獲取最新消息
    getList() {
      console.log('aciton get api');
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