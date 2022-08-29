import { RequestHandler } from 'express';
import LikedService from '@/services/likedRepo.service';
import { LikedRepo } from '@/interfaces/LikedRepo.interface';
import { LikedRepoDto } from '@/dtos/likedRepo.dto';

class LikedRepoController {
  public likedService = new LikedService();

  public getLikedData: RequestHandler = async (req, res) => {
    try {
      const findAllLikedData: LikedRepo[] = await this.likedService.findAll();
      res.status(200).json({ data: findAllLikedData, message: 'All liked data retrieved' });
    } catch (error) {
      console.log(error.message);
    }
  };

  public createLikedData: RequestHandler = async (req, res) => {
    try {
      const LikedData: LikedRepoDto = req.body;
      const createData: LikedRepo = await this.likedService.create(LikedData);
      res.status(201).json({ data: createData, message: 'created' });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export default LikedRepoController;
