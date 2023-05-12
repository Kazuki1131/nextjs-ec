import type { ApiContext, User } from '@/types/data';
import { fetcher } from '@/utils';

export type SigninParams = {
	/**
	 * ユーザー名
	 * サンプルユーザーのユーザー名は "user"
	 */
	username: string;
	/**
	 * パスワード
	 * サンプルユーザーのパスワードは "password"
	 */
	password: string;
};

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
export const signin = async (
	context: ApiContext,
	params: SigninParams,
): Promise<User> => {
	return await fetcher<User>(
		`${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(params),
		},
	);
};
