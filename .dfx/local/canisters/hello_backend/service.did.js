export const idlFactory = ({ IDL }) => {
  const ResponseDataAllFiles = IDL.Record({
    'status' : IDL.Bool,
    'data' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
  });
  const ResponseData = IDL.Record({ 'status' : IDL.Bool, 'data' : IDL.Text });
  return IDL.Service({
    'getAllFiles' : IDL.Func([], [ResponseDataAllFiles], ['query']),
    'getFile' : IDL.Func([IDL.Text], [ResponseData], ['query']),
    'saveFile' : IDL.Func([IDL.Text, IDL.Text], [ResponseData], []),
  });
};
export const init = ({ IDL }) => { return []; };
