import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const username = "najim2004"; // Replace with your GitHub username
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN; // Store your token in .env.local

    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { message: "Error fetching GitHub data" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(
      {
        avatar_url: data.avatar_url,
        following: data.following,
        followers: data.followers,
      },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: "Something Went Wrong", err },
      { status: 500 }
    );
  }
};
