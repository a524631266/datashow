# datashow

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



### template
    "Print to console": {
		"prefix": "vue_ts",
		"body": [
		  	"<!-- $0 -->",
		  	"<template>",
		  	"  <div></div>",
		  	"</template>",
		  	"",
		  	"<script lang='ts'>",
		  	"import { Component, Vue, Prop } from 'vue-property-decorator';",
			"@Component({",
    		"    data() {",
        	"        return {",
			"            some: 'daa'",
			"            };",
			"        },",
			"    mounted() {",
			"        console.log('');",
			"    },",
			"    destroyed() {",
			"        console.log((this as any).some)",
		    "    },",
			"})",
			"export default class HighchartFactory extends Vue {",
			"    @Prop() private some!: string;",
			"}",
			"</script>",
            "",
			"<style scoped>",
            "",
			"</style>",
	  ],
		"description": "Log output to console"
	  }