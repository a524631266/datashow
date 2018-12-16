# datashow
createdemo 
```
	npm install --global @vue/cli
	vue create datashow


	? Please pick a preset: 
		default (babel, eslint) 
		❯ Manually select features 

	? Check the features needed for your project: 
		◉ Babel
		◉ TypeScript
		◉ Progressive Web App (PWA) Support
		◉ Router
		◉ Vuex
		◉ CSS Pre-processors
		◉ Linter / Formatter
		◉ Unit Testing
		◉ E2E Testing
	
	? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
	? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS
	? Pick a linter / formatter config: TSLint
	? Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)Lint on save
	? Pick a unit testing solution: Mocha
	? Pick a E2E testing solution: 
	Cypress (Chrome only) 
	❯ Nightwatch (Selenium-based) 

```
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
			"import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';",
			"import ABC from '@/components/{}';",
			"@Component({",
			"    components: {",
			"        ABC,",
			"    },",
			"})",
			"export default class HighchartFactory extends Vue {",
			"    @Prop() private some!: string;",
			"    @Prop({default: false }) public initshow!: boolean;",
			"    private name = 111;",
			"    @Emit()",
			"    private dosomething(args: any) {",
			"        ...",
			"    };",
			"    @Watch('some', { deep: true })",
			"    private watchsomeaction(beforevalue: any, nowvalue: any) {",
			"        ...",
			"    };",
			"}",
			"</script>",
            "",
			"<style lang='scss' scoped>",
            "",
			"</style>",
	  ],
		"description": "Log output to console"
	  }