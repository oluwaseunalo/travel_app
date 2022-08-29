import { RequestHandler } from 'express';
import axios from 'axios';

class githubRepoController {
  public getRepo: RequestHandler = async (req, res) => {
    try {
      const date = new Date();
      const [year, month, day] = [date.getFullYear(), date.getMonth(), date.getDate()];
      const monthAdjusted = month < 10 ? '0' + (month + 1) : month + 1;
      const lastWeek = `${year}-${monthAdjusted}-${day - 7}`;

      const response = await axios.get(`https://api.github.com/search/repositories?q=${lastWeek}&sort=stars&order=desc`);
      const { items } = await response.data;
      res.status(200).json({ items, message: 'fetched data successfully' });
    } catch (error) {
      console.log(error.message);
    }
  };
}
export default githubRepoController;
