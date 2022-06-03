import BaseService from "./baseService";

export default class NewsService extends BaseService {

	constructor() {
		super('news');
	}

	getAll = () => {
		return this.get();
	}

	getById = (id) => {
		return this.get("==", 'id', parseInt(id));
	}

}
