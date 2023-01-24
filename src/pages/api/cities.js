import { getCities } from '../../services/mobi'

export default async function handler(req, res) {
  try {
    const { name } = req.query
    let data

    if (name) {
      data = await getCities(name)
    } else {
      data = await getCities()
    }

    res.status(200).json(data)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'nao foi possivel' })
  }
}
