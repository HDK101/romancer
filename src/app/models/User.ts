import { PrismaClient, User as UserType } from '@prisma/client';

const prisma = new PrismaClient();

function User() {
  return Object.assign(prisma.user, {
    async hello() {
      console.log('hello!');
    }
  });
}

export default User();
