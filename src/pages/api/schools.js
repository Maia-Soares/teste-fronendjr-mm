import { getSchools } from '../../services/mobi'

export default async function handler(req, res) {
  try {
    const { name } = req.query
    let data;

    if (name) {
      data = await getSchools(name);
    } else {
      data = await getSchools();
    }
    
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'nao foi possivel' });
  }
}
