import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.ENCRYPT_SECRET || "default_secret_key";

export const encrypt = (text) => {
    const cipher = crypto.createCipheriv("aes-256-cbc", SECRET_KEY)
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    return encrypted
}

export const decrypt = (encryptedText) => {
    const decipher = crypto.createDecipher("aes-256-cbc", SECRET_KEY);
    let decrypted = decipher.update(encryptedText, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted
}