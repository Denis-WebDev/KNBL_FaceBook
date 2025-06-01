import {auth} from "@/config/auth-config";

export const publishPost = async (req) => {
    const session = await auth();
    if (!session || !session.user)
        throw new Error("no authorized");

    console.log(session.user.token);
    console.log(req);

    try {
        const response = await fetch('https://graph.facebook.com/v23.0/me/feed', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                req,
                access_token: session.user.token,
            }),
        }).then(async (res) => await res.json());

        console.log(response)
    } catch (error) {
        throw new Error("Errore");
    }

    return;
};