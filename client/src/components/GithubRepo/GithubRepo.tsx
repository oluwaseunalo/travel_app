import React, { memo, useCallback, useContext, useRef, useState } from "react";
import { RepoContext } from "../../store";

type GitRepoType = {
   name: string;
   link: string;
   desc: string;
   stars: string;
   onLike?: (data: any) => void;
};

const GithubRepo: React.FC<GitRepoType> = ({
   name,
   link,
   desc,
   stars,
   onLike,
}) => {
   const nameRef = useRef<HTMLDivElement>(null);
   const linkRef = useRef<HTMLDivElement>(null);
   const descRef = useRef<HTMLDivElement>(null);
   const starsRef = useRef<HTMLDivElement>(null);

   const likeHandler = () => {
      const data = {
         name: nameRef.current?.innerText,
         link: linkRef.current?.innerText,
         desc: descRef.current?.innerText,
         stars: starsRef.current?.innerText,
      };

      onLike(data);
   };
   return (
      <>
         <div ref={nameRef}>{name}</div>
         <div ref={linkRef}>{link}</div>
         <div ref={descRef}>{desc}</div>
         <div ref={starsRef}>{stars}</div>
         <button onClick={likeHandler}>Like</button>
      </>
   );
};

export default memo(GithubRepo);
