import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

// CREATE
export const createPedido = async (obj) => {
    const colRef = collection(db, 'pedidos');
    const data = await addDoc(colRef, obj).then((res) => alert(res.id));  // addDoc -> ID DE PEDIDO
    return data;
}