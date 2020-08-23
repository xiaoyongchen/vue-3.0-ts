<template>
	<div class="hello">
		<div>{{ S.state.token }}</div>
		<div>
			<input @v-modal="searchValue" @change="userLogin" />
		</div>
		<van-button type="danger" @click="userLogin('111')">危险按钮</van-button>
		<p>{{ searchValue }}</p>
	</div>
</template>

<script lang="ts">
import store from "@/store";
import {
	defineComponent,
	getCurrentInstance,
	reactive,
	toRefs,
	watch,
	ref
} from "vue";

export default defineComponent({
	name: "HelloWorld",
	props: {
		msg: String
	},
	setup(props, content) {
		const S: any = store;
		const state = reactive({
			searchValue: ""
		});

		const userLogin = (payload: string) => {
			S.dispatch("userLogin", payload);
		};
		return {
			S,
			userLogin,
			...toRefs(state)
		};
	}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title {
	font-size: 18px;
}
</style>
