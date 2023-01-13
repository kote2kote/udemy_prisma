import { PrismaClient } from '@prisma/client';
import { sendError } from 'h3';
export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient();
  const method = e.req.method;

  if (method === 'GET') {
    // console.log(method);
    const links = await prisma.link.findMany();
    return links;
  }
  if (method === 'POST') {
    console.log('来ました！');
    // console.log(e);

    const body = await readBody(e);
    console.log('来ましたの！', body);
    if (!body) {
      const detailError = createError({
        statusCode: 400,
        statusMessage: 'No item provided',
        data: {},
      });

      sendError(e, detailError);
    }
    const newLink = await prisma.link.create({
      data: body,
    });

    return newLink;
  }
});
