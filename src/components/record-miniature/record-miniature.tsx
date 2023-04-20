import { DocumentData, getFirestore, QuerySnapshot } from "firebase/firestore"
import { collection } from "firebase/firestore";
import React from 'react';
import { onSnapshot } from "firebase/firestore";
import "./record-miniature.scss"
import { Link } from "react-router-dom";

import { database, app } from "../../AppRouting";

export interface DatabaseRecord {
	artist: string;
	contidion: string;
	genre: string;
	id: string;
	image: string;
	is_available: boolean;
	is_new: boolean;
	name: string;
	orders: number;
	price: number;
	quantity: number;
	year: number;
}

export function RecordMiniature () {

const [records, setRecords] = React.useState<DatabaseRecord[]>([])
React.useEffect (
	() =>
		onSnapshot(collection(database, "records"), 
			(snapshot: QuerySnapshot<DocumentData>) => 
			setRecords(snapshot.docs.map((doc):DatabaseRecord => 
				({...doc.data() as Omit<DatabaseRecord, "id">, id: doc.id})))
		), 
	[]
);
	return (
	<>
		<div className="bestsellers">BESTSELLERS</div>
			<div className="record-miniature-div">
				{records.map((record: DatabaseRecord) => {
					if (record.orders > 1) {
						return 	<Link 
									to={record.id}
									state={record.id}>
										<img className="record-miniature" key={record.id} src={record.image} />
								</Link>;
					} else {
						return <></>;
					}
				})}
			</div>
	</>
)
}