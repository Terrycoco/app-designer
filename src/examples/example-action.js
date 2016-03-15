export const ACTION_NAME = 'ACTION_NAME';
export function exampleAction(props)  {
  return {
    type: ACTION_NAME,
    payload: props.whatever
  };
};
