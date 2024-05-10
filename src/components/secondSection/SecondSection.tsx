"use client";

import { useEffect, useState } from "react";

import Form from "@/components/form";
import Table from "@/components/table";

import { postApi } from "@/utils/api";
import { log } from "console";

const requestPosts = (setPosts: any) =>
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => setPosts(data))
    .catch((error) => console.error(error));

const SecondSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    requestPosts(setPosts);
  }, []);

  const onAdd = async () => {
    setPosts([]);
    await requestPosts(setPosts);
  };

  const onDelete = async (id: number) => {
    setPosts([]);

    fetch(`https://dummyjson.com/posts/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        requestPosts(setPosts);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Form onAdd={onAdd} />
      <Table posts={posts} onDelete={onDelete} />
    </div>
  );
};

export default SecondSection;
