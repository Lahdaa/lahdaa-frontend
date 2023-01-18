import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Flex } from "styles/layouts/Flex";
import { Wrapper, LoaderCard } from "./style";

interface LoaderProps {}
const Loader: React.FC<LoaderProps> = () => {
  return (
    <Wrapper>
      {[...Array(4)].map((d, idx) => (
        <LoaderCard key={idx}>
          <div className="">
            <Skeleton height={200} width={"100%"} />
          </div>
          <div className="body">
            <div className="mt-10">
              <Skeleton height={10} width={100} />
            </div>
            <div className="mt-10">
              <Skeleton height={10} />
              <Skeleton height={10} width="80%" />
              <Skeleton height={10} width="40%" />
            </div>
            <Flex gap="" className="mt-10" flexRowAiCenter>
              <div className="flex-shrink-0">
                <Skeleton height={35} width={35} circle={true} />
              </div>
              <div className="ml-10 mt-10">
                <Skeleton height={8} width={150} />
                <Skeleton height={8} width={100} />
              </div>
            </Flex>

            <Skeleton className="mt-30" height={20} width="100%" />
          </div>
        </LoaderCard>
      ))}
    </Wrapper>
  );
};

export default Loader;
