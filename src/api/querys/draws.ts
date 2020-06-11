export const drawsQuery = `
  query getDraw($type: String!) {
    draw(type: $type, limit: 1) {
      draws {
       numbers,
       jackpot,
       date,
       additionalNumbers
      }
    }
  }
`;
