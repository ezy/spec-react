import { makeSummary } from '../../helpers/make-summary';

describe('make summary helper', () => {
  it('truncates text', async () => {
    expect.assertions(1);
    const sum = makeSummary('The quick brown fox', 9, false);
    expect(sum).toEqual('The quic...');
  });

  it('truncates text with whole words', async () => {
    expect.assertions(1);
    const sum = makeSummary('The quick brown fox', 13, true);
    expect(sum).toEqual('The quick...');
  });
});
