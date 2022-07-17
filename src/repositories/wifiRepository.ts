import { prisma } from "../config/database.js";
import { WifiCreateData } from "../services/wifiService.js";

export interface Wifi {
    id: number;
    networkName: string;
    wifiTitle: string;
    password: string;
    userId: number;
}

export async function insertWifi(wifi: WifiCreateData, userId: number) {
    return {
        wifi: await prisma.wifis.create({
            data: {
                networkName: wifi.networkName,
                wifiTitle: wifi.wifiTitle,
                password: wifi.password,
                userId: userId
            }
        })
    }
}

export async function getWifis(userId: number) {
    return await prisma.wifis.findMany({
        where: {
            userId: userId
        },
        select: {
            id: true,
            networkName: true,
            wifiTitle: true,
            password: true,
            userId: true
        }
    })
}

export async function getWifi(userId: number, cardId: number) {
    return await prisma.wifis.findMany({
        where: {
            userId: userId,
            id: cardId
        },
        select: {
            id: true,
            networkName: true,
            wifiTitle: true,
            password: true,
            userId: true
        }
    })
}

export async function deleteWifi(userId: number, cardId: number) {
    return await prisma.wifis.deleteMany({
        where: {
            userId: userId,
            id: cardId
        }
    })
}

