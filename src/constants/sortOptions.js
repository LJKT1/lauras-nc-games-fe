const sortOptions = [
  {
    description: "Default",
    sortQuery: "created_at",
    order: "DESC",
  },
  {
    description: "Date: newest",
    sortQuery: "created_at",
    order: "DESC",
  },
  {
    description: "Date: oldest",
    sortQuery: "created_at",
    order: "ASC",
  },
  {
    description: "Votes: high to low",
    sortQuery: "votes",
    order: "DESC",
  },
  {
    description: "Votes: low to high",
    sortQuery: "votes",
    order: "ASC",
  },
  {
    description: "Comments: high to low",
    sortQuery: "comment_count",
    order: "DESC",
  },
  {
    description: "Comments: low to high",
    sortQuery: "comment_count",
    order: "ASC",
  },
  {
    description: "Title: A-Z",
    sortQuery: "title",
    order: "ASC",
  },
  {
    description: "Title: Z-A",
    sortQuery: "title",
    order: "DESC",
  },
];

export default sortOptions;
