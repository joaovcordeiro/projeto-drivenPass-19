import { prisma } from "../config/database.js";
import { CardCreateData } from "../services/cardService.js";

export interface Card {
    id: number;
    cardNumber: string;
    cardOwnerName: string;
    securityCode: string;
    expirationDate: string;
    password: string;
    isVirtual: boolean;
    cardType: string;
    cardName: string;
    userId: number;
}

export async function insertCard(card: CardCreateData, userId: number) {
    return {
        card: await prisma.cards.create({
            data: {
                cardNumber: card.cardNumber,
                cardOwnerName: card.cardOwnerName,
                securityCode: card.securityCode,
                expirationDate: card.expirationDate,
                password: card.password,
                isVirtual: card.isVirtual,
                cardType: card.cardType,
                cardName: card.cardName,
                userId: userId
            }
        })
    }
}

export async function verifyCardExistence(userId: number, cardName: string) {
    return await prisma.cards.findMany({
        where: {
            userId: userId,
            cardName: cardName
        },
        select: {
            cardName: true
        }
    })
}

export async function getAllCards(userId: number) {
    return await prisma.cards.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            cardNumber: true,
            cardOwnerName: true,
            securityCode: true,
            expirationDate: true,
            password: true,
            isVirtual: true,
            cardType: true,
            cardName: true,
            userId: true
        }
    })
}


export async function getCard(userId: number, cardId: number) {
    return await prisma.cards.findMany({
        where: {
            userId: userId,
            id: cardId
        },
        select: {
            id: true,
            cardNumber: true,
            cardOwnerName: true,
            securityCode: true,
            expirationDate: true,
            password: true,
            isVirtual: true,
            cardType: true,
            cardName: true,
            userId: true
        }
    })
}

export async function deleteCard(userId: number, cardId: number) {
    return await prisma.cards.deleteMany({
        where: {
            userId: userId,
            id: cardId
        }
    })
}
