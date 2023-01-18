import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Wrapper, LoaderCard } from "./style";

interface LoaderProps {}
const Loader: React.FC<LoaderProps> = () => {
  return (
    <Wrapper>
      {[...Array(4)].map((data: any) => (
        <LoaderCard key={data}>
          <div className="">
            <Skeleton height={318} width={"100%"} />
          </div>
          <div className="body">
            <div className="mt-10">
              <Skeleton height={10} width="80%" />
            </div>
            <div className="mt-10">
              <Skeleton height={10} width="50%" />
            </div>
          </div>
        </LoaderCard>
      ))}
    </Wrapper>
  );
};

export default Loader;
