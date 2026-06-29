import { prisma } from '../src/lib/prisma';
async function main() {
  const ticket = await prisma.ticket.create({
    data: {
      priority: 'hight',
      email: 'italo.silvan@gmail.com',
      status: '...',
      subject: 'fred',
      responsible: 'francisco italo',
    },
  });

  console.log('ticket', ticket);

  const getAllTickets = await prisma.ticket.findMany({});

  console.log(getAllTickets);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (er) => {
    console.error('er', er);
    await prisma.$disconnect();
    process.exit(1);
  });
