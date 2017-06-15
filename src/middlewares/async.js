export default function ({ dispatch }) {
  return next => action => {
    //If the action does not have a payload send it on to the next
    if (!action.payload || !action.payload.then) {
      return next(action);
    }
    //Make sure action's promise resolves
    action.payload
      .then(function(response) {
        //Create a new action with old type but replace the promise with the response data
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
  };
}
