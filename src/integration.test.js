import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions/index';

describe('guessWord action dispatcher', () => {
  const secretWord = 'party';
  const unsuccessfulGuess = 'train';
  describe('no guess words', () => {
    let store;
    const initialState = { secretWord: secretWord }
    beforeEach(() => {
      store = storeFactory(initialState);
    })
    test('updates state correctly for unsuccessful guess', () => {
      store.dispatch(guessWord(unsuccessfulGuess));
      const newState = store.getState()
      const expectedState = { 
        ...initialState, 
        success: false,
        guessedWords: [{ 
          guessedWord: unsuccessfulGuess,
          letterMatchCount: 3
         }]
      };
      expect(newState).toEqual(expectedState);
    });
    test('updates state correctly for successful guess', () => {

    });
  });
  describe('some guess words', () => {
    test('updates state correctly for unsuccessful guess', () => {

    });
    test('updates state correctly for successful guess', () => {

    });
  });
});