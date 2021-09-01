import Vue from 'vue'
import VueTailwind from 'vue-tailwind'

import Taiwan from 'vue-tailwind/dist/l10n/zh-tw'

import {
  TInput,
  TTextarea,
  TSelect,
  TRadio,
  TCheckbox,
  TButton,
  TInputGroup,
  TCard,
  TAlert,
  TModal,
  TDropdown,
  TRichSelect,
  TPagination,
  TTag,
  TRadioGroup,
  TCheckboxGroup,
  TTable,
  TDatepicker,
  TToggle,
  TDialog,
} from 'vue-tailwind/dist/components';

const setting = {
  't-input': {
    component: TInput,
    props: {
      classes: 'border border-gray-300 block w-full rounded text-gray-800 text-sm px-2 py-1 tracking-wider mb-3'
    }
  },
  't-select': {
    component: TSelect,
    props: {
      classes: 'border border-gray-300 block w-full rounded text-gray-800 text-sm px-2 py-1 tracking-wider mb-3'
    }
  },
  't-button-primary': {
    component: TButton,
    props: {
      classes: 'w-full rounded-sm bg-mainTxt text-white text-sm tracking-wider text-center p-1'
    }
  },
  't-datepicker': {
    component: TDatepicker,
    props: {
      // classed: 'w-full rounded-sm border-gray-300 p-1',
      locale: Taiwan
    }
  }
}

Vue.use(VueTailwind, setting)
