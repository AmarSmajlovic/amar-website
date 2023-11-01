// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  ip?: string | string[];
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const ip =
      req.headers["x-forwarded-for"] ||
      // Fallback for localhost or non Vercel deployments
      "0.0.0.0";
    res.status(200).json({ ip });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      message: error.message,
    });
  }
}
