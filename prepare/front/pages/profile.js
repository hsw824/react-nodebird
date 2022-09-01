import React from "react";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

import Head from "next/head";

const Profile = () => {
  const followerList = [
    { nickname: "성우" },
    { nickname: "바보" },
    { nickname: "노드버드 오피셜" },
  ];
  const followingList = [
    { nickname: "성우" },
    { nickname: "바보" },
    { nickname: "노드버드 오피셜" },
  ];
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followingList} />
        <FollowList header="팔로워 목록" data={followerList} />
      </AppLayout>
    </>
  );
};

export default Profile;
