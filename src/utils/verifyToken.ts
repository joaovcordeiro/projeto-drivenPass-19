import jwt from "jsonwebtoken";

export default async function decodeToken(token: string) {
    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

        const { id, email } = decoded as { id: number; email: string };

        return {
            id,
            email
        }
    }
    catch {
        throw new Error("Invalid token");
    }


}

