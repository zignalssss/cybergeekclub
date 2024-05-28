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
              display_name:account_user.display_name,
              first_name_en : account_user.first_name_en,
              last_name_en : account_user.last_name_en,
              faculty_en : account_user.faculty_en,
              point : account_user.point,
              status : account_user.status,
              profile_image : account_user.profile_image
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
      jwt: async ({ token, user }: any) => {
        if (user) {
          token.id = user.id
          token.email = user.email
          token.display_name = user.display_name
          token.first_name_en = user.first_name_en
          token.last_name_en = user.last_name_en
          token.faculty_en = user.faculty_en
          token.point = user.point
          token.status = user.status
          token.profile_image = user.profile_image
        }
        return token
      },
      session: async ({ session, token } : any) => {
        if (session.user) {
          session.user.id = token.id
          session.user.display_name = token.display_name
          session.user.first_name_en = token.first_name_en
          session.user.last_name_en = token.last_name_en
          session.user.faculty_en = token.faculty_en
          session.user.point = token.point
          session.user.status = token.status
          session.user.profile_image = token.profile_image
        }
        return session
      }
    },
  };

  const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}