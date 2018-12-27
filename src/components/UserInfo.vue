<template>
  <div>
      <header>
				<a href="#" class="logo"></a>
				<div class="desc">用户信息采集表</div>
				<div class="desc" style="max-width:500px ;overflow: hidden;"><text id="box-name" class="label label-default">d</text></div>
				<i class="hidden-btn fa fa-compress" aria-hidden="true" onclick="hiddeninfo()" ></i>
		</header>
		<div class="tableinfo" >
			<form id="fillForm">
				<input name="entityid" id="box-entityid" value="123456" style="display: none;"/>

				<div class="divider">
						<label >个人信息</label>
				</div>
				<hr class="hr"  width="100%" color="blue" size="2">
				<div class="row">
					<div class="col-xs-4 col-md-4">
						<div class="form-group  input-group ">
							<span for="inputname" class="input-group-addon">姓名: </span>
							<input name="pname" type="text" class="form-control" id="inputname" placeholder="张三"/>
						</div>
					</div>
					<div class="col-xs-4 col-md-4">
						<div class="form-group  input-group">
							<span for="sex"  class="input-group-addon">性别: </span>
							<div class="form-control">
								<input type="radio" id="sex"  value="male" name="sex" checked> 男
								<input type="radio" id="sex" value="female" name="sex" > 女
							</div>
						</div>
					</div>
					<div class="col-xs-4 col-md-4">
						<div class="form-group  input-group">
							<span for="phone" class="input-group-addon">联系方式: </span>
							<input name="phone" type="text" class="form-control" id="phone" placeholder="130********"/>
						</div>
					</div>
				</div>

				<div class="form-group  input-group">
						<span for="address" class="input-group-addon">地址: </span>
						<input name="address" type="text" class="form-control" id="address" placeholder="**省**市**镇**街道**幢"/>
				</div>
				<div class="form-group  input-group">
						<span for="other" class="input-group-addon">其他: </span>
						<textarea name="other" type="text" class="form-control" id="other" placeholder="***" oninput="autoTextAreaHeight(this)"></textarea>
				</div>
				
				<div>
				<table class="table" border="0">
						<!-- <caption>家庭用电设备信息</caption> -->
						<label>家庭用电设备信息</label>
						<hr class="hr" width="100%" color="blue" size="2">
						<thead>
								<tr>
								  <th style="width: 3em">id</th>
								  <th>设备名</th>
								  <th>功率(w)</th>
								  <th>数量</th>
								  <th>描述</th>
								  <th style="width: 6em">操作</th>
								</tr>
						</thead>
						<tbody id="ul-content">
								<tr>
								  <th scope="row" class="deviceid">1</th>
								  <td>
									  <div class="btn-group" style="width: 100%">

										<input name="dename" class=" dropdown-toggle glyphicon glyphicon-triangle-bottom form-control"
											 data-toggle="dropdown" aria-haspopup="true"
											aria-expanded="false" 
											placeholder="设备" style="width: 99%;float: left"/>
											<span class="fa fa-caret-down" style="position:absolute;float:right;right:5%;top: 32%;color:black"></span>
										<ul class="dropdown-menu">
											<li onclick="insert2input(this)">电视</li>
											<li onclick="insert2input(this)">电冰箱</li>
											<li onclick="insert2input(this)">照明灯</li>
											<li role="separator" class="divider"></li>
											<li>其他手动输入</li>
										</ul>
									  </div>
									</td>
								  <td><input type="text" oninput="onInputChange(event)" class="listen_kw form-control" name="devolt" placeholder="0"/></td>
								  <td><input type="text" oninput="onInputChange(event)" class="listen_n form-control" name="denum" placeholder="0"/></td>
								  <td><input type="text" class="form-control" name="deinfo" placeholder="这个电视是"/></td>
								  <td><button  id='fillindex-1'  class="btn btn-danger" readonly="true" value="-" style="border:0px" onclick="removeSelf('fillindex-1');">del</button></td>
								</tr>
							  </tbody>
				</table>
				<hr class="hr" width="100%" color="blue" size="2">
				<div class="row">
					<div class="col-xs-3 col-md-3" style="right: 0px;position:absolute;">
						<div class=" input-group " style="right: 18px;position:absolute;">
								<span class="input-group-addon">总功率</span>
								<!-- <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"> -->
								<input type="text" class="form-control" id="totvolt" name="ndevolt" style="min-width:6em;max-width: 6em;text-align: right; "/>
								<span class="input-group-addon">w</span>	
						</div>
					</div>
				</div>
				</div>
			</form>
			<div class="form-group col-sm-offset-5 col-sm-6">
				<div class="" style="display:block;margin:0 auto;">
					<button id="box-submit" class="btn btn-default">保存</button>
					<button id="box-add" class="btn btn-info">添加记录</button>
				</div>
			</div>
		</div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit, Watch } from 'vue-property-decorator';
@Component({
    components: {
    },
})
export default class HighchartFactory extends Vue {
    @Prop() private some!: string;
    @Prop({default: false }) public initshow!: boolean;
    private name = 111;
    @Emit()
    private dosomething(args: any) {
        ...
    };
    @Watch('some', { deep: true })
    private watchsomeaction(beforevalue: any, nowvalue: any) {
        ...
    };
}
</script>

<style lang='scss' scoped>

</style>