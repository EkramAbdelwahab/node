#console.log('Hello from Node JS!');
export default function handler(req, res) {
  res.status(200).json({ message: "Hello World" });
}
