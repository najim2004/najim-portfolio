import Image from "next/image";
import React from "react";
import gitHubProfileImg from "../../assets/github.jpg";
import Counter from "../UI/Counter";
const GithubStatus = () => {
  return (
    <div className="font-primary text-primary flex justify-center items-center gap-4 border-box-border border-2 shadow-md rounded-3xl w-full min-h-[100px] py-5 bg-secondary-bg">
      <div className="size-28 rounded-full bg-gray-200">
        <Image
          src={gitHubProfileImg}
          alt="najim github profile"
          className="rounded-full object-cover object-center size-28"
        />
      </div>
      <div className="">
        <h3 className="text-xl font-medium">GitHub Status</h3>
        <table>
          <tbody>
            <tr>
              <td className="lg:!min-w-[100px]">Repos:</td>
              <td>
                <span className="font-semibold">
                  <Counter end={46} duration={3} />
                </span>
              </td>
            </tr>
            <tr>
              <td>Followers:</td>
              <td>
                <span className="font-semibold">
                  <Counter end={0} duration={3} />
                </span>
              </td>
            </tr>
            <tr>
              <td>Following:</td>
              <td>
                <span className="font-semibold">
                  <Counter end={2} duration={3} />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GithubStatus;
