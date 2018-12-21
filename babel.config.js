module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins:[
    [
        "import",
        {
            "libraryName": "bootstrap",
            "libraryDirectory": "es",
            "style": true
          }
    ],
    [
        "import",
        {
            "libraryName": "font-awesome",
            "style": "style.css"
          },
          "font-awesome"
    ],
    [
        "import", 
        { 
            "libraryName": "ant-design-vue", 
            "libraryDirectory": "es", 
            "style": "css" 
        },
        "ant-design-vue"
    ],
    // [
    //   "import", 
    //   {
    //     "libraryName": "iview",
    //     "libraryDirectory": "src/components"
    //   },
    //   "iview"
    // ]
  ]
}


