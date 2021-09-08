import {firestore} from "../../lib/firebase";
import React, { useState, useEffect } from 'react';
import { useCollectionData  } from 'react-firebase-hooks/firestore';
import Distraction from '../Distraction'

export default function DummyRefresh() {

    const [value, loading, error] = useCollectionData(
        firestore.collection('distractions').limit(10),
        {
          snapshotListenOptions: { includeMetadataChanges: true },
        }
      );

    return (
        <div>

        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value &&
            
              
                <Distraction data={value} />
            }
        
    </div>
    )
}
