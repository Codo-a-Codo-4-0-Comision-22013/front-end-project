import { query, where, collection, getDocs, doc, getDoc, addDoc, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export default class BaseService {

	constructor(collectionName) {
		this.collectionName = collectionName;
		this.collectionDoc = collection(db, collectionName)
	}

	get = (operator, filterField, value) => {

		if (operator && filterField && value !== undefined) {
			const q = query(this.collectionDoc, where(filterField, operator, value), orderBy("id"));
			return getDocs(q);
		} else {
			const q = query(this.collectionDoc, orderBy("id"));
			return getDocs(q);
		}
	}

	getById = (id) => {
		const docRef = doc(db, this.collectionName, id);
		return getDoc(docRef)
	}

	add = (doc) => {
		return addDoc(this.collectionDoc, doc);
	}
}
