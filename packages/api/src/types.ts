export type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

export type PathsWithMethod<M> = `/placeholder${string}` & string;

export interface OAuthCallbackResponse {
  success: boolean;
  redirectUrl?: string;
}
