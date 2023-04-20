import { useParams } from "react-router-dom";
import { DatabaseRecord } from "../../components/record-miniature/record-miniature"
import { DocumentData, QuerySnapshot, collection, onSnapshot } from "firebase/firestore";
import React from "react";

import { database } from "../../AppRouting";

export interface SingleRecordIdProps {
    id: string
}

const SingleProductView: React.FC = () => {

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
    const SingleRecordId = useParams();
    
    return <>
            {records.map((record: DatabaseRecord) => {
                if (SingleRecordId.id == record.id){
                    return <> 
                    <div>
                        <img className="record-miniature" key={record.id} src={record.image}/>
                        {record.artist}
                        {record.name}
                        {record.year}
                        {record.genre}
                        {record.is_available}
                        {record.contidion}
                        {record.price}
                    </div>
                    </>
                }  else {
                    <div>Something went wrong</div>
                }
                    
            })}
</>
}

export default SingleProductView