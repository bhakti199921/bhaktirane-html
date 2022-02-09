const plugin=require('tailwindcss/plugin')

module.exports = {
  mode:'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'desktop': {'max': '1199px'},
        'ipad':{'max':'991px'},
        'mobile':{'max':'767px'},
        'portait-mobile':{'max':'575px'},
        'custom-mobile':{'max':'320px'}
      },

      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '33xl':'5px 10px 14px 10px rgba( 0,0, 0, 0.2)',
        '34xl':'5px 6px 12px 7px rgba(0, 0, 0, 0.1)',
      },

      colors:{
        "ragal-blue":'#202e78',
        "fait-blue":'#5F7AFF',
  
        indigo:{
          light:"#b3bcf5",
          Defualt:"#0e2be8",
          dark:"#202e78",
          fait:"#8a96e3",
        },
        "orange":"#F58025",
      },

      gradients:({theme})=>({
        linear:['30deg', theme('colors.light'), theme('colors.dark')],
      }),

      fontFamily:{
       
      },
      spacing:{
        1:'0.35rem',
        2:'855px',
        3:'15px',
        4:'39px',
        5:'16px',
        6:'13px',
        7:'1px',
      },
      borderRadius: {
        'none': '0',
        'sm': '.125rem',
        DEFAULT: '.25rem',
        'lg': '.5rem',
        'full': '9999px',
        'dm':"5.5px",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing:{
        '13':"3.25rem",
        '15':"0.65rem",
      },
    },
  },
  variants:{
    extend:{
      backgroundColor:['active'],
      textColor:['visited'],
      gradients: ['responsive', 'hover'],
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      const newUtilities={
'.scale-1':{
  transform:'scale(1)'
},

'.rotate-1':{
  transform:'rotate(1)'
}
      }
addUtilities(newUtilities,{
  variants:['responsive','hover']
})
    })
  ],
}
