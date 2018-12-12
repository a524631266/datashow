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
    ]
  ]
}


