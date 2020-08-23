import State from "@/store/state";
const mutations = {
	userLogin(state: typeof State, payload: any) {
		state.token = payload;
	}
};

export default mutations;
