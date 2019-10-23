import React from "react";
import { render } from "@testing-library/react";
import PostWidget from "../components/PostWidget";
import { MemoryRouter } from "react-router-dom";
import { shortenText } from "../utils/functions";
import { posts } from "./_data_/testData";

const longPost = posts[0];
const post = posts[1];

it("check that PostWidget renders and contains the correct text", () => {
  //initially I destructured all of the things of post here and passed them in but that was stupid so I did it how the instructions said to.  saved a
  //lot of typing
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...post} />
    </MemoryRouter>
  );
  expect(container.textContent).toContain(post.text);
});

it("check that PostWidget shortens the text of a post w/text longer than 100 chars", () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget {...longPost} />
    </MemoryRouter>
  );
  expect(container.textContent).toContain(shortenText(longPost.text));
});

it("check that PostWidget doesn't shorten the text if passed in and expanded=true prop", () => {
  const { container } = render(
    <MemoryRouter>
      <PostWidget expanded={true} {...longPost} />
    </MemoryRouter>
  );
  expect(container.textContent).toContain(longPost.text);
});
