
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import FacebookProvider from "next-auth/providers/facebook";

var credentialsConfig = CredentialsProvider({
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

var facebookConfig = FacebookProvider({
  clientId: process.env.FACEBOOK_CLIENT_ID,
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET
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


      if (account.provider === "facebook") {

        console.log("user  -- ", user)
        console.log("profile  -- ", profile)
        console.log("account  -- ", account)
      }
      
      return true;
    },

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
