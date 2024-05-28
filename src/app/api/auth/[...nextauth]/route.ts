import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { Adapter} from 'next-auth/adapters'

const prisma = new PrismaClient()


export const authOptions : AuthOptions = {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: {type: 'text',},
          password: {type: 'password' },
        },
        async authorize(credentials, req) {
          if (!credentials) return null
          const account_user = await prisma.account.findUnique({
            where: { email: credentials.email },
          })
  
          if (
            account_user &&
            (await bcrypt.compare(credentials.password, account_user.password))
          ) {
            return {
              id: account_user.id,
              email: account_user.email,
              display_name:account_user.display_name
            }
          } else {
            throw new Error('Invalid email or password')
          }
        },
      })
    ],
    adapter: PrismaAdapter(prisma) as Adapter,
    session: {
      strategy: 'jwt',
    },
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {
          token.id = user.id
        }
        return token
      },
      session: async ({ session, token } : any) => {
        if (session.user) {
          session.user.id = token.id
        }
        return session
      }
    },
  };

  const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}