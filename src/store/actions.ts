import { ActionContext } from "vuex";
import State from "@/store/state";
const getters = {};

type ReturnGetters<T extends { [key: string]: (...args: any) => any }> = {
	[P in keyof T]: ReturnType<T[P]>;
};

type Getters = ReturnGetters<typeof getters>;

const actions = {
	userLogin(
		{ commit }: ActionContext<typeof State, Getters>,
		payload: any
	): void {
		// fetchApi('user/login', payload);
		const data = { token: "这是个token" };
		commit("userLogin", payload);
	}
};

export { getters };

export default actions;
