import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface ResponseData { 'status' : boolean, 'data' : string }
export interface ResponseDataAllFiles {
  'status' : boolean,
  'data' : Array<[string, string]>,
}
export interface _SERVICE {
  'getAllFiles' : ActorMethod<[], ResponseDataAllFiles>,
  'getFile' : ActorMethod<[string], ResponseData>,
  'saveFile' : ActorMethod<[string, string], ResponseData>,
}
