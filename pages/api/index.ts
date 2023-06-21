import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGet(req, res);
  } else if (req.method === "POST") {
    handlePost(req, res);
  } else {
    res.status(405).send({ message: "Method not allowed" });
  }
}

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  await prisma.email
    .findMany()
    .then((data: any) => {
      res.json(data);
      console.log(data.length + " Emails sent from DB");
    })
    .catch((err: any) => console.log(err));
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  await prisma.email
    .create({
      data: {
        email: req.body.Email,
      },
    })
    .then(async () => {
      console.log("User email saved to DB");
      res.json("Thank you! Your submittion has been received!");
    })
    .catch((err: any) => {
      if (err.code === "P2002") {
        console.log("Already in Waitlist");
        res.json("You are already in our Waitlist");
      } else {
        console.log(err);
        res.json(err);
      }
    });
}
