
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";

var credentialsConfig = CredentialsProvider({
  name: "credentials",
  async authorize({email, password}) {

    if (email === "denis.webdevil@gmail.com" && password === "denis.webdevil@gmail.com") {
      return {
        name: "Test Name",
        email: "denis.webdevil@gmail.com",
        id: "123456",
        image: "/avatar.jpg"
      };
    }
    throw new Error("Error");
  },
});

var facebookConfig = FacebookProvider({
  clientId: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
  authorization: {
    params: {
      scope: "public_profile,email,user_posts",
    },
  },
  checks: ["state"],
});

const config = {
  trustHost: true,
  trustHostedDomain: true,

  providers: [credentialsConfig, facebookConfig],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signIn",
  },
  callbacks: {

    async signIn({user, account, profile, credentials}) {


      if (account?.provider === "facebook") {

        user.token = account.access_token;
        user.providerId = account.providerAccountId;
        return user;
      }

      return true;
    },

    async jwt({token, user}) {

      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({session, token, user}) {
      session.user = token.user;
      return session;
    },
    async redirect() {
      return "/";
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60 * 24,
  },
};

export const {handlers, auth, signIn, signOut} = NextAuth(config);
