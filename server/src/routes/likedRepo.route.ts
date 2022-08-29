import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import LikedRepoController from '@/controllers/likedRepo.controller';

class LikedRepoRoute implements Routes {
  public path = '/liked-repo';
  public router = Router();

  public likedController = new LikedRepoController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.likedController.getLikedData);
    this.router.post(`${this.path}`, this.likedController.createLikedData);
  }
}

export default LikedRepoRoute;
