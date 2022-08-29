import { LikedRepoDto } from '@/dtos/likedRepo.dto';
import { LikedRepo } from '@/interfaces/LikedRepo.interface';
import LikedModel from '@models/likedRepo.model';

class LikedService {
  public liked = LikedModel;

  public async findAll(): Promise<LikedRepo[]> {
    try {
      return await this.liked.find();
    } catch (error) {
      console.log(error.message);
    }
  }

  public async create(data: LikedRepoDto): Promise<LikedRepo> {
    try {
      return await this.liked.create(data);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default LikedService;
