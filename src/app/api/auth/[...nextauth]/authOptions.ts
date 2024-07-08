import { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
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
      maxAge: 12 * 60 * 60,
    },
    callbacks: {
      jwt: async ({ token, user }: any) => {
        if (user) {
          token.id = user.id
          token.email = user.email
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