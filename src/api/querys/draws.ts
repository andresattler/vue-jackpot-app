export const drawsQuery = `{
  draw(type: "eurojackpot", limit: 1) {
    draws {
     numbers,
     jackpot,
     date,
  	}
  }
}
`;
