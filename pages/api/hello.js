import post from '../../posts/ssg-ssr.md'

export default function handler(req, res) {
  res.status(200).json({ text: post });
}
