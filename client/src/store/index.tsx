import { createContext, ReactNode, useState } from "react";

export const RepoContext: any = createContext({
   repoData: [],
   setRepoData: (data: any) => {},
});

export const RepoContextProvider: React.FC<{ children: ReactNode }> = ({
   children,
}) => {
   const [repoData, setRepoData] = useState<any>([]);

   const contextValue = {
      repoData: repoData,
      setRepoData: setRepoData,
   };

   return (
      <RepoContext.Provider value={contextValue}>
         {children}
      </RepoContext.Provider>
   );
};
