import { getDatebase, ref, set } from "firebase/firebase-database";
import { app } from "./firebase";

class CardRepository {
  saveCard(userId, card) {
    const DB = getDatebase();
    set(ref(DB, `${userId}/cards/${card.id}`), {
      1: userId,
      2: card,
    });
  }
}

export default CardRepository;
