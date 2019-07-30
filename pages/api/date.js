export default function handle(req, res) {
  const date = new Date().toString();
  res.json({ date });
}
