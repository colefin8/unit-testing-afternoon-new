import { shortenText } from "../utils/functions";
import { wordCount, attachUserName } from "../../server/utils";
import { shortText, longText, posts, users } from "./_data_/testData";

describe("shorten text function works", () => {
  test("test to make sure function will not alter a string under 100 characters", () => {
    expect(shortenText(shortText)).toHaveLength(29);
  });
  test("test to make sure shortenText will alter a string over 100 characters and add 3 periods at the end", () => {
    expect(shortenText(longText)).not.toHaveLength(longText.length);
    expect(shortenText(longText).slice(-3)).toBe("...");
  });
});

describe("word count function works", () => {
  test("test to make sure posts array will return a word count of 233 if passed into wordCount", () => {
    expect(wordCount(posts)).toBe(233);
  });
});

describe("attach username function works", () => {
  test(`test to make sure the first post returned from running this function has the property "displayName"`, () => {
    expect(attachUserName(users, posts)[0]).toHaveProperty("displayName");
  });
  test(`attachUserName should remove a post if it doesn't have a matching user`, () => {
    //posts[5] doesn't have a username
    expect(attachUserName(users, posts)).not.toContain(posts[5]);
  });
});
