import reducer from 'reducers/styleReducer';
import { APPLY_STYLE } from 'actions/index';

const INITIAL_STATE =  {
  body: {
    backgroundColor: 'white',
    color: 'black',
    borderColor: 'mediumgrey',
    fontFamily: "'Trebuchet MS', Arial, Helvetica, sans-serif"
  }
};

describe('style reducer', () => {
  it('should return initial state', () => {
    expect(reducer(undefined, {})).to.eql(INITIAL_STATE);
  });

  it('should apply a style', () => {
    const action = {type: APPLY_STYLE, payload:{el: 'body', attr: 'backgroundColor', val: 'black'}};
    expect(reducer(INITIAL_STATE, action)).to.eql(
      {body: {
        backgroundColor: 'black',
        color: 'black',
        borderColor: 'mediumgrey',
        fontFamily: "'Trebuchet MS', Arial, Helvetica, sans-serif"
      }}
    );
  });

  it('should add a style if not there', () => {
    const action = {type: APPLY_STYLE, payload:{el: 'table', attr: 'backgroundColor', val: 'black'}};
    expect(reducer(INITIAL_STATE, action)).to.eql(
      {body: {
        backgroundColor: 'black',
        color: 'black',
        borderColor: 'mediumgrey',
        fontFamily: "'Trebuchet MS', Arial, Helvetica, sans-serif"
      },
      table: {
        backgroundColor: 'black'
      }}
    );
  });


});
