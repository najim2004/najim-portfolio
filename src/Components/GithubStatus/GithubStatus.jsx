"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import gitHubProfileImg from "../../assets/github.jpg";
import Counter from "../UI/Counter";
const GithubStatus = () => {
  const [gitHubData, setGitHubData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://najim-dev.vercel.app/api");
        const data = await response.json();
        setGitHubData(data);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);
  return (
    <div className="font-primary text-primary flex lg:flex-col xl:flex-row overflow-y-auto justify-center items-center lg:gap-2 lg:p-2 xl:gap-4 xl:p-4 gap-4 border-box-border border-2 shadow-md rounded-3xl w-full min-h-[100px] py-5 bg-secondary-bg dark:bg-secondary-dark dark:border-secondary/50 duration-300">
      {loading ? (
        <span className="loading loading-ring loading-lg text-primary dark:text-primary-bg"></span>
      ) : (
        <>
          <div className="size-28 rounded-full bg-gray-200">
            <Image
              width={112}
              height={112}
              src={gitHubData?.avatar_url}
              alt="najim github profile"
              className="rounded-full object-cover object-center size-28"
            />
          </div>
          <div className="text-primary duration-300 dark:text-primary-bg">
            <h3 className="text-xl font-medium">GitHub Status</h3>
            <table>
              <tbody>
                <tr>
                  <td className="lg:!min-w-[100px]">Pub repos:</td>
                  <td>
                    <span className="font-semibold">
                      <Counter end={gitHubData?.public_repos} duration={3} />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Followers:</td>
                  <td>
                    <span className="font-semibold">
                      <Counter end={gitHubData?.followers} duration={3} />
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Following:</td>
                  <td>
                    <span className="font-semibold">
                      <Counter end={gitHubData?.following} duration={3} />
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default GithubStatus;
