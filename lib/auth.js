import { cookies } from 'next/headers';

export async function isAuthenticated() {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin-session');
    return !!session?.value;
}

export async function requireAuth() {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
        return { error: 'Unauthorized', status: 401 };
    }
    return null;
}
