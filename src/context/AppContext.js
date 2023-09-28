import React, { useState, createContext, useEffect } from "react";
// import { collection, onSnapshot } from "firebase/firestore";
// import { db } from '../firebase/firebase';;

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [projectsList, setProjectsList] = useState([]);
    const [lists, setLists] = useState([]);
    const [listRender, setListRender] = useState([]);
    const [formRender, setFormRender] = useState([]);
    const [connectionRender, setConnecctionRender] = useState([]);
    const [buttonAttributes, setButtonAttributes] = useState(true);
    const [hasChanges, setHasChanges] = useState(false);
    const [attributeMessage, setAttributeMessage] = useState(false);
    const [deleteList, setDeleteList] = useState('');
    const [deleteForm, setDeleteForm] = useState('');
    const [shiftError, setShiftError] = useState(false);

    // useEffect(() => {
    //     const ref = collection(db, 'projectsList');
    //     const unsubscribe = onSnapshot(ref, (querySnapshot) => {
    //         const listOfProjects = [];
    //         querySnapshot.forEach((doc) => {
    //             listOfProjects.push({
    //                 id: doc.id,
    //                 ...doc.data()
    //             })
    //         })
    //         setProjectsList(listOfProjects);
    //     })
    //     return () => unsubscribe()
    // }, [])

    useEffect(() => {
        fetch('http://localhost:3001/projectsList')
          .then(response => response.json())
          .then(data => {
            setProjectsList(data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

    return (
        <AppContext.Provider value={{
            projectsList,
            setProjectsList,
            lists,
            setLists,
            listRender,
            setListRender,
            formRender,
            setFormRender,
            connectionRender, 
            setConnecctionRender,
            buttonAttributes,
            setButtonAttributes, 
            hasChanges, 
            setHasChanges,
            attributeMessage,
            setAttributeMessage,
            deleteList,
            setDeleteList,
            deleteForm,
            setDeleteForm,
            shiftError, 
            setShiftError
        }}>
            {children}
        </AppContext.Provider>
    )
};