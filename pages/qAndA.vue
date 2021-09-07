<template>
  <div class="w-full min-h-page">
    <!-- phone md:hidden-->
    <div class="block  w-full h-full">
      <div class="py-2 px-4">
        <h4 class="text-center font-bold text-base">常見問題</h4>
      </div>

      <!-- list -->
      <div class="w-full min-h-list bg-grayBGDefault" v-if="list.length > 0">
        <ul>
          <li class="relative border-b border-gray-200" v-for="item in list" :key="item.id">
           <button type="button" class="w-full px-8 py-6 text-left" @click="checkedItemId = item.id">
              <div class="flex items-center justify-between">
                <QSvg />
                <div>
                  <span>{{item.title}}</span>
                </div>
                <span class="ico-plus"></span>
              </div>
            </button>
            <transition name="collapseTransition" >
              <div class="h-auto overflow-hidden"  v-show="checkedItemId == item.id">
                <ASvg />
                <div class="p-6">
                {{item.content}}
                </div>
              </div>
            </transition>
          </li>
        </ul>
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
import QSvg from '../components/svg/QSvg.vue';
import ASvg from '../components/svg/ASvg.vue';

export default {
  name: 'qAndA',
  components: {
    QSvg, ASvg
  },
  data() {
    return {
      checkedItemId: '',
      list: [
        {
          id: '1',
          title: '在交通平台系統最早可以預約訂車期間為何?',
          content: '最早預約訂車為 14日前，最晚請於乘車日前 1日完成預約。'
        },
        {
          id: '2',
          title: '若當日急需要用車可以於交通平台系統預約訂車嗎?',
          content: '急需用車請致電至指定交通單位客服人員進行預約，專人為您服務。'
        },
        {
          id: '3',
          title: '已於系統完成預約訂車，可以於取消預約訂單嗎?如何取消訂單?',
          content: '在 2-30天可於系統進行點選取消訂單即可，請在「搭乘紀錄」找出訂單，按下「取消訂單」即可。如欲取消 1日後的訂單。請致電交通單位客服人員。'
        },
        {
          id: '4',
          title: '什麼是共乘?',
          content: '共乘為同時有二組長照民眾一同搭乘的服務。若有一組民眾臨時取消用車，另一組民眾無共乘折扣，將依據原本報價收取自付額。'
        },
        {
          id: '5',
          title: '如何享有共乘費率呢?',
          content: '願意與其他民眾進行搭乘，透過交通單位進行媒合配對，若配對成功，雙方共乘總車資打 66折，再個別收取自付額。'
        },
        {
          id: '6',
          title: '如何系統進行預約下單呢?',
          content: `步驟 1.點「預約訂車。
                                    步驟 2.選擇搭乘日期及時間。
                                    步驟 3.指定交通接送單位之排序。
                                    步驟 4.輸入起迄點，若連同回程一起預約可點選「我要預約回程」。
                                    步驟 5.選擇訂車人身份、是否願意共乘、所需車輛種類、輪椅類型、陪同人數。如欲接收此訂單的簡訊通知，請另外輸入手機號碼。
                                    步驟 6.預約完成後點選「立即預約，便可送出訂單。
                                    若不是預約來回，而是欲前往另一個地點可點選「新增下個地點」。也可將預約的路線直接設為「常用路線」，已下過的單也可以「再次預約」，訂單自動帶入起訖點。`
        },
        {
          id: '7',
          title: '如何查詢車資是多少?',
          content: '請在預約訂車下單時，在「本日行程一覽」顯示該趟車次的車資總額、政府補助、自付額。或於搭乘紀錄進行查詢，可以查詢過去行程每一筆乘車明細。'
        },
        {
          id: '8',
          title: '如何查詢服務司機與車牌號碼呢?',
          content: '於乘車前一天，至「搭乘紀錄」找出該趟訂單查看「乘車明細」，可看到服務此車趟特約車行的司機和車輛資料。'
        },
        {
          id: '9',
          title: '如何評價該車趟的滿意度呢?',
          content: '至「搭乘紀錄」找出該趟訂單，行程結束後會顯示「填寫問卷」按鈕，可評價車趟服務滿意度。'
        },
        {
          id: '10',
          title: '該預約車趟時間已過，司機未依約定出現?',
          content: '預約時間 10分鐘後若司機未抵達上車地點，該訂單上會顯示「司機未執行」，民眾可觸發此按鈕，即可將訂單取消，並歸還補助額度。'
        },
        {
          id: '11',
          title: '長照交通接送的服務範圍?',
          content: '往返居住地至醫療院所就醫與復健(含洗腎中心)。'
        },
        {
          id: '12',
          title: '訂單輸入接收簡訊號碼，為甚麼都沒有收到簡訊提醒呢?',
          content: '若設定為「拒收企業簡訊」，簡訊會被封鎖，開啟此功能請自行洽詢所屬電信商。'
        },
      ],
    };
  },
  methods: {
  }
};
</script>

<style scoped>
.min-h-list {
  min-height: calc(100vh - 208px);
}
</style>