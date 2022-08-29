import 'dotenv/config';
import '@/index';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import GithubRoute from './routes/githubRepo.route';
import LikedRepoRoute from './routes/likedRepo.route';

class Department {
  private readonly name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  describe() {
    console.log('Department: ' + this.name);
  }

  addEmployee(...employee: any) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(name: string, admins: string[]) {
    super(name);
    this.admins = admins;
  }
}
const IT = new ITDepartment('IT', ['Seun']);

console.log(IT);
IT.describe();
IT.addEmployee('Seun', 'sola');

IT.printEmployeeInformation();

const accountingCopy = { describe: IT.describe.bind(IT) };

accountingCopy.describe();
validateEnv();

const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute(), new GithubRoute(), new LikedRepoRoute()]);

console.log('test');

app.listen();
