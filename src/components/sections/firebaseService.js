import { db } from "./firebase";
import { collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore";

const WHITELIST_COLLECTION = "whitelist";

// Fetch whitelist from Firestore
export const fetchWhitelist = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, WHITELIST_COLLECTION));
    const whitelist = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return whitelist;
  } catch (error) {
    console.error("Error fetching whitelist:", error);
    throw error;
  }
};

// Update or add a new reservation to Firestore
export const updateWhitelist = async (address, count) => {
  try {
    const docRef = doc(db, WHITELIST_COLLECTION, address);
    await setDoc(docRef, { address, count }, { merge: true });
  } catch (error) {
    console.error("Error updating whitelist:", error);
    throw error;
  }
};
