// Example `tailwind.config.js` file
const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    colors: {
      primary: "#4A6670",
      success: "#558B2F",
      warning: "#EF6C00",
      info: "#00838F",
      mainTxt: "#FF7A45",
      line: "#1890FF",
      reserve: "#FFBB96",
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      red: colors.red,

      tagsSuccess: "#E8F5E9",
      tagsWarning: "#FFF3E0",
      tagsInfo: "#E0F7FA",
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    listStyleType: {
      square: 'square',
    },
    extend: {
      //   spacing: {
      //     '128': '32rem',
      //     '144': '36rem',
      //   },
      //   borderRadius: {
      //     '4xl': '2rem',
      //   }
    }
  },
  /* 格式為Object時，寫入欲停用之插件；Array則是愈啟用之插件（ 都不使用->直接給[] ） */
  /* https://tailwindcss.tw/docs/configuration */
  // corePlugins: { float: false } or [ 'margin', 'padding' ]
}
