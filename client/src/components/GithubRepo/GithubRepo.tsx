import React, { memo, useCallback, useContext, useRef, useState } from "react";
import { RepoContext } from "../../store";
import { List, ListItemsContainer } from "./GithubRepo.styles";

type GitRepoType = {
   name: string;
   link: string;
   desc: string;
   stars: string;
   showLikes?: boolean;
   onLike?: (data: any) => void;
};

const GithubRepo: React.FC<GitRepoType> = ({
   name,
   link,
   desc,
   stars,
   showLikes,
   onLike,
}) => {
   const [liked, setLiked] = useState(false);
   const nameRef = useRef<HTMLDivElement>(null);
   const linkRef = useRef<HTMLDivElement>(null);
   const descRef = useRef<HTMLDivElement>(null);
   const starsRef = useRef<HTMLDivElement>(null);

   const likeHandler = () => {
      //
      const data = {
         name: nameRef.current?.innerText,
         link: linkRef.current?.innerText,
         desc: descRef.current?.innerText,
         stars: starsRef.current?.innerText,
      };

      if (onLike) onLike(data);
      setLiked(!liked);
   };
   return (
      <List>
         <ListItemsContainer>
            <p ref={nameRef}>{name}</p>
            <p ref={linkRef}>{link}</p>
            <p ref={descRef}>{desc}</p>
            <div ref={starsRef}>{stars}</div>
            {showLikes && (
               <button onClick={likeHandler}>{liked ? "Liked" : "Like"}</button>
            )}
         </ListItemsContainer>
      </List>
   );
};

export default memo(GithubRepo);
