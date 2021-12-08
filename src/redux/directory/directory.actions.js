import { collection, getDocs } from 'firebase/firestore'
import { db } from 'firebase/firebase.util'

import {
  UPDATE_DIRECTORY,
  FETCH_DIRECTORY_START,
  FETCH_DIRECTORY_SUCCESS,
  FETCH_DIRECTORY_FAILURE,
} from './directory.types'

export const updateCollection = (directoryMap) => ({
    type: UPDATE_DIRECTORY,
    payload: directoryMap
})

export const fetchCollectionStart = () => ({
    type: FETCH_DIRECTORY_START
})

export const fetchCollectionStartAsync = () => {
    return async(dispatch) => {

        try{

            const collectionsRef = collection(db, 'collections')

            dispatch(fetchCollectionStart())

            const querySnap = await getDocs(collectionsRef)

            const directoryMap = []
            querySnap.forEach((doc) => {
                return directoryMap.push({ 
                    id: doc.id,
                    ...doc.data()
                })
            })

            dispatch(fetchCollectionSuccess(directoryMap))

        }catch(error){
            dispatch(fetchCollectionFailure(error.message))
        }
    }
}

export const fetchCollectionSuccess = (directoryMap) => ({
    type: FETCH_DIRECTORY_SUCCESS,
    payload: directoryMap
})
export const fetchCollectionFailure = (errorMessage) => ({
    type: FETCH_DIRECTORY_FAILURE,
    payload: errorMessage
})