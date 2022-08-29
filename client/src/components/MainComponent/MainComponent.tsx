import React, {
   ChangeEvent,
   useState,
   useEffect,
   useContext,
   useCallback,
   useMemo,
} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import GithubRepo from "../GithubRepo/GithubRepo";
import { RepoContext } from "../../store";
import { Container, Input, Title } from "./MainComponent.styles";

const MainComponent: React.FC = () => {
   const [repositories, setRepositories] = useState<any>([]);
   const { repoData } = useContext(RepoContext);
   const [likedRepo, setLikedRepo] = useState<any>([]);
   const [isLiked, setIsLiked] = useState<boolean>(false);
   const [search, setSearch] = useState<string>("");

   // This repository is a collection of previous week popular repositories from Github that can be liked and easily managed with their project names, links, description, and number of stars.

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

   const onLike = useCallback(
      async (data: any) => {
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
      },
      [repoData]
   );

   useEffect(() => {
      const fetchLikedRepo = async () => {
         try {
            const response = await axios.get(
               "http://localhost:5000/liked-repo"
            );
            const { data } = await response.data;
            setLikedRepo(data);
         } catch (error: any) {
            console.log(error.message);
         }
      };

      if (isLiked) fetchLikedRepo();
   }, [isLiked]);

   const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
   };

   const filterRepo = repositories.filter((data: any) => {
      if (search === "") {
         return data;
      } else {
         if (data.name.toLowerCase().includes(search.toLowerCase())) {
            return data;
         }
      }
   });

   return (
      <Container>
         <h1>Discover Github Repository</h1>
         <h2>Last week's popular repositories</h2>
         {isLiked && <h3 className="liked__repo">Your Liked Repo(s)</h3>}
         {!isLiked && (
            <Input
               type="search"
               placeholder="Enter a repository name"
               onChange={searchHandler}
            />
         )}
         <Title>
            <h3>Project Name</h3>
            <h3>GithubLink</h3>
            <h3>Description</h3>
            <h3>Number of Stars</h3>
         </Title>
         <ol>
            {isLiked
               ? likedRepo.map((data: any) => (
                    <GithubRepo
                       key={data.id}
                       name={data.name}
                       link={data.link}
                       desc={
                          data.desc &&
                          data.desc.split("").splice(0, 100).join("")
                       }
                       stars={data.stars}
                       showLikes={false}
                    />
                 ))
               : filterRepo.map((data: any) => (
                    <GithubRepo
                       key={data.id}
                       name={data.name}
                       link={data.html_url}
                       desc={
                          data.description &&
                          data.description.split("").splice(0, 100).join("")
                       }
                       stars={data.stargazers_count}
                       onLike={onLike}
                       showLikes
                    />
                 ))}
         </ol>

         <button className="view__likes" onClick={() => setIsLiked(!isLiked)}>
            {isLiked
               ? "View Last Week Popular Repositories"
               : "Show Liked Repositories"}
         </button>
      </Container>
   );
};

export default MainComponent;
