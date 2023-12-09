export default function validationCheck(state) {
  const KEYS = ["text", "isCompleted", "idx"];
  if (!Array.isArray(state)) {
    return false;
  }
  //prettier-ignore
  // if ( state.every((todo) => {
  //     if (KEYS.every((key) => {
  //         if (key in todo) {
  //           return true;
  //         }
  //       })
  //     ) {
  //       return true;
  //     }
  //   })
  // ) {
  //   return true;
  // }

  if (
    state.every((todo) => {
      if (
        Object.keys(todo).includes("text") &&
        Object.keys(todo).includes("text") &&
        Object.keys(todo).includes("text")
      ) {
        return true;
      }
    })
  ) {
    return true;
  }
}
