import React, {
   FormEvent,
   ChangeEvent,
   useState,
   useEffect,
   useContext,
} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import GithubRepo from "../GithubRepo/GithubRepo";
import { RepoContext } from "../../store";

const MainComponent: React.FC = () => {
   const [repositories, setRepositories] = useState<any>([]);
   const { repoData } = useContext(RepoContext);
   const [popularRepo, setPopularRepo] = useState<any>([]);
   const [isLiked, setIsLiked] = useState<any>(false);

   useEffect(() => {
      const getRepo = async () => {
         try {
            const response = await axios.get(
               "http://localhost:5000/github-repo"
            );
            const { items } = await response.data;
            setRepositories(items);
         } catch (error: any) {
            console.log(error.message);
         }
      };

      getRepo();
   }, []);

   const onLike = async (data: any) => {
      repoData.push(data);
      try {
         const postData = await axios.post(
            "http://localhost:5000/liked-repo",
            repoData
         );
         const response = await postData.data;
         console.log({ response });
      } catch (error: any) {
         console.log(error.message);
      }
   };
   useEffect(() => {
      const fetchLikedRepo = async () => {
         try {
            const response = await axios.get(
               "http://localhost:5000/liked-repo"
            );
            const { data } = await response.data;
            setPopularRepo(data);
         } catch (error: any) {
            console.log(error.message);
         }
      };

      fetchLikedRepo();
   }, []);

   return (
      <>
         <div>
            <h2>Project Name</h2>
            <h2>GithubLink</h2>
            <h2>Description</h2>
            <h2>Number of Stars</h2>
         </div>
         <div>
            {isLiked
               ? popularRepo.map((data: any) => (
                    <div key={data.id}>
                       <GithubRepo
                          name={data.name}
                          link={data.html_url}
                          desc={
                             data.description &&
                             data.description.split("").splice(0, 100).join("")
                          }
                          stars={data.stargazers_count}
                       />
                    </div>
                 ))
               : repositories.map((data: any) => (
                    <div key={data.id}>
                       <GithubRepo
                          name={data.name}
                          link={data.html_url}
                          desc={
                             data.description &&
                             data.description.split("").splice(0, 100).join("")
                          }
                          stars={data.stargazers_count}
                          onLike={onLike}
                       />
                    </div>
                 ))}
         </div>

         {!isLiked && (
            <button onClick={() => setIsLiked(true)}>
               Show Liked Repositories
            </button>
         )}
      </>
   );
};

export default MainComponent;
