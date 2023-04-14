import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({
      code: 405,
      status: "error",
      result: "Method Not Allowed",
    });
  }

  try {
    const { data } = await axios(`https://api.myquran.com/v1/sholat/kota/semua`);
    res.status(200).json({
      code: 200,
      status: "OK",
      result: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      code: 500,
      status: "error",
      result: "Internal Server Error",
    });
  }
}
