
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
  name: "credentials",
  async authorize({email, password}) {

    if (email === "denis.webdevil@gmail.com" && password === "denis.webdevil@gmail.com") {
      return {
        name: "denis.webdevil@gmail.com",
        rore: "admin",
        id: "123456",
        image: "/avatar.jpg"
      };
    }
    throw new Error("Error");
  },
});

const config = {
  trustHost: true,
  trustHostedDomain: true,

  providers: [credentialsConfig],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/admin",
  },
  callbacks: {
    async jwt({token, user, trigger, session}) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({session, token, user}) {
      session.user = token.user;
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
};

export const {handlers, auth, signIn, signOut} = NextAuth(config);
