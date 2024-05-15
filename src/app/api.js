import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';


// CREATE
export const createPedido = async (obj) => {
    const colRef = collection(db, 'pedidosComics');
    const data = await addDoc(colRef, obj).then((res) => alert(res.id));  // addDoc -> ID DE PEDIDO
/*     const numPedido=res.id;
    console.log('numpedido',numPedido); */
        return data;
}

// UPDATE
export const updateItem = async (id, obj) => {
    const colRef = collection(db, 'pedidosComics');
    await updateDoc(doc(colRef, id), obj)
}

// READ
export const getItems = async () => {
    const colRef = collection(db, 'comics');
    const result = await getDocs(query(colRef));
    return getArrayFromCollection(result);
}


// READ WITH WHERE
// Tener en cuenta que el tipo de dato de la condición debe coincidir con el tipo de dato que hay en Firebase o no obtendré un dato de respuesta
export const getItemsByCondition = async (value) => {
    const colRef = collection(db, 'comics');
    const result = await getDocs(query(colRef, where('category', '==', value)));
    return getArrayFromCollection(result);
}
export const getItemsById = async (value) => {
    const colRef = collection(db, 'pedidosComics');
    const result = await getDocs(query(colRef, where('id', '==', value)));
    return getArrayFromCollection(result);
}


export const getItemsByPedido = async (id) => {
    const colRef = collection(db, 'pedidosComics');
    const result = await getDocs(query(colRef, where('id', '==', id)));
    return getArrayFromCollection(result);
}

export const getPedidoById = async (id) => {        // OBTIENE CESTA COMPRA POR ID DE COLECCCION
    const colRef = collection(db, 'pedidosComics');
    const IDStr = id.toString();
    const result = await getDoc(doc(colRef, IDStr));
    return result.data();
}

export const getItemById = async (id) => {
    const colRef = collection(db, 'comics');
    const result = await getDoc(doc(colRef, id));
    return result.data();
}

// DELETE
export const deleteItem = async (id) => {
    const colRef = collection(db, 'comics');
    await deleteDoc(doc(colRef, id));
}

export const getArrayFromCollection = (collection) => {
    return collection.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
    });
}