import { Router } from 'express';
import githubController from '@controllers/githubRepo.controller';
import { Routes } from '@interfaces/routes.interface';

class GithubRoute implements Routes {
  public path = '/github-repo';
  public router = Router();

  public repoController = new githubController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.repoController.getRepo);
  }
}

export default GithubRoute;
