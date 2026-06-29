-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "priority" TEXT NOT NULL,
    "responsible" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);
