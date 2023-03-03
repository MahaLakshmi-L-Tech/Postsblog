export const selectComments = (state) => state.commentState.comments;

export const selectUpdatedComments = (state) =>
  state.commentState.updatedComment;

export const selectEditedComments = (state) => state.commentState.editedComment;
