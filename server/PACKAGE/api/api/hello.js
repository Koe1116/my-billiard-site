export default async function handler(req, res) {
  try {
    res.status(200).json({ message: "Hello World" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
