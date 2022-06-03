import { query, where, collection, getDocs, doc, getDoc, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default class BaseService {

	constructor(collectionName) {
		this.collectionName = collectionName;
		this.collectionDoc = collection(db, collectionName)
	}

	get = (operator, filterField, value) => {

		if (operator && filterField && value !== undefined) {
			const q = query(this.collectionDoc, where(filterField, operator, value));
			return getDocs(q);
		} else {
			return getDocs(this.collectionDoc);
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
