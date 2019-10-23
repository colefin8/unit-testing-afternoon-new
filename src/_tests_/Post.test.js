import React from "react";
import { render, act } from "@testing-library/react";
import Post from "../views/Post";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import { posts } from "./_data_/testData";

it("test that Post component renders a post widget", async () => {
  //gets post to render instead of mapping through posts?
  const testPost = posts[0];
  let container = null;
  //in solution code, jest.spyOn method can look for specific 'axios' requests, in this case 'get'
  jest
    .spyOn(axios, "get")
    //instead of making an actual axios request this mocks the request and sends back data: testPost as the get result of the axios request through the
    //Promise.resolve.  This is how you make a test for an axios request by passing in premade test data
    .mockImplementation(() => Promise.resolve({ data: testPost }));
  await act(async () => {
    //just following instructions, Post component needs a match prop(param) that is an object with a params key with a value of an object with
    //postId key with a value of 1
    const renderObject = render(
      <MemoryRouter>
        <Post match={{ params: { postId: 1 } }} />
      </MemoryRouter>
    );
    container = renderObject.container;
  });
  expect(container.textContent).toContain(testPost.text);
});
