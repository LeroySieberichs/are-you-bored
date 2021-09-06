import {firestore} from "../../lib/firebase";
import React, { useState, useEffect } from 'react';
import { useDocument } from 'react-firebase-hooks/firestore';
import Distraction from '../Distraction'

export default function DummyRefresh() {

    const [value, loading, error] = useDocument(
        firestore.doc('distractions/yamato'),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );

    return (
        <div>
           <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && <Distraction name={JSON.stringify(value.get("name"))} image={JSON.stringify(value.get("image"))} />}
        
      </p>
    </div>
    )
}
