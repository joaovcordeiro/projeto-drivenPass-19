import * as cardRepository from "../repositories/cardRepository.js";
import decodeToken from "../utils/verifyToken.js";
import verifyUserExistsByEmail from "../utils/verifyUserExists.js";
import Cryptr from "cryptr";
import { decriptPassword } from "../utils/decriptPassword.js";

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

export type CardCreateData = Omit<cardRepository.Card, "id">;

export async function createCard(card: CardCreateData, token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const verifyCard = await cardRepository.verifyCardExistence(id, card.cardName);

    if (verifyCard.length > 0) {
        throw new Error("Card already exists");
    }

    const hashedPassword = cryptr.encrypt(card.password);

    return await cardRepository.insertCard({ ...card, password: hashedPassword }, id);
}

export async function getAllCards(token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const encriptedCards = await cardRepository.getAllCards(id);

    if (encriptedCards.length === 0) {
        throw new Error("No cards found");
    }

    return decriptPassword(encriptedCards);
}

export async function getCardById(token: string, cardId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const encriptedCard = await cardRepository.getCard(id, cardId);

    if (encriptedCard.length === 0) {
        throw new Error("No cards found");
    }

    return decriptPassword(encriptedCard);
}

export async function deleteCardById(token: string, cardId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const encriptedCard = await cardRepository.getCard(id, cardId);

    if (encriptedCard.length === 0) {
        throw new Error("No cards found");
    }

    return cardRepository.deleteCard(id, cardId);
}