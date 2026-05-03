import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "https://batch-13-assignment-08.vercel.app/"
});

export const { signIn, signUp, useSession } = createAuthClient();