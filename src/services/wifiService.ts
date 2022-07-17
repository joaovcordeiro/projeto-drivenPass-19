import * as wifiRepository from "../repositories/wifiRepository.js"
import verifyUserExistsByEmail from "../utils/verifyUserExists.js";
import decodeToken from "../utils/verifyToken.js";
import Cryptr from "cryptr";
import { decriptPassword } from "../utils/decriptPassword.js";

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

export type WifiCreateData = Omit<wifiRepository.Wifi, "id">;

export async function createWifi(wifi: WifiCreateData, token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);

    const hashedPassword = cryptr.encrypt(wifi.password);

    return await wifiRepository.insertWifi({ ...wifi, password: hashedPassword }, id);
}

export async function getAllWifis(token: string) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const encriptedWifis = await wifiRepository.getWifis(id);

    if (encriptedWifis.length === 0) {
        throw new Error("No wifis found");
    }

    return decriptPassword(encriptedWifis);
}

export async function getWifiById(token: string, wifiId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const encriptedWifi = await wifiRepository.getWifi(id, wifiId);

    if (encriptedWifi.length === 0) {
        throw new Error("No wifis found");
    }

    return decriptPassword(encriptedWifi);
}

export async function deleteWifiById(token: string, wifiId: number) {
    const { email, id } = await decodeToken(token);
    await verifyUserExistsByEmail(email);
    const encriptedWifi = await wifiRepository.getWifi(id, wifiId);

    if (encriptedWifi.length === 0) {
        throw new Error("No wifis found");
    }

    return wifiRepository.deleteWifi(id, wifiId);
}
