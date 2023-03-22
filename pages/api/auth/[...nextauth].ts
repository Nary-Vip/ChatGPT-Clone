import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {// Configure one or more authentication providers
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.G_CLIENT_ID!,
      clientSecret: process.env.G_SECRET_ID!,
    }),
  ],
}

export default NextAuth(authOptions)