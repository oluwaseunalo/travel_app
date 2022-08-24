import axios from "axios";
import React, { useEffect, useState } from "react";

const LikedPopularRepo = () => {
   const [popularRepo, setPopularRepo] = useState<any>([]);
   console.log(popularRepo);
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
         <div>hello</div>
      </>
   );
};

export default LikedPopularRepo;
