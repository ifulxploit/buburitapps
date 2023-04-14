export default function handler(req, res) {
    // Memeriksa method request, jika bukan GET maka akan memberikan response Method Not Allowed
    if (req.method !== "GET") {
      return res.status(405).json({
        code: 405,
        status: "error",
        result: "Method Not Allowed",
      });
    }
  
    // Mengenerate random character
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const random = char.charAt(Math.floor(Math.random() * char.length))
  
    // Membuat url gambar avatar dari robohash dengan menambahkan random character ke dalam url
    const avatar = `https://robohash.org/${random}.png`
  
    // Memberikan response OK dengan avatar url
    return res.status(200).json({
      code: 200,
      status: "OK",
      result: avatar
    });
  }
  